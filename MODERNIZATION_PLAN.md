# Storefront JavaScript SDK modernization and release plan

Status: implementation complete on PR #12; prerelease acceptance and protected publication remain post-merge release gates

Audit baseline: `main` at `dbc6456` (`v1.1.14`) on 2026-08-31

Proposed release: `v1.2.0` if every compatibility gate passes; otherwise `v2.0.0`

## Implementation checkpoint

PR #12 now contains the strict TypeScript refactor, executable API/wire snapshots, exact 100% maintained-source coverage, generated declarations, genuine ESM/CommonJS/browser exports, packed npm/pnpm/Yarn/Bun fixtures, Vite/webpack/Next.js/Ember-Embroider builds, mutation testing, immutable action pins, dependency automation, a non-destructive live smoke workflow, Changesets release PR automation, npm trusted-publishing workflow, checksummed release artifacts, and updated public documentation.

Final local evidence on Node 24: 364/364 statements, 306/306 branches, 189/189 functions, and 343/343 lines; 86.32% mutation score across 190 critical-path mutants; zero known production advisories; and a 360,212-byte compressed/1,767,919-byte unpacked tarball. The exact tarball passed ESM, callable CommonJS, Node16/NodeNext/Bundler declarations, pnpm clean-room installation, Vite 8, webpack 5, Next.js 16 client/server, and Ember 7 Vite/Embroider builds.

The upstream `@fleetbase/sdk@1.2.13` package cannot safely remain external because its advertised CommonJS file is inside a `type: module` boundary and webpack reports its ESM entry as having no exports. Storefront therefore bundles a patched build-time copy into every runtime artifact and no longer installs the vulnerable upstream graph in consuming applications. This compatibility boundary is covered by packed CommonJS and framework fixtures and can be removed after an upstream packaging/security release.

Review and merge do not themselves publish `v1.2.0`. The owner-only release gates remain: configure the documented GitHub environments and npm trusted publisher, record Storefront Web/App and marketplace acceptance against a prerelease, approve the protected production environment, and verify npm provenance and attached checksums after the first publish.

## Executive assessment

The SDK can be modernized without intentionally breaking its public API, but it should not be refactored or released in one unverified step. The current package has almost no behavioral protection, a broken CommonJS entry point, undiscoverable and stale type declarations, an oversized and poorly scoped tarball, outdated CI/release mechanics, and vulnerable production dependencies inherited from `@fleetbase/sdk`.

The safe delivery strategy is:

1. capture the existing public and wire-level behavior as executable contracts;
2. fix packaging, dependency security, and CI/release foundations;
3. refactor incrementally to typed, modular source while running old-versus-new parity tests;
4. prove the packed artifact in real consumer fixtures;
5. publish a release candidate before promoting the exact same artifact to `latest`.

“100% coverage” in this plan means 100% statements, branches, functions, and lines across maintained source, enforced in CI. It is a release gate, not a substitute for contract, mutation, package, browser, and integration testing.

## Audit findings

### Repository and release state

- The latest source and GitHub release is `v1.1.14`, committed and released on 2025-02-11.
- Open PR [#11](https://github.com/fleetbase/storefront-js/pull/11) adds marketplace SDK helpers and seven deterministic contract tests. It is mergeable, has green checks, and is currently blocked by repository review/merge policy. Its proposed APIs must be incorporated into the compatibility baseline before the refactor begins.
- There are no open GitHub issues and no automated version/changelog release PR mechanism.
- The source contains 1,138 JavaScript lines across 30 files. `src/cart-store.js` and `src/customer-store.js` appear to be legacy implementations outside the current entry graph; they must be proven unreachable before removal.

### Test and quality baseline

- The only test on `main` asserts that `new Storefront(...)` creates an instance. It does not make or validate an API request.
- Baseline coverage measured with c8 `--all` is 44.90% statements, 82.85% branches, 3.12% functions, and 44.90% lines. Most apparent line coverage comes from module evaluation and resource registration, not exercised behavior.
- `pnpm test`, `pnpm run lint`, formatting validation, a frozen install, and the bundle build pass locally on Node 24.
- `pnpm run lint:tests` fails because the ESLint configuration does not define Mocha globals. CI never invokes this script.
- Tests require secret-shaped environment configuration even though the current test is logically a unit test. Pull requests from forks therefore cannot have a fully deterministic, secret-free validation path.
- There are no coverage thresholds, negative-path tests, mutation tests, type tests, packed-package tests, browser tests, or framework/package-manager consumer tests.

### Package and runtime compatibility

- ESM import works on Node 24 and exposes the documented default plus named resources.
- CommonJS is broken. The `require` export points to `dist/cjs/storefront.js`, but the package-level `"type": "module"` makes that `.js` file ESM. Node loads an empty namespace and `require('@fleetbase/storefront')` is not constructible. Node’s package guidance calls out this exact mixed-module failure mode.
- Declarations are checked into `types/`, but `package.json` has no `types` field and no `types` export condition. TypeScript consumers cannot reliably discover them.
- Declarations already drift from runtime: `FoodTruck`, `foodTrucks`, instance `lookup`, and several action/helper surfaces are absent or incomplete.
- The Rollup build minifies and fully bundles all runtime dependencies into ESM, CJS, and UMD output. This produces approximately 188 KB per main file, duplicates dependencies in consumer applications, impairs tree-shaking/debugging, and can create class-identity hazards for `instanceof Adapter`/resource checks.
- The packed package is 896,392 bytes compressed and 4,193,537 bytes unpacked with 86 files. It ships source, tests, CI/editor/config files, declarations that are not wired up, and stale historical bundles not generated by the current Rollup configuration.
- Package metadata lacks `files`, `engines`, `packageManager`, `sideEffects`, `repository`, `bugs`, `homepage`, and an explicit browser compatibility policy.
- Only the root export is declared. There is no supported utility/resource subpath strategy and no compatibility validation for bundlers that interpret conditional exports differently.

### API and implementation risks to characterize

The refactor must preserve the default `Storefront` constructor, `Storefront.newInstance`, named resource exports, `lookup`, store properties, action names, method arguments/defaults, returned Fleetbase resource/collection types, adapter calls, request paths/payloads/options, and synchronous error behavior.

Tests must explicitly characterize these current risk areas before changing them:

- `setAdapter()` changes the root adapter but not already-created stores.
- `search()` constructs products without passing the active adapter.
- resource helpers inconsistently preserve adapters when hydrating nested data.
- headers are mutated through `adapter.setHeaders()` for customer-authorized requests; isolation between customers/requests is not proven.
- `StoreLocation.hours` assumes an array and can throw for absent hours; PR #11 proposes a guard.
- `Product.getReviews()` sends the product ID in a parameter named `store`; the backend contract must decide whether this is compatibility behavior or a defect.
- unsupported resource methods throw inconsistent messages, including copy/paste references to store locations.
- review media helpers are exported but empty.
- legacy store classes duplicate current action-based implementations.

These observations are investigation targets, not authorization to silently “correct” behavior. If a confirmed defect has consumers, preserve the old behavior where practical, add a corrected API, deprecate the old behavior, and document the migration.

### Dependency and supply-chain state

- `@fleetbase/sdk@1.2.13` is both the locked and current registry version, so a normal dependency update cannot resolve its vulnerable transitive graph.
- `pnpm audit --prod` reports 34 production advisories: 1 critical, 14 high, 18 moderate, and 1 low. They include `axios`, `form-data`, `follow-redirects`, and `@babel/runtime` through `@fleetbase/sdk`.
- The current workflow tests only Node 18, which reached end of life on 2025-03-27. As of this audit, Node 22 and 24 are maintained LTS lines and Node 26 is Current.
- Actions use mixed old major versions, `pnpm: latest`, an ineffective cache keyed from nonexistent `package-lock.json` files, broad implicit token permissions, and no concurrency or timeouts.
- Publishing is triggered by any `v*` tag, rebuilds independently for npm and GitHub Packages, writes tokens into `.npmrc`, does not verify tag/package version parity, and provides no npm trusted publishing/provenance or protected release environment.

## Target architecture and compatibility contract

### Source architecture

- Migrate maintained source to strict TypeScript in small slices. Keep the runtime API names and JavaScript calling conventions unchanged.
- Separate modules into `client`, `stores/actions`, `resources`, `transport/adapter-contract`, and side-effect-free `utils` layers.
- Centralize resource hydration so every nested resource receives the active adapter and every collection has one construction path.
- Centralize authorized customer request headers without leaking mutable authorization state across calls.
- Replace duplicated legacy stores with compatibility shims first; remove them only after import-graph, packed-artifact, and consumer tests prove they are not reachable.
- Retain Rollup initially to reduce tool churn. Remove Babel if the agreed browser target can consume the TypeScript/Rollup output. Emit unminified, externalized ESM and CJS library builds plus a separately minified, self-contained browser IIFE/UMD build.
- Emit declarations from source instead of hand-maintaining them. Treat declaration generation and API report diffs as build failures.

### Public API baseline

Create and review `tests/contracts/public-api.snapshot.json` from `v1.1.14` plus PR #11 before implementation. It must cover:

- default and named exports;
- class inheritance and resource registration names;
- constructor options/defaults and validation errors;
- client store property names;
- every public method, getter, parameter default, and unsupported-operation error;
- adapter call method, URL, parameters/body, request options, and header behavior;
- sync versus async failure timing;
- returned class, collection, adapter identity, and hydration behavior;
- serialized package entry points and TypeScript declarations.

Run the same contract vectors against the frozen `v1.1.14` implementation and the refactored implementation. PR #11 vectors become part of the baseline after it is merged. Any intentional delta needs an explicit compatibility decision, changelog entry, test, and SemVer assessment.

### Supported environments

The release should advertise only combinations proven from the packed tarball:

- Node.js: 22 and 24 as supported LTS lines; Node 26 as an allowed-to-fail forward-compatibility job until it reaches LTS.
- Modules: native ESM and genuine CommonJS (`.cjs` or a nested CommonJS package boundary), with aligned `.d.ts`/`.d.cts` declarations.
- Browsers: an explicit Browserslist-derived target agreed with Storefront applications; no DOM access at import time, so SSR and workers can import safely.
- Bundlers/frameworks: Vite consumer, webpack consumer, Next.js server/client import, Ember/Embroider consumer, and one direct browser bundle smoke test. Add Angular/Vue/Svelte fixtures only where they exercise a distinct resolver or runtime path rather than duplicating Vite.
- Package managers: npm, pnpm, Yarn Berry, and Bun install/import smoke tests using the exact `npm pack` tarball. Corepack metadata must pin the repository’s pnpm version.
- TypeScript: `node16`, `nodenext`, and `bundler` resolution fixtures, including default/named imports and CommonJS consumption.

Deno, React Native, Cloudflare Workers, or other runtimes may be added only after their adapter and dependency graph pass dedicated tests; they should not be claimed from bundling alone.

## Delivery plan

### Phase 0 — decisions, ownership, and upstream unblock

1. Review and either merge or explicitly supersede PR #11. Do not let the refactor accidentally erase its marketplace contract work.
2. Decide whether undocumented historical deep imports and checked-in browser filenames are supported. Record any known consumers before changing the `files`/`exports` surface.
3. Open/complete an `@fleetbase/sdk` security release that upgrades or replaces the vulnerable transitive dependencies, then set the Storefront SDK’s minimum compatible version to that fixed release.
4. Configure npm trusted publishing for `fleetbase/storefront-js` and the exact release workflow, plus a protected `npm-production` GitHub environment. Keep the existing npm token until the first trusted publish succeeds, then revoke it.
5. Agree on the maintained Node/browser policy and release owner.

Exit criteria: PR #11 sequencing is resolved; upstream security work has an owner and target; release permissions and supported-runtime decisions are recorded.

### Phase 1 — deterministic baseline and compatibility harness

1. Replace live-secret dependence with a recording/fake adapter that captures method, URL, body/query, options, and headers.
2. Port tests to Vitest with explicit Node test globals, V8 coverage, deterministic clocks/locales, and no network by default.
3. Build the complete public/wire contract suite described above, including PR #11 behavior when applicable.
4. Add unit and failure-path tests for every resource, store action, utility, constructor branch, hydration path, getter, and error.
5. Add a small opt-in live Storefront API smoke suite triggered manually and on a schedule. It validates integration but is not the source of PR determinism or unit coverage.
6. Add mutation testing on request construction, authentication headers, hydration, currency/hours logic, and validation. Surviving mutants require stronger assertions or a documented exclusion.

Exit criteria: all maintained current source is at 100% statements/branches/functions/lines; contract snapshots are reviewed; mutation targets meet the agreed score; secret-free tests pass from a clean checkout.

### Phase 2 — package boundary and build repair

1. Add precise `files`, `types`, `engines`, `packageManager`, `sideEffects`, `repository`, `bugs`, `homepage`, and `publishConfig` metadata.
2. Define conditional exports with `types` first and valid `import`, `require`, `browser`/`default` targets. Use `.cjs` and `.d.cts` where required by Node/TypeScript semantics.
3. Preserve `main` and `module` compatibility for older bundlers while making them point to the same tested artifacts.
4. Externalize runtime dependencies from ESM/CJS, retain a self-contained browser build, and stop minifying module builds.
5. Delete stale generated artifacts and prevent them from entering the tarball. Decide whether `dist/` remains committed; whichever policy is chosen must be enforced and reproducible.
6. Add `prepack`/`pack:check` so a clean build, declarations, license/readme, and package manifest are always present before publication.
7. Run `publint`, Are the Types Wrong, package-size limits, source-map checks, ESM/CJS execution, and consumer fixtures against the tarball—not the source tree.

Exit criteria: CommonJS and ESM both construct a Storefront instance; TypeScript resolves every public API; the tarball contains only intentional files; package lint/type tools are clean; size budgets are met and recorded.

### Phase 3 — complete internal refactor behind parity gates

Refactor one vertical behavior at a time in this order:

1. pure utilities and shared types;
2. resource/store factory and hydration;
3. products, categories, reviews, food trucks;
4. stores, networks, locations, and hours;
5. cart actions and derived values;
6. customer authentication/authorized requests;
7. delivery quotes and checkout/payment flows;
8. root Storefront construction, lookup/search/about, and adapter replacement.

For each slice:

- add/confirm characterization and negative-path tests first;
- migrate implementation and declarations together;
- run old-versus-new public/wire contracts;
- keep 100% coverage across all four metrics;
- run mutation targets relevant to the slice;
- update API documentation and a Changeset;
- remove compatibility code only with evidence it is unreachable or after an explicit deprecation cycle.

Exit criteria: no maintained runtime JavaScript remains outside intentional compatibility/build files; all public behavior is parity-tested; no `any` leaks into the public declaration surface without a reviewed reason; dead code is removed with tests proving package/API integrity.

### Phase 4 — CI modernization

Create separate least-privilege workflows/jobs:

1. **PR quality:** frozen install, format check, lint source/tests, strict typecheck, unit/contract tests, 100% coverage thresholds, build, API report, and `git diff --exit-code` for generated output.
2. **Runtime matrix:** Node 22 and 24 required; Node 26 forward-compatibility allowed to fail initially. Use pnpm’s native cache through `setup-node`, a pinned pnpm version, concurrency cancellation, job timeouts, and read-only permissions.
3. **Package compatibility:** pack once, upload the tarball, then test ESM/CJS/types, npm/pnpm/Yarn/Bun, bundler/framework fixtures, browser smoke, `publint`, Are the Types Wrong, and size budgets using that artifact.
4. **Security:** production audit at an agreed severity gate, lockfile/license review, dependency update automation, secret scanning, and CodeQL. Pin third-party actions to reviewed commit SHAs and document update cadence.
5. **Live smoke:** scheduled/manual, environment-scoped secrets, non-destructive test store, explicit timeout, and failure notification. It must never publish.

Required branch protection should include quality, supported Node matrix, package compatibility, security, and review. Generated release PRs must receive the same checks.

### Phase 5 — automatic, reviewable release CI

Adopt Changesets because it makes SemVer intent and user-facing notes reviewable per PR and maintains a release PR. Use separate jobs/actions so version-PR permissions do not grant publish permissions.

Release flow:

1. Every user-visible PR adds a Changeset; CI reports whether one is missing without blocking test-only/internal changes that use an empty Changeset.
2. Changesets maintains a version/changelog PR on `main`.
3. Merging that reviewed release PR runs all required CI again and creates one immutable packed artifact.
4. Publish the artifact first as `v1.2.0-rc.N` under npm dist-tag `next`.
5. Run clean-room installs, supported runtime/framework/package-manager tests, and the live non-destructive smoke suite against the registry release candidate.
6. On explicit protected-environment approval, promote/publish the exact verified artifact to npm `latest`; publish the same bytes to GitHub Packages only if that registry remains a supported requirement.
7. Create the signed `vX.Y.Z` tag and GitHub Release from the reviewed changelog, attach checksums/package metadata, and verify registry version, dist-tags, provenance, tarball integrity, and install smoke.
8. Automatically open a rollback/deprecation procedure on post-publish failure. npm packages are immutable: recovery means restoring dist-tags or publishing a fixed patch, never rewriting a version.

Use npm trusted publishing (OIDC) and automatic provenance rather than a long-lived npm automation token. Limit the publish job to `contents: write` and `id-token: write`, protect it with the release environment, and never publish directly from arbitrary tags or pull requests.

Exit criteria: a dry-run release in a temporary scope or prerelease version proves version PR → CI → immutable artifact → `next` → verification → GitHub Release; npm provenance is visible; no reusable write token remains.

### Phase 6 — documentation, release candidate, and stable release

1. Rewrite README installation for npm, pnpm, Yarn, Bun, ESM, CJS, browser, and TypeScript, using only proven examples.
2. Generate or maintain complete API documentation for the Storefront client, stores/actions, resources, adapters, returned promises/collections, errors, and browser/SSR support.
3. Publish a compatibility table, support policy, security policy, contributing/test guide, deprecation policy, changelog, and migration guide.
4. Correct stale repository/license/contribution links and bundle-size badges.
5. Release `v1.2.0-rc.N`, collect application-level validation from Storefront Web/App and marketplace consumers, then promote to `v1.2.0` only if every gate passes.

If parity cannot be maintained—especially default CommonJS shape, undocumented deep imports confirmed in use, or consumer-visible class identity—the release becomes `v2.0.0` with compatibility shims and a migration guide rather than disguising a break as a minor release.

## Required test inventory for 100% coverage

Coverage work is complete only when the assertions exercise behavior and failure paths in these groups:

- key validation for store/network/invalid/non-string/boundary-length inputs;
- constructor defaults, custom host/version/namespace/adapter/debug, store wiring, and `newInstance`;
- `about`, `lookup`, search query merging, mapping, empty responses, and adapter rejection;
- serialize/registry lookup and adapter replacement/synchronization;
- every action’s HTTP verb, path, body/query, options, resource-ID coercion, and response hydration;
- email/phone/SMS/social login, creation codes, device sync, authorized headers, order/place hydration, and thrown/rejected errors;
- cart add/update/remove/empty/retrieve, resource argument coercion, contents/subtotal/product checks, empty states, refresh/delete, and unsupported actions;
- checkout initialize/capture/Stripe helpers for raw IDs and resources, optional params/options, and errors;
- store/network/category/product/review/location/hour/payment/food-truck getters and helpers, missing/invalid data, nested adapter identity, collections, and unsupported actions;
- delivery quote constructor overloads, ID coercion, single/list responses, formatting, and rejection;
- all utilities across null/undefined/objects/collections/arrays/functions/invalid locale/currency/phone/country cases;
- root and subpath export shapes, ESM/CJS default and named consumption, declarations, tree-shaking, SSR import, browser global, and tarball contents;
- regression vectors for every confirmed defect and every marketplace behavior from PR #11.

Generated output, declaration-only scaffolding, and test fixtures are excluded from runtime coverage. Maintained source is not excluded merely because it is hard to test. Any coverage ignore directive requires a code-review explanation and must not reduce the global 100% thresholds.

## Pull-request sequence

Keep reviews bounded and bisectable:

1. PR #11 decision/merge and compatibility-baseline refresh.
2. Upstream `@fleetbase/sdk` security remediation and Storefront dependency update.
3. Test runner, fake adapter, contract snapshots, and 100% behavioral coverage.
4. Package metadata/module/type/tarball repair plus consumer fixtures.
5. CI/security workflow modernization.
6. Changesets and trusted-publishing dry run.
7. Typed refactor slices, one or more PRs following the Phase 3 order.
8. Documentation/migration/support policy.
9. `v1.2.0-rc.N` release PR and ecosystem validation.
10. Stable release promotion.

Do not combine the upstream security fix, packaging change, full refactor, and release automation into one unreviewable PR. Each PR must leave the branch releasable or explicitly marked prerelease-only.

## Release definition of done

The modernization is complete only when all of the following are evidenced in CI or release artifacts:

- 100% statements, branches, functions, and lines on maintained source;
- contract parity with `v1.1.14` plus accepted PR #11 APIs, with every intentional delta documented;
- meaningful failure-path assertions and mutation testing on critical behavior;
- zero known critical/high production advisories, with lower-severity exceptions time-bound and documented;
- Node 22/24, ESM/CJS, TypeScript resolution, browser, SSR, framework/bundler, and package-manager fixtures green from the packed tarball;
- valid discoverable declarations and reviewed public API report;
- deterministic build and intentional tarball manifest/size;
- secret-free PR CI, least-privilege pinned workflows, branch protection, and dependency automation;
- reviewed Changeset/changelog, prerelease verification, npm trusted-publishing provenance, GitHub Release, checksum/integrity verification, and post-publish install smoke;
- updated README/API/migration/support/security/contributing documentation;
- Storefront Web/App and marketplace consumer acceptance recorded for the release candidate.

## Primary references

- [Node.js package entry points and conditional exports](https://nodejs.org/api/packages.html)
- [Node.js package publishing and dual ESM/CommonJS pitfalls](https://nodejs.org/en/learn/modules/publishing-a-package)
- [Node.js maintained release lines](https://nodejs.org/en/about/previous-releases)
- [npm package.json fields](https://docs.npmjs.com/files/package.json/)
- [npm trusted publishing and automatic provenance](https://docs.npmjs.com/trusted-publishers/)
- [GitHub Actions: publishing Node.js packages](https://docs.github.com/en/actions/tutorials/publish-packages/publish-nodejs-packages)
- [TypeScript: publishing declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
- [TypeScript conditional exports and module resolution](https://www.typescriptlang.org/docs/handbook/modules/reference.html)
- [Changesets release action](https://github.com/changesets/action)
- [publint package compatibility linting](https://github.com/publint/publint)
