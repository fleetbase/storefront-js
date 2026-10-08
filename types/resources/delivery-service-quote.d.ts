import { type AdapterLike, Collection, ServiceQuote } from '@fleetbase/sdk';
import type { Attributes, ResolvableIdentifier } from '../types.js';
export default class DeliveryServiceQuote extends ServiceQuote {
    constructor(attributes?: Attributes | AdapterLike, adapter?: AdapterLike, options?: Attributes);
    get formattedAmount(): string | null;
    fromCart(...args: Parameters<DeliveryServiceQuote['fetchServiceQuotesFromCart']>): Promise<DeliveryServiceQuote | Collection<DeliveryServiceQuote>>;
    fetchServiceQuotesFromCart(
        origin: ResolvableIdentifier,
        destination: ResolvableIdentifier,
        cart: ResolvableIdentifier,
        config?: string,
        all?: boolean
    ): Promise<DeliveryServiceQuote | Collection<DeliveryServiceQuote>>;
    static getFromCart(
        adapter: AdapterLike,
        origin: ResolvableIdentifier,
        destination: ResolvableIdentifier,
        cart: ResolvableIdentifier,
        config?: string,
        all?: boolean
    ): Promise<DeliveryServiceQuote | Collection<DeliveryServiceQuote>>;
}
