export default class StoreLocation extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    get latitude(): any;
    get longitude(): any;
    get hours(): Collection;
    get storeData(): any;
    get storeId(): any;
    get merchant(): Store | null;
    get isAlwaysOpen(): boolean;
    get today(): any;
    get schedule(): {};
    create(): void;
    update(): void;
    destroy(): void;
}
import Resource from '../resource';
import { Collection } from '@fleetbase/sdk';
import Store from './store';
