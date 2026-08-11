import { assert } from 'chai';
import Storefront, { Network, Product, Store, StoreLocation } from '../src/storefront.js';

const NETWORK_KEY = `network_${'a'.repeat(32)}`;
const STORE_KEY = `store_${'b'.repeat(32)}`;

class FakeAdapter {
    constructor(responses = {}) {
        this.responses = responses;
        this.calls = [];
    }

    async get(endpoint, params = {}) {
        this.calls.push({ method: 'get', endpoint, params });
        const response = this.responses[endpoint];

        if (response instanceof Error) {
            throw response;
        }

        return typeof response === 'function' ? response(params) : response;
    }
}

describe('Storefront SDK marketplace contracts', () => {
    it('validates store and network keys without live credentials', () => {
        assert.instanceOf(new Storefront(NETWORK_KEY, { adapter: new FakeAdapter() }), Storefront);
        assert.instanceOf(new Storefront(STORE_KEY, { adapter: new FakeAdapter() }), Storefront);
        assert.throws(() => new Storefront('network_too_short', { adapter: new FakeAdapter() }), /Invalid Storefront key/);
    });

    it('preserves raw about and lookup behavior while offering typed owner hydration', async () => {
        const adapter = new FakeAdapter({
            about: { id: 'network_public', is_network: true, is_store: false },
            'lookup/store_public': { id: 'store_public', is_network: false, is_store: true },
        });
        const storefront = new Storefront(NETWORK_KEY, { adapter });

        assert.deepEqual(await storefront.about(), { id: 'network_public', is_network: true, is_store: false });
        assert.instanceOf(await storefront.getOwner(), Network);
        assert.deepEqual(await storefront.lookup('store_public'), { id: 'store_public', is_network: false, is_store: true });
        assert.instanceOf(await storefront.lookupResource('store_public'), Store);
    });

    it('hydrates searched products and their embedded merchants with the active adapter', async () => {
        const adapter = new FakeAdapter({
            search: [{ id: 'product_public', name: 'Coffee', store: { id: 'store_public', name: 'Cafe' } }],
        });
        const storefront = new Storefront(NETWORK_KEY, { adapter });
        const products = await storefront.search('coffee', { with_store: true });

        assert.lengthOf(products, 1);
        assert.instanceOf(products[0], Product);
        assert.strictEqual(products[0].adapter, adapter);
        assert.instanceOf(products[0].merchant, Store);
        assert.strictEqual(products[0].merchant.adapter, adapter);
        assert.deepInclude(adapter.calls[0], {
            endpoint: 'search',
            params: { query: 'coffee', with_store: true },
        });
    });

    it('rebuilds every resource store when the adapter changes', () => {
        const firstAdapter = new FakeAdapter();
        const nextAdapter = new FakeAdapter();
        const storefront = new Storefront(NETWORK_KEY, { adapter: firstAdapter });

        const returned = storefront.setAdapter(nextAdapter);

        assert.strictEqual(returned, storefront);
        assert.strictEqual(storefront.getAdapter(), nextAdapter);
        for (const storeName of ['products', 'categories', 'foodTrucks', 'reviews', 'customers', 'cart', 'checkout']) {
            assert.strictEqual(storefront[storeName].adapter, nextAdapter, `${storeName} uses the replacement adapter`);
        }
    });

    it('provides typed network discovery helpers and stable request parameters', async () => {
        const adapter = new FakeAdapter({
            stores: [{ id: 'store_public', name: 'Cafe' }],
            'store-locations': [
                {
                    id: 'location_public',
                    store: 'store_public',
                    store_data: { id: 'store_public', name: 'Cafe' },
                    hours: [],
                },
            ],
            categories: [{ id: 'category_public', name: 'Coffee' }],
            search: [{ id: 'product_public', store: { id: 'store_public' } }],
            'lookup/store_public': { id: 'store_public', name: 'Cafe' },
            gateways: [{ id: 'gateway_public', code: 'cash' }],
            reviews: [{ id: 'review_public', rating: 5 }],
            tags: ['coffee', 'open-late'],
        });
        const network = new Network({ id: 'network_public' }, adapter);

        const stores = await network.getStores({ limit: 20, offset: 10, online: true });
        const locations = await network.getStoreLocations({ with_store: true, location: [106.9, 47.9] });
        const categories = await network.getCategories({ without_category: false });
        const products = await network.search('coffee', { limit: 5 });
        const store = await network.lookupStore('store_public');
        const gateways = await network.getPaymentGateways({ sandbox: true });
        const reviews = await network.getReviews('store_public', { limit: 10 });
        const tags = await network.getTags();

        assert.instanceOf(stores[0], Store);
        assert.instanceOf(locations[0], StoreLocation);
        assert.strictEqual(locations[0].storeId, 'store_public');
        assert.deepEqual(locations[0].storeData, { id: 'store_public', name: 'Cafe' });
        assert.instanceOf(locations[0].merchant, Store);
        assert.strictEqual(locations[0].merchant.adapter, adapter);
        assert.equal(categories[0].resource, 'category');
        assert.instanceOf(products[0], Product);
        assert.instanceOf(products[0].merchant, Store);
        assert.instanceOf(store, Store);
        assert.equal(gateways[0].resource, 'payment-gateway');
        assert.equal(reviews[0].resource, 'review');
        assert.deepEqual(tags, ['coffee', 'open-late']);
        assert.deepInclude(adapter.calls.find((call) => call.endpoint === 'search'), {
            params: { query: 'coffee', with_store: true, limit: 5 },
        });
        assert.deepInclude(adapter.calls.find((call) => call.endpoint === 'reviews'), {
            params: { store: 'store_public', limit: 10 },
        });
    });

    it('normalizes legacy embedded store objects and safely handles missing hours', () => {
        const adapter = new FakeAdapter();
        const location = new StoreLocation(
            {
                id: 'location_public',
                store: { id: 'store_legacy', name: 'Legacy Cafe' },
            },
            adapter
        );

        assert.deepEqual(location.storeData, { id: 'store_legacy', name: 'Legacy Cafe' });
        assert.equal(location.storeId, 'store_legacy');
        assert.lengthOf(location.hours, 0);
        assert.instanceOf(location.merchant, Store);
    });

    it('propagates network helper failures without unconditional console output', async () => {
        const error = new Error('offline');
        const network = new Network({ id: 'network_public' }, new FakeAdapter({ stores: error }));

        try {
            await network.getStores();
            assert.fail('Expected getStores() to reject');
        } catch (caught) {
            assert.strictEqual(caught, error);
        }
    });
});
