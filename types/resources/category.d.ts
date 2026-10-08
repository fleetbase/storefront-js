import Resource from '../resource.js';
import Product from './product.js';
import { type AdapterLike, Collection } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class Category extends Resource {
    constructor(attributes?: Attributes, adapter?: AdapterLike, options?: Attributes);
    getProducts(): Promise<Collection<Product[]>>;
}
