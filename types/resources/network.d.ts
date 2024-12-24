export default class Network extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    getTags(params?: {}): any;
    getResourceCollection(endpoint: any, ResourceClass: any, params?: {}): Promise<Collection>;
    getStores(params?: {}): Promise<Collection>;
    getStoreLocations(params?: {}): Promise<Collection>;
    getPaymentGateways(): Promise<Collection>;
}
import Resource from '../resource';
import { Collection } from '@fleetbase/sdk';
