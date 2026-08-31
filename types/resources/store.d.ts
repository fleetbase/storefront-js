export default class Store extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    getReviews(params?: {}): Promise<Collection<any>>;
    getTags(params?: {}): Promise<any>;
    getLocations(params?: {}): Promise<Collection<any>>;
    getLocation(id: any): Promise<StoreLocation>;
    getPaymentGateways(params?: {}): Promise<Collection<any>>;
    getPaymentGateway(id: any): Promise<PaymentGateway>;
}
import Resource from '../resource.js';
import { Collection } from '@fleetbase/sdk';
import StoreLocation from './store-location.js';
import PaymentGateway from './payment-gateway.js';
