import { Adapter, Resource, register } from '@fleetbase/sdk';
import StorefrontStore from './store.js';

export default class StorefrontResource extends Resource {
    declare store: StorefrontStore & Record<string, (...args: unknown[]) => unknown>;

    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter: Adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        }) as StorefrontStore & Record<string, (...args: unknown[]) => unknown>;

        return this;
    }
}

register('resource', 'StorefrontResource', StorefrontResource);
