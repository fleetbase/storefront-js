import './fleetbase-sdk.js';
type StorefrontModule = typeof import('./storefront.js', { with: { 'resolution-mode': 'import' } });
declare const Storefront: StorefrontModule['default'] & StorefrontModule & { default: StorefrontModule['default'] };
export = Storefront;
