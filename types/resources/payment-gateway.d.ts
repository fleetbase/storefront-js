import Resource from '../resource.js';
import { type AdapterLike } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class PaymentGateway extends Resource {
    private token?;
    constructor(attributes?: Attributes, adapter?: AdapterLike, options?: Attributes);
    get type(): string | undefined;
    get code(): string | undefined;
    get isCashGateway(): boolean;
    get isStripeGateway(): boolean;
    get isQPayGateway(): boolean;
    setCheckoutToken(token: string): void;
    getCheckoutToken(): string | undefined;
    findRecord(): never;
    create(): never;
    update(): never;
    destroy(): never;
    reload(): never;
}
