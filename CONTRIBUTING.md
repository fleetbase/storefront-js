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
```

## Compatibility

Preserve the default `Storefront` constructor, `Storefront.newInstance`, named resource exports, store properties, arguments and defaults, request contracts, returned resource classes, and synchronous error behavior. Intentional breaking changes require a major Changeset and migration documentation.

## Changesets

User-visible changes require a Changeset:

```sh
pnpm changeset
```

Use an empty Changeset only for internal changes that do not affect consumers. Release PRs are generated automatically from Changesets.

## Pull requests

- Keep unrelated work out of the branch.
- Update declarations, tests, and documentation with implementation changes.
- Run `pnpm run check` before pushing.
- Include the commands and results that verify the change.
