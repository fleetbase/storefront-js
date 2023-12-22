export default class Checkout extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    initialize(...args: any[]): any;
    captureOrder(...args: any[]): any;
}
import Resource from '../resource';
export const checkoutActions: StoreActions;
import { StoreActions } from '@fleetbase/sdk';
