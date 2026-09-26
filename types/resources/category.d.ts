import Resource from '../resource.js';
import Product from './product.js';
import { Adapter, Collection } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class Category extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    getProducts(): Promise<Collection<Product>>;
}
