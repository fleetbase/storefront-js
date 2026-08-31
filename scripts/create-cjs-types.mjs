import { copyFile, readFile, writeFile } from 'node:fs/promises';

const storefrontTypes = new URL('../types/storefront.d.ts', import.meta.url);
const fleetbaseTypes = new URL('../types/fleetbase-sdk.d.ts', import.meta.url);
const sourceFleetbaseTypes = new URL('../types-internal/fleetbase-sdk.d.ts', import.meta.url);
const reference = "import './fleetbase-sdk.js';\n";
const declarations = await readFile(storefrontTypes, 'utf8');

await copyFile(sourceFleetbaseTypes, fleetbaseTypes);
await writeFile(storefrontTypes, declarations.startsWith(reference) ? declarations : `${reference}${declarations}`);
await writeFile(
    new URL('../types/storefront.d.cts', import.meta.url),
    `${reference}type StorefrontModule = typeof import('./storefront.js', { with: { 'resolution-mode': 'import' } });\n` +
        `declare const Storefront: StorefrontModule['default'] & StorefrontModule & { default: StorefrontModule['default'] };\n` +
        `export = Storefront;\n`
);
