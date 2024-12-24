import Resource from '../resource';
import { StoreActions } from '@fleetbase/sdk';

const reviewActions = new StoreActions({
    count: function (storeId, options = {}) {
        const params = {};

        if (storeId) {
            params.store = storeId;
        }

        return this.adapter.get(`${this.namespace}/count`, params, options);
    },
});

export default class Review extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'review', options);
    }

    getMedia() {
        // @todo
    }

    getPhotos() {
        // @todo
    }

    getVideos() {
        // @todo
    }
}

export { reviewActions };
