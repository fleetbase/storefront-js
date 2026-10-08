# Changelog

Release branches update this file with the user-visible changes included in each package version.

## 2.0.0

- Built on `@fleetbase/sdk` 2 as a regular dependency instead of a bundled copy of 1.2.13. Requests use the core SDK's Fetch transport, and axios is no longer included.
- Resources follow core SDK 2 behaviour; for example, `getAttribute(name, fallback)` returns the fallback for `null` values as well as missing ones.
- Signed-out customer requests no longer send an empty `Customer-Token` header.
- Added `customer.socketToken()` for authenticated realtime channels.

## 1.2.0

- Modernized the maintained SDK source with strict TypeScript while preserving the v1.1.14 public and request contracts.
- Added current marketplace and network helpers aligned with the Storefront and Core APIs.
- Added genuine ESM and CommonJS builds, browser and server compatibility, and generated TypeScript declarations.
- Added exact 100% statement, branch, function, and line coverage plus critical-path mutation testing.
- Added packed-package verification across npm, pnpm, Yarn, Bun, Vite, webpack, Next.js, and Ember.
- Added protected npm trusted publishing, provenance, checksummed GitHub release artifacts, dependency review, and CodeQL.

## 1.1.14

The historical release predates automated changelog generation. See the repository's GitHub releases for earlier changes.
