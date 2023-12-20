import StorefrontStore from '../store';
import Resource from '../resource';
import { Contact, Place, Order, Collection, StoreActions } from '@fleetbase/sdk';
import { isPhone } from '../utils';

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

    syncDevice(token) {
        return this.adapter
            .setHeaders({ 'Customer-Token': this.token })
            .post('customers/register-device', token)
            .then(() => {
                return this;
            });
    }

    getSavedPlaces() {
        return this.adapter
            .setHeaders({ 'Customer-Token': this.token })
            .get('customers/places')
            .then((places) => {
                return new Collection(places.map((attributes) => new Place(attributes, this.adapter)));
            });
    }

    getOrderHistory(params = {}) {
        return this.adapter
            .setHeaders({ 'Customer-Token': this.token })
            .get('customers/orders', params)
            .then((orders) => {
                return new Collection(orders.map((attributes) => new Order(attributes, this.adapter)));
            });
    }
}

export { customerActions };
