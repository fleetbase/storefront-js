import { Store, classify, extendStoreActions, lookup } from '@fleetbase/sdk';

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
