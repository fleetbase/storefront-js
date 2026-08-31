import Resource from '../resource.js';
import Review from './review.js';
import { Adapter, Collection } from '@fleetbase/sdk';
import Store from './store.js';
import type { Attributes } from '../types.js';
export default class Product extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    variants(): unknown;
    addons(): unknown;
    images(): unknown[];
    videos(): unknown[];
    hours(): unknown[];
    get isOnSale(): boolean;
    get isNotOnSale(): boolean;
    get formattedAmount(): string | null;
    get merchant(): Store | null;
    getReviews(): Promise<Collection<Review>>;
}
