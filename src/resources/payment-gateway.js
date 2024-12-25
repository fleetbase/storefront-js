import Resource from '../resource.js';
import { register } from '@fleetbase/sdk';

export default class PaymentGateway extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'payment-gateway', options);
    }

    get type() {
        return this.getAttribute('type');
    }

    get code() {
        return this.getAttribute('code');
    }

    get isCashGateway() {
        return this.type === 'cash';
    }

    get isStripeGateway() {
        return this.type === 'stripe';
    }

    setCheckoutToken(token) {
        this.token = token;
    }

    getCheckoutToken() {
        return this.token;
    }

    // remove default resource methods
    findRecord() {
        throw new Error('There is no findRecord() method for payment gateways!');
    }

    // remove default resource methods
    create() {
        throw new Error('There is no create() method for payment gateways!');
    }

    // remove default resource methods
    update() {
        throw new Error('There is no update() method for payment gateways!');
    }

    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method for payment gateways!');
    }

    // remove default resource methods
    reload() {
        throw new Error('There is no reload() method for payment gateways!');
    }
}

register('resource', 'PaymentGateway', PaymentGateway);
