# Contributing

## Requirements

- Node.js 22 or 24
- pnpm 9.15.4 through Corepack or the pinned package manager metadata

## Local verification

```sh
pnpm install --frozen-lockfile
pnpm run check
```

Tests must be deterministic and must not require Storefront or Fleetbase secrets. Maintained runtime source is held to 100% statements, branches, functions, and lines. Add assertions for request verbs, paths, payloads, options, hydration, adapter identity, synchronous errors, and rejected requests rather than adding coverage-only execution.

For package changes, build one tarball and test the artifact rather than importing the source tree:

```sh
mkdir -p artifacts
pnpm pack --pack-destination artifacts
node scripts/verify-packed-package.mjs pnpm artifacts/*.tgz
node scripts/verify-framework-consumers.mjs artifacts/*.tgz
```

The framework gate builds Vite, webpack, Next.js client/server, and Ember Vite/Embroider consumers from the tarball. Critical request, authentication, hydration, hours/currency, and validation logic is mutation-tested separately with `pnpm run test:mutation`; the CI gate fails below an 80% mutation score.

## Compatibility

Preserve the default `Storefront` constructor, `Storefront.newInstance`, named resource exports, store properties, arguments and defaults, request contracts, returned resource classes, and synchronous error behavior. Intentional breaking changes require a major-version release branch and migration documentation.

## Release notes

User-visible changes must update the unreleased section of `CHANGELOG.md` or include clear release-note text in the pull request. The release owner moves those entries into the versioned section and updates `RELEASE.md` on `release/v<version>`.

Internal-only changes should say explicitly that they do not affect consumers.

## Pull requests

- Keep unrelated work out of the branch.
- Update declarations, tests, and documentation with implementation changes.
- Run `pnpm run check` before pushing.
- Include the commands and results that verify the change.
