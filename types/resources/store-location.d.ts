export default class StoreLocation extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    get latitude(): any;
    get longitude(): any;
    get hours(): Collection;
    get isAlwaysOpen(): boolean;
    get today(): any;
    get schedule(): {};
    create(): void;
    update(): void;
    destroy(): void;
}
import Resource from '../resource';
import { Collection } from '@fleetbase/sdk';
