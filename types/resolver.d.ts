export class Resolver {
    constructor(...args: any[]);
    resources: {
        Product: typeof Product;
        Category: typeof Category;
        Customer: typeof Customer;
        Cart: typeof Cart;
        DeliveryServiceQuote: typeof DeliveryServiceQuote;
        Store: typeof Store;
        StoreLocation: typeof StoreLocation;
        StoreHour: typeof StoreHour;
        Checkout: typeof Checkout;
        Review: typeof Review;
    };
    adapters: {
        BrowserAdapter: typeof BrowserAdapter;
        NodeAdapter: typeof NodeAdapter;
    };
    lookup(type: any, className: any, ...args: any[]): any;
}
export function lookup(...args: any[]): Resolver;
import { Product } from './resources';
import { Category } from './resources';
import { Customer } from './resources';
import { Cart } from './resources';
import { DeliveryServiceQuote } from './resources';
import { Store } from './resources';
import { StoreLocation } from './resources';
import { StoreHour } from './resources';
import { Checkout } from './resources';
import { Review } from './resources';
import { BrowserAdapter } from '@fleetbase/sdk';
import { NodeAdapter } from '@fleetbase/sdk';
