import { Resource, Collection, Place } from '@fleetbase/sdk';
import StoreLocation from './store-location';

export default class Store extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store', options);
    }

    getLocations() {
        return this.adapter.get('locations').then((storeLocations) => {
            return new Collection(storeLocations.map(attributes => {
                if (attributes.place) {
                    attributes.place = new Place(attributes.place);
                }
                
                return new StoreLocation(attributes, this.adapter);
            }));
        });
    }
}