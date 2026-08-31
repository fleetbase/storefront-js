import Resource from '../resource.js';
import Product from './product.js';
import { Adapter, StoreActions } from '@fleetbase/sdk';
import type { Attributes, RequestOptions } from '../types.js';
export declare const cartActions: StoreActions;
export default class Cart extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    add(productId: string | Product, quantity?: number, data?: Attributes, options?: RequestOptions): Promise<Cart>;
    update(cartItemId: string, quantity: number, data?: Attributes, options?: RequestOptions): Promise<Cart>;
    remove(cartItemId: string, options?: RequestOptions): Promise<Cart>;
    empty(options?: RequestOptions): Promise<Cart>;
    delete(): unknown;
    refresh(): Promise<Cart>;
    subtotal(): number;
    contents(): Attributes[];
    hasProduct(productId: string): boolean;
    get isEmpty(): boolean;
    get isNotEmpty(): boolean;
}
