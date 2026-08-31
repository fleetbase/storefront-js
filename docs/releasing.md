# Release process

## One-time repository setup

1. Create a protected GitHub environment named `npm-production` and require release-owner approval.
2. Configure npm trusted publishing for package `@fleetbase/storefront`:
    - provider: GitHub Actions;
    - organization: `fleetbase`;
    - repository: `storefront-js`;
    - workflow filename: `publish.yml`;
    - environment: `npm-production`;
    - allowed action: publish.
3. After the first successful trusted publish, disable token-based publishing and revoke the old automation token.
4. Create a `storefront-smoke` environment with the public, non-production `FLEETBASE_STOREFRONT_PUBLIC_KEY` secret and optional `FLEETBASE_STOREFRONT_HOST` variable.
5. Protect `main` with the required quality, supported Node, packed-artifact, framework/package-manager compatibility, mutation, dependency-review, security, and CodeQL checks.

## Release flow

1. Every consumer-visible pull request adds a Changeset.
2. `release-pr.yml` maintains a version and changelog pull request on `main`.
3. Review and merge the release pull request after the normal CI gates pass.
4. Create and publish a GitHub Release whose tag exactly matches `v<package.json version>`.
5. `publish.yml` checks out that immutable tag, requires tag/version parity, runs the complete suite, packs once, verifies that tarball, publishes those exact bytes through npm OpenID Connect, verifies registry metadata, and attaches the tarball and SHA-256 checksum to the GitHub Release.
6. Verify the npm dist-tags, provenance, attached checksum, and clean registry installs before announcing the release.

## Prereleases

Use Changesets prerelease mode and publish release candidates under the npm `next` dist-tag. Validate application consumers against the registry artifact before leaving prerelease mode and publishing the stable version.

An npm prerelease and its later stable version are necessarily different immutable package versions. Validate each from its own packed artifact; never claim that `1.2.0-rc.N` and `1.2.0` are byte-identical. Within each version, CI verifies and publishes one tarball without rebuilding it.

## Workflow maintenance

Third-party actions are pinned to reviewed commit SHAs. Dependabot checks action and npm updates weekly; review upstream release notes before accepting a changed SHA. The live smoke runs weekly and on demand, is read-only, has a ten-minute timeout, and never has publish permissions.

## Recovery

npm versions are immutable. Do not attempt to rewrite a published version. On failure, restore the previous dist-tag or publish a corrected patch release, then document the incident in the release notes.
