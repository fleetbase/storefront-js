export default class Cart extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    add(productId: any, quantity?: number, data?: {}, options?: {}): any;
    update(cartItemId: any, quantity: any, data?: {}, options?: {}): Promise<any>;
    remove(cartItemId: any, options?: {}): any;
    empty(options?: {}): any;
    delete(): [type];
    refresh(): any;
    subtotal(): number;
    contents(): any;
    hasProduct(productId: any): boolean;
    get isNotEmpty(): boolean;
}
import Resource from '../resource';
export const cartActions: StoreActions;
import { StoreActions } from '@fleetbase/sdk';
