<p align="center">
  <img src="https://flb-assets.s3.ap-southeast-1.amazonaws.com/static/storefront-logo.svg" width="380" height="100" />
</p>
<p align="center">
Ecommerce companion SDK & API for Fleetbase, build custom shopping experiences for on-demand orders.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@fleetbase/storefront">
    <img src="https://img.shields.io/npm/v/@fleetbase/storefront" alt="Version" />
  </a>
  <a href="https://www.npmjs.com/package/@fleetbase/storefront">
    <img src="https://img.shields.io/npm/dw/@fleetbase/storefront" alt="Downloads/week" />
  </a>
  <a href="https://bundlephobia.com/package/@fleetbase/storefront@1.0.0">
    <img src="https://img.shields.io/bundlephobia/min/@fleetbase/storefront" alt="Bundle Size" />
  </a>
  <a href="https://github.com/fleetbase/fleetbase-js/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/fleetbase/fleetbase-js" alt="License" />
  </a>
  <br>
  <a href="https://fleetbase.io">fleetbase.io</a> | <a href="https://twitter.com/fleetbase_io">@fleetbase_io</a> | <a href="https://discord.gg/Q78hkXNK">Discord</a>
</p>

## Installation

### With NPM

`npm install @fleetbase/storefront`

### With Yarn

`yarn add @fleetbase/storefront`

## Documentation

See the [documentation webpage](https://fleetbase.io/docs).

If you would like to make contributions to the Fleetbase Javascript SDK documentation source, here is a [guide](https://github.com/fleetbase/fleetbase-js/blob/master/CONTRIBUTING.md) in doing so.

## Quick Start for Browser

```js
import Storefront, { Product } from "@fleetbase/storefront";

const storefront = new Storefront("store_your_public_storefront_key");

// list products
storefront.products.findAll();

// create a product
const product = new Product({ name, description, price });

// retrieve cart & add item
storefront.cart.retrieve().then((cart) => {
  cart.add("product_xyxyxyx", 1);

  // empty cart
  cart.empty();
});

// checkout
storefront.checkout.capture();
```

## Marketplace owners

Storefront keys identify either one store (`store_...`) or a marketplace network
(`network_...`). Existing `about()` and `lookup()` calls continue to return raw
objects. Use the typed helpers when resource methods and the active adapter must be
preserved:

```js
const marketplace = new Storefront("network_your_public_storefront_key");
const network = await marketplace.getOwner();

const stores = await network.getStores({
  query: "coffee",
  sort: "nearest",
  location: [106.9177, 47.9185],
  limit: 20,
  offset: 0,
});
const products = await network.search("latte", { limit: 20 });
const locations = await network.getStoreLocations({ with_store: true });

// Embedded merchant data is normalized across current and legacy responses.
const merchant = locations[0].merchant;
```

Network resources also expose `getCategories()`, `getTags()`, `lookupStore()`,
`getReviews(storeId)`, and `getPaymentGateways()`. All returned resources retain the
Storefront instance's current adapter and headers. Calling `setAdapter()` rebuilds
the SDK stores so locale and customer-token header changes apply consistently.

Marketplace keys are public client credentials, not customer authentication. Pass
customer tokens only through the SDK adapter headers and never commit real keys to
fixtures or tests.

## Create a custom adapter

Storefront will eventually allow you to bring your own ecommerce adapter.

`@todo`
