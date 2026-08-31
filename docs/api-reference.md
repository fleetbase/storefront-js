# API reference

The generated TypeScript declarations shipped in `types/` are the exact signature source of truth. This guide summarizes the public runtime surface. All request methods return promises; collection methods return Fleetbase `Collection` instances whose elements retain the active adapter.

## Storefront client

`new Storefront(storeKey, config?, debug?)` accepts a public `store_…` or `network_…` key. Configuration supports `host`, `version`, `namespace`, and a custom Fleetbase-compatible `adapter`.

| Member                                 | Result or purpose                                     |
| -------------------------------------- | ----------------------------------------------------- |
| `Storefront.newInstance(...args)`      | Construct another client                              |
| `about({ resource? })`                 | Raw owner payload, or hydrated `Store`/`Network`      |
| `getOwner()`                           | Hydrated `Store` or `Network`                         |
| `lookup(id, { resource? })`            | Raw lookup payload, or hydrated owner                 |
| `lookupResource(id)`                   | Hydrated `Store` or `Network`                         |
| `search(query, options?)`              | `Collection<Product>`                                 |
| `setAdapter(adapter)` / `getAdapter()` | Replace/read the adapter; replacement rebuilds stores |

The client exposes `products`, `categories`, `foodTrucks`, `reviews`, `customers`, `cart`, `checkout`, and `orders`. Standard stores inherit the Fleetbase store methods such as `findAll`, `query`, `findRecord`, `createRecord`, and `updateRecord`, subject to the server route's supported verbs.

## Store actions

| Store       | Actions                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `reviews`   | `count(storeId?, options?)`                                                                                                             |
| `customers` | `login`, `loginWithApple`, `loginWithFacebook`, `loginWithGoogle`, `verifyCode`, `requestCreationCode`, `create`, `retrieve`            |
| `cart`      | `add(cartId, productId, quantity?, data?, options?)`, `update`, `remove`, `empty`, `retrieve`                                           |
| `checkout`  | `initialize`, `captureOrder`, `createStripeSetupIntent`, `updateStripePaymentIntent`, `getStatus`, `captureQPay`, `captureQPayCallback` |
| `orders`    | `completePickup(order, params?, options?)`, `getReceipt(order, params?, options?)`                                                      |

Most identifier arguments accept either a public ID or the corresponding resource object. `RequestOptions` can carry adapter request options and headers.

## Resources

Every resource inherits the Fleetbase `Resource` attribute, serialization, and adapter behavior.

| Resource               | Public helpers and derived values                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Cart`                 | `add`, `update`, `remove`, `empty`, `delete`, `refresh`, `subtotal`, `contents`, `hasProduct`, `isEmpty`, `isNotEmpty`                                      |
| `Category`             | `getProducts()`                                                                                                                                             |
| `Checkout`             | The checkout actions listed above, scoped to the resource                                                                                                   |
| `Customer`             | `syncDevice`, authorized request helper, saved places/order history, Stripe helpers, account closure, phone verification, contact alias update, and `token` |
| `DeliveryServiceQuote` | `fromCart`, `fetchServiceQuotesFromCart`, static `getFromCart`, `formattedAmount`, `setAdapter`                                                             |
| `FoodTruck`            | Standard resource attributes                                                                                                                                |
| `Network`              | `getTags`, `getStores`, `getStoreLocations`, `getCategories`, `search`, `lookupStore`, `getReviews`, `getPaymentGateways`                                   |
| `Order`                | Fleetbase order behavior plus Storefront hydration                                                                                                          |
| `PaymentGateway`       | `type`, `code`, cash/Stripe/QPay flags, checkout-token setter/getter; unsupported CRUD methods throw                                                        |
| `Product`              | `variants`, `addons`, `images`, `videos`, `hours`, sale flags, `formattedAmount`, `merchant`, `getReviews`                                                  |
| `Review`               | `getMedia`, `getPhotos`, `getVideos`                                                                                                                        |
| `Store`                | `getReviews`, `getTags`, `getLocations`, `getLocation`, `getPaymentGateways`, `getPaymentGateway`                                                           |
| `StoreHour`            | `day`, closed/24-hour flags, parsed start/end dates, human-readable ranges; unsupported mutation/reload methods throw                                       |
| `StoreLocation`        | coordinates, typed hours, normalized `storeData`/`storeId`, typed `merchant`, always-open/today/schedule helpers; unsupported mutation methods throw        |

## Exports and errors

The package root exports the default `Storefront` class, every resource above, and Fleetbase `lookup`. CommonJS returns a directly constructible default with the named exports attached. The `browser` subpath exposes the self-contained browser build.

Invalid storefront keys throw synchronously. Adapter/network errors reject their returned promises unchanged. Unsupported resource operations throw synchronously. Customer-authorized calls add `Customer-Token` to that request's headers without mutating global adapter headers.

See [the wire contract](api-contract.md) for HTTP routes, [the compatibility policy](compatibility.md) for supported environments, and the published `.d.ts`/`.d.cts` files for complete parameter and return types.
