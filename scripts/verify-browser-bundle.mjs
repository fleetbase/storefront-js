import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../dist/@storefront.min.js', import.meta.url), 'utf8');
const browser = { console, setTimeout, clearTimeout };

browser.globalThis = browser;
browser.self = browser;
browser.window = browser;
vm.runInNewContext(source, browser, { filename: '@storefront.min.js' });

const namespace = browser.FleetbaseStorefront;
const Storefront = namespace?.default;
const adapter = { get: async () => ({}), post: async () => ({}), put: async () => ({}), delete: async () => ({}) };
const client = new Storefront(`store_${'a'.repeat(32)}`, { adapter });

if (!(client instanceof Storefront) || typeof namespace.Product !== 'function') {
    throw new Error('Browser bundle did not expose the expected Storefront API.');
}
