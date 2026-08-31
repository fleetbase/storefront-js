import Resource from '../resource.js';
import { Adapter, register } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';

export default class FoodTruck extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'food-truck', options);
    }
}

register('resource', 'FoodTruck', FoodTruck);
