import Resource from '../resource.js';
import Product from './product.js';
import { Collection, register } from '@fleetbase/sdk';

export default class Category extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'category', options);
    }

    getProducts() {
        return this.adapter.get('products', { category: this.id }).then((products) => {
            return new Collection(products.map((attributes) => new Product(attributes, this.adapter)));
        });
    }
}

register('resource', 'Category', Category);
