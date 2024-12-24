const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const pkg = require('./package.json');

const inputFiles = ['src/storefront.js', 'src/resolver.js'];

module.exports = [
    // Base UMD config for storefront.js
    {
        input: 'src/storefront.js',
        plugins: [
            nodeResolve({
                browser: true,
                modulesOnly: true,
            }),
            babel({
                babelHelpers: 'bundled',
            }),
            terser(),
        ],
        output: [
            {
                file: `dist/${pkg.name}.min.js`,
                format: 'umd',
                name: '@fleetbase/storefront',
                esModule: false,
                exports: 'named',
                sourcemap: true,
            },
        ],
        watch: {
            exclude: ['node_modules/**'],
            include: ['lib/**'],
        },
    },
    // Additional UMD config for resolver.js
    {
        input: 'src/resolver.js',
        plugins: [
            nodeResolve({
                browser: true,
                modulesOnly: true,
            }),
            babel({
                babelHelpers: 'bundled',
            }),
            terser(),
        ],
        output: [
            {
                file: `dist/${pkg.name}/resolver.min.js`,
                format: 'umd',
                name: '@fleetbase/storefront/resolver',
                esModule: false,
                exports: 'named',
                sourcemap: true,
            },
        ],
        watch: {
            exclude: ['node_modules/**'],
            include: ['lib/**'],
        },
    },
    // Config for ESM and CJS
    {
        input: inputFiles,
        plugins: [
            nodeResolve({
                browser: true,
                modulesOnly: true,
            }),
            babel({
                babelHelpers: 'bundled',
            }),
            terser(),
        ],
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
                exports: 'named',
                sourcemap: true,
            },
            {
                dir: 'dist/cjs',
                format: 'cjs',
                exports: 'named',
                sourcemap: true,
            },
        ],
        external: ['axios'],
    },
];
