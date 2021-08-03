import Resource from '../resource';
import Product from './product';
import { StoreActions, isResource, Order } from '@fleetbase/sdk';

const checkoutActions = new StoreActions({
    create: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    initialize: function (customer, cart, serviceQuote, gateway, options = {}) {
        if (isResource(customer)) {
            customer = customer.id;
        }

        if (isResource(cart)) {
            cart = cart.id;
        }

        if (isResource(serviceQuote)) {
            serviceQuote = serviceQuote.id;
        }
        
        return this.adapter.get(`${this.namespace}/before`, { customer, cart, serviceQuote, gateway}, options);
    },

    captureOrder: function (token, transactionDetails = {}, options = {}) {
        return this.adapter.get(`${this.namespace}/capture`, { token, transactionDetails }, options).then(orderJson => new Order(orderJson));
    }
});

export default class Checkout extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'cart', options);
    }

    initialize() {
        return this.store.initialize(...arguments);
    }

    captureOrder() {
        return this.store.captureOrder(...arguments);
    }
}

export { checkoutActions };