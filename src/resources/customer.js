import { Contact, Place, Collection } from '@fleetbase/sdk';
import CustomerStore from '../customer-store';

export default class Customer extends Contact {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'customer', options);
    }

    /**
     * !!! Overwrite adapter set to use CustomerStore
     */
     setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new CustomerStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this)
        });

        return this;
    }

    get token() {
        return this.getAttribute('token');
    }

    about () {

    }

    isLoggedIn() {

    }

    logout() {

    }

    getOrders() {

    }

    getAddresses() {
        return this.adapter.setHeaders({'Customer-Token': this.token }).get('customers/places').then((places) => {
            return new Collection(places.map(attributes => new Place(attributes, this.adapter)));
        });
    }
}