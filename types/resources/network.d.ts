export default class Network extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    getTags(params?: {}): Promise<any>;
    getResourceCollection(endpoint: any, ResourceClass: any, params?: {}): Promise<Collection<any>>;
    getStores(params?: {}): Promise<Collection<any>>;
    getStoreLocations(params?: {}): Promise<Collection<any>>;
    getCategories(params?: {}): Promise<Collection<any>>;
    search(query: any, params?: {}): Promise<Collection<any>>;
    lookupStore(id: any): Promise<Store>;
    getReviews(storeId: any, params?: {}): Promise<Collection<any>>;
    getPaymentGateways(params?: {}): Promise<Collection<any>>;
}
import Resource from '../resource.js';
import { Collection } from '@fleetbase/sdk';
import Store from './store.js';
