import Cart from './cart';
import StoreLocation from './store-location';
import { ServiceQuote, ServiceRate, Place, Collection, Adapter } from '@fleetbase/sdk';
import { formatCurrency } from '../utils';

const { isArray } = Array;

export default class DeliveryServiceQuote extends ServiceQuote {
    constructor(attributes = {}, adapter, options = {}) {
        if (attributes instanceof Adapter) {
            return super({}, attributes, 'service-quote', options);
        }
            
        super(attributes, adapter, 'service-quote', options);
    }

    get formattedAmount() {
        const { amount, currency } = this.getAttributes(['amount', 'currency']);

        return formatCurrency(amount / 100, currency);
    }

    static getFromCart(adapter, ...params) {
        const quote = new DeliveryServiceQuote(adapter);

        return quote.fromCart(...params);
    }

    fromCart(origin, destination, cart, config = 'storefront', all = false) {
        if (origin instanceof StoreLocation || origin instanceof Place) {
            origin = origin.id;
        }

        if (destination instanceof StoreLocation || destination instanceof Place) {
            destination = destination.id;
        }

        if (cart instanceof Cart) {
            cart = cart.id;
        }

        return this.adapter.get('service-quotes/from-cart', { origin, destination, cart, config, all }).then(serviceQuotes => {
            if (isArray(serviceQuotes)) {
                return new Collection(serviceQuotes.map(serviceQuote => new DeliveryServiceQuote(serviceQuote, this.adapter)));
            }

            return new DeliveryServiceQuote(serviceQuotes, this.adapter);
        });
    }
}