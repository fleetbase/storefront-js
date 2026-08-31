import Resource from '../resource.js';
import StoreLocation from './store-location.js';
import PaymentGateway from './payment-gateway.js';
import Review from './review.js';
import { Adapter, Collection, Place, register } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';

export default class Store extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'store', options);
    }

    getReviews(params: Attributes = {}) {
        return this.adapter.get<Attributes[]>('reviews', { store: this.id, ...params }).then((reviews) => {
            return new Collection(reviews.map((attributes: Attributes) => new Review(attributes, this.adapter)));
        });
    }

    getTags(params: Attributes = {}) {
        return this.adapter.get('tags', params);
    }

    getLocations(params: Attributes = {}) {
        return this.adapter.get<Attributes[]>('locations', { store: this.id, ...params }).then((storeLocations) => {
            return new Collection(
                storeLocations.map((attributes: Attributes) => {
                    if (attributes.place) {
                        attributes.place = new Place(attributes.place as Attributes, this.adapter);
                    }

                    return new StoreLocation(attributes, this.adapter);
                })
            );
        });
    }

    getLocation(id: string) {
        return this.adapter.get<Attributes>(`locations/${id}`, { store: this.id }).then((attributes) => {
            return new StoreLocation(attributes, this.adapter);
        });
    }

    getPaymentGateways(params: Attributes = {}) {
        return this.adapter.get<Attributes[]>('gateways', params).then((gateways) => {
            return new Collection(
                gateways.map((attributes: Attributes) => {
                    return new PaymentGateway(attributes, this.adapter);
                })
            );
        });
    }

    getPaymentGateway(id: string) {
        return this.adapter.get<Attributes>(`gateways/${id}`).then((attributes) => {
            return new PaymentGateway(attributes, this.adapter);
        });
    }
}

register('resource', 'Store', Store);
