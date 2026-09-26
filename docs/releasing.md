# Release process

## One-time repository setup

1. Ensure the repository can inherit the organization `_GITHUB_AUTH_TOKEN` secret required by the shared release-tag workflow.
2. Create a protected GitHub environment named `npm-production` and require release-owner approval.
3. Configure npm trusted publishing for package `@fleetbase/storefront`:
    - provider: GitHub Actions;
    - organization: `fleetbase`;
    - repository: `storefront-js`;
    - workflow filename: `publish.yml`;
    - environment: `npm-production`;
    - allowed action: publish.
4. After the first successful trusted publish, disable token-based publishing and revoke the old automation token.
5. Create a `storefront-smoke` environment with the public, non-production `FLEETBASE_STOREFRONT_PUBLIC_KEY` secret and optional `FLEETBASE_STOREFRONT_HOST` variable.
6. Protect `main` and active `release/**` branches with the required quality, supported Node, packed-artifact, framework/package-manager compatibility, mutation, dependency-review, security, and CodeQL checks.

## Release flow

1. Collect consumer-visible work on a branch named `release/v<version>` created from current `main`.
2. Set `package.json` to that exact version, update `CHANGELOG.md`, and replace `RELEASE.md` with release-specific notes whose first line names `v<version>`.
3. Target feature pull requests for the release at the release branch, then merge them only after their normal CI gates pass.
4. Keep the release pull request targeted at `main`. Confirm its complete quality, runtime, packed-artifact, framework/package-manager, mutation, dependency-review, security, CodeQL, and application-acceptance gates.
5. Merge the release pull request. `release.yml` validates the branch, package version, and release notes through the organization release workflow and pushes the immutable `v<version>` tag.
6. The tag starts `publish.yml`, which checks out that exact revision, reruns the complete suite, packs and verifies one tarball, publishes those bytes through npm OpenID Connect, verifies registry metadata, and creates the GitHub Release with the tarball and SHA-256 checksum attached.
7. Verify the npm dist-tag, provenance, GitHub Release, attached checksum, and clean registry installs before announcing the release.

## Prereleases

Use a branch such as `release/v1.2.0-rc.1` for a release candidate. The publish workflow detects the prerelease suffix and publishes it under the npm `next` dist-tag. Validate application consumers against the registry artifact before preparing the stable release branch.

An npm prerelease and its later stable version are necessarily different immutable package versions. Validate each from its own packed artifact; never claim that `1.2.0-rc.N` and `1.2.0` are byte-identical. Within each version, CI verifies and publishes one tarball without rebuilding it.

## Workflow maintenance

Third-party actions are pinned to reviewed commit SHAs. Dependabot checks action and npm updates weekly; review upstream release notes before accepting a changed SHA. The live smoke runs weekly and on demand, is read-only, has a ten-minute timeout, and never has publish permissions.

## Recovery

npm versions are immutable. Do not attempt to rewrite a published version. On failure, restore the previous dist-tag or publish a corrected patch release, then document the incident in the release notes.

The publish workflow is retry-safe only when an existing registry version has exactly the same SHA-512 integrity as the locally verified tarball. It refuses to continue when the bytes differ.
