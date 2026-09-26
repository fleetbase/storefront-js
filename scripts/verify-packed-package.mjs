import { execFileSync } from 'node:child_process';
import { mkdtemp, realpath, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageManager = process.argv[2] ?? 'npm';
const requestedTarball = process.argv[3];

if (!requestedTarball) {
    throw new Error('Usage: node scripts/verify-packed-package.mjs <npm|pnpm|yarn|bun> <package.tgz>');
}

const supportedManagers = new Set(['npm', 'pnpm', 'yarn', 'bun']);
if (!supportedManagers.has(packageManager)) {
    throw new Error(`Unsupported package manager: ${packageManager}`);
}

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tarball = await realpath(resolve(requestedTarball));
const fixture = await mkdtemp(resolve(tmpdir(), `storefront-${packageManager}-`));
const environment = {
    ...process.env,
    npm_config_cache: resolve(repositoryRoot, '.cache/npm'),
    COREPACK_ENABLE_PROJECT_SPEC: '0',
};

const installArguments = {
    npm: ['install', '--ignore-scripts', tarball],
    pnpm: ['add', '--ignore-scripts', tarball],
    yarn: ['add', tarball],
    bun: ['add', '--ignore-scripts', tarball],
};

try {
    if (packageManager === 'yarn') {
        await writeFile(resolve(fixture, '.yarnrc.yml'), 'nodeLinker: node-modules\n');
    }

    await writeFile(
        resolve(fixture, 'package.json'),
        `${JSON.stringify(
            {
                name: `storefront-${packageManager}-consumer`,
                private: true,
                type: 'module',
                packageManager: packageManager === 'yarn' ? 'yarn@4.9.2' : undefined,
            },
            null,
            2
        )}\n`
    );

    execFileSync(packageManager, installArguments[packageManager], {
        cwd: fixture,
        env: environment,
        stdio: 'inherit',
    });

    await writeFile(
        resolve(fixture, 'esm.mjs'),
        `import Storefront, { Product } from '@fleetbase/storefront';\n` +
            `const client = new Storefront('store_' + 'a'.repeat(32));\n` +
            `if (!(client instanceof Storefront) || typeof Product !== 'function') process.exit(1);\n`
    );
    await writeFile(
        resolve(fixture, 'commonjs.cjs'),
        `const Storefront = require('@fleetbase/storefront');\n` +
            `const client = new Storefront('store_' + 'a'.repeat(32));\n` +
            `if (!(client instanceof Storefront) || Storefront.default !== Storefront || typeof Storefront.Product !== 'function') process.exit(1);\n`
    );
    await writeFile(
        resolve(fixture, 'consumer.ts'),
        `import Storefront, { Product } from '@fleetbase/storefront';\n` +
            `const client = new Storefront('store_' + 'a'.repeat(32));\n` +
            `client.search('coffee').then((products) => products[0] satisfies Product);\n`
    );
    await writeFile(
        resolve(fixture, 'consumer.cts'),
        `import Storefront = require('@fleetbase/storefront');\n` +
            `const client = new Storefront('store_' + 'a'.repeat(32));\n` +
            `const product = new Storefront.Product();\n` +
            `void client; void product;\n`
    );
    const typeConfigurations = {
        node16: { module: 'Node16', moduleResolution: 'Node16', include: ['consumer.ts', 'consumer.cts'] },
        nodenext: { module: 'NodeNext', moduleResolution: 'NodeNext', include: ['consumer.ts', 'consumer.cts'] },
        bundler: { module: 'ESNext', moduleResolution: 'Bundler', include: ['consumer.ts'] },
    };

    for (const [name, configuration] of Object.entries(typeConfigurations)) {
        await writeFile(
            resolve(fixture, `tsconfig.${name}.json`),
            `${JSON.stringify(
                {
                    compilerOptions: {
                        strict: true,
                        noEmit: true,
                        target: 'ES2022',
                        module: configuration.module,
                        moduleResolution: configuration.moduleResolution,
                        skipLibCheck: false,
                    },
                    include: configuration.include,
                },
                null,
                2
            )}\n`
        );
    }

    execFileSync(process.execPath, ['esm.mjs'], { cwd: fixture, env: environment, stdio: 'inherit' });
    execFileSync(process.execPath, ['commonjs.cjs'], { cwd: fixture, env: environment, stdio: 'inherit' });
    for (const name of Object.keys(typeConfigurations)) {
        execFileSync(resolve(repositoryRoot, 'node_modules/.bin/tsc'), ['--project', resolve(fixture, `tsconfig.${name}.json`)], {
            cwd: fixture,
            env: environment,
            stdio: 'inherit',
        });
    }
} finally {
    await rm(fixture, { recursive: true, force: true });
}
