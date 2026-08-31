import { describe, expect, it, vi } from 'vitest';
import { Adapter, Collection, Order as FleetbaseOrder, Place } from '@fleetbase/sdk';
import StorefrontStore from '../src/store.js';
import StorefrontResource from '../src/resource.js';
import { Cart, Category, DeliveryServiceQuote, FoodTruck, Network, Order, PaymentGateway, Product, Review, Store, StoreHour, StoreLocation } from '../src/resources.js';
import FakeAdapter from './helpers/fake-adapter.js';

describe('resource and store contracts', () => {
    it('serializes registered resources and rebuilds stores when adapters change', () => {
        const adapter = new FakeAdapter();
        const store = new StorefrontStore('product', adapter);
        expect(store.extendActions()).toBeUndefined();
        expect(store.serialize({ id: 'product_1' })).toBeInstanceOf(Product);

        const resource = new StorefrontResource({ id: 'custom_1' }, adapter, 'storefront-resource');
        const nextAdapter = new FakeAdapter();
        expect(resource.setAdapter(nextAdapter)).toBe(resource);
        expect(resource.adapter).toBe(nextAdapter);
        expect(resource.store.adapter).toBe(nextAdapter);
    });

    it('implements cart actions, coercion, totals, and empty states', async () => {
        const adapter = new FakeAdapter({
            'post:carts/cart_1/product_1': { id: 'cart_1', items: [] },
            'put:carts/cart_1/item_1': { id: 'cart_1', items: [] },
            'delete:carts/cart_1/item_1': { id: 'cart_1', items: [] },
            'put:carts/cart_1/empty': { id: 'cart_1', items: [] },
            'carts/cart_1': { id: 'cart_1', items: [] },
        });
        const cart = new Cart(
            {
                id: 'cart_1',
                items: [
                    { product_id: 'product_1', subtotal: 250 },
                    { product_id: 'product_2', subtotal: null },
                ],
            },
            adapter
        );
        const product = new Product({ id: 'product_1' }, adapter);

        expect(cart.subtotal()).toBe(250);
        expect(cart.hasProduct('product_1')).toBe(true);
        expect(cart.hasProduct('missing')).toBe(false);
        expect(cart.isEmpty).toBe(false);
        expect(cart.isNotEmpty).toBe(true);
        expect(await cart.add(product, 2, { note: 'hot' }, { timeout: 1 })).toBeInstanceOf(Cart);
        expect(await cart.add('product_1')).toBeInstanceOf(Cart);
        expect(await cart.update('item_1', 3)).toBeInstanceOf(Cart);
        expect(await cart.remove('item_1')).toBeInstanceOf(Cart);
        expect(await cart.empty()).toBeInstanceOf(Cart);
        expect(await cart.refresh()).toBeInstanceOf(Cart);
        expect(cart.subtotal()).toBe(0);
        expect(new Cart({ id: 'cart_2', items: null }, adapter).contents()).toEqual([]);
        expect(new Cart({ id: 'cart_2', items: {} }, adapter).isEmpty).toBe(true);

        const destroy = vi.spyOn(cart, 'destroy').mockResolvedValue('deleted');
        await expect(cart.delete()).resolves.toBe('deleted');
        expect(destroy).toHaveBeenCalledOnce();
    });

    it('hydrates category products and product helpers with adapter identity', async () => {
        const adapter = new FakeAdapter({
            products: [{ id: 'product_1' }],
            reviews: [{ id: 'review_1' }],
        });
        const category = new Category({ id: 'category_1' }, adapter);
        const [categoryProduct] = await category.getProducts();
        expect(categoryProduct).toBeInstanceOf(Product);
        expect(categoryProduct.adapter).toBe(adapter);

        const product = new Product(
            {
                id: 'product_1',
                variants: ['small'],
                addon_categories: ['milk'],
                images: ['image'],
                videos: ['video'],
                hours: ['hour'],
                price: 1250,
                currency: 'USD',
                store: { id: 'store_1' },
            },
            adapter
        );
        expect(product.variants()).toEqual(['small']);
        expect(product.addons()).toEqual(['milk']);
        expect(product.images()).toEqual(['image']);
        expect(product.videos()).toEqual(['video']);
        expect(product.hours()).toEqual(['hour']);
        expect(product.isOnSale).toBeNull();
        expect(product.isNotOnSale).toBe(true);
        expect(product.formattedAmount).toBe('$12.50');
        expect(product.merchant).toBeInstanceOf(Store);
        expect(product.merchant.adapter).toBe(adapter);
        expect((await product.getReviews())[0]).toBeInstanceOf(Review);

        expect(new Product({ price: null, currency: 'USD' }, adapter).formattedAmount).toBeNull();
        expect(new Product({ price: 100 }, adapter).formattedAmount).toBeNull();
        expect(new Product({ is_on_sale: true, sale_price: 500, currency: 'USD' }, adapter).formattedAmount).toBe('$5.00');
        expect(new Product({ is_on_sale: true, sale_price: null, currency: 'USD' }, adapter).formattedAmount).toBeNull();
        expect(new Product({ is_on_sale: true, sale_price: 500 }, adapter).formattedAmount).toBeNull();
        expect(new Product({}, adapter).merchant).toBeNull();
        expect(new Product({}, adapter).images()).toEqual([]);
        expect(new Product({}, adapter).videos()).toEqual([]);
        expect(new Product({}, adapter).hours()).toEqual([]);
    });

    it('hydrates store, network, locations, gateways, and reviews', async () => {
        const adapter = new FakeAdapter({
            reviews: [{ id: 'review_1' }],
            tags: ['coffee'],
            locations: [
                { id: 'location_1', place: { id: 'place_1' }, hours: [] },
                { id: 'location_2', hours: [] },
            ],
            'locations/location_1': { id: 'location_1', hours: [] },
            gateways: [{ id: 'gateway_1', type: 'cash' }],
            'gateways/gateway_1': { id: 'gateway_1', type: 'cash' },
            stores: [{ id: 'store_1' }],
            'store-locations': [{ id: 'location_1', hours: [] }],
            categories: [{ id: 'category_1' }],
            search: [{ id: 'product_1' }],
            'lookup/store_1': { id: 'store_1' },
        });
        const store = new Store({ id: 'store_1' }, adapter);
        expect((await store.getReviews({ limit: 1 }))[0]).toBeInstanceOf(Review);
        expect(await store.getTags()).toEqual(['coffee']);
        const [location, locationWithoutPlace] = await store.getLocations({ limit: 1 });
        expect(location).toBeInstanceOf(StoreLocation);
        expect(location.getAttribute('place')).toBeInstanceOf(Place);
        expect(location.getAttribute('place').adapter).toBe(adapter);
        expect(locationWithoutPlace).toBeInstanceOf(StoreLocation);
        expect(await store.getLocation('location_1')).toBeInstanceOf(StoreLocation);
        expect((await store.getPaymentGateways())[0]).toBeInstanceOf(PaymentGateway);
        expect(await store.getPaymentGateway('gateway_1')).toBeInstanceOf(PaymentGateway);

        const network = new Network({ id: 'network_1' }, adapter);
        expect(await network.getTags({ limit: 1 })).toEqual(['coffee']);
        expect((await network.getStores())[0]).toBeInstanceOf(Store);
        expect((await network.getStoreLocations())[0]).toBeInstanceOf(StoreLocation);
        expect((await network.getCategories())[0]).toBeInstanceOf(Category);
        expect((await network.search('coffee'))[0]).toBeInstanceOf(Product);
        expect(await network.lookupStore('store_1')).toBeInstanceOf(Store);
        expect((await network.getReviews('store_1'))[0]).toBeInstanceOf(Review);
        expect((await network.getPaymentGateways())[0]).toBeInstanceOf(PaymentGateway);
    });

    it('models location schedules and read-only resource failures', () => {
        const adapter = new FakeAdapter();
        const monday = new StoreHour({ day: 'Monday', start: '09:00', end: '17:00' }, adapter);
        const always = new StoreHour({ day: 'Tuesday', start: '00:00:00', end: '23:59:59' }, adapter);
        const closed = new StoreHour({ day: 'Wednesday', start: null, end: null }, adapter);
        const closesOnly = new StoreHour({ day: 'Thursday', start: null, end: '17:00' }, adapter);
        const opensOnly = new StoreHour({ day: 'Friday', start: '09:00', end: null }, adapter);
        const exactly23Hours = new StoreHour({ day: 'Saturday', start: '00:00', end: '23:00' }, adapter);
        const invalidStart = new StoreHour({ day: 'Sunday', start: 'invalid', end: '17:00' }, adapter);
        const invalidEnd = new StoreHour({ day: 'Sunday', start: '09:00', end: 'invalid' }, adapter);
        const invalid = new StoreHour({ day: 'Other', start: 2, end: 'invalid' }, adapter);
        const location = new StoreLocation(
            {
                id: 'location_1',
                place: { location: { coordinates: [106.9, 47.9] } },
                store: 'store_1',
                store_data: { id: 'store_1' },
                hours: [monday.serialize(), always.serialize(), invalid.serialize()],
            },
            adapter
        );

        expect(location.latitude).toBe(47.9);
        expect(location.longitude).toBe(106.9);
        expect(location.storeData).toEqual({ id: 'store_1' });
        expect(location.storeId).toBe('store_1');
        expect(location.merchant).toBeInstanceOf(Store);
        expect(location.isAlwaysOpen).toBe(false);
        expect(location.schedule.Monday).toHaveLength(1);
        expect(location.today).toBeInstanceOf(Collection);
        expect(new StoreLocation({ hours: [] }, adapter).merchant).toBeNull();
        expect(new StoreLocation({ store: { public_id: 'store_2' }, hours: [always.serialize()] }, adapter).storeId).toBe('store_2');
        expect(new StoreLocation({ hours: [always.serialize()] }, adapter).isAlwaysOpen).toBe(true);

        expect(monday.day).toBe('Monday');
        expect(monday.isClosed).toBe(false);
        expect(monday.is24Hours).toBe(false);
        expect(monday.startDateInstance).toBeInstanceOf(Date);
        expect(monday.endDateInstance).toBeInstanceOf(Date);
        expect(monday.humanReadableHoursRange).toContain(' - ');
        expect(monday.humanReadableHours).toContain(' - ');
        expect(always.is24Hours).toBe(true);
        expect(always.humanReadableHours).toBe('24 Hours');
        expect(closed.isClosed).toBe(true);
        expect(closed.startDateInstance).toBeNull();
        expect(closed.endDateInstance).toBeNull();
        expect(closed.humanReadableHours).toBe('Closed');
        expect(closesOnly.isClosed).toBe(false);
        expect(opensOnly.isClosed).toBe(false);
        expect(exactly23Hours.is24Hours).toBe(false);
        expect(invalidStart.is24Hours).toBe(false);
        expect(invalidStart.humanReadableHoursRange).toBe('invalid - 17:00');
        expect(invalidEnd.is24Hours).toBe(false);
        expect(invalidEnd.humanReadableHoursRange).toBe('09:00 - invalid');
        expect(invalid.startDateInstance).toBeNull();
        expect(invalid.is24Hours).toBe(false);
        expect(invalid.humanReadableHoursRange).toBe('2 - invalid');
        const missing = new StoreHour({ day: 'Thursday' }, adapter);
        expect(missing.startDateInstance).toBeNull();
        expect(missing.endDateInstance).toBeNull();

        for (const method of ['create', 'update', 'destroy']) {
            expect(() => location[method]()).toThrow(`There is no ${method}() method store location!`);
        }
        for (const method of ['create', 'update', 'destroy', 'reload']) {
            expect(() => monday[method]()).toThrow(`There is no ${method}() method store location!`);
        }
    });

    it('models payment gateways, review media, food trucks, and storefront orders', () => {
        const adapter = new FakeAdapter();
        const cash = new PaymentGateway({ type: 'cash', code: 'cash' }, adapter);
        const stripe = new PaymentGateway({ type: 'stripe', code: 'stripe' }, adapter);
        const qpay = new PaymentGateway({ type: 'other', code: 'qpay' }, adapter);
        expect(cash.isCashGateway).toBe(true);
        expect(cash.isStripeGateway).toBe(false);
        expect(stripe.isStripeGateway).toBe(true);
        expect(qpay.isQPayGateway).toBe(true);
        expect(new PaymentGateway({ type: 'qpay' }, adapter).isQPayGateway).toBe(true);
        cash.setCheckoutToken('checkout-token');
        expect(cash.getCheckoutToken()).toBe('checkout-token');
        for (const method of ['findRecord', 'create', 'update', 'destroy', 'reload']) {
            expect(() => cash[method]()).toThrow(`There is no ${method}() method for payment gateways!`);
        }

        const review = new Review({ photos: [{ type: 'image/jpeg' }, { type: 'video/mp4' }] }, adapter);
        expect(review.getMedia()).toEqual(review.getPhotos());
        expect(review.getVideos()).toEqual([{ type: 'video/mp4' }]);
        expect(new Review({}, adapter).getPhotos()).toEqual([]);
        expect(new FoodTruck({ id: 'truck_1' }, adapter).resource).toBe('food-truck');
        expect(new Order({ id: 'order_1' }, adapter)).toBeInstanceOf(FleetbaseOrder);
    });

    it('fetches delivery quotes for resource IDs, raw IDs, lists, and single responses', async () => {
        const adapter = new FakeAdapter({
            'service-quotes/from-cart': ({ params }) => (params.all ? [{ id: 'quote_1', amount: 1250, currency: 'USD' }] : { id: 'quote_1', amount: 1250, currency: 'USD' }),
        });
        const quote = new DeliveryServiceQuote({}, adapter);
        expect(quote.formattedAmount).toBeNull();
        expect(new DeliveryServiceQuote({ amount: 1250, currency: 'USD' }, adapter).formattedAmount).toBe('$12.50');
        expect(new DeliveryServiceQuote({ amount: null, currency: 'USD' }, adapter).formattedAmount).toBeNull();
        expect(new DeliveryServiceQuote({ amount: 100 }, adapter).formattedAmount).toBeNull();
        const single = await quote.fromCart({ id: 'origin_1' }, { id: 'destination_1' }, { id: 'cart_1' });
        expect(single).toBeInstanceOf(DeliveryServiceQuote);
        expect(single.adapter).toBe(adapter);
        const list = await quote.fetchServiceQuotesFromCart('origin_1', 'destination_1', 'cart_1', 'storefront', true);
        expect(list).toBeInstanceOf(Collection);
        expect(list[0]).toBeInstanceOf(DeliveryServiceQuote);
        expect(await DeliveryServiceQuote.getFromCart(adapter, 'origin_1', 'destination_1', 'cart_1')).toBeInstanceOf(DeliveryServiceQuote);

        const sdkAdapter = new Adapter();
        sdkAdapter.get = adapter.get.bind(adapter);
        sdkAdapter.post = adapter.post.bind(adapter);
        expect(new DeliveryServiceQuote(sdkAdapter).adapter).toBe(sdkAdapter);
        expect(quote.setAdapter(adapter)).toBe(quote);
    });
});
