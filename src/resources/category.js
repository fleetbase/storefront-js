import Resource from '../resource';

export default class Category extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'category', options);
    }
}