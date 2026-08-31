import { StoreActions, isResource } from '@fleetbase/sdk';

function idFor(value) {
    return isResource(value) ? value.id : value;
}

export const orderActions = new StoreActions({
    create: undefined,
    update: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    completePickup: function (order, params = {}, options = {}) {
        return this.adapter.put(`${this.namespace}/picked-up`, { order: idFor(order), ...params }, options);
    },

    getReceipt: function (order, params = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/receipt`, { order: idFor(order), ...params }, options);
    },
});
