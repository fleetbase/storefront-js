import { Resource, register } from '@fleetbase/sdk';
import type { AdapterLike } from '@fleetbase/sdk';
import StorefrontStore from './store.js';
import type { StorefrontAdapter } from './types.js';

/** A store whose Storefront actions (cart.add, customer.login, ...) are callable. */
export type ActionStore = StorefrontStore & Record<string, (...args: any[]) => Promise<any>>;

export default class StorefrontResource extends Resource {
    declare store: ActionStore;
    declare adapter: StorefrontAdapter;

    /** Storefront ids are public ids such as `cart_x7y8`. */
    override get id(): string {
        return super.id as string;
    }

    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').AdapterLike} adapter
     * @return {this}
     */
    override setAdapter(adapter?: AdapterLike | null) {
        super.setAdapter(adapter);
        this.store = new StorefrontStore(this.resource, this.adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        }) as ActionStore;

        return this;
    }

    // Storefront resources reuse these names for their own API calls, e.g. a cart's
    // update(cartItemId, quantity) and empty(), so their signatures are left open here.
    override update(...args: any[]): Promise<any> {
        return super.update(...args);
    }

    override empty(..._args: any[]): any {
        return super.empty();
    }
}

register('resource', 'StorefrontResource', StorefrontResource);
