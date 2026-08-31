<p align="center">
  <img src="https://flb-assets.s3.ap-southeast-1.amazonaws.com/static/storefront-logo.svg" width="380" height="100" alt="Fleetbase Storefront" />
</p>

<p align="center">
  Official JavaScript and TypeScript SDK for building commerce experiences with the Fleetbase Storefront API.
</p>

<p align="center">
  <a href="https://github.com/fleetbase/storefront-js/actions/workflows/ci.yml"><img src="https://github.com/fleetbase/storefront-js/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="https://www.npmjs.com/package/@fleetbase/storefront"><img src="https://img.shields.io/npm/v/@fleetbase/storefront" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@fleetbase/storefront"><img src="https://img.shields.io/npm/dw/@fleetbase/storefront" alt="npm downloads per week" /></a>
  <a href="https://bundlephobia.com/package/@fleetbase/storefront"><img src="https://img.shields.io/bundlephobia/minzip/@fleetbase/storefront" alt="minified and compressed bundle size" /></a>
  <a href="https://github.com/fleetbase/storefront-js/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/fleetbase/storefront-js" alt="license" /></a>
  <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="100% test coverage" />
</p>

## Installation

```sh
npm install @fleetbase/storefront
pnpm add @fleetbase/storefront
yarn add @fleetbase/storefront
bun add @fleetbase/storefront
```

The package supports Node.js 22 and 24, native ECMAScript modules (ESM), CommonJS, browsers, server-side rendering, and TypeScript `node16`, `nodenext`, and `bundler` resolution. See the [compatibility policy](docs/compatibility.md) for the tested matrix.

## Quick start

### ESM and TypeScript

```js
import Storefront, { Product } from '@fleetbase/storefront';

const storefront = new Storefront('store_your_public_storefront_key');
const products = await storefront.products.findAll();

if (products[0] instanceof Product) {
    console.log(products[0].formattedAmount);
}
```

### CommonJS

```js
const Storefront = require('@fleetbase/storefront');

const storefront = new Storefront('store_your_public_storefront_key');
const { Product } = Storefront;
```

The CommonJS export remains directly constructible while exposing every named resource as a property.

### Browser bundle

```html
<script src="https://unpkg.com/@fleetbase/storefront@latest/dist/@storefront.min.js"></script>
<script>
    const Storefront = FleetbaseStorefront.default;
    const storefront = new Storefront('store_your_public_storefront_key');
</script>
```

The browser bundle is self-contained. ESM and CommonJS consumers should use the package root so their bundler can apply the package export conditions.

## Configuration

```js
const storefront = new Storefront(
    'store_your_public_storefront_key',
    {
        host: 'https://api.fleetbase.io',
        version: 'v1',
        namespace: 'storefront/v1',
        adapter: customAdapter,
    },
    false
);
```

Storefront keys are public store or marketplace identifiers. They are not customer authentication tokens. Use the customer resource helpers for customer-authorized requests.

## Stores and resources

The client exposes these resource stores:

- `products`
- `categories`
- `foodTrucks`
- `reviews`
- `customers`
- `cart`
- `checkout`
- `orders`

Resources are also available as named exports: `Product`, `Category`, `FoodTruck`, `Review`, `Customer`, `Cart`, `Checkout`, `Order`, `Store`, `Network`, `StoreLocation`, `StoreHour`, `PaymentGateway`, and `DeliveryServiceQuote`.

```js
import Storefront, { DeliveryServiceQuote } from '@fleetbase/storefront';

const storefront = new Storefront('store_your_public_storefront_key');
const about = await storefront.about();
const owner = await storefront.getOwner();
const matches = await storefront.search('coffee', { limit: 20 });

const quotes = await DeliveryServiceQuote.getFromCart(
    storefront.getAdapter(),
    'place_origin',
    'place_destination',
    'cart_public_id',
    'storefront',
    true
);
```

`about()` and `lookup()` retain their legacy raw-object behavior. `getOwner()` and `lookupResource()` provide typed `Store` or `Network` resources without changing existing consumers.

## Marketplace networks

Keys beginning with `network_` expose the same client plus typed network discovery helpers:

```js
const marketplace = new Storefront('network_your_public_storefront_key');
const network = await marketplace.getOwner();

const stores = await network.getStores({ limit: 20, offset: 0 });
const products = await network.search('latte', { limit: 20 });
const locations = await network.getStoreLocations({
    with_store: true,
    location: [106.9177, 47.9185],
});

const merchant = locations[0].merchant;
```

Networks also provide `getCategories()`, `getTags()`, `lookupStore()`, `getReviews(storeId)`, and `getPaymentGateways()`.

## Cart and checkout

```js
const cart = await storefront.cart.retrieve();
await cart.add('product_public_id', 2, { notes: 'No onions' });
await cart.update('cart_item_public_id', 3);

const checkout = await storefront.checkout.initialize(
    'customer_public_id',
    cart,
    'service_quote_public_id',
    'cash',
    { notes: 'Front desk' }
);

const order = await storefront.checkout.captureOrder(checkout.token);
```

Stripe helpers include `createStripeSetupIntent()` and `updateStripePaymentIntent()`. QPay integrations can use `getStatus()`, `captureQPay()`, and `captureQPayCallback()`. Authenticated order flows provide `completePickup()` and `getReceipt()`.

## Customer authentication

```js
const customer = await storefront.customers.login('person@example.com', 'password');
await customer.syncDevice('push-token', 'ios');

const places = await customer.getSavedPlaces();
const orders = await customer.getOrderHistory({ limit: 20 });
```

SMS, Apple, Facebook, and Google login helpers remain available. Authorized requests attach `Customer-Token` per request instead of mutating shared adapter headers.

## Adapter replacement

```js
storefront.setAdapter(nextAdapter);
```

`setAdapter()` rebuilds every resource store. Newly fetched resources and embedded merchants use the replacement adapter.

## Development

```sh
pnpm install --frozen-lockfile
pnpm run check
```

`pnpm run check` validates formatting, linting, strict consumer types, 100% statement/branch/function/line coverage, ESM, callable CommonJS, the browser bundle, package contents, and package declarations. CI additionally installs the packed tarball through npm, pnpm, Yarn, and Bun.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow, [SECURITY.md](SECURITY.md) for vulnerability reporting, [docs/api-contract.md](docs/api-contract.md) for the audited endpoint mapping, and [docs/releasing.md](docs/releasing.md) for the release process. Existing consumers upgrading from v1.1 can use the [v1.2 migration guide](docs/migration-v1.2.md).

## License

Fleetbase Storefront is distributed under the [AGPL-3.0-or-later license](LICENSE.md).
