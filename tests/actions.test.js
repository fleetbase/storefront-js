import { describe, expect, it, vi } from 'vitest';
import { Order as FleetbaseOrder, Place } from '@fleetbase/sdk';
import Storefront, { Cart, Checkout, Customer, DeliveryServiceQuote, Order, PaymentGateway } from '../src/storefront.js';
import FakeAdapter from './helpers/fake-adapter.js';

const STORE_KEY = `store_${'a'.repeat(32)}`;

describe('store action wire contracts', () => {
    it('covers customer authentication and creation actions', async () => {
        const adapter = new FakeAdapter({
            'customers/login-with-sms': { challenge: true },
            'customers/login': { id: 'customer_1' },
            'customers/login-with-apple': { id: 'customer_1' },
            'customers/login-with-facebook': { id: 'customer_1' },
            'customers/login-with-google': { id: 'customer_1' },
            'customers/verify-code': { id: 'customer_1' },
            'customers/request-creation-code': { sent: true },
            customers: { id: 'customer_1' },
            'customers/customer_1': { id: 'customer_1' },
        });
        const { customers } = new Storefront(STORE_KEY, { adapter });

        await expect(customers.login('+12025550100')).resolves.toEqual({ challenge: true });
        expect(() => customers.login('person@example.com')).toThrow('Login requires password!');
        await expect(customers.login('person@example.com', 'secret', { device: 'web' })).resolves.toBeInstanceOf(Customer);
        await expect(customers.loginWithApple('apple', 'identity', 'auth', 'person@example.com', 'Person', { device: 'ios' })).resolves.toBeInstanceOf(Customer);
        await expect(customers.loginWithFacebook('facebook', 'person@example.com', 'Person', 'avatar', { device: 'web' })).resolves.toBeInstanceOf(Customer);
        await expect(customers.loginWithGoogle('token', 'client', { device: 'android' })).resolves.toBeInstanceOf(Customer);
        await expect(customers.verifyCode('person@example.com', '1234', { device: 'web' })).resolves.toBeInstanceOf(Customer);
        await expect(customers.requestCreationCode('person@example.com')).resolves.toEqual({ sent: true });
        await expect(customers.requestCreationCode('+12025550100', 'sms')).resolves.toEqual({ sent: true });
        await expect(customers.create('person@example.com', '1234', { name: 'Person' })).resolves.toBeInstanceOf(Customer);
        await expect(customers.retrieve('customer_1')).resolves.toBeInstanceOf(Customer);

        expect(adapter.calls).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ method: 'post', endpoint: 'customers/login-with-sms', params: { phone: '+12025550100' } }),
                expect.objectContaining({ method: 'post', endpoint: 'customers/login', params: { identity: 'person@example.com', password: 'secret', device: 'web' } }),
                expect.objectContaining({ method: 'post', endpoint: 'customers/request-creation-code', params: { identity: '+12025550100', mode: 'sms' } }),
            ])
        );
    });

    it('uses request-scoped customer authorization and hydrates related resources', async () => {
        const adapter = new FakeAdapter({
            'customers/register-device': { registered: true },
            'customers/places': [{ id: 'place_1' }],
            'customers/orders': [{ id: 'order_1' }],
            'customers/stripe-ephemeral-key': { key: 'ephemeral' },
            'customers/stripe-setup-intent': { secret: 'setup' },
            'customers/account-closure': { started: true },
            'customers/confirm-account-closure': { confirmed: true },
            'customers/request-phone-verification': { sent: true },
            'customers/verify-phone-number': { verified: true },
            'contacts/customer_1': { id: 'customer_1', name: 'Updated' },
        });
        const customer = new Customer({ id: 'customer_1', token: 'customer-token', name: 'Original' }, adapter);

        await expect(customer.syncDevice('device-token', 'ios')).resolves.toEqual({ registered: true });
        expect((await customer.getSavedPlaces())[0]).toBeInstanceOf(Place);
        expect((await customer.getOrderHistory({ limit: 5 }))[0]).toBeInstanceOf(FleetbaseOrder);
        await expect(customer.getStripeEphemeralKey({ version: '2026' })).resolves.toEqual({ key: 'ephemeral' });
        await expect(customer.getStripeSetupIntent()).resolves.toEqual({ secret: 'setup' });
        await expect(customer.startAccountClosure({ reason: 'unused' }, { timeout: 2 })).resolves.toEqual({ started: true });
        await expect(customer.confirmAccountClosure('1234', { reason: 'unused' })).resolves.toEqual({ confirmed: true });
        await expect(customer.requestPhoneVerification('+12025550100', { locale: 'en' })).resolves.toEqual({ sent: true });
        await expect(customer.verifyPhoneNumber('1234', '+12025550100', { locale: 'en' })).resolves.toEqual({ verified: true });
        await expect(customer.updateContactAlias({ name: 'Updated' })).resolves.toBe(customer);
        expect(customer.getAttribute('name')).toBe('Updated');

        for (const call of adapter.calls) {
            expect(call.options.headers?.['Customer-Token']).toBe('customer-token');
        }
        expect(adapter.headers).toEqual({});

        const nextAdapter = new FakeAdapter();
        expect(customer.setAdapter(nextAdapter)).toBe(customer);
        expect(customer.store.adapter).toBe(nextAdapter);

        const error = new Error('offline');
        nextAdapter.responses['customers/places'] = error;
        await expect(customer.getSavedPlaces()).rejects.toBe(error);
    });

    it('covers checkout raw and resource argument contracts', async () => {
        const adapter = new FakeAdapter({
            'checkouts/before': { token: 'checkout-token' },
            'checkouts/capture': { id: 'order_1' },
            'checkouts/stripe-setup-intent': { secret: 'setup' },
            'checkouts/stripe-update-payment-intent': { updated: true },
            'checkouts/status': { status: 'completed' },
            'checkouts/capture-qpay': { captured: true },
        });
        const { checkout } = new Storefront(STORE_KEY, { adapter });
        const customer = new Customer({ id: 'customer_1' }, adapter);
        const cart = new Cart({ id: 'cart_1' }, adapter);
        const quote = new DeliveryServiceQuote({ id: 'quote_1' }, adapter);
        const gateway = new PaymentGateway({ id: 'gateway_1', code: 'stripe' }, adapter);

        await expect(checkout.initialize(customer, cart, quote, gateway, { tip: 10 }, { timeout: 2 })).resolves.toEqual({ token: 'checkout-token' });
        await expect(checkout.initialize('customer_1', 'cart_1', 'quote_1', 'cash')).resolves.toEqual({ token: 'checkout-token' });
        const order = await checkout.captureOrder('checkout-token', { note: 'front desk' }, { timeout: 2 });
        expect(order).toBeInstanceOf(Order);
        expect(order.adapter).toBe(adapter);
        await expect(checkout.createStripeSetupIntent(customer, { usage: 'off_session' })).resolves.toEqual({ secret: 'setup' });
        await expect(checkout.createStripeSetupIntent('customer_1')).resolves.toEqual({ secret: 'setup' });
        await expect(checkout.updateStripePaymentIntent('pi_1', customer, cart, quote, { tip: 20 })).resolves.toEqual({ updated: true });
        await expect(checkout.updateStripePaymentIntent('pi_1', 'customer_1', 'cart_1', 'quote_1')).resolves.toEqual({ updated: true });
        await expect(checkout.getStatus(new Checkout({ id: 'checkout_1' }, adapter), 'token')).resolves.toEqual({ status: 'completed' });
        await expect(checkout.getStatus('checkout_1', 'token')).resolves.toEqual({ status: 'completed' });
        await expect(checkout.captureQPay(new Checkout({ id: 'checkout_1' }, adapter), { payment: 'qpay' })).resolves.toEqual({ captured: true });
        await expect(checkout.captureQPay('checkout_1')).resolves.toEqual({ captured: true });
        await expect(checkout.captureQPayCallback(new Checkout({ id: 'checkout_1' }, adapter), { invoice_id: 'invoice' })).resolves.toEqual({ captured: true });
        await expect(checkout.captureQPayCallback('checkout_1')).resolves.toEqual({ captured: true });

        const instance = new Checkout({}, adapter);
        for (const method of ['initialize', 'captureOrder', 'createStripeSetupIntent', 'updateStripePaymentIntent', 'getStatus', 'captureQPay', 'captureQPayCallback']) {
            instance.store[method] = vi.fn().mockResolvedValue(method);
            await expect(instance[method]('argument')).resolves.toBe(method);
        }
    });

    it('covers review count and authenticated order actions', async () => {
        const adapter = new FakeAdapter({
            'reviews/count': { count: 3 },
            'orders/picked-up': { completed: true },
            'orders/receipt': { receipt: true },
        });
        const storefront = new Storefront(STORE_KEY, { adapter });
        await expect(storefront.reviews.count()).resolves.toEqual({ count: 3 });
        await expect(storefront.reviews.count('store_1', { timeout: 2 })).resolves.toEqual({ count: 3 });
        const order = new Order({ id: 'order_1' }, adapter);
        await expect(storefront.orders.completePickup(order, { code: '1234' }, { timeout: 2 })).resolves.toEqual({ completed: true });
        await expect(storefront.orders.completePickup('order_1')).resolves.toEqual({ completed: true });
        await expect(storefront.orders.getReceipt(order, { receiver_type: 'CITIZEN' })).resolves.toEqual({ receipt: true });
        await expect(storefront.orders.getReceipt('order_1')).resolves.toEqual({ receipt: true });
    });
});
