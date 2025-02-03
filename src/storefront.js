import StorefrontStore from './store.js';
import { isKeyValid } from './utils/index.js';
import { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck } from './resources.js';
import { cartActions } from './resources/cart.js';
import { customerActions } from './resources/customer.js';
import { checkoutActions } from './resources/checkout.js';
import { reviewActions } from './resources/review.js';
import { Collection, lookup, detectAdapter } from '@fleetbase/sdk';

/**
 * // instance
 * const storefront = new Storefront();
 *
 */
export default class Storefront {
    /**
     * Builds an instance of the Fleetbase Storefront SDK
     *
     * @param  {String} storeKey  The access key for the storefront store
     * @param  {Object} config    The config object
     * @param  {Boolean} debug    Enable debug mode
     * @return {Storefront}        Instance
     */
    constructor(storeKey, config = {}, debug = false) {
        this.version = config.version || 'v1';
        this.options = {
            version: this.version,
            host: config.host || 'https://api.fleetbase.io',
            namespace: config.namespace || `storefront/${this.version}`,
            publicKey: storeKey,
            debug,
        };

        if (!isKeyValid(storeKey)) {
            throw new Error('⚠️ Invalid Storefront key given to Storefront SDK');
        }

        this.adapter = config.adapter || detectAdapter(this.options);

        this.products = new StorefrontStore('product', this.adapter);
        this.categories = new StorefrontStore('category', this.adapter);
        this.foodTrucks = new StorefrontStore('food-truck', this.adapter);
        this.reviews = new StorefrontStore('review', this.adapter).extendActions(reviewActions);
        this.customers = new StorefrontStore('customer', this.adapter).extendActions(customerActions);
        this.cart = new StorefrontStore('cart', this.adapter).extendActions(cartActions);
        this.checkout = new StorefrontStore('checkout', this.adapter).extendActions(checkoutActions);
    }

    /** loads information about this storefront */
    about() {
        return this.adapter.get('about');
    }

    /** lookup a specific store or network provided the ID */
    lookup(id) {
        return this.adapter.get(`lookup/${id}`);
    }

    /** search products in store or network */
    search(query, options = {}) {
        return this.adapter.get('search', { query, ...options }).then((products) => {
            return new Collection(products.map((product) => new Product(product)));
        });
    }

    static newInstance() {
        return new Storefront(...arguments);
    }

    setAdapter(adapter) {
        this.adapter = adapter;
    }

    getAdapter() {
        return this.adapter;
    }
}

export { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, lookup };
