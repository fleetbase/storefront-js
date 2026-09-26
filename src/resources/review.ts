import Resource from '../resource.js';
import { Adapter, StoreActions, register } from '@fleetbase/sdk';
import type { Attributes, RequestOptions } from '../types.js';
import type StorefrontStore from '../store.js';

export const reviewActions = new StoreActions({
    count: function (this: StorefrontStore, storeId: string | undefined, options: RequestOptions = {}) {
        const params: Attributes = {};

        if (storeId) {
            params.store = storeId;
        }

        return this.adapter.get(`${this.namespace}/count`, params, options);
    },
});

export default class Review extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'review', options);
    }

    getMedia(): Attributes[] {
        return this.getPhotos();
    }

    getPhotos(): Attributes[] {
        return (this.getAttribute('photos') ?? []) as Attributes[];
    }

    getVideos(): Attributes[] {
        return this.getMedia().filter((media: Attributes) => typeof media?.type === 'string' && media.type.startsWith('video/'));
    }
}

register('resource', 'Review', Review);
