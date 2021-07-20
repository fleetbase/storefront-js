import { Store, classify, extendStoreActions } from '@fleetbase/sdk';
import { lookup } from './resolver';

export default class StorefrontStore extends Store {
    constructor() {
        super(...arguments);
    }

    extendActions(actions = []) {
        return extendStoreActions(this, actions);
    }

    serialize(json) {
        return lookup('resource', classify(this.resource), json, this.adapter);
    }
}