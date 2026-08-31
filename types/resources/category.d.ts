export default class Category extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    getProducts(): Promise<Collection<any>>;
}
import Resource from '../resource.js';
import { Collection } from '@fleetbase/sdk';
