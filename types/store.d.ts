export default class StorefrontStore extends Store {
    constructor(...args: any[]);
    extendActions(actions?: any[]): this;
    serialize(json: any): any;
}
import { Store } from '@fleetbase/sdk';
