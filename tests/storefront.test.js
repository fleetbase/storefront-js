import { assert } from 'chai';
import Storefront from '../src/storefront.js';

// create an instance of the storefront sdk
describe('Create a Storefront SDK instance', () => {
    const storefront = new Storefront(process.env.STOREFRONT_KEY, {
        host: process.env.FLEETBASE_HOST,
    });

    it('should be an instance of Storefront', () => {
        assert.instanceOf(storefront, Storefront);
    });
});
