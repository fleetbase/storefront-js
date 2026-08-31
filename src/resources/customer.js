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
    constructor(attributes = {}, adapter = undefined, options = {}) {
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
        return this.getAttribute('token');
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

        return this.adapter[method.toLowerCase()](endpoint, params, requestOptions);
    }

    async getSavedPlaces() {
        const places = await this.performAuthorizedRequest('customers/places');
        return new Collection(places.map((attributes) => new Place(attributes, this.adapter)));
    }

    async getOrderHistory(params = {}) {
        const orders = await this.performAuthorizedRequest('customers/orders', params);
        return new Collection(orders.map((attributes) => new Order(attributes, this.adapter)));
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
