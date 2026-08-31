import Resource from '../resource.js';
import { Adapter, Collection, Order, Place, StoreActions } from '@fleetbase/sdk';
import type { Attributes, RequestOptions } from '../types.js';
export declare const customerActions: StoreActions;
export default class Customer extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter: Adapter): this;
    get token(): string | undefined;
    syncDevice(token: string, platform: string): Promise<unknown>;
    performAuthorizedRequest<T = unknown>(endpoint: string, params?: Attributes, method?: string, options?: RequestOptions): Promise<T>;
    getSavedPlaces(): Promise<Collection<Place>>;
    getOrderHistory(params?: Attributes): Promise<Collection<Order>>;
    getStripeEphemeralKey(params?: Attributes): Promise<unknown>;
    getStripeSetupIntent(params?: Attributes): Promise<unknown>;
    startAccountClosure(params?: Attributes, options?: RequestOptions): Promise<unknown>;
    confirmAccountClosure(code: string, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    requestPhoneVerification(phone: string, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    verifyPhoneNumber(code: string, phone: string, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    updateContactAlias(attributes?: Attributes, options?: RequestOptions): Promise<this>;
}
