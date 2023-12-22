export default class Customer extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    get token(): any;
    syncDevice(token: any): Promise<any>;
    performAuthorizedRequest(endpoint: any, params?: {}, method?: string): Promise<any>;
    getSavedPlaces(): Promise<Collection>;
    getOrderHistory(params?: {}): Promise<Collection>;
}
import Resource from '../resource';
import { Collection } from '@fleetbase/sdk';
export const customerActions: StoreActions;
import { StoreActions } from '@fleetbase/sdk';
