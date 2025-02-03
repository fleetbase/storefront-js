import Resource from '../resource.js';
import { register } from '@fleetbase/sdk';

export default class FoodTruck extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'food-truck', options);
    }
}

register('resource', 'FoodTruck', FoodTruck);
