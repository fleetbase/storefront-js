import { Store } from '@fleetbase/sdk';
import type { AdapterLike, Collection } from '@fleetbase/sdk';
import type { Attributes, StorefrontAdapter } from './types.js';
/**
 * A Storefront API store. The core SDK store already serializes JSON into registered
 * resources and extends itself with actions; this keeps Storefront's public class name
 * and its contract that listing endpoints resolve to collections.
 */
export default class StorefrontStore<T = any> extends Store<T> {
    adapter: StorefrontAdapter;
    constructor(resource: string, adapter?: AdapterLike | null, options?: Attributes);
    findAll(options?: {}): Promise<Collection<T>>;
    query(query?: Attributes, options?: {}): Promise<Collection<T>>;
}
