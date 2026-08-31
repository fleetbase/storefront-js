import StorefrontStore from './store.js';
import { isKeyValid } from './utils/index.js';
import { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, Order } from './resources.js';
import { cartActions } from './resources/cart.js';
import { customerActions } from './resources/customer.js';
import { checkoutActions } from './resources/checkout.js';
import { reviewActions } from './resources/review.js';
import { orderActions } from './resources/order-actions.js';
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

        this.initializeStores();
    }

    initializeStores() {
        this.products = new StorefrontStore('product', this.adapter);
        this.categories = new StorefrontStore('category', this.adapter);
        this.foodTrucks = new StorefrontStore('food-truck', this.adapter);
        this.reviews = new StorefrontStore('review', this.adapter).extendActions(reviewActions);
        this.customers = new StorefrontStore('customer', this.adapter).extendActions(customerActions);
        this.cart = new StorefrontStore('cart', this.adapter).extendActions(cartActions);
        this.checkout = new StorefrontStore('checkout', this.adapter).extendActions(checkoutActions);
        this.orders = new StorefrontStore('order', this.adapter).extendActions(orderActions);

        return this;
    }

    /**
     * Loads information about this storefront.
     *
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, any> | Store | Network>}
     */
    about(options = {}) {
        return this.adapter.get('about').then((attributes) => (options.resource ? this.hydrateOwner(attributes) : attributes));
    }

    /** @returns {Promise<Store | Network>} Loads the storefront owner as a typed resource. */
    getOwner() {
        return this.about({ resource: true });
    }

    /**
     * Looks up a specific store or network by public ID.
     *
     * @param {string} id
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, any> | Store | Network>}
     */
    lookup(id, options = {}) {
        return this.adapter.get(`lookup/${id}`).then((attributes) => (options.resource ? this.hydrateOwner(attributes) : attributes));
    }

    /**
     * @param {string} id
     * @returns {Promise<Store | Network>}
     */
    lookupResource(id) {
        return this.lookup(id, { resource: true });
    }

    /**
     * Searches products in the current store or network.
     *
     * @param {string} query
     * @param {Record<string, any>} options
     * @returns {Promise<Collection<Product>>}
     */
    search(query, options = {}) {
        return this.adapter.get('search', { query, ...options }).then((products) => {
            return new Collection(products.map((product) => new Product(product, this.adapter)));
        });
    }

    hydrateOwner(attributes = {}) {
        if (attributes?.is_network === true) {
            return new Network(attributes, this.adapter);
        }

        return new Store(attributes, this.adapter);
    }

    static newInstance() {
        return new Storefront(...arguments);
    }

    setAdapter(adapter) {
        this.adapter = adapter;

        return this.initializeStores();
    }

    getAdapter() {
        return this.adapter;
    }
}

export { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, Order, lookup };
