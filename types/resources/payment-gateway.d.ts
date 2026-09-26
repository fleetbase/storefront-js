import Resource from '../resource.js';
import { Adapter } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class PaymentGateway extends Resource {
    private token?;
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    get type(): string | undefined;
    get code(): string | undefined;
    get isCashGateway(): boolean;
    get isStripeGateway(): boolean;
    get isQPayGateway(): boolean;
    setCheckoutToken(token: string): void;
    getCheckoutToken(): string | undefined;
    findRecord(): void;
    create(): void;
    update(): void;
    destroy(): void;
    reload(): void;
}
