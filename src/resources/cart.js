import Resource from '../resource.js';
import Product from './product.js';
import { StoreActions, register } from '@fleetbase/sdk';

const { isArray } = Array;

export const cartActions = new StoreActions({
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

export default class Cart extends Resource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'cart', { actions: cartActions, ...options });
    }

    add(productId, quantity = 1, data = {}, options = {}) {
        if (productId instanceof Product) {
            productId = productId.id;
        }

        return this.store.add(this.id, productId, quantity, data, options);
    }

    update(cartItemId, quantity, data = {}, options = {}) {
        return this.store.update(this.id, cartItemId, quantity, data, options);
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
