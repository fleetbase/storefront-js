import { assert } from 'chai';
import Storefront from '../src/storefront';
import 'cross-fetch/polyfill';

// create an instance of the storefront sdk
describe('Create a Storefront SDK instance', () => {
	const storefront = new Storefront('store_5eb68424f765e387d1ddccb4a0eb0af7', { host: 'https://v2api.fleetbase.engineering' });
	
	it('should be an instance of Storefront', () => {
        assert.instanceOf(storefront, Storefront);
    });
});
