import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const input = 'src/storefront.ts';
const resolve = nodeResolve({ browser: true });
const compileTypeScript = () => typescript({ tsconfig: './tsconfig.rollup.json' });
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
        // Keep @fleetbase/sdk internal until its package exports resolve
        // consistently in webpack and CommonJS clean-room consumers.
        external: ['countries-list', 'date-fns'],
        plugins: [resolve, commonjs(), compileTypeScript()],
        output: {
            file: 'dist/esm/storefront.js',
            format: 'esm',
            sourcemap: true,
            inlineDynamicImports: true,
        },
    },
    {
        ...shared,
        external: ['countries-list', 'date-fns'],
        plugins: [resolve, commonjs(), compileTypeScript(), callableCommonJsDefault],
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
        plugins: [resolve, commonjs(), compileTypeScript(), terser()],
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
