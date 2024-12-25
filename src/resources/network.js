import Resource from '../resource.js';
import PaymentGateway from './payment-gateway.js';
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
        try {
            const resources = await this.adapter.get(endpoint, params);
            return new Collection(resources.map((attributes) => new ResourceClass(attributes, this.adapter)));
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
            throw error;
        }
    }

    async getStores(params = {}) {
        return this.getResourceCollection('stores', Store, params);
    }

    async getStoreLocations(params = {}) {
        return this.getResourceCollection('store-locations', StoreLocation, params);
    }

    async getPaymentGateways() {
        return this.getResourceCollection('gateways', PaymentGateway);
    }
}

register('resource', 'Network', Network);
