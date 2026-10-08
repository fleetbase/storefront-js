import { Store } from '@fleetbase/sdk';
import type { AdapterLike, Collection } from '@fleetbase/sdk';
import type { Attributes, StorefrontAdapter } from './types.js';

/**
 * A Storefront API store. The core SDK store already serializes JSON into registered
 * resources and extends itself with actions; this keeps Storefront's public class name
 * and its contract that listing endpoints resolve to collections.
 */
export default class StorefrontStore<T = any> extends Store<T> {
    declare adapter: StorefrontAdapter;

    constructor(resource: string, adapter?: AdapterLike | null, options: Attributes = {}) {
        super(resource, adapter, options);
    }

    override findAll(options = {}): Promise<Collection<T>> {
        return super.findAll(options) as Promise<Collection<T>>;
    }

    override query(query: Attributes = {}, options = {}): Promise<Collection<T>> {
        return super.query(query, options) as Promise<Collection<T>>;
    }
}
