import Resource from '../resource.js';
import StoreHour from './store-hour.js';
import { Adapter, Collection } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class StoreLocation extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    get latitude(): number | undefined;
    get longitude(): number | undefined;
    get hours(): Collection<StoreHour>;
    /** Raw embedded merchant payload, normalized across API response versions. */
    get storeData(): unknown;
    /** Public store identifier for this location. */
    get storeId(): string | undefined;
    /** Typed embedded merchant when requested with `with_store`. */
    get merchant(): Resource | null;
    get isAlwaysOpen(): boolean;
    get today(): Collection<StoreHour>;
    get schedule(): Record<string, Collection<StoreHour>>;
    create(): void;
    update(): void;
    destroy(): void;
}
