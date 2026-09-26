import Resource from '../resource.js';
import Order from './order.js';
import { Adapter, StoreActions, isResource, register } from '@fleetbase/sdk';
import type { Attributes, RequestOptions, ResourceIdentifier } from '../types.js';
import type StorefrontStore from '../store.js';

export const checkoutActions = new StoreActions({
    create: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    initialize: function (
        this: StorefrontStore,
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        gateway: ResourceIdentifier,
        orderOptions: Attributes = {},
        options: RequestOptions = {}
    ) {
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

    captureOrder: function (this: StorefrontStore, token: string, params: Attributes = {}, options: RequestOptions = {}) {
        return this.adapter.post<Attributes>(`${this.namespace}/capture`, { token, ...params }, options).then((orderJson) => new Order(orderJson, this.adapter));
    },

    createStripeSetupIntent: function (this: StorefrontStore, customer: ResourceIdentifier, params: Attributes = {}, options: RequestOptions = {}) {
        if (isResource(customer)) {
            customer = customer.id;
        }

        return this.adapter.post(`${this.namespace}/stripe-setup-intent`, { customer, ...params }, options);
    },

    updateStripePaymentIntent: function (
        this: StorefrontStore,
        paymentIntent: string,
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        orderOptions: Attributes = {},
        options: RequestOptions = {}
    ) {
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

    getStatus: function (this: StorefrontStore, checkout: ResourceIdentifier, token: string, options: RequestOptions = {}) {
        if (isResource(checkout)) {
            checkout = checkout.id;
        }

        return this.adapter.get(`${this.namespace}/status`, { checkout, token }, options);
    },

    captureQPay: function (this: StorefrontStore, checkout: ResourceIdentifier, params: Attributes = {}, options: RequestOptions = {}) {
        if (isResource(checkout)) {
            checkout = checkout.id;
        }

        return this.adapter.post(`${this.namespace}/capture-qpay`, { checkout, ...params }, options);
    },

    captureQPayCallback: function (this: StorefrontStore, checkout: ResourceIdentifier, params: Attributes = {}, options: RequestOptions = {}) {
        if (isResource(checkout)) {
            checkout = checkout.id;
        }

        return this.adapter.get(`${this.namespace}/capture-qpay`, { checkout, ...params }, options);
    },
});

export default class Checkout extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'checkout', { actions: checkoutActions, ...options });
    }

    initialize(
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        gateway: ResourceIdentifier,
        orderOptions: Attributes = {},
        options: RequestOptions = {}
    ): Promise<unknown> {
        return this.store.initialize(customer, cart, serviceQuote, gateway, orderOptions, options) as Promise<unknown>;
    }

    captureOrder(token: string, params: Attributes = {}, options: RequestOptions = {}): Promise<Order> {
        return this.store.captureOrder(token, params, options) as Promise<Order>;
    }

    createStripeSetupIntent(customer: ResourceIdentifier, params: Attributes = {}, options: RequestOptions = {}): Promise<unknown> {
        return this.store.createStripeSetupIntent(customer, params, options) as Promise<unknown>;
    }

    updateStripePaymentIntent(
        paymentIntent: string,
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        orderOptions: Attributes = {},
        options: RequestOptions = {}
    ): Promise<unknown> {
        return this.store.updateStripePaymentIntent(paymentIntent, customer, cart, serviceQuote, orderOptions, options) as Promise<unknown>;
    }

    getStatus(checkout: ResourceIdentifier, token: string, options: RequestOptions = {}): Promise<unknown> {
        return this.store.getStatus(checkout, token, options) as Promise<unknown>;
    }

    captureQPay(checkout: ResourceIdentifier, params: Attributes = {}, options: RequestOptions = {}): Promise<unknown> {
        return this.store.captureQPay(checkout, params, options) as Promise<unknown>;
    }

    captureQPayCallback(checkout: ResourceIdentifier, params: Attributes = {}, options: RequestOptions = {}): Promise<unknown> {
        return this.store.captureQPayCallback(checkout, params, options) as Promise<unknown>;
    }
}

register('resource', 'Checkout', Checkout);
