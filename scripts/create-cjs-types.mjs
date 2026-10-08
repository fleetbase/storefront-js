import { writeFile } from 'node:fs/promises';

await writeFile(
    new URL('../types/storefront.d.cts', import.meta.url),
    `type StorefrontModule = typeof import('./storefront.js', { with: { 'resolution-mode': 'import' } });\n` +
        `declare const Storefront: StorefrontModule['default'] & StorefrontModule & { default: StorefrontModule['default'] };\n` +
        `export = Storefront;\n`
);
