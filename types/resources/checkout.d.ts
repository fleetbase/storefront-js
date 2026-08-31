import Resource from '../resource.js';
import Order from './order.js';
import { Adapter, StoreActions } from '@fleetbase/sdk';
import type { Attributes, RequestOptions, ResourceIdentifier } from '../types.js';
export declare const checkoutActions: StoreActions;
export default class Checkout extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    initialize(
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        gateway: ResourceIdentifier,
        orderOptions?: Attributes,
        options?: RequestOptions
    ): Promise<unknown>;
    captureOrder(token: string, params?: Attributes, options?: RequestOptions): Promise<Order>;
    createStripeSetupIntent(customer: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    updateStripePaymentIntent(
        paymentIntent: string,
        customer: ResourceIdentifier,
        cart: ResourceIdentifier,
        serviceQuote: ResourceIdentifier,
        orderOptions?: Attributes,
        options?: RequestOptions
    ): Promise<unknown>;
    getStatus(checkout: ResourceIdentifier, token: string, options?: RequestOptions): Promise<unknown>;
    captureQPay(checkout: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
    captureQPayCallback(checkout: ResourceIdentifier, params?: Attributes, options?: RequestOptions): Promise<unknown>;
}
