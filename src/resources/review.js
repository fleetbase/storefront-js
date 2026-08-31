import Resource from '../resource.js';
import { StoreActions, register } from '@fleetbase/sdk';

export const reviewActions = new StoreActions({
    count: function (storeId, options = {}) {
        const params = {};

        if (storeId) {
            params.store = storeId;
        }

        return this.adapter.get(`${this.namespace}/count`, params, options);
    },
});

export default class Review extends Resource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'review', options);
    }

    getMedia() {
        return this.getPhotos();
    }

    getPhotos() {
        return this.getAttribute('photos') ?? [];
    }

    getVideos() {
        return this.getMedia().filter((media) => media?.type?.startsWith('video/'));
    }
}

register('resource', 'Review', Review);
