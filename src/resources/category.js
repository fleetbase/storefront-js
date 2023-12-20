import Resource from '../resource';
import Product from './product';
import { Collection } from '@fleetbase/sdk';

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
