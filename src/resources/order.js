import { Order as FleetbaseOrder, register } from '@fleetbase/sdk';

export default class Order extends FleetbaseOrder {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, options);
    }
}

register('resource', 'Order', Order);
