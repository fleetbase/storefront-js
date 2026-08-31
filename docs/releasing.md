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
4. Protect `main` with the required CI, supported Node, packed-artifact, compatibility, dependency-review, security, and CodeQL checks.

## Release flow

1. Every consumer-visible pull request adds a Changeset.
2. `release-pr.yml` maintains a version and changelog pull request on `main`.
3. Review and merge the release pull request after the normal CI gates pass.
4. Create and publish a GitHub Release whose tag exactly matches `v<package.json version>`.
5. `publish.yml` checks out that immutable tag, requires tag/version parity, installs without a publish cache, runs the complete verification suite, and publishes through npm OpenID Connect.
6. Verify the npm version, dist-tags, provenance, tarball integrity, and a clean install before announcing the release.

## Prereleases

Use Changesets prerelease mode and publish release candidates under the npm `next` dist-tag. Validate application consumers against the registry artifact before leaving prerelease mode and publishing the stable version.

## Recovery

npm versions are immutable. Do not attempt to rewrite a published version. On failure, restore the previous dist-tag or publish a corrected patch release, then document the incident in the release notes.
