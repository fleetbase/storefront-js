import Resource from '../resource.js';
import StorefrontStore from '../store.js';
import { Adapter, Collection, Order, Place, StoreActions, register } from '@fleetbase/sdk';
import { isPhone } from '../utils/is-phone.js';
import type { Attributes, RequestOptions } from '../types.js';

export const customerActions = new StoreActions({
    // const { error } = await storefront.customers.login('+1 111-1111');
    login: function (this: StorefrontStore, identity: string, password: string | null = null, attributes: Attributes = {}) {
        // handle phone number authentication
        if (isPhone(identity)) {
            return this.adapter.post('customers/login-with-sms', { phone: identity });
        }

        if (!password) {
            throw new Error('Login requires password!');
        }

        return this.adapter.post<Attributes>('customers/login', { identity, password, ...attributes }).then(this.afterFetch.bind(this));
    },

    // const customer = await storefront.customers.loginWithApple('<appleUserId>', '<identityToken>', '<authorizationCode>', '<email>', '<name>');
    loginWithApple: function (this: StorefrontStore, appleUserId: string, identityToken: string, authorizationCode: string, email: string, name: string, attributes: Attributes = {}) {
        return this.adapter.post<Attributes>('customers/login-with-apple', { appleUserId, identityToken, authorizationCode, email, name, ...attributes }).then(this.afterFetch.bind(this));
    },

    // const customer = await storefront.customers.loginWithFacebook('<facebookUserId>', '<email>', '<name>', '<avatarUrl>');
    loginWithFacebook: function (this: StorefrontStore, facebookUserId: string, email: string, name: string, avatarUrl: string, attributes: Attributes = {}) {
        return this.adapter.post<Attributes>('customers/login-with-facebook', { facebookUserId, email, name, avatarUrl, ...attributes }).then(this.afterFetch.bind(this));
    },

    // const customer = await storefront.customers.loginWithGoogle('<idToken>', '<clientId>');
    loginWithGoogle: function (this: StorefrontStore, idToken: string, clientId: string, attributes: Attributes = {}) {
        return this.adapter.post<Attributes>('customers/login-with-google', { idToken, clientId, ...attributes }).then(this.afterFetch.bind(this));
    },

    verifyCode: function (this: StorefrontStore, identity: string, code: string, attributes: Attributes = {}) {
        return this.adapter.post<Attributes>('customers/verify-code', { identity, code, ...attributes }).then(this.afterFetch.bind(this));
    },

    requestCreationCode(this: StorefrontStore, identity: string, mode = 'email') {
        return this.adapter.post('customers/request-creation-code', {
            identity,
            mode,
        });
    },

    create(this: StorefrontStore, identity: string, code: string, attributes: Attributes = {}) {
        return this.adapter.post<Attributes>('customers', { identity, code, ...attributes }).then(this.afterFetch.bind(this));
    },

    retrieve: function (this: StorefrontStore, id: string) {
        return (this as StorefrontStore<Customer>).findRecord(id);
    },
});

export default class Customer extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
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
    setAdapter(adapter: Adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        }) as StorefrontStore & Record<string, (...args: unknown[]) => unknown>;

        return this;
    }

    get token(): string | undefined {
        const token = this.getAttribute('token');
        return typeof token === 'string' ? token : undefined;
    }

    async syncDevice(token: string, platform: string) {
        return this.performAuthorizedRequest('customers/register-device', { token, platform }, 'POST');
    }

    performAuthorizedRequest<T = unknown>(endpoint: string, params: Attributes = {}, method = 'GET', options: RequestOptions = {}): Promise<T> {
        const requestOptions: RequestOptions = {
            ...options,
            headers: {
                ...options.headers,
                'Customer-Token': this.token,
            },
        };

        const adapter = this.adapter as unknown as Record<string, (endpoint: string, params: Attributes, options: RequestOptions) => Promise<T>>;
        return adapter[method.toLowerCase()]!(endpoint, params, requestOptions);
    }

    async getSavedPlaces() {
        const places = await this.performAuthorizedRequest<Attributes[]>('customers/places');
        return new Collection(places.map((attributes: Attributes) => new Place(attributes, this.adapter)));
    }

    async getOrderHistory(params: Attributes = {}) {
        const orders = await this.performAuthorizedRequest<Attributes[]>('customers/orders', params);
        return new Collection(orders.map((attributes: Attributes) => new Order(attributes, this.adapter)));
    }

    getStripeEphemeralKey(params: Attributes = {}) {
        return this.performAuthorizedRequest('customers/stripe-ephemeral-key', params, 'POST');
    }

    getStripeSetupIntent(params: Attributes = {}) {
        return this.performAuthorizedRequest('customers/stripe-setup-intent', params, 'POST');
    }

    startAccountClosure(params: Attributes = {}, options: RequestOptions = {}) {
        return this.performAuthorizedRequest('customers/account-closure', params, 'POST', options);
    }

    confirmAccountClosure(code: string, params: Attributes = {}, options: RequestOptions = {}) {
        return this.performAuthorizedRequest('customers/confirm-account-closure', { code, ...params }, 'POST', options);
    }

    requestPhoneVerification(phone: string, params: Attributes = {}, options: RequestOptions = {}) {
        return this.performAuthorizedRequest('customers/request-phone-verification', { phone, ...params }, 'POST', options);
    }

    verifyPhoneNumber(code: string, phone: string, params: Attributes = {}, options: RequestOptions = {}) {
        return this.performAuthorizedRequest('customers/verify-phone-number', { code, phone, ...params }, 'POST', options);
    }

    updateContactAlias(attributes: Attributes = {}, options: RequestOptions = {}) {
        return this.performAuthorizedRequest<Attributes>(`contacts/${this.id}`, attributes, 'PUT', options).then((response) => {
            this.syncAttributes(response);
            return this;
        });
    }
}

register('resource', 'Customer', Customer);
