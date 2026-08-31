import { Adapter, Order as FleetbaseOrder, register } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';

export default class Order extends FleetbaseOrder {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, options);
    }
}

register('resource', 'Order', Order);
