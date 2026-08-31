import Resource from '../resource.js';
import StoreLocation from './store-location.js';
import PaymentGateway from './payment-gateway.js';
import Review from './review.js';
import { Adapter, Collection } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class Store extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    getReviews(params?: Attributes): Promise<Collection<Review>>;
    getTags(params?: Attributes): Promise<unknown>;
    getLocations(params?: Attributes): Promise<Collection<StoreLocation>>;
    getLocation(id: string): Promise<StoreLocation>;
    getPaymentGateways(params?: Attributes): Promise<Collection<PaymentGateway>>;
    getPaymentGateway(id: string): Promise<PaymentGateway>;
}
