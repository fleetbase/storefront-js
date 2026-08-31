import { describe, expect, it } from 'vitest';
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
        expect(new Storefront(NETWORK_KEY, { adapter: new FakeAdapter() })).toBeInstanceOf(Storefront);
        expect(new Storefront(STORE_KEY, { adapter: new FakeAdapter() })).toBeInstanceOf(Storefront);
        expect(new Storefront(STORE_KEY).getAdapter()).toBeDefined();
        expect(Storefront.newInstance(STORE_KEY, { adapter: new FakeAdapter() })).toBeInstanceOf(Storefront);
        expect(() => new Storefront('network_too_short', { adapter: new FakeAdapter() })).toThrow(/Invalid Storefront key/);
    });

    it('preserves raw about and lookup behavior while offering typed owner hydration', async () => {
        const adapter = new FakeAdapter({
            about: { id: 'network_public', is_network: true, is_store: false },
            'lookup/store_public': { id: 'store_public', is_network: false, is_store: true },
        });
        const storefront = new Storefront(NETWORK_KEY, { adapter });

        expect(await storefront.about()).toEqual({ id: 'network_public', is_network: true, is_store: false });
        expect(await storefront.getOwner()).toBeInstanceOf(Network);
        expect(await storefront.lookup('store_public')).toEqual({ id: 'store_public', is_network: false, is_store: true });
        expect(await storefront.lookupResource('store_public')).toBeInstanceOf(Store);
    });

    it('hydrates searched products and their embedded merchants with the active adapter', async () => {
        const adapter = new FakeAdapter({
            search: [{ id: 'product_public', name: 'Coffee', store: { id: 'store_public', name: 'Cafe' } }],
        });
        const storefront = new Storefront(NETWORK_KEY, { adapter });
        const products = await storefront.search('coffee', { with_store: true });

        expect(products).toHaveLength(1);
        expect(products[0]).toBeInstanceOf(Product);
        expect(products[0].adapter).toBe(adapter);
        expect(products[0].merchant).toBeInstanceOf(Store);
        expect(products[0].merchant.adapter).toBe(adapter);
        expect(adapter.calls[0]).toMatchObject({
            endpoint: 'search',
            params: { query: 'coffee', with_store: true },
        });
    });

    it('rebuilds every resource store when the adapter changes', () => {
        const firstAdapter = new FakeAdapter();
        const nextAdapter = new FakeAdapter();
        const storefront = new Storefront(NETWORK_KEY, { adapter: firstAdapter });

        const returned = storefront.setAdapter(nextAdapter);

        expect(returned).toBe(storefront);
        expect(storefront.getAdapter()).toBe(nextAdapter);
        for (const storeName of ['products', 'categories', 'foodTrucks', 'reviews', 'customers', 'cart', 'checkout']) {
            expect(storefront[storeName].adapter, `${storeName} uses the replacement adapter`).toBe(nextAdapter);
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

        expect(stores[0]).toBeInstanceOf(Store);
        expect(locations[0]).toBeInstanceOf(StoreLocation);
        expect(locations[0].storeId).toBe('store_public');
        expect(locations[0].storeData).toEqual({ id: 'store_public', name: 'Cafe' });
        expect(locations[0].merchant).toBeInstanceOf(Store);
        expect(locations[0].merchant.adapter).toBe(adapter);
        expect(categories[0].resource).toBe('category');
        expect(products[0]).toBeInstanceOf(Product);
        expect(products[0].merchant).toBeInstanceOf(Store);
        expect(store).toBeInstanceOf(Store);
        expect(gateways[0].resource).toBe('payment-gateway');
        expect(reviews[0].resource).toBe('review');
        expect(tags).toEqual(['coffee', 'open-late']);
        expect(adapter.calls.find((call) => call.endpoint === 'search')).toMatchObject({
            params: { query: 'coffee', with_store: true, limit: 5 },
        });
        expect(adapter.calls.find((call) => call.endpoint === 'reviews')).toMatchObject({
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

        expect(location.storeData).toEqual({ id: 'store_legacy', name: 'Legacy Cafe' });
        expect(location.storeId).toBe('store_legacy');
        expect(location.hours).toHaveLength(0);
        expect(location.merchant).toBeInstanceOf(Store);
    });

    it('propagates network helper failures without unconditional console output', async () => {
        const error = new Error('offline');
        const network = new Network({ id: 'network_public' }, new FakeAdapter({ stores: error }));

        try {
            await network.getStores();
            throw new Error('Expected getStores() to reject');
        } catch (caught) {
            expect(caught).toBe(error);
        }
    });
});
