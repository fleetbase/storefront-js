import { Adapter, type AdapterLike, Collection, ServiceQuote, register } from '@fleetbase/sdk';
import { formatCurrency, isEmpty, isArray } from '../utils/index.js';
import type { Attributes, ResolvableIdentifier, StorefrontAdapter } from '../types.js';

export default class DeliveryServiceQuote extends ServiceQuote {
    constructor(attributes: Attributes | AdapterLike = {}, adapter?: AdapterLike, options: Attributes = {}) {
        let finalAttributes: Attributes = attributes as Attributes;
        let finalAdapter: AdapterLike | undefined = adapter;

        // If `attributes` is actually an Adapter, adjust the arguments accordingly.
        if (attributes instanceof Adapter || (attributes && typeof attributes.get === 'function' && typeof attributes.post === 'function')) {
            finalAttributes = {};
            finalAdapter = attributes as AdapterLike;
        }

        // Call `super()` exactly once with the resolved arguments.
        super(finalAttributes, finalAdapter, options);
    }

    get formattedAmount() {
        const { amount, currency } = this.getAttributes(['amount', 'currency']) as { amount?: number; currency?: string };

        if (isEmpty(amount) || isEmpty(currency)) {
            return null;
        }

        return formatCurrency((amount as number) / 100, currency as string);
    }

    async fromCart(...args: Parameters<DeliveryServiceQuote['fetchServiceQuotesFromCart']>) {
        return this.fetchServiceQuotesFromCart(...args);
    }

    async fetchServiceQuotesFromCart(origin: ResolvableIdentifier, destination: ResolvableIdentifier, cart: ResolvableIdentifier, config = 'storefront', all = false) {
        if (typeof origin === 'object' && origin?.id) {
            origin = origin.id;
        }

        if (typeof destination === 'object' && destination?.id) {
            destination = destination.id;
        }

        if (typeof cart === 'object' && cart?.id) {
            cart = cart.id;
        }

        const serviceQuotes = await (this.adapter as StorefrontAdapter).get<Attributes | Attributes[]>('service-quotes/from-cart', {
            origin,
            destination,
            cart,
            config,
            all,
        });

        if (isArray(serviceQuotes)) {
            return new Collection<DeliveryServiceQuote>(serviceQuotes.map((serviceQuote: Attributes) => new DeliveryServiceQuote(serviceQuote, this.adapter)));
        }

        return new DeliveryServiceQuote(serviceQuotes, this.adapter);
    }

    static async getFromCart(adapter: AdapterLike, origin: ResolvableIdentifier, destination: ResolvableIdentifier, cart: ResolvableIdentifier, config = 'storefront', all = false) {
        const quote = new DeliveryServiceQuote(adapter);
        return quote.fetchServiceQuotesFromCart(origin, destination, cart, config, all);
    }
}

register('resource', 'DeliveryServiceQuote', DeliveryServiceQuote);
