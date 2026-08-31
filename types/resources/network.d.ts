export default class Network extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    getTags(params?: {}): any;
    getResourceCollection(endpoint: any, ResourceClass: any, params?: {}): Promise<Collection>;
    getStores(params?: {}): Promise<Collection>;
    getStoreLocations(params?: {}): Promise<Collection>;
    getCategories(params?: {}): Promise<Collection>;
    search(query: any, params?: {}): Promise<Collection>;
    lookupStore(id: string): Promise<Store>;
    getReviews(storeId: string, params?: {}): Promise<Collection>;
    getPaymentGateways(params?: {}): Promise<Collection>;
}
import Resource from '../resource';
import { Collection } from '@fleetbase/sdk';
import Store from './store';
