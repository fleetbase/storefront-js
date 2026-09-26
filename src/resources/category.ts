import Resource from '../resource.js';
import Product from './product.js';
import { Adapter, Collection, register } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';

export default class Category extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'category', options);
    }

    getProducts() {
        return this.adapter.get<Attributes[]>('products', { category: this.id }).then((products) => {
            return new Collection(products.map((attributes: Attributes) => new Product(attributes, this.adapter)));
        });
    }
}

register('resource', 'Category', Category);
