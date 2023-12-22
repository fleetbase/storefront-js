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
    products: StorefrontStore;
    categories: StorefrontStore;
    reviews: any;
    customers: any;
    cart: any;
    checkout: any;
    /** loads information about this storefront */
    about(): any;
    /** search products in store or network */
    search(query: any, options?: {}): any;
    setAdapter(adapter: any): void;
    getAdapter(): any;
}
import StorefrontStore from './store';
import { Product } from './resources';
import { Category } from './resources';
import { Customer } from './resources';
import { Cart } from './resources';
import { Store } from './resources';
import { StoreLocation } from './resources';
import { StoreHour } from './resources';
import { DeliveryServiceQuote } from './resources';
import { Checkout } from './resources';
import { PaymentGateway } from './resources';
import { Review } from './resources';
import { Network } from './resources';
export { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network };
