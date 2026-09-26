import Resource from '../resource.js';
import PaymentGateway from './payment-gateway.js';
import Category from './category.js';
import Product from './product.js';
import Review from './review.js';
import Store from './store.js';
import StoreLocation from './store-location.js';
import { Adapter, Collection } from '@fleetbase/sdk';
import type { Attributes, ResourceConstructor } from '../types.js';
export default class Network extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    getTags(params?: Attributes): Promise<unknown>;
    getResourceCollection<T>(endpoint: string, ResourceClass: ResourceConstructor<T>, params?: Attributes): Promise<Collection<T>>;
    getStores(params?: Attributes): Promise<Collection<Store>>;
    getStoreLocations(params?: Attributes): Promise<Collection<StoreLocation>>;
    getCategories(params?: Attributes): Promise<Collection<Category>>;
    search(query: string, params?: Attributes): Promise<Collection<Product>>;
    lookupStore(id: string): Promise<Store>;
    getReviews(storeId: string, params?: Attributes): Promise<Collection<Review>>;
    getPaymentGateways(params?: Attributes): Promise<Collection<PaymentGateway>>;
}
