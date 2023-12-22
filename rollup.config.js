const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const pkg = require('./package.json');

const input = ['src/storefront.js'];

module.exports = [
    {
        // umd
        input,
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
    {
        // esm and cjs
        input,
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
