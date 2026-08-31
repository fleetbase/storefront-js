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
        external: ['@fleetbase/sdk', 'countries-list', 'date-fns'],
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
        // @fleetbase/sdk@1.2.13 advertises a `.js` CommonJS target inside a
        // `type: module` package. Bundle it until upstream ships a genuine
        // `.cjs` entry; externalizing it makes clean CommonJS consumers fail.
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
