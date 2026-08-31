import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const requestedTarball = process.argv[2];

if (!requestedTarball) {
    throw new Error('Usage: node scripts/verify-package-artifact.mjs <package.tgz>');
}

const tarball = resolve(requestedTarball);
const compressedBytes = (await stat(tarball)).size;
const fixture = await mkdtemp(join(tmpdir(), 'storefront-artifact-'));

async function directorySize(path) {
    let bytes = 0;
    for (const entry of await readdir(path, { withFileTypes: true })) {
        const entryPath = join(path, entry.name);
        bytes += entry.isDirectory() ? await directorySize(entryPath) : (await stat(entryPath)).size;
    }
    return bytes;
}

try {
    execFileSync('tar', ['-xzf', tarball, '-C', fixture]);
    const packageRoot = join(fixture, 'package');
    const unpackedBytes = await directorySize(packageRoot);

    assert.ok(compressedBytes <= 400 * 1024, `Compressed package exceeds 400 KiB: ${compressedBytes} bytes`);
    assert.ok(unpackedBytes <= 1800 * 1024, `Unpacked package exceeds 1.8 MiB: ${unpackedBytes} bytes`);

    for (const path of ['dist/esm/storefront.js', 'dist/cjs/storefront.cjs', 'dist/@storefront.min.js', 'types/storefront.d.ts', 'types/storefront.d.cts', 'README.md', 'LICENSE.md']) {
        assert.ok((await stat(join(packageRoot, path))).isFile(), `Package is missing ${path}`);
    }

    for (const path of ['dist/esm/storefront.js.map', 'dist/cjs/storefront.cjs.map', 'dist/@storefront.min.js.map']) {
        const sourceMap = JSON.parse(await readFile(join(packageRoot, path), 'utf8'));
        assert.ok(Array.isArray(sourceMap.sources) && sourceMap.sources.length > 0, `${path} has no sources`);
        assert.equal(sourceMap.sourcesContent?.length, sourceMap.sources.length, `${path} has incomplete source content`);
        assert.equal(typeof sourceMap.mappings, 'string', `${path} has invalid mappings`);
    }

    console.log(`Package budgets passed: ${compressedBytes} compressed bytes, ${unpackedBytes} unpacked bytes.`);
} finally {
    await rm(fixture, { recursive: true, force: true });
}
