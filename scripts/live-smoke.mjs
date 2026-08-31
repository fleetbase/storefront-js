import assert from 'node:assert/strict';
import Storefront from '../dist/esm/storefront.js';

const publicKey = process.env.FLEETBASE_STOREFRONT_PUBLIC_KEY;
const host = process.env.FLEETBASE_STOREFRONT_HOST || 'https://api.fleetbase.io';

if (!publicKey) {
    throw new Error('FLEETBASE_STOREFRONT_PUBLIC_KEY is required');
}

const storefront = new Storefront(publicKey, { host });
const about = await storefront.about();

assert.equal(typeof about, 'object');
assert.notEqual(about, null);
assert.equal(typeof storefront.getAdapter(), 'object');

console.log('Non-destructive Storefront API smoke check passed.');
