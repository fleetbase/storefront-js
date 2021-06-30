import { Resource } from '@fleetbase/sdk';

export default class Product extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'product', options);
    }

    get isOnSale() {
        return this.getAttribute('is_on_sale');
    }

    get isNotOnSale() {
        return !this.getAttribute('is_on_sale');
    }
}