export const cartActions: StoreActions;
export default class Cart extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    add(productId: any, quantity?: number, data?: {}, options?: {}): any;
    update(cartItemId: any, quantity: any, data?: {}, options?: {}): any;
    remove(cartItemId: any, options?: {}): any;
    empty(options?: {}): any;
    delete(): Promise<any>;
    refresh(): any;
    subtotal(): any;
    contents(): any[];
    hasProduct(productId: any): boolean;
    get isEmpty(): boolean;
    get isNotEmpty(): boolean;
}
import { StoreActions } from '@fleetbase/sdk';
import Resource from '../resource.js';
