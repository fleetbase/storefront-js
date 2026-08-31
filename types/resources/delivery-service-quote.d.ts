import { Adapter, Collection, ServiceQuote } from '@fleetbase/sdk';
import type { Attributes, ResolvableIdentifier } from '../types.js';
export default class DeliveryServiceQuote extends ServiceQuote {
    constructor(attributes?: Attributes | Adapter, adapter?: Adapter, options?: Attributes);
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter: Adapter): this;
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
        adapter: Adapter,
        origin: ResolvableIdentifier,
        destination: ResolvableIdentifier,
        cart: ResolvableIdentifier,
        config?: string,
        all?: boolean
    ): Promise<DeliveryServiceQuote | Collection<DeliveryServiceQuote>>;
}
