import Resource from '../resource';
import StoreLocation from './store-location';
import PaymentGateway from './payment-gateway';
import Review from './review';
import { Collection, Place } from '@fleetbase/sdk';

export default class Store extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store', options);
    }

    getReviews(params = {}) {
        return this.adapter.get('reviews', { store: this.id, ...params }).then((reviews) => {
            return new Collection(reviews.map((attributes) => new Review(attributes, this.adapter)));
        });
    }

    getLocations(params = {}) {
        return this.adapter.get('locations', { store: this.id, ...params }).then((storeLocations) => {
            return new Collection(
                storeLocations.map((attributes) => {
                    if (attributes.place) {
                        attributes.place = new Place(attributes.place);
                    }

                    return new StoreLocation(attributes, this.adapter);
                })
            );
        });
    }

    getLocation(id) {
        return this.adapter.get(`locations/${id}`, { store: this.id }).then((attributes) => {
            return new StoreLocation(attributes, this.adapter);
        });
    }

    getPaymentGateways(params = {}) {
        return this.adapter.get('gateways', params).then((gateways) => {
            return new Collection(
                gateways.map((attributes) => {
                    return new PaymentGateway(attributes, this.adapter);
                })
            );
        });
    }

    getPaymentGateway(id) {
        return this.adapter.get(`gateways/${id}`).then((attributes) => {
            return new PaymentGateway(attributes, this.adapter);
        });
    }
}
