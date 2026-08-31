import StorefrontStore from './store.js';
import { isKeyValid } from './utils/index.js';
import { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, Order } from './resources.js';
import { cartActions } from './resources/cart.js';
import { customerActions } from './resources/customer.js';
import { checkoutActions } from './resources/checkout.js';
import { reviewActions } from './resources/review.js';
import { orderActions } from './resources/order-actions.js';
import { Collection, lookup, detectAdapter } from '@fleetbase/sdk';
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
    products!: StorefrontStore<Product>;
    categories!: StorefrontStore<Category>;
    foodTrucks!: StorefrontStore<FoodTruck>;
    reviews!: ReviewStore;
    customers!: CustomerStore;
    cart!: CartStore;
    checkout!: CheckoutStore;
    orders!: OrderStore;

    /**
     * Builds an instance of the Fleetbase Storefront SDK
     *
     * @param  {String} storeKey  The access key for the storefront store
     * @param  {Object} config    The config object
     * @param  {Boolean} debug    Enable debug mode
     * @return {Storefront}        Instance
     */
    constructor(storeKey: string, config: StorefrontConfig = {}, debug = false) {
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
        this.products = new StorefrontStore<Product>('product', this.adapter);
        this.categories = new StorefrontStore<Category>('category', this.adapter);
        this.foodTrucks = new StorefrontStore<FoodTruck>('food-truck', this.adapter);
        this.reviews = new StorefrontStore<Review>('review', this.adapter).extendActions(reviewActions) as ReviewStore;
        this.customers = new StorefrontStore<Customer>('customer', this.adapter).extendActions(customerActions) as CustomerStore;
        this.cart = new StorefrontStore<Cart>('cart', this.adapter).extendActions(cartActions) as CartStore;
        this.checkout = new StorefrontStore<Checkout>('checkout', this.adapter).extendActions(checkoutActions) as CheckoutStore;
        this.orders = new StorefrontStore<Order>('order', this.adapter).extendActions(orderActions) as OrderStore;

        return this;
    }

    /**
     * Loads information about this storefront.
     *
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, unknown> | Store | Network>}
     */
    about(options: { resource?: boolean } = {}): Promise<Attributes | Store | Network> {
        return this.adapter.get<Attributes>('about').then((attributes) => (options.resource ? this.hydrateOwner(attributes) : attributes));
    }

    /** @returns {Promise<Store | Network>} Loads the storefront owner as a typed resource. */
    getOwner(): Promise<Store | Network> {
        return this.about({ resource: true }) as Promise<Store | Network>;
    }

    /**
     * Looks up a specific store or network by public ID.
     *
     * @param {string} id
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, unknown> | Store | Network>}
     */
    lookup(id: string, options: { resource?: boolean } = {}): Promise<Attributes | Store | Network> {
        return this.adapter.get<Attributes>(`lookup/${id}`).then((attributes) => (options.resource ? this.hydrateOwner(attributes) : attributes));
    }

    /**
     * @param {string} id
     * @returns {Promise<Store | Network>}
     */
    lookupResource(id: string): Promise<Store | Network> {
        return this.lookup(id, { resource: true }) as Promise<Store | Network>;
    }

    /**
     * Searches products in the current store or network.
     *
     * @param {string} query
     * @param {Record<string, unknown>} options
     * @returns {Promise<Collection<Product>>}
     */
    search(query: string, options: Attributes = {}): Promise<Collection<Product>> {
        return this.adapter.get<Attributes[]>('search', { query, ...options }).then((products) => {
            return new Collection(products.map((product: Attributes) => new Product(product, this.adapter)));
        });
    }

    hydrateOwner(attributes: Attributes = {}): Store | Network {
        if (attributes?.is_network === true) {
            return new Network(attributes, this.adapter);
        }

        return new Store(attributes, this.adapter);
    }

    static newInstance(...args: ConstructorParameters<typeof Storefront>) {
        return new Storefront(...args);
    }

    setAdapter(adapter: Adapter) {
        this.adapter = adapter;

        return this.initializeStores();
    }

    getAdapter() {
        return this.adapter;
    }
}

export { Product, Category, Customer, Cart, Store, StoreLocation, StoreHour, DeliveryServiceQuote, Checkout, PaymentGateway, Review, Network, FoodTruck, Order, lookup };
