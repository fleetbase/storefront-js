import Resource from '../resource.js';
import Order from './order.js';
import { StoreActions, isResource, register } from '@fleetbase/sdk';

export const checkoutActions = new StoreActions({
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

export default class Checkout extends Resource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'checkout', { actions: checkoutActions, ...options });
    }

    initialize() {
        return this.store.initialize(...arguments);
    }

    captureOrder() {
        return this.store.captureOrder(...arguments);
    }

    createStripeSetupIntent() {
        return this.store.createStripeSetupIntent(...arguments);
    }

    updateStripePaymentIntent() {
        return this.store.updateStripePaymentIntent(...arguments);
    }

    getStatus() {
        return this.store.getStatus(...arguments);
    }

    captureQPay() {
        return this.store.captureQPay(...arguments);
    }

    captureQPayCallback() {
        return this.store.captureQPayCallback(...arguments);
    }
}

register('resource', 'Checkout', Checkout);
