export default class Product extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    variants(): any;
    addons(): any;
    images(): any;
    videos(): any;
    hours(): any;
    get isOnSale(): any;
    get isNotOnSale(): boolean;
    get formattedAmount(): string;
    get merchant(): Store;
    getReviews(): Promise<Collection<any>>;
}
import Resource from '../resource.js';
import Store from './store.js';
import { Collection } from '@fleetbase/sdk';
