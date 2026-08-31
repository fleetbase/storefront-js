import { describe, expect, it } from 'vitest';
import { formatCurrency, getCountries, isArray, isEmail, isEmpty, isKeyValid, isPhone } from '../src/utils/index.js';

describe('utility contracts', () => {
    it('validates storefront keys, email addresses, phone numbers, and arrays', () => {
        expect(isKeyValid(`store_${'a'.repeat(32)}`)).toBe(true);
        expect(isKeyValid(`network_${'a'.repeat(32)}`)).toBe(true);
        expect(isKeyValid(`other_${'a'.repeat(32)}`)).toBe(false);
        expect(isKeyValid('store_short')).toBe(false);
        expect(isKeyValid(`store_${'a'.repeat(24)}`)).toBe(false);
        expect(isKeyValid(null)).toBe(false);
        expect(isEmail('hello@fleetbase.io')).toBe(true);
        expect(isEmail('a@fleetbase.io')).toBe(true);
        expect(isEmail('hello@x.y')).toBe(true);
        expect(isEmail('invalid')).toBe(false);
        expect(isEmail()).toBe(false);
        expect(isPhone('+1 (202) 555-0100')).toBe(true);
        expect(isPhone('2025550100')).toBe(true);
        expect(isPhone('prefix +1 (202) 555-0100')).toBe(false);
        expect(isPhone('+1 (202) 555-0100 trailing')).toBe(false);
        expect(isPhone('not-a-phone')).toBe(false);
        expect(isPhone()).toBe(false);
        expect(isArray([])).toBe(true);
        expect(isArray({})).toBe(false);
    });

    it('detects empty nullable, sized, and array-like values', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
        expect(isEmpty(new Set(['value']))).toBe(false);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty('value')).toBe(false);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty([1])).toBe(false);
        expect(isEmpty(() => {})).toBe(false);
        expect(isEmpty({})).toBe(false);
    });

    it('formats currency and returns sorted country metadata', () => {
        expect(formatCurrency()).toBe('$0.00');
        expect(formatCurrency(12.5, 'USD', 'code')).toContain('USD');
        const countries = getCountries();
        expect(countries.length).toBeGreaterThan(200);
        expect(countries[0].name.localeCompare(countries.at(-1).name)).toBeLessThan(0);
        expect(getCountries('US')).toMatchObject({ iso2: 'US', name: 'United States' });
        expect(getCountries('1')?.phone).toContain(1);
        expect(getCountries('not-found')).toBeUndefined();
    });
});
