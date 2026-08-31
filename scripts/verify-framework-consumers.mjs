import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, realpath, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const requestedTarball = process.argv[2];

if (!requestedTarball) {
    throw new Error('Usage: node scripts/verify-framework-consumers.mjs <package.tgz>');
}

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tarball = await realpath(resolve(requestedTarball));
const cacheRoot = resolve(repositoryRoot, '.cache/framework-consumers');
await mkdir(cacheRoot, { recursive: true });
const fixture = await mkdtemp(resolve(cacheRoot, 'fixture-'));
const environment = {
    ...process.env,
    NEXT_TELEMETRY_DISABLED: '1',
    npm_config_cache: resolve(repositoryRoot, '.cache/npm'),
};
const executable = (name) => resolve(repositoryRoot, 'node_modules/.bin', name);
const write = (path, contents) => writeFile(resolve(fixture, path), contents);
const adapterSource = `{ get() { return Promise.resolve([]); }, post() { return Promise.resolve({}); }, put() { return Promise.resolve({}); }, delete() { return Promise.resolve({}); } }`;

try {
    await write('package.json', `${JSON.stringify({ name: 'storefront-framework-consumers', private: true, type: 'module' }, null, 2)}\n`);
    execFileSync('npm', ['install', '--ignore-scripts', '--package-lock=false', tarball], {
        cwd: fixture,
        env: environment,
        stdio: 'inherit',
    });

    await write(
        'vite-entry.js',
        `import Storefront, { Product } from '@fleetbase/storefront';\n` +
            `export const client = new Storefront('store_' + 'a'.repeat(32), { adapter: ${adapterSource} });\n` +
            `export { Product };\n`
    );
    await write(
        'vite.config.mjs',
        `import { defineConfig } from 'vite';\n` +
            `export default defineConfig({ build: { lib: { entry: './vite-entry.js', formats: ['es'], fileName: 'bundle' }, outDir: 'dist-vite', emptyOutDir: true } });\n`
    );
    execFileSync(executable('vite'), ['build', '--config', 'vite.config.mjs'], {
        cwd: fixture,
        env: environment,
        stdio: 'inherit',
    });

    await write(
        'webpack-entry.js',
        `import Storefront, { Product } from '@fleetbase/storefront';\n` +
            `export const client = new Storefront('store_' + 'a'.repeat(32), { adapter: ${adapterSource} });\n` +
            `export { Product };\n`
    );
    await write(
        'webpack.config.mjs',
        `import { resolve } from 'node:path';\n` +
            `export default { mode: 'production', target: ['web', 'es2020'], entry: './webpack-entry.js', experiments: { outputModule: true }, output: { path: resolve(process.cwd(), 'dist-webpack'), filename: 'bundle.js', module: true, clean: true } };\n`
    );
    execFileSync(executable('webpack'), ['--config', 'webpack.config.mjs'], {
        cwd: fixture,
        env: environment,
        stdio: 'inherit',
    });

    await mkdir(resolve(fixture, 'app/server'), { recursive: true });
    await write('next.config.mjs', `export default { output: 'export' };\n`);
    await write('app/layout.js', `export default function Layout({ children }) { return <html><body>{children}</body></html>; }\n`);
    await write(
        'app/page.js',
        `'use client';\n` +
            `import Storefront from '@fleetbase/storefront';\n` +
            `const client = new Storefront('store_' + 'a'.repeat(32), { adapter: ${adapterSource} });\n` +
            `export default function Page() { return <main data-runtime="client">{client.version}</main>; }\n`
    );
    await write(
        'app/server/page.js',
        `import Storefront, { Product } from '@fleetbase/storefront';\n` +
            `const client = new Storefront('store_' + 'a'.repeat(32), { adapter: ${adapterSource} });\n` +
            `export default function ServerPage() { return <main data-product={Product.name}>{client.version}</main>; }\n`
    );
    execFileSync(executable('next'), ['build', '--webpack'], {
        cwd: fixture,
        env: environment,
        stdio: 'inherit',
    });

    const emberFixture = resolve(fixture, 'ember-consumer');
    execFileSync(
        'pnpm',
        ['dlx', 'ember-cli@7.2.0', 'new', 'ember-consumer', '--directory', emberFixture, '--skip-npm', '--skip-git', '--no-welcome', '--no-ember-data', '--ci-provider', 'none'],
        {
            cwd: fixture,
            env: environment,
            stdio: 'inherit',
        }
    );
    const emberPackagePath = resolve(emberFixture, 'package.json');
    const emberPackage = JSON.parse(await readFile(emberPackagePath, 'utf8'));
    emberPackage.dependencies = {
        '@fleetbase/storefront': `file:${tarball}`,
    };
    await writeFile(emberPackagePath, `${JSON.stringify(emberPackage, null, 2)}\n`);
    await writeFile(
        resolve(emberFixture, 'app/templates/application.gjs'),
        `import Storefront, { Product } from '@fleetbase/storefront';\n` +
            `const client = new Storefront('store_' + 'a'.repeat(32), { adapter: ${adapterSource} });\n` +
            `<template><main data-framework="ember" data-product={{Product.name}}>{{client.version}}</main></template>\n`
    );
    await writeFile(
        resolve(emberFixture, 'vite.config.mjs'),
        `import { defineConfig } from 'vite';\n` +
            `import { extensions, classicEmberSupport, ember } from '@embroider/vite';\n` +
            `import { babel } from '@rollup/plugin-babel';\n` +
            `export default defineConfig({ build: { minify: false, sourcemap: false }, plugins: [classicEmberSupport(), ember(), babel({ babelHelpers: 'runtime', extensions })] });\n`
    );
    execFileSync('npm', ['install', '--ignore-scripts', '--package-lock=false'], {
        cwd: emberFixture,
        env: environment,
        stdio: 'inherit',
    });
    execFileSync('npm', ['run', 'build'], {
        cwd: emberFixture,
        env: environment,
        stdio: 'inherit',
    });
} finally {
    await rm(fixture, { recursive: true, force: true });
}
