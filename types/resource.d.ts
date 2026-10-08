import { Resource } from '@fleetbase/sdk';
import type { AdapterLike } from '@fleetbase/sdk';
import StorefrontStore from './store.js';
import type { StorefrontAdapter } from './types.js';
/** A store whose Storefront actions (cart.add, customer.login, ...) are callable. */
export type ActionStore = StorefrontStore & Record<string, (...args: any[]) => Promise<any>>;
export default class StorefrontResource extends Resource {
    store: ActionStore;
    adapter: StorefrontAdapter;
    /** Storefront ids are public ids such as `cart_x7y8`. */
    get id(): string;
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').AdapterLike} adapter
     * @return {this}
     */
    setAdapter(adapter?: AdapterLike | null): this;
    update(...args: any[]): Promise<any>;
    empty(..._args: any[]): any;
}
