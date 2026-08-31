import { Store, StoreActions } from '@fleetbase/sdk';
import type { Adapter } from '@fleetbase/sdk';
import type { Attributes } from './types.js';
export default class StorefrontStore<T = unknown> extends Store<T> {
    constructor(resource: string, adapter: Adapter, options?: Attributes);
    extendActions(actions?: StoreActions | Array<undefined>): this;
    serialize(json: Attributes): T;
}
