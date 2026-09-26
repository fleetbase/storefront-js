import { Store, StoreActions, classify, extendStoreActions, lookup } from '@fleetbase/sdk';
import type { Adapter } from '@fleetbase/sdk';
import type { Attributes } from './types.js';

export default class StorefrontStore<T = unknown> extends Store<T> {
    constructor(resource: string, adapter: Adapter, options: Attributes = {}) {
        super(resource, adapter, options);
    }

    extendActions(actions: StoreActions | Array<undefined> = []) {
        return extendStoreActions(this, actions);
    }

    serialize(json: Attributes): T {
        return lookup<T>('resource', classify(this.resource), json, this.adapter);
    }
}
