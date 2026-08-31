import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const input = 'src/storefront.js';
const resolve = nodeResolve({ browser: true });
const callableCommonJsDefault = {
    name: 'callable-commonjs-default',
    generateBundle(outputOptions, bundle) {
        if (outputOptions.format !== 'cjs') {
            return;
        }

        for (const output of Object.values(bundle)) {
            if (output.type === 'chunk' && output.isEntry) {
                output.code += '\nmodule.exports = Object.assign(exports.default, exports);\n';
            }
        }
    },
};
const shared = {
    input,
    treeshake: {
        moduleSideEffects: true,
    },
};

export default [
    {
        ...shared,
        external: ['@fleetbase/sdk', 'countries-list', 'date-fns'],
        plugins: [resolve, commonjs()],
        output: {
            file: 'dist/esm/storefront.js',
            format: 'esm',
            sourcemap: true,
            inlineDynamicImports: true,
        },
    },
    {
        ...shared,
        plugins: [resolve, commonjs(), callableCommonJsDefault],
        output: {
            file: 'dist/cjs/storefront.cjs',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            inlineDynamicImports: true,
        },
    },
    {
        ...shared,
        plugins: [resolve, commonjs(), terser()],
        output: {
            file: 'dist/@storefront.min.js',
            format: 'umd',
            name: 'FleetbaseStorefront',
            exports: 'named',
            sourcemap: true,
            inlineDynamicImports: true,
        },
    },
];
