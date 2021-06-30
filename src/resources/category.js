import { Resource } from '@fleetbase/sdk';

export default class Category extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'category', options);
    }
}