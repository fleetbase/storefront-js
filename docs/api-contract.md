# Storefront API contract

This matrix records the contract sources used for the v1.2 SDK refactor. It was audited on 2026-08-31 against:

- [`fleetbase/storefront` routes and v1 controllers at `7f0ba99`](https://github.com/fleetbase/storefront/blob/7f0ba993aa719710c5033a91ecbcf89d1ae8c97c/server/src/routes.php), which are authoritative for Storefront-specific verbs, paths, and controller payloads;
- [`fleetbase/postman` at `9a7d4d8`](https://github.com/fleetbase/postman/tree/9a7d4d898b4e74d735d93c78d67d4d5013c1a28b/postman/collections/Fleetbase%20API/Customers), which supplies current customer request examples and authentication flows;
- [`fleetbase/core-api` routing infrastructure at `b7691c0`](https://github.com/fleetbase/core-api/blob/b7691c06ffdfe8f8874352e746aa8e523d5e3531/src/Routing/RESTRegistrar.php), which defines the shared REST conventions used by Fleetbase package routes.

The executable wire assertions are in `tests/actions.test.js`; the frozen JavaScript surface is in `tests/contracts/public-api.snapshot.json`.

## Root and marketplace routes

| HTTP | Storefront path               | SDK surface                                                        |
| ---- | ----------------------------- | ------------------------------------------------------------------ |
| GET  | `about`                       | `storefront.about()`, `storefront.getOwner()`                      |
| GET  | `lookup/{id}`                 | `storefront.lookup()`, `lookupResource()`, `network.lookupStore()` |
| GET  | `search`                      | `storefront.search()`, `network.search()`                          |
| GET  | `stores`                      | `network.getStores()`                                              |
| GET  | `store-locations`             | `network.getStoreLocations()`                                      |
| GET  | `tags`                        | `store.getTags()`, `network.getTags()`                             |
| GET  | `locations`, `locations/{id}` | `store.getLocations()`, `store.getLocation()`                      |
| GET  | `gateways`, `gateways/{id}`   | store/network payment-gateway helpers                              |

## Resource routes

| HTTP                | Storefront path                     | SDK surface                                   |
| ------------------- | ----------------------------------- | --------------------------------------------- |
| GET                 | `categories`                        | `storefront.categories.findAll/query()`       |
| GET/POST/PUT        | `products`, `products/{id}`         | standard product store CRUD/query methods     |
| GET                 | `food-trucks`, `food-trucks/{id}`   | standard food-truck store read/query methods  |
| GET/POST/DELETE     | `reviews`, `reviews/{id}`           | standard review store CRUD/query methods      |
| GET                 | `reviews/count`                     | `storefront.reviews.count()`                  |
| GET/POST/PUT/DELETE | `carts` and nested cart item routes | cart store and `Cart` action helpers          |
| GET                 | `service-quotes/from-cart`          | `DeliveryServiceQuote.fromCart/getFromCart()` |
| PUT                 | `orders/picked-up`                  | `storefront.orders.completePickup()`          |
| POST                | `orders/receipt`                    | `storefront.orders.getReceipt()`              |

## Checkout routes

| HTTP | Storefront path                          | SDK surface                            |
| ---- | ---------------------------------------- | -------------------------------------- |
| GET  | `checkouts/before`                       | `checkout.initialize()`                |
| GET  | `checkouts/status`                       | `checkout.getStatus()`                 |
| POST | `checkouts/capture`                      | `checkout.captureOrder()`              |
| POST | `checkouts/stripe-setup-intent`          | `checkout.createStripeSetupIntent()`   |
| PUT  | `checkouts/stripe-update-payment-intent` | `checkout.updateStripePaymentIntent()` |
| POST | `checkouts/capture-qpay`                 | `checkout.captureQPay()`               |
| GET  | `checkouts/capture-qpay`                 | `checkout.captureQPayCallback()`       |

## Customer routes

The static customer-store actions cover creation, email/password login, SMS login, verification codes, and Apple/Facebook/Google login. A hydrated `Customer` supplies request-scoped `Customer-Token` authentication for device registration, places, orders, realtime socket tokens (`POST customers/socket-token` via `customer.socketToken()`), Stripe helpers, account closure, phone verification, and the compatibility `contacts/{id}` update alias.

The SDK deliberately passes the token in each request's options instead of mutating adapter-global headers. This preserves the server contract while preventing one customer session from leaking into another request.

## Compatibility decisions

- The default constructor, `newInstance`, root named exports, store names, action names, resource prototypes, synchronous validation errors, request verbs/paths/payloads, and adapter-preserving hydration are frozen by executable tests.
- `src/cart-store` and `src/customer-store` were unreachable duplicate implementations. The historical package had an `exports` map containing only `"."`, so these paths were not supported deep imports. They were removed after their active action-based replacements reached parity.
- `Product.getReviews()` continues sending the product identifier in the legacy `store` parameter. The server route accepts the request and changing it silently could break consumers; any corrected product-review query should be introduced as a separately reviewed API.
- Customer-authorized requests retain the existing public method and header name but now use request-local options rather than adapter-global mutation.
- The core SDK, `@fleetbase/sdk` 2, is a regular dependency. It ships its own declarations, ESM and CommonJS entries, and a Fetch transport with no dependencies, so the ESM and CommonJS builds import it instead of bundling a copy. An application that also uses the core SDK shares that copy, so resources, adapters, and `instanceof` checks are the same objects on both sides. Only the self-contained browser bundle inlines it. `countries-list` and `date-fns` stay external as before.
- Listing endpoints (`findAll`, `query`) keep resolving to collections in Storefront's types, although the core SDK types them as a single record or a collection.
