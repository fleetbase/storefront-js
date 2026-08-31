import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import Storefront, * as sdk from '../src/storefront.js';
import FakeAdapter from './helpers/fake-adapter.js';

const snapshot = JSON.parse(readFileSync(new URL('./contracts/public-api.snapshot.json', import.meta.url), 'utf8'));

describe('public API compatibility snapshot', () => {
    it('preserves root exports, statics, resource prototypes, stores, and actions', () => {
        const adapter = new FakeAdapter();
        const storefront = new Storefront(`store_${'a'.repeat(32)}`, { adapter });

        expect(Object.keys(sdk).sort()).toEqual(snapshot.exports);
        expect(Object.getOwnPropertyNames(Storefront).sort()).toEqual(snapshot.static);
        expect(Object.keys(storefront).sort()).toEqual(snapshot.stores);

        for (const [name, properties] of Object.entries(snapshot.prototypes)) {
            const Constructor = name === 'Storefront' ? Storefront : sdk[name];
            expect(Object.getOwnPropertyNames(Constructor.prototype).sort()).toEqual(properties);
        }

        for (const [name, actions] of Object.entries(snapshot.storeActions)) {
            expect(
                Object.keys(storefront[name])
                    .filter((property) => typeof storefront[name][property] === 'function')
                    .sort()
            ).toEqual(actions);
        }
    });
});
