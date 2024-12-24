export default class StorefrontStore extends Store {
    constructor(...args: any[]);
    serialize(json: any): import('./resolver').Resolver;
}
import { Store } from '@fleetbase/sdk';
