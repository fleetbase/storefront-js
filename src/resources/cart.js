import { Resource } from '@fleetbase/sdk';
import CartStore from '../cart-store';

export default class Cart extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'cart', options);
    }

    /**
     * !!! Overwrite adapter set to use CartStore
     */
     setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new CartStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this)
        });

        return this;
    }

    add(productId, quantity = 1, data = {}, options = {}) {
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

    contents() {
        return this.getAttribute('items');
    }

    hasProduct(productId) {
        return this.contents().findIndex(cartItem => cartItem.product_id === productId) !== -1;
    }

    get isEmpty() {
        return this.contents().length === 0;
    }

    get isNotEmpty() {
        return !this.isEmpty;
    }
}