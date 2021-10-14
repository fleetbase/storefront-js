import Resource from '../resource';
import StoreLocation from './store-location';
import PaymentGateway from './payment-gateway';
import { Collection, Place } from '@fleetbase/sdk';

export default class Store extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store', options);
    }

    getLocations() {
        return this.adapter.get('locations', { store: this.id }).then((storeLocations) => {
            return new Collection(storeLocations.map(attributes => {
                if (attributes.place) {
                    attributes.place = new Place(attributes.place);
                }
                
                return new StoreLocation(attributes, this.adapter);
            }));
        });
    }
    
    getPaymentGateways() {
        return this.adapter.get('gateways').then((gateways) => {
            return new Collection(gateways.map(attributes => {
                return new PaymentGateway(attributes, this.adapter);
            }));
        });
    }
}