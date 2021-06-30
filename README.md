<p align="center">
  <img src="https://flb-assets.s3.ap-southeast-1.amazonaws.com/static/fleetbase-logo-svg.svg" width="380" height="100" />
</p>
<p align="center">
Ecommerce companion SDK & API for Fleetbase, build custom shopping experiences for on-demand orders.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@fleetbase/sdk">
    <img src="https://img.shields.io/npm/v/@fleetbase/sdk" alt="Version" />
  </a>
  <a href="https://www.npmjs.com/package/@fleetbase/sdk">
    <img src="https://img.shields.io/npm/dw/@fleetbase/sdk" alt="Downloads/week" />
  </a>
  <a href="https://bundlephobia.com/package/@fleetbase/sdk@1.0.0">
    <img src="https://img.shields.io/bundlephobia/min/@fleetbase/sdk" alt="Bundle Size" />
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

```
import Storefront, { Product } from '@fleetbase/storefront';

const storefront = new Storefront('Your Store Key');

// list products
storefront.products.findAll();

// create a product
const product = new Product({ name, description, price });

// retrieve cart & add item
storefront.cart.retrieve().then(cart => {
  cart.add('product_xyxyxyx', 1);

  // empty cart
  cart.empty();
});

// checkout
storefront.checkout.capture();
```


## Create a custom adapter

Storefront will eventually allow you to bring your own ecommerce adapter.

```@todo```
