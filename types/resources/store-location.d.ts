export default class StoreLocation extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    get latitude(): any;
    get longitude(): any;
    get hours(): Collection<any>;
    /** Raw embedded merchant payload, normalized across API response versions. */
    get storeData(): any;
    /** Public store identifier for this location. */
    get storeId(): any;
    /** Typed embedded merchant when requested with `with_store`. */
    get merchant(): any;
    get isAlwaysOpen(): boolean;
    get today(): any;
    get schedule(): {};
    create(): void;
    update(): void;
    destroy(): void;
}
import Resource from '../resource.js';
import { Collection } from '@fleetbase/sdk';
