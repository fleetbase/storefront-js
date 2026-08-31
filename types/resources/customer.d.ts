export const customerActions: StoreActions;
export default class Customer extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter: import('@fleetbase/sdk').Adapter): this;
    get token(): any;
    syncDevice(token: any, platform: any): Promise<any>;
    performAuthorizedRequest(endpoint: any, params?: {}, method?: string, options?: {}): any;
    getSavedPlaces(): Promise<Collection<any>>;
    getOrderHistory(params?: {}): Promise<Collection<any>>;
    getStripeEphemeralKey(params?: {}): any;
    getStripeSetupIntent(params?: {}): any;
    startAccountClosure(params?: {}, options?: {}): any;
    confirmAccountClosure(code: any, params?: {}, options?: {}): any;
    requestPhoneVerification(phone: any, params?: {}, options?: {}): any;
    verifyPhoneNumber(code: any, phone: any, params?: {}, options?: {}): any;
    updateContactAlias(attributes?: {}, options?: {}): any;
}
import { StoreActions } from '@fleetbase/sdk';
import Resource from '../resource.js';
import { Collection } from '@fleetbase/sdk';
