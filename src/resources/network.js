import Resource from '../resource.js';
import PaymentGateway from './payment-gateway.js';
import Category from './category.js';
import Product from './product.js';
import Review from './review.js';
import Store from './store.js';
import StoreLocation from './store-location.js';
import { Collection, register } from '@fleetbase/sdk';

export default class Network extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'network', options);
    }

    getTags(params = {}) {
        return this.adapter.get('tags', params);
    }

    async getResourceCollection(endpoint, ResourceClass, params = {}) {
        const resources = await this.adapter.get(endpoint, params);
        return new Collection(resources.map((attributes) => new ResourceClass(attributes, this.adapter)));
    }

    async getStores(params = {}) {
        return this.getResourceCollection('stores', Store, params);
    }

    async getStoreLocations(params = {}) {
        return this.getResourceCollection('store-locations', StoreLocation, params);
    }

    async getCategories(params = {}) {
        return this.getResourceCollection('categories', Category, params);
    }

    async search(query, params = {}) {
        return this.getResourceCollection('search', Product, { query, with_store: true, ...params });
    }

    async lookupStore(id) {
        const attributes = await this.adapter.get(`lookup/${id}`);
        return new Store(attributes, this.adapter);
    }

    async getReviews(storeId, params = {}) {
        return this.getResourceCollection('reviews', Review, { store: storeId, ...params });
    }

    async getPaymentGateways(params = {}) {
        return this.getResourceCollection('gateways', PaymentGateway, params);
    }
}

register('resource', 'Network', Network);
