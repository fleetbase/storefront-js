export default class DeliveryServiceQuote extends ServiceQuote {
    static getFromCart(adapter: any, origin: any, destination: any, cart: any, config?: string, all?: boolean): Promise<Collection | DeliveryServiceQuote>;
    constructor(attributes: {}, adapter: any, options?: {});
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {Resource} this
     */
    setAdapter(adapter: Adapter): Resource;
    get formattedAmount(): string;
    fetchServiceQuotesFromCart(origin: any, destination: any, cart: any, config?: string, all?: boolean): Promise<Collection | DeliveryServiceQuote>;
}
import { ServiceQuote } from '@fleetbase/sdk';
import { Adapter } from '@fleetbase/sdk';
import { Collection } from '@fleetbase/sdk';
