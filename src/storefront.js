import Store from './store';
import CartStore from './cart-store';
import { detectAdapter } from './utils';
import { Product, Category, Cart } from './resources';

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
            namespace: `storefront/${this.version}` || config.namespace,
            publicKey: storeKey,
            debug
        };

        if (typeof storeKey !== 'string' || storeKey.length === 0 || !storeKey.startsWith('store_')) {
            throw new Error('⚠️ Invalid storefront key given to Storefront SDK');
        }

        this.adapter = config.adapter || detectAdapter(this.options);

        this.products = new Store('product', this.adapter);
        this.categories = new Store('category', this.adapter);
        this.cart = new CartStore('cart', this.adapter);
    }

    /** loads information about this storefront */
    about() {
        return this.adapter.get('about');
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

export { Product, Category, Cart, CartStore };
