export default class DeliveryServiceQuote extends ServiceQuote {
    static getFromCart(adapter: any, origin: any, destination: any, cart: any, config?: string, all?: boolean): Promise<DeliveryServiceQuote | Collection<DeliveryServiceQuote[]>>;
    constructor(attributes?: {}, adapter?: any, options?: {});
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter: Adapter): this;
    get formattedAmount(): string;
    fromCart(...args: any[]): Promise<DeliveryServiceQuote | Collection<DeliveryServiceQuote[]>>;
    fetchServiceQuotesFromCart(origin: any, destination: any, cart: any, config?: string, all?: boolean): Promise<DeliveryServiceQuote | Collection<DeliveryServiceQuote[]>>;
}
import { ServiceQuote } from '@fleetbase/sdk';
import { Adapter } from '@fleetbase/sdk';
import { Collection } from '@fleetbase/sdk';
