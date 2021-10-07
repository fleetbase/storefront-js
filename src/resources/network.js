import Resource from '../resource';
import StoreLocation from './store-location';
import PaymentGateway from './payment-gateway';
import Store from './store';
import { Collection, Place } from '@fleetbase/sdk';

export default class Network extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'network', options);
    }

    getStores(params = {}) {
        return this.adapter.get('stores', params).then((stores) => {
            return new Collection(stores.map(attributes => {
                return new Store(attributes, this.adapter);
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