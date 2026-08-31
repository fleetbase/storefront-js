import Resource from '../resource.js';
import PaymentGateway from './payment-gateway.js';
import Category from './category.js';
import Product from './product.js';
import Review from './review.js';
import Store from './store.js';
import StoreLocation from './store-location.js';
import { Adapter, Collection, register } from '@fleetbase/sdk';
import type { Attributes, ResourceConstructor } from '../types.js';

export default class Network extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'network', options);
    }

    getTags(params: Attributes = {}) {
        return this.adapter.get('tags', params);
    }

    async getResourceCollection<T>(endpoint: string, ResourceClass: ResourceConstructor<T>, params: Attributes = {}): Promise<Collection<T>> {
        const resources = await this.adapter.get<Attributes[]>(endpoint, params);
        return new Collection(resources.map((attributes: Attributes) => new ResourceClass(attributes, this.adapter)));
    }

    async getStores(params: Attributes = {}) {
        return this.getResourceCollection('stores', Store, params);
    }

    async getStoreLocations(params: Attributes = {}) {
        return this.getResourceCollection('store-locations', StoreLocation, params);
    }

    async getCategories(params: Attributes = {}) {
        return this.getResourceCollection('categories', Category, params);
    }

    async search(query: string, params: Attributes = {}) {
        return this.getResourceCollection('search', Product, { query, with_store: true, ...params });
    }

    async lookupStore(id: string) {
        const attributes = await this.adapter.get<Attributes>(`lookup/${id}`);
        return new Store(attributes, this.adapter);
    }

    async getReviews(storeId: string, params: Attributes = {}) {
        return this.getResourceCollection('reviews', Review, { store: storeId, ...params });
    }

    async getPaymentGateways(params: Attributes = {}) {
        return this.getResourceCollection('gateways', PaymentGateway, params);
    }
}

register('resource', 'Network', Network);
