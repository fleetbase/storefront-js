import Resource from '../resource.js';
import Product from './product.js';
import { Adapter, StoreActions, register } from '@fleetbase/sdk';
import type { Attributes, RequestOptions } from '../types.js';
import type StorefrontStore from '../store.js';

const { isArray } = Array;

export const cartActions = new StoreActions({
    create: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    add: function (this: StorefrontStore, id: string, productId: string, quantity = 1, data: Attributes = {}, options: RequestOptions = {}) {
        return this.adapter.post<Cart>(`${this.namespace}/${id}/${productId}`, { ...data, quantity }, options).then(this.afterFetch.bind(this));
    },

    update: function (this: StorefrontStore, id: string, cartItemId: string, quantity: number, data: Attributes = {}, options: RequestOptions = {}) {
        return this.adapter.put<Cart>(`${this.namespace}/${id}/${cartItemId}`, { ...data, quantity }, options).then(this.afterFetch.bind(this));
    },

    remove: function (this: StorefrontStore, id: string, cartItemId: string, options: RequestOptions = {}) {
        return this.adapter.delete<Cart>(`${this.namespace}/${id}/${cartItemId}`, {}, options).then(this.afterFetch.bind(this));
    },

    empty: function (this: StorefrontStore, id: string, options: RequestOptions = {}) {
        return this.adapter.put<Cart>(`${this.namespace}/${id}/empty`, {}, options).then(this.afterFetch.bind(this));
    },

    retrieve: function (this: StorefrontStore, id = '') {
        return (this as StorefrontStore<Cart>).findRecord(id);
    },
});

export default class Cart extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'cart', { actions: cartActions, ...options });
    }

    add(productId: string | Product, quantity = 1, data: Attributes = {}, options: RequestOptions = {}): Promise<Cart> {
        if (productId instanceof Product) {
            productId = productId.id;
        }

        return this.store.add(this.id, productId, quantity, data, options) as Promise<Cart>;
    }

    update(cartItemId: string, quantity: number, data: Attributes = {}, options: RequestOptions = {}): Promise<Cart> {
        const update = this.store.update as unknown as (id: string, cartItemId: string, quantity: number, data: Attributes, options: RequestOptions) => Promise<Cart>;
        return update.call(this.store, this.id, cartItemId, quantity, data, options);
    }

    remove(cartItemId: string, options: RequestOptions = {}): Promise<Cart> {
        return this.store.remove(this.id, cartItemId, options) as Promise<Cart>;
    }

    empty(options: RequestOptions = {}): Promise<Cart> {
        return this.store.empty(this.id, options) as Promise<Cart>;
    }

    delete(): unknown {
        return this.destroy();
    }

    refresh(): Promise<Cart> {
        return this.store.retrieve(this.id) as Promise<Cart>;
    }

    subtotal(): number {
        return this.contents().reduce((subtotal, cartItem) => subtotal + Number(cartItem?.subtotal || 0), 0);
    }

    contents(): Attributes[] {
        const items = this.getAttribute('items', []);
        return isArray(items) ? (items as Attributes[]) : [];
    }

    hasProduct(productId: string) {
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
