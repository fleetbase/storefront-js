export const checkoutActions: StoreActions;
export default class Checkout extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    initialize(...args: any[]): any;
    captureOrder(...args: any[]): any;
    createStripeSetupIntent(...args: any[]): any;
    updateStripePaymentIntent(...args: any[]): any;
    getStatus(...args: any[]): any;
    captureQPay(...args: any[]): any;
    captureQPayCallback(...args: any[]): any;
}
import { StoreActions } from '@fleetbase/sdk';
import Resource from '../resource.js';
