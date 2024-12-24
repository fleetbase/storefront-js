import { Order, StoreActions, isResource } from '@fleetbase/sdk';
import Resource from '../resource';

const objectToParams = (obj = {}, prefix = null) => {
    if (obj === null || obj === undefined) {
        return {};
    }

    const parsed = {};
    const keys = Object.keys(obj);

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const value = obj[key];

        if (key && value) {
            if (prefix && typeof prefix === 'string') {
                parsed[`${prefix}[${key}]`] = value;
                continue;
            }

            parsed[key] = value;
        }
    }

    return parsed;
};

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

    captureOrder: function (token, transactionDetails = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/capture`, { token, transactionDetails }, options).then((orderJson) => new Order(orderJson));
    },

    createStripeSetupIntent: function (customer, options = {}) {
        if (isResource(customer)) {
            customer = customer.id;
        }

        return this.adapter.post(`${this.namespace}/stripe-setup-intent`, { customer }, options);
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
});

export default class Checkout extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'checkout', options);
    }

    initialize() {
        return this.store.initialize(...arguments);
    }

    captureOrder() {
        return this.store.captureOrder(...arguments);
    }
}

export { checkoutActions };
