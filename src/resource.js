import { Resource, register } from '@fleetbase/sdk';
import StorefrontStore from './store.js';

export default class StorefrontResource extends Resource {
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {Resource} this
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });

        return this;
    }
}

register('resource', 'StorefrontResource', StorefrontResource);
