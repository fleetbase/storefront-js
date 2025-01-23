import Resource from '../resource.js';
import StorefrontStore from '../store.js';
import { Collection, Order, Place, StoreActions, register } from '@fleetbase/sdk';
import { isPhone } from '../utils/is-phone.js';

export const customerActions = new StoreActions({
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

export default class Customer extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'customer', {
            actions: customerActions,
            ...options,
        });
    }

    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {Resource} this
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
        return this.getAttribute('token');
    }

    async syncDevice(token, platform) {
        try {
            const headers = { 'Customer-Token': this.token };
            const response = await this.adapter.setHeaders(headers).post('customers/register-device', { token, platform });
            return response;
        } catch (error) {
            console.error(`Error making request to register customer device token:`, error);
            throw error;
        }
    }

    async performAuthorizedRequest(endpoint, params = {}, method = 'GET') {
        try {
            const headers = { 'Customer-Token': this.token };
            const response = await this.adapter.setHeaders(headers)[method.toLowerCase()](endpoint, params);
            return response;
        } catch (error) {
            console.error(`Error in ${method} request to ${endpoint}:`, error);
            throw error;
        }
    }

    async getSavedPlaces() {
        try {
            const places = await this.performAuthorizedRequest('customers/places');
            return new Collection(places.map((attributes) => new Place(attributes, this.adapter)));
        } catch (error) {
            console.error('Failed to retrieve saved places');
            throw error;
        }
    }

    async getOrderHistory(params = {}) {
        try {
            const orders = await this.performAuthorizedRequest('customers/orders', params);
            return new Collection(orders.map((attributes) => new Order(attributes, this.adapter)));
        } catch (error) {
            console.error('Failed to retrieve order history');
            throw error;
        }
    }

    getStripeEphemeralKey(params = {}) {
        return this.adapter.setHeaders({ 'Customer-Token': this.token }).post('customers/stripe-ephemeral-key', params);
    }

    getStripeSetupIntent(params = {}) {
        return this.adapter.setHeaders({ 'Customer-Token': this.token }).post('customers/stripe-setup-intent', params);
    }
}

register('resource', 'Customer', Customer);
