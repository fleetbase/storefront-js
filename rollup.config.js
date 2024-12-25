import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

const input = ['src/storefront.js'];
const plugins = [
    nodeResolve({
        browser: true,
    }),
    commonjs(),
    babel({
        babelHelpers: 'bundled',
    }),
    terser(),
];

export default [
    {
        input,
        plugins,
        external: [],
        output: [
            {
                file: `dist/@storefront.min.js`,
                format: 'umd',
                name: '@fleetbase/storefront',
                esModule: false,
                exports: 'named',
                sourcemap: true,
                globals: {
                    '@fleetbase/sdk': 'FleetbaseSdk',
                    'countries-list': 'CountriesList',
                },
            },
        ],
        watch: {
            exclude: ['node_modules/**'],
            include: ['lib/**'],
        },
    },
    {
        input,
        plugins,
        external: [],
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
    },
];
