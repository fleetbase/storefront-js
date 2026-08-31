import { Store as Store$1, extendStoreActions, lookup, classify, register, Resource, StoreActions, Collection, Place, Order as Order$1, ServiceQuote, Adapter, isResource, detectAdapter } from '@fleetbase/sdk';
export { lookup } from '@fleetbase/sdk';
import 'countries-list';
import { isValid, parse, format } from 'date-fns';

class StorefrontStore extends Store$1 {
    constructor(resource, adapter, options = {}) {
        super(resource, adapter, options);
    }
    extendActions(actions = []) {
        return extendStoreActions(this, actions);
    }
    serialize(json) {
        return lookup('resource', classify(this.resource), json, this.adapter);
    }
}

function isPhone(phone = '') {
    return /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(phone);
}

function formatCurrency(amount = 0, currency = 'USD', currencyDisplay = 'symbol') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        currencyDisplay,
    }).format(amount);
}

function isKeyValid(key) {
    return typeof key === 'string' && key.length > 30 && (key.startsWith('store_') || key.startsWith('network_'));
}

function isEmpty(obj) {
    const none = obj === null || obj === undefined;
    if (none) {
        return none;
    }
    const objectType = typeof obj;
    if (typeof obj === 'object' && typeof obj.size === 'number') {
        return !obj.size;
    }
    if ((typeof obj === 'object' || typeof obj === 'string') && typeof obj.length === 'number' && objectType !== 'function') {
        return !obj.length;
    }
    return false;
}

function isArray$1(value) {
    return Array.isArray(value);
}

class StorefrontResource extends Resource {
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });
        return this;
    }
}
register('resource', 'StorefrontResource', StorefrontResource);

const reviewActions = new StoreActions({
    count: function (storeId, options = {}) {
        const params = {};
        if (storeId) {
            params.store = storeId;
        }
        return this.adapter.get(`${this.namespace}/count`, params, options);
    },
});
class Review extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'review', options);
    }
    getMedia() {
        return this.getPhotos();
    }
    getPhotos() {
        return (this.getAttribute('photos') ?? []);
    }
    getVideos() {
        return this.getMedia().filter((media) => typeof media?.type === 'string' && media.type.startsWith('video/'));
    }
}
register('resource', 'Review', Review);

class StoreHour extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store-hour', options);
    }
    get day() {
        return this.getAttribute('day');
    }
    get isClosed() {
        return this.getAttribute('start') === null && this.getAttribute('end') === null;
    }
    get is24Hours() {
        const start = this.startDateInstance;
        const end = this.endDateInstance;
        if (start === null || end === null || !isValid(start) || !isValid(end)) {
            return false;
        }
        const diff = Math.abs(start.getTime() - end.getTime());
        const hours = Math.floor(diff / 1000 / 60) / 60;
        return hours > 23;
    }
    get startDateInstance() {
        if (!this.hasAttribute('start')) {
            return null;
        }
        const start = this.getAttribute('start');
        if (typeof start !== 'string') {
            return null;
        }
        const includesSeconds = start.split(':').length === 3;
        const format = includesSeconds ? 'HH:mm:ss' : 'HH:mm';
        return parse(start, format, new Date());
    }
    get endDateInstance() {
        if (!this.hasAttribute('end')) {
            return null;
        }
        const end = this.getAttribute('end');
        if (typeof end !== 'string') {
            return null;
        }
        const includesSeconds = end.split(':').length === 3;
        const format = includesSeconds ? 'HH:mm:ss' : 'HH:mm';
        return parse(end, format, new Date());
    }
    get humanReadableHoursRange() {
        const start = this.startDateInstance;
        const end = this.endDateInstance;
        if (start === null || end === null || !isValid(start) || !isValid(end)) {
            return `${this.getAttribute('start')} - ${this.getAttribute('end')}`;
        }
        return `${format(start, 'p')} - ${format(end, 'p')}`;
    }
    get humanReadableHours() {
        if (this.isClosed) {
            return 'Closed';
        }
        if (this.is24Hours) {
            return '24 Hours';
        }
        return this.humanReadableHoursRange;
    }
    // remove default resource methods
    create() {
        throw new Error('There is no create() method store location!');
    }
    // remove default resource methods
    update() {
        throw new Error('There is no update() method store location!');
    }
    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method store location!');
    }
    // remove default resource methods
    reload() {
        throw new Error('There is no reload() method store location!');
    }
}
register('resource', 'StoreHour', StoreHour);

class StoreLocation extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store-location', options);
    }
    get latitude() {
        return this.getAttribute('place.location.coordinates.1');
    }
    get longitude() {
        return this.getAttribute('place.location.coordinates.0');
    }
    get hours() {
        const hours = this.getAttribute('hours', []);
        return new Collection((hours || []).map((attributes) => new StoreHour(attributes, this.adapter)));
    }
    /** Raw embedded merchant payload, normalized across API response versions. */
    get storeData() {
        const embeddedStore = this.getAttribute('store_data');
        const legacyStore = this.getAttribute('store');
        return embeddedStore || (legacyStore && typeof legacyStore === 'object' ? legacyStore : null);
    }
    /** Public store identifier for this location. */
    get storeId() {
        const store = this.getAttribute('store');
        const data = this.storeData;
        return (typeof store === 'string' ? store : data?.id || data?.public_id);
    }
    /** Typed embedded merchant when requested with `with_store`. */
    get merchant() {
        return this.storeData ? lookup('resource', 'Store', this.storeData, this.adapter) : null;
    }
    get isAlwaysOpen() {
        return this.hours.length > 0 && this.hours.every((hour) => hour?.is24Hours);
    }
    get today() {
        const today = format(new Date(), 'EEEE');
        return this.schedule[today];
    }
    get schedule() {
        const schedule = {};
        const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        for (let i = 0; i < week.length; i++) {
            const day = week[i];
            schedule[day] = new Collection();
        }
        for (let i = 0; i < this.hours.length; i++) {
            const hour = this.hours.objectAt(i);
            if (hour && schedule[hour.day]) {
                schedule[hour.day].pushObject(hour);
            }
        }
        return schedule;
    }
    // remove default resource methods
    create() {
        throw new Error('There is no create() method store location!');
    }
    // remove default resource methods
    update() {
        throw new Error('There is no update() method store location!');
    }
    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method store location!');
    }
}
register('resource', 'StoreLocation', StoreLocation);

class PaymentGateway extends StorefrontResource {
    token;
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'payment-gateway', options);
    }
    get type() {
        return this.getAttribute('type');
    }
    get code() {
        return this.getAttribute('code');
    }
    get isCashGateway() {
        return this.type === 'cash';
    }
    get isStripeGateway() {
        return this.type === 'stripe';
    }
    get isQPayGateway() {
        return this.type === 'qpay' || this.code === 'qpay';
    }
    setCheckoutToken(token) {
        this.token = token;
    }
    getCheckoutToken() {
        return this.token;
    }
    // remove default resource methods
    findRecord() {
        throw new Error('There is no findRecord() method for payment gateways!');
    }
    // remove default resource methods
    create() {
        throw new Error('There is no create() method for payment gateways!');
    }
    // remove default resource methods
    update() {
        throw new Error('There is no update() method for payment gateways!');
    }
    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method for payment gateways!');
    }
    // remove default resource methods
    reload() {
        throw new Error('There is no reload() method for payment gateways!');
    }
}
register('resource', 'PaymentGateway', PaymentGateway);

class Store extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store', options);
    }
    getReviews(params = {}) {
        return this.adapter.get('reviews', { store: this.id, ...params }).then((reviews) => {
            return new Collection(reviews.map((attributes) => new Review(attributes, this.adapter)));
        });
    }
    getTags(params = {}) {
        return this.adapter.get('tags', params);
    }
    getLocations(params = {}) {
        return this.adapter.get('locations', { store: this.id, ...params }).then((storeLocations) => {
            return new Collection(storeLocations.map((attributes) => {
                if (attributes.place) {
                    attributes.place = new Place(attributes.place, this.adapter);
                }
                return new StoreLocation(attributes, this.adapter);
            }));
        });
    }
    getLocation(id) {
        return this.adapter.get(`locations/${id}`, { store: this.id }).then((attributes) => {
            return new StoreLocation(attributes, this.adapter);
        });
    }
    getPaymentGateways(params = {}) {
        return this.adapter.get('gateways', params).then((gateways) => {
            return new Collection(gateways.map((attributes) => {
                return new PaymentGateway(attributes, this.adapter);
            }));
        });
    }
    getPaymentGateway(id) {
        return this.adapter.get(`gateways/${id}`).then((attributes) => {
            return new PaymentGateway(attributes, this.adapter);
        });
    }
}
register('resource', 'Store', Store);

class Product extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'product', options);
    }
    variants() {
        return this.getAttribute('variants');
    }
    addons() {
        return this.getAttribute('addon_categories');
    }
    images() {
        return this.getAttribute('images') ?? [];
    }
    videos() {
        return this.getAttribute('videos') ?? [];
    }
    hours() {
        return this.getAttribute('hours') ?? [];
    }
    get isOnSale() {
        return this.getAttribute('is_on_sale');
    }
    get isNotOnSale() {
        return !this.getAttribute('is_on_sale');
    }
    get formattedAmount() {
        const { price, sale_price, currency } = this.getAttributes(['price', 'sale_price', 'currency']);
        if (this.isOnSale) {
            if (isEmpty(sale_price) || isEmpty(currency)) {
                return null;
            }
            return formatCurrency(sale_price / 100, currency);
        }
        if (isEmpty(price) || isEmpty(currency)) {
            return null;
        }
        return formatCurrency(price / 100, currency);
    }
    get merchant() {
        const attributes = this.getAttribute('store');
        return attributes && typeof attributes === 'object' ? new Store(attributes, this.adapter) : null;
    }
    getReviews() {
        return this.adapter.get('reviews', { store: this.id }).then((reviews) => {
            return new Collection(reviews.map((attributes) => new Review(attributes, this.adapter)));
        });
    }
}
register('resource', 'Product', Product);

class Category extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'category', options);
    }
    getProducts() {
        return this.adapter.get('products', { category: this.id }).then((products) => {
            return new Collection(products.map((attributes) => new Product(attributes, this.adapter)));
        });
    }
}
register('resource', 'Category', Category);

const customerActions = new StoreActions({
    // const { error } = await storefront.customers.login('+1 111-1111');
    login: function (identity, password = null, attributes = {}) {
        // handle phone number authentication
        if (isPhone(identity)) {
            return this.adapter.post('customers/login-with-sms', { phone: identity });
        }
        if (!password) {
            throw new Error('Login requires password!');
        }
        return this.adapter.post('customers/login', { identity, password, ...attributes }).then(this.afterFetch.bind(this));
    },
    // const customer = await storefront.customers.loginWithApple('<appleUserId>', '<identityToken>', '<authorizationCode>', '<email>', '<name>');
    loginWithApple: function (appleUserId, identityToken, authorizationCode, email, name, attributes = {}) {
        return this.adapter.post('customers/login-with-apple', { appleUserId, identityToken, authorizationCode, email, name, ...attributes }).then(this.afterFetch.bind(this));
    },
    // const customer = await storefront.customers.loginWithFacebook('<facebookUserId>', '<email>', '<name>', '<avatarUrl>');
    loginWithFacebook: function (facebookUserId, email, name, avatarUrl, attributes = {}) {
        return this.adapter.post('customers/login-with-facebook', { facebookUserId, email, name, avatarUrl, ...attributes }).then(this.afterFetch.bind(this));
    },
    // const customer = await storefront.customers.loginWithGoogle('<idToken>', '<clientId>');
    loginWithGoogle: function (idToken, clientId, attributes = {}) {
        return this.adapter.post('customers/login-with-google', { idToken, clientId, ...attributes }).then(this.afterFetch.bind(this));
    },
    verifyCode: function (identity, code, attributes = {}) {
        return this.adapter.post('customers/verify-code', { identity, code, ...attributes }).then(this.afterFetch.bind(this));
    },
    requestCreationCode(identity, mode = 'email') {
        return this.adapter.post('customers/request-creation-code', {
            identity,
            mode,
        });
    },
    create(identity, code, attributes = {}) {
        return this.adapter.post('customers', { identity, code, ...attributes }).then(this.afterFetch.bind(this));
    },
    retrieve: function (id) {
        return this.findRecord(id);
    },
});
class Customer extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'customer', {
            actions: customerActions,
            ...options,
        });
    }
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });
        return this;
    }
    get token() {
        const token = this.getAttribute('token');
        return typeof token === 'string' ? token : undefined;
    }
    async syncDevice(token, platform) {
        return this.performAuthorizedRequest('customers/register-device', { token, platform }, 'POST');
    }
    performAuthorizedRequest(endpoint, params = {}, method = 'GET', options = {}) {
        const requestOptions = {
            ...options,
            headers: {
                ...options.headers,
                'Customer-Token': this.token,
            },
        };
        const adapter = this.adapter;
        return adapter[method.toLowerCase()](endpoint, params, requestOptions);
    }
    async getSavedPlaces() {
        const places = await this.performAuthorizedRequest('customers/places');
        return new Collection(places.map((attributes) => new Place(attributes, this.adapter)));
    }
    async getOrderHistory(params = {}) {
        const orders = await this.performAuthorizedRequest('customers/orders', params);
        return new Collection(orders.map((attributes) => new Order$1(attributes, this.adapter)));
    }
    getStripeEphemeralKey(params = {}) {
        return this.performAuthorizedRequest('customers/stripe-ephemeral-key', params, 'POST');
    }
    getStripeSetupIntent(params = {}) {
        return this.performAuthorizedRequest('customers/stripe-setup-intent', params, 'POST');
    }
    startAccountClosure(params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/account-closure', params, 'POST', options);
    }
    confirmAccountClosure(code, params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/confirm-account-closure', { code, ...params }, 'POST', options);
    }
    requestPhoneVerification(phone, params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/request-phone-verification', { phone, ...params }, 'POST', options);
    }
    verifyPhoneNumber(code, phone, params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/verify-phone-number', { code, phone, ...params }, 'POST', options);
    }
    updateContactAlias(attributes = {}, options = {}) {
        return this.performAuthorizedRequest(`contacts/${this.id}`, attributes, 'PUT', options).then((response) => {
            this.syncAttributes(response);
            return this;
        });
    }
}
register('resource', 'Customer', Customer);

const { isArray } = Array;
const cartActions = new StoreActions({
    create: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,
    add: function (id, productId, quantity = 1, data = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/${id}/${productId}`, { ...data, quantity }, options).then(this.afterFetch.bind(this));
    },
    update: function (id, cartItemId, quantity, data = {}, options = {}) {
        return this.adapter.put(`${this.namespace}/${id}/${cartItemId}`, { ...data, quantity }, options).then(this.afterFetch.bind(this));
    },
    remove: function (id, cartItemId, options = {}) {
        return this.adapter.delete(`${this.namespace}/${id}/${cartItemId}`, {}, options).then(this.afterFetch.bind(this));
    },
    empty: function (id, options = {}) {
        return this.adapter.put(`${this.namespace}/${id}/empty`, {}, options).then(this.afterFetch.bind(this));
    },
    retrieve: function (id = '') {
        return this.findRecord(id);
    },
});
class Cart extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'cart', { actions: cartActions, ...options });
    }
    add(productId, quantity = 1, data = {}, options = {}) {
        if (productId instanceof Product) {
            productId = productId.id;
        }
        return this.store.add(this.id, productId, quantity, data, options);
    }
    update(cartItemId, quantity, data = {}, options = {}) {
        const update = this.store.update;
        return update.call(this.store, this.id, cartItemId, quantity, data, options);
    }
    remove(cartItemId, options = {}) {
        return this.store.remove(this.id, cartItemId, options);
    }
    empty(options = {}) {
        return this.store.empty(this.id, options);
    }
    delete() {
        return this.destroy();
    }
    refresh() {
        return this.store.retrieve(this.id);
    }
    subtotal() {
        return this.contents().reduce((subtotal, cartItem) => subtotal + Number(cartItem?.subtotal || 0), 0);
    }
    contents() {
        const items = this.getAttribute('items', []);
        return isArray(items) ? items : [];
    }
    hasProduct(productId) {
        return this.contents().findIndex((cartItem) => cartItem.product_id === productId) !== -1;
    }
    get isEmpty() {
        return this.contents().length === 0;
    }
    get isNotEmpty() {
        return !this.isEmpty;
    }
}
register('resource', 'Cart', Cart);

class Network extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'network', options);
    }
    getTags(params = {}) {
        return this.adapter.get('tags', params);
    }
    async getResourceCollection(endpoint, ResourceClass, params = {}) {
        const resources = await this.adapter.get(endpoint, params);
        return new Collection(resources.map((attributes) => new ResourceClass(attributes, this.adapter)));
    }
    async getStores(params = {}) {
        return this.getResourceCollection('stores', Store, params);
    }
    async getStoreLocations(params = {}) {
        return this.getResourceCollection('store-locations', StoreLocation, params);
    }
    async getCategories(params = {}) {
        return this.getResourceCollection('categories', Category, params);
    }
    async search(query, params = {}) {
        return this.getResourceCollection('search', Product, { query, with_store: true, ...params });
    }
    async lookupStore(id) {
        const attributes = await this.adapter.get(`lookup/${id}`);
        return new Store(attributes, this.adapter);
    }
    async getReviews(storeId, params = {}) {
        return this.getResourceCollection('reviews', Review, { store: storeId, ...params });
    }
    async getPaymentGateways(params = {}) {
        return this.getResourceCollection('gateways', PaymentGateway, params);
    }
}
register('resource', 'Network', Network);

class DeliveryServiceQuote extends ServiceQuote {
    constructor(attributes = {}, adapter, options = {}) {
        let finalAttributes = attributes;
        let finalAdapter = adapter;
        // If `attributes` is actually an Adapter, adjust the arguments accordingly.
        if (attributes instanceof Adapter || (attributes && typeof attributes.get === 'function' && typeof attributes.post === 'function')) {
            finalAttributes = {};
            finalAdapter = attributes;
        }
        // Call `super()` exactly once with the resolved arguments.
        super(finalAttributes, finalAdapter, 'service-quote', options);
    }
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });
        return this;
    }
    get formattedAmount() {
        const { amount, currency } = this.getAttributes(['amount', 'currency']);
        if (isEmpty(amount) || isEmpty(currency)) {
            return null;
        }
        return formatCurrency(amount / 100, currency);
    }
    async fromCart(...args) {
        return this.fetchServiceQuotesFromCart(...args);
    }
    async fetchServiceQuotesFromCart(origin, destination, cart, config = 'storefront', all = false) {
        if (typeof origin === 'object' && origin?.id) {
            origin = origin.id;
        }
        if (typeof destination === 'object' && destination?.id) {
            destination = destination.id;
        }
        if (typeof cart === 'object' && cart?.id) {
            cart = cart.id;
        }
        const serviceQuotes = await this.adapter.get('service-quotes/from-cart', {
            origin,
            destination,
            cart,
            config,
            all,
        });
        if (isArray$1(serviceQuotes)) {
            return new Collection(serviceQuotes.map((serviceQuote) => new DeliveryServiceQuote(serviceQuote, this.adapter)));
        }
        return new DeliveryServiceQuote(serviceQuotes, this.adapter);
    }
    static async getFromCart(adapter, origin, destination, cart, config = 'storefront', all = false) {
        const quote = new DeliveryServiceQuote(adapter);
        return quote.fetchServiceQuotesFromCart(origin, destination, cart, config, all);
    }
}
register('resource', 'DeliveryServiceQuote', DeliveryServiceQuote);

class Order extends Order$1 {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, options);
    }
}
register('resource', 'Order', Order);

const checkoutActions = new StoreActions({
    create: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,
    initialize: function (customer, cart, serviceQuote, gateway, orderOptions = {}, options = {}) {
        if (isResource(customer)) {
            customer = customer.id;
        }
        if (isResource(cart)) {
            cart = cart.id;
        }
        if (isResource(serviceQuote)) {
            serviceQuote = serviceQuote.id;
        }
        if (isResource(gateway)) {
            gateway = gateway.getAttribute('code');
        }
        return this.adapter.get(`${this.namespace}/before`, { ...orderOptions, customer, cart, serviceQuote, gateway }, options);
    },
    captureOrder: function (token, params = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/capture`, { token, ...params }, options).then((orderJson) => new Order(orderJson, this.adapter));
    },
    createStripeSetupIntent: function (customer, params = {}, options = {}) {
        if (isResource(customer)) {
            customer = customer.id;
        }
        return this.adapter.post(`${this.namespace}/stripe-setup-intent`, { customer, ...params }, options);
    },
    updateStripePaymentIntent: function (paymentIntent, customer, cart, serviceQuote, orderOptions = {}, options = {}) {
        if (isResource(customer)) {
            customer = customer.id;
        }
        if (isResource(cart)) {
            cart = cart.id;
        }
        if (isResource(serviceQuote)) {
            serviceQuote = serviceQuote.id;
        }
        return this.adapter.put(`${this.namespace}/stripe-update-payment-intent`, { paymentIntent, customer, cart, serviceQuote, ...orderOptions }, options);
    },
    getStatus: function (checkout, token, options = {}) {
        if (isResource(checkout)) {
            checkout = checkout.id;
        }
        return this.adapter.get(`${this.namespace}/status`, { checkout, token }, options);
    },
    captureQPay: function (checkout, params = {}, options = {}) {
        if (isResource(checkout)) {
            checkout = checkout.id;
        }
        return this.adapter.post(`${this.namespace}/capture-qpay`, { checkout, ...params }, options);
    },
    captureQPayCallback: function (checkout, params = {}, options = {}) {
        if (isResource(checkout)) {
            checkout = checkout.id;
        }
        return this.adapter.get(`${this.namespace}/capture-qpay`, { checkout, ...params }, options);
    },
});
class Checkout extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'checkout', { actions: checkoutActions, ...options });
    }
    initialize(customer, cart, serviceQuote, gateway, orderOptions = {}, options = {}) {
        return this.store.initialize(customer, cart, serviceQuote, gateway, orderOptions, options);
    }
    captureOrder(token, params = {}, options = {}) {
        return this.store.captureOrder(token, params, options);
    }
    createStripeSetupIntent(customer, params = {}, options = {}) {
        return this.store.createStripeSetupIntent(customer, params, options);
    }
    updateStripePaymentIntent(paymentIntent, customer, cart, serviceQuote, orderOptions = {}, options = {}) {
        return this.store.updateStripePaymentIntent(paymentIntent, customer, cart, serviceQuote, orderOptions, options);
    }
    getStatus(checkout, token, options = {}) {
        return this.store.getStatus(checkout, token, options);
    }
    captureQPay(checkout, params = {}, options = {}) {
        return this.store.captureQPay(checkout, params, options);
    }
    captureQPayCallback(checkout, params = {}, options = {}) {
        return this.store.captureQPayCallback(checkout, params, options);
    }
}
register('resource', 'Checkout', Checkout);

class FoodTruck extends StorefrontResource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'food-truck', options);
    }
}
register('resource', 'FoodTruck', FoodTruck);

function idFor(value) {
    return isResource(value) ? value.id : value;
}
const orderActions = new StoreActions({
    create: undefined,
    update: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,
    completePickup: function (order, params = {}, options = {}) {
        return this.adapter.put(`${this.namespace}/picked-up`, { order: idFor(order), ...params }, options);
    },
    getReceipt: function (order, params = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/receipt`, { order: idFor(order), ...params }, options);
    },
});

/**
 * // instance
 * const storefront = new Storefront();
 *
 */
class Storefront {
    version;
    options;
    adapter;
    products;
    categories;
    foodTrucks;
    reviews;
    customers;
    cart;
    checkout;
    orders;
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
     * @returns {Promise<Record<string, unknown> | Store | Network>}
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
     * @returns {Promise<Record<string, unknown> | Store | Network>}
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
     * @param {Record<string, unknown>} options
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
    static newInstance(...args) {
        return new Storefront(...args);
    }
    setAdapter(adapter) {
        this.adapter = adapter;
        return this.initializeStores();
    }
    getAdapter() {
        return this.adapter;
    }
}

export { Cart, Category, Checkout, Customer, DeliveryServiceQuote, FoodTruck, Network, Order, PaymentGateway, Product, Review, Store, StoreHour, StoreLocation, Storefront as default };
//# sourceMappingURL=storefront.js.map
