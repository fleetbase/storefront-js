import { Adapter, Order as FleetbaseOrder } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class Order extends FleetbaseOrder {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
}
