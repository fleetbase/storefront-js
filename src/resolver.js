import { Product, Category, Customer, Cart, DeliveryServiceQuote, Store, StoreLocation, StoreHour, Checkout, Review } from './resources';
import { BrowserAdapter, NodeAdapter, pluralize, singularize } from '@fleetbase/sdk';

export const resources = {
    Product,
    Category,
    Customer,
    Cart,
    DeliveryServiceQuote,
    Store,
    StoreLocation,
    StoreHour,
    Checkout,
    Review,
};

const adapters = {
    BrowserAdapter,
    NodeAdapter,
};

function toStudlyCase(str) {
    return str
        .split(/[^a-zA-Z0-9]/) // Split by non-alphanumeric characters
        .filter(Boolean) // Remove empty elements
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(''); // Join the words together without spaces
}

class Resolver {
    constructor() {
        this.resources = resources;
        this.adapters = adapters;

        return this.lookup(...arguments);
    }

    lookup(type, className) {
        const key = pluralize(type);
        const classKey = toStudlyCase(className);
        const params = [...arguments].slice(2);

        if (!this[key]) {
            throw new Error('Attempted to resolve invalid type');
        }

        if (!this[key][classKey]) {
            throw new Error(`No ${singularize(type)} named ${className} (${classKey}) to resolve`);
        }

        return new this[key][classKey](...params);
    }
}

const lookup = function () {
    return new Resolver(...arguments);
};

export { Resolver, lookup };

export default Resolver;
