export default class PaymentGateway extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    get type(): any;
    get code(): any;
    get isCashGateway(): boolean;
    get isStripeGateway(): boolean;
    get isQPayGateway(): boolean;
    setCheckoutToken(token: any): void;
    token: any;
    getCheckoutToken(): any;
    findRecord(): void;
    create(): void;
    update(): void;
    destroy(): void;
    reload(): void;
}
import Resource from '../resource.js';
