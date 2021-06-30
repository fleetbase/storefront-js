import { Store as BaseStore, classify } from '@fleetbase/sdk';
import { lookup } from './resolver';

export default class Store extends BaseStore {
    constructor() {
        super(...arguments);
    }

    serialize(json) {
        return lookup('resource', classify(this.resource), json, this.adapter);
    }
}