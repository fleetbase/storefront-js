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

    update(lineItemId, quantity, data = {}, options = {}) {
        return this.store.update(this.id, lineItemId, quantity, data, options);
    }

    remove(lineItemId, options = {}) {
        return this.store.remove(this.id, lineItemId, options);
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
        return this.getAttribute('line_items');
    }

    hasProduct(productId) {
        return this.contents().findIndex(lineItem => lineItem.product_id === productId) !== -1;
    }
}