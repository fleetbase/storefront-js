import './fleetbase-sdk.js';
import StorefrontStore from './store.js';
import { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, Order } from './resources.js';
import { Collection, lookup } from '@fleetbase/sdk';
import type { Adapter } from '@fleetbase/sdk';
import type { Attributes, RequestOptions, ResourceIdentifier, StorefrontConfig } from './types.js';
export interface ReviewStoreActions {
    count(storeId?: string, options?: RequestOptions): Promise<unknown>;
}
export interface CustomerStoreActions {
    login(identity: string, password?: string | null, attributes?: Attributes): Promise<Customer | Attributes>;
    loginWithApple(appleUserId: string, identityToken: string, authorizationCode: string, email: string, name: string, attributes?: Attributes): Promise<Customer>;
    loginWithFacebook(facebookUserId: string, email: string, name: string, avatarUrl: string, attributes?: Attributes): Promise<Customer>;
    loginWithGoogle(idToken: string, clientId: string, attributes?: Attributes): Promise<Customer>;
    verifyCode(identity: string, code: string, attributes?: Attributes): Promise<Customer>;
    requestCreationCode(identity: string, mode?: string): Promise<unknown>;
    create(identity: string, code: string, attributes?: Attributes): Promise<Customer>;
    retrieve(id: string): Promise<Customer>;
}
export interface CartStoreActions {
    add(id: string, productId: string, quantity?: number, data?: Attributes, options?: RequestOptions): Promise<Cart>;
    update(id: string, cartItemId: string, quantity: number, data?: Attributes, options?: RequestOptions): Promise<Cart>;
    remove(id: string, cartItemId: string, options?: RequestOptions): Promise<Cart>;
    empty(id: string, options?: RequestOptions): Promise<Cart>;
    retrieve(id?: string): Promise<Cart>;
}
export interface CheckoutStoreActions {
    initialize(
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        gateway: ResourceIdentifier,
        orderOptions?: Attributes,
        options?: RequestOptions
    ): Promise<unknown>;
    captureOrder(token: string, params?: Attributes, options?: RequestOptions): Promise<Order>;
    createStripeSetupIntent(customer: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    updateStripePaymentIntent(
        paymentIntent: string,
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        orderOptions?: Attributes,
        options?: RequestOptions
    ): Promise<unknown>;
    getStatus(checkout: ResourceIdentifier, token: string, options?: RequestOptions): Promise<unknown>;
    captureQPay(checkout: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    captureQPayCallback(checkout: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
}
export interface OrderStoreActions {
    completePickup(order: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    getReceipt(order: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
}
export type ReviewStore = StorefrontStore<Review> & ReviewStoreActions;
export type CustomerStore = StorefrontStore<Customer> & CustomerStoreActions;
export type CartStore = StorefrontStore<Cart> & CartStoreActions;
export type CheckoutStore = StorefrontStore<Checkout> & CheckoutStoreActions;
export type OrderStore = StorefrontStore<Order> & OrderStoreActions;
/**
 * // instance
 * const storefront = new Storefront();
 *
 */
export default class Storefront {
    version: string;
    options: Attributes;
    adapter: Adapter;
    products: StorefrontStore<Product>;
    categories: StorefrontStore<Category>;
    foodTrucks: StorefrontStore<FoodTruck>;
    reviews: ReviewStore;
    customers: CustomerStore;
    cart: CartStore;
    checkout: CheckoutStore;
    orders: OrderStore;
    /**
     * Builds an instance of the Fleetbase Storefront SDK
     *
     * @param  {String} storeKey  The access key for the storefront store
     * @param  {Object} config    The config object
     * @param  {Boolean} debug    Enable debug mode
     * @return {Storefront}        Instance
     */
    constructor(storeKey: string, config?: StorefrontConfig, debug?: boolean);
    initializeStores(): this;
    /**
     * Loads information about this storefront.
     *
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, unknown> | Store | Network>}
     */
    about(options?: { resource?: boolean }): Promise<Attributes | Store | Network>;
    /** @returns {Promise<Store | Network>} Loads the storefront owner as a typed resource. */
    getOwner(): Promise<Store | Network>;
    /**
     * Looks up a specific store or network by public ID.
     *
     * @param {string} id
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, unknown> | Store | Network>}
     */
    lookup(
        id: string,
        options?: {
            resource?: boolean;
        }
    ): Promise<Attributes | Store | Network>;
    /**
     * @param {string} id
     * @returns {Promise<Store | Network>}
     */
    lookupResource(id: string): Promise<Store | Network>;
    /**
     * Searches products in the current store or network.
     *
     * @param {string} query
     * @param {Record<string, unknown>} options
     * @returns {Promise<Collection<Product>>}
     */
    search(query: string, options?: Attributes): Promise<Collection<Product>>;
    hydrateOwner(attributes?: Attributes): Store | Network;
    static newInstance(...args: ConstructorParameters<typeof Storefront>): Storefront;
    setAdapter(adapter: Adapter): this;
    getAdapter(): Adapter;
}
export { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, Order, lookup };
