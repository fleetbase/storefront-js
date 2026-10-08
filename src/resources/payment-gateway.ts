import Resource from '../resource.js';
import { type AdapterLike, register } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';

export default class PaymentGateway extends Resource {
    private token?: string;

    constructor(attributes: Attributes = {}, adapter?: AdapterLike, options: Attributes = {}) {
        super(attributes, adapter, 'payment-gateway', options);
    }

    get type(): string | undefined {
        return this.getAttribute('type') as string | undefined;
    }

    get code(): string | undefined {
        return this.getAttribute('code') as string | undefined;
    }

    get isCashGateway() {
        return this.type === 'cash';
    }

    get isStripeGateway() {
        return this.type === 'stripe';
    }

    get isQPayGateway() {
        return this.type === 'qpay' || this.code === 'qpay';
    }

    setCheckoutToken(token: string) {
        this.token = token;
    }

    getCheckoutToken() {
        return this.token;
    }

    // remove default resource methods
    findRecord(): never {
        throw new Error('There is no findRecord() method for payment gateways!');
    }

    // remove default resource methods
    override create(): never {
        throw new Error('There is no create() method for payment gateways!');
    }

    // remove default resource methods
    override update(): never {
        throw new Error('There is no update() method for payment gateways!');
    }

    // remove default resource methods
    override destroy(): never {
        throw new Error('There is no destroy() method for payment gateways!');
    }

    // remove default resource methods
    override reload(): never {
        throw new Error('There is no reload() method for payment gateways!');
    }
}

register('resource', 'PaymentGateway', PaymentGateway);
