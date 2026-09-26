# Migrating from v1.1 to v1.2

Version 1.2 is designed as a compatible upgrade. Existing ESM imports, the `Storefront` constructor, store properties, and resource methods remain available.

## CommonJS

CommonJS now resolves to a real `.cjs` artifact and remains directly constructible:

```js
const Storefront = require('@fleetbase/storefront');
const storefront = new Storefront('store_your_public_storefront_key');
```

Named exports are properties on the constructor, so `Storefront.Product` remains available.

## TypeScript

Declarations are generated from maintained source and exposed for both import and require conditions. Remove local declaration shims previously added for `@fleetbase/storefront` and use the package declarations.

## Typed owner helpers

`about()` and `lookup()` still return raw objects by default. New code can opt into resources with `getOwner()` and `lookupResource()`.

## Adapter behavior

Calling `setAdapter()` now rebuilds all Storefront stores. Search results, nested merchant resources, places, orders, and delivery quotes retain the active adapter. Customer authorization is request-scoped and no longer mutates shared headers.

## Package contents

Obsolete historical bundles and undocumented deep-import files are no longer shipped. Use the package root or the documented `browser` entry point.

## New API coverage

The SDK adds current Storefront API helpers for marketplace networks, customer account closure and phone verification, Stripe setup and payment-intent updates, QPay capture and status, order pickup completion, and receipt retrieval.
