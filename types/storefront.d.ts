import './fleetbase-sdk.js';
/**
 * // instance
 * const storefront = new Storefront();
 *
 */
export default class Storefront {
    static newInstance(...args: any[]): Storefront;
    /**
     * Builds an instance of the Fleetbase Storefront SDK
     *
     * @param  {String} storeKey  The access key for the storefront store
     * @param  {Object} config    The config object
     * @param  {Boolean} debug    Enable debug mode
     * @return {Storefront}        Instance
     */
    constructor(storeKey: string, config?: any, debug?: boolean);
    version: any;
    options: {
        version: any;
        host: any;
        namespace: any;
        publicKey: string;
        debug: boolean;
    };
    adapter: any;
    initializeStores(): this;
    products: StorefrontStore;
    categories: StorefrontStore;
    foodTrucks: StorefrontStore;
    reviews: StorefrontStore;
    customers: StorefrontStore;
    cart: StorefrontStore;
    checkout: StorefrontStore;
    orders: StorefrontStore;
    /**
     * Loads information about this storefront.
     *
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, any> | Store | Network>}
     */
    about(options?: { resource?: boolean }): Promise<Record<string, any> | Store | Network>;
    /** @returns {Promise<Store | Network>} Loads the storefront owner as a typed resource. */
    getOwner(): Promise<Store | Network>;
    /**
     * Looks up a specific store or network by public ID.
     *
     * @param {string} id
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, any> | Store | Network>}
     */
    lookup(
        id: string,
        options?: {
            resource?: boolean;
        }
    ): Promise<Record<string, any> | Store | Network>;
    /**
     * @param {string} id
     * @returns {Promise<Store | Network>}
     */
    lookupResource(id: string): Promise<Store | Network>;
    /**
     * Searches products in the current store or network.
     *
     * @param {string} query
     * @param {Record<string, any>} options
     * @returns {Promise<Collection<Product>>}
     */
    search(query: string, options?: Record<string, any>): Promise<Collection<Product>>;
    hydrateOwner(attributes?: {}): Store | Network;
    setAdapter(adapter: any): this;
    getAdapter(): any;
}
import StorefrontStore from './store.js';
import { Store } from './resources.js';
import { Network } from './resources.js';
import { Collection } from '@fleetbase/sdk';
import { Product } from './resources.js';
import { Category } from './resources.js';
import { Customer } from './resources.js';
import { Cart } from './resources.js';
import { StoreLocation } from './resources.js';
import { StoreHour } from './resources.js';
import { DeliveryServiceQuote } from './resources.js';
import { Checkout } from './resources.js';
import { PaymentGateway } from './resources.js';
import { Review } from './resources.js';
import { FoodTruck } from './resources.js';
import { Order } from './resources.js';
import { lookup } from '@fleetbase/sdk';
export { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, Order, lookup };
