# Compatibility policy

## Supported matrix

| Area                  | Supported and verified                                     |
| --------------------- | ---------------------------------------------------------- |
| Node.js               | 22 and 24                                                  |
| Forward compatibility | Node.js 26, allowed to fail until it becomes LTS           |
| Modules               | Native ESM and directly constructible CommonJS             |
| TypeScript            | `node16`, `nodenext`, and `bundler` package resolution     |
| Package managers      | npm, pnpm, Yarn 4, and Bun                                 |
| Browser               | Self-contained UMD bundle with no DOM access during import |
| Server rendering      | Package import has no browser-global dependency            |
| Bundlers              | Vite 8 and webpack 5                                       |
| Frameworks            | Next.js 16 client/server and Ember 7 with Vite/Embroider   |

The CI matrix installs the exact packed tarball rather than linking the repository source. Claims are expanded only after a distinct runtime or resolver path has a maintained fixture.

## Package entry points

- `@fleetbase/storefront` selects ESM, CommonJS, and matching declarations through conditional exports.
- `@fleetbase/storefront/browser` selects the self-contained browser build for ESM consumers and the compatible CommonJS build for `require()` consumers.
- `@fleetbase/storefront/package.json` exposes package metadata.

Historical undocumented deep imports are not public API. Use named exports from the package root.

## Deprecation policy

Compatible additions ship in minor releases. A deprecated public API remains available for at least one minor release and is documented with its replacement. Removal or a consumer-visible change to exports, arguments, requests, resource types, or error timing requires a major release.
