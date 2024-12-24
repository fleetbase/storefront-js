import { Adapter, Collection, ServiceQuote } from '@fleetbase/sdk';
import StorefrontStore from '../store';
import { formatCurrency, isEmpty } from '../utils';

const { isArray } = Array;

export default class DeliveryServiceQuote extends ServiceQuote {
    constructor(attributes = {}, adapter, options = {}) {
        if (attributes instanceof Adapter) {
            return super({}, attributes, 'service-quote', options);
        }

        super(attributes, adapter, 'service-quote', options);
    }

    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {Resource} this
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });

        return this;
    }

    get formattedAmount() {
        const { amount, currency } = this.getAttributes(['amount', 'currency']);

        if (isEmpty(amount) || isEmpty(currency)) {
            return null;
        }

        return formatCurrency(amount / 100, currency);
    }

    async fetchServiceQuotesFromCart(origin, destination, cart, config = 'storefront', all = false) {
        if (origin?.id) {
            origin = origin.id;
        }
        if (destination?.id) {
            destination = destination.id;
        }
        if (cart?.id) {
            cart = cart.id;
        }

        try {
            const serviceQuotes = await this.adapter.get('service-quotes/from-cart', {
                origin,
                destination,
                cart,
                config,
                all,
            });

            if (isArray(serviceQuotes)) {
                return new Collection(serviceQuotes.map((serviceQuote) => new DeliveryServiceQuote(serviceQuote, this.adapter)));
            }

            return new DeliveryServiceQuote(serviceQuotes, this.adapter);
        } catch (error) {
            console.error('Error fetching service quotes:', error);
            throw error;
        }
    }

    static async getFromCart(adapter, origin, destination, cart, config = 'storefront', all = false) {
        const quote = new DeliveryServiceQuote(adapter);
        return quote.fetchServiceQuotesFromCart(origin, destination, cart, config, all);
    }
}
