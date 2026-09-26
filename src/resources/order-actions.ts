import { Resource, StoreActions, isResource } from '@fleetbase/sdk';
import type { Attributes, RequestOptions } from '../types.js';
import type StorefrontStore from '../store.js';

function idFor(value: string | Resource) {
    return isResource(value) ? value.id : value;
}

export const orderActions = new StoreActions({
    create: undefined,
    update: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    completePickup: function (this: StorefrontStore, order: string | Resource, params: Attributes = {}, options: RequestOptions = {}) {
        return this.adapter.put(`${this.namespace}/picked-up`, { order: idFor(order), ...params }, options);
    },

    getReceipt: function (this: StorefrontStore, order: string | Resource, params: Attributes = {}, options: RequestOptions = {}) {
        return this.adapter.post(`${this.namespace}/receipt`, { order: idFor(order), ...params }, options);
    },
});
