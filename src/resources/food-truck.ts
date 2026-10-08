import Resource from '../resource.js';
import { type AdapterLike, register } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';

export default class FoodTruck extends Resource {
    constructor(attributes: Attributes = {}, adapter?: AdapterLike, options: Attributes = {}) {
        super(attributes, adapter, 'food-truck', options);
    }
}

register('resource', 'FoodTruck', FoodTruck);
