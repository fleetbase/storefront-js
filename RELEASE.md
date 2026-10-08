> v2.0.0 ~ "Built on the core SDK v2, with realtime socket tokens"

---

## Highlights

- Builds on `@fleetbase/sdk` 2 as a regular dependency instead of a bundled copy of 1.2.13. Requests use the core SDK's Fetch transport; axios is no longer included.
- Applications that also use the core SDK share one copy of it, so resources, adapters and `instanceof` checks match on both sides.
- `customer.socketToken()` mints a customer-scoped realtime token (`POST customers/socket-token`) for authenticated socket channels.

## Breaking changes

- Resources follow core SDK 2 behaviour. For example, `getAttribute(name, fallback)` returns the fallback for `null` values as well as missing ones, and `Point` serializes as GeoJSON `[longitude, latitude]`.
- Signed-out customer requests no longer send an empty `Customer-Token` header.

The Storefront API surface (constructor, stores, actions and resource methods) is unchanged. Applications that also import `@fleetbase/sdk` should use v2.

---

## Need help?

- [GitHub Discussions](https://github.com/fleetbase/fleetbase/discussions)
- [Discord](https://discord.gg/HnTqQ6zAVn)
