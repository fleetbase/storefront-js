import StorefrontStore from '../store.js';
import { Adapter, Collection, ServiceQuote, register } from '@fleetbase/sdk';
import { formatCurrency, isEmpty, isArray } from '../utils/index.js';

export default class DeliveryServiceQuote extends ServiceQuote {
    constructor(attributes = {}, adapter, options = {}) {
        let finalAttributes = attributes;
        let finalAdapter = adapter;

        // If `attributes` is actually an Adapter, adjust the arguments accordingly.
        if (attributes instanceof Adapter) {
            finalAttributes = {};
            finalAdapter = attributes;
        }

        // Call `super()` exactly once with the resolved arguments.
        super(finalAttributes, finalAdapter, 'service-quote', options);
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

    async fromCart() {
        return this.fetchServiceQuotesFromCart(...arguments);
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

register('resource', 'DeliveryServiceQuote', DeliveryServiceQuote);
