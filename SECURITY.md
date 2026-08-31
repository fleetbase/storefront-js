# Security policy

## Supported versions

Security fixes are provided for the latest published minor release. Older releases may receive a patch when a safe backport is practical.

## Reporting a vulnerability

Do not open a public issue for an undisclosed vulnerability. Use GitHub's private vulnerability reporting for `fleetbase/storefront-js`, or email `security@fleetbase.io` with:

- the affected package version;
- reproduction steps or a proof of concept;
- the expected impact;
- any suggested mitigation.

Fleetbase will acknowledge receipt, validate the report, coordinate remediation and disclosure, and credit the reporter when requested and appropriate.

## Supply-chain controls

Pull requests run a production dependency audit, dependency review, CodeQL, deterministic tests, packed-artifact checks, and package-consumer tests. npm releases use a protected GitHub environment and OpenID Connect trusted publishing rather than a long-lived publish token.
