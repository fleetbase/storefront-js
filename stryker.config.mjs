/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
    plugins: ['@stryker-mutator/vitest-runner'],
    testRunner: 'vitest',
    coverageAnalysis: 'perTest',
    reporters: ['clear-text', 'progress', 'json'],
    mutate: [
        'src/storefront.ts:135-181',
        'src/resource.ts:13-20',
        'src/resources/customer.ts:9-19',
        'src/resources/customer.ts:90-110',
        'src/resources/store-hour.ts:15-83',
        'src/utils/format-currency.ts',
        'src/utils/is-email.ts',
        'src/utils/is-key-valid.ts',
        'src/utils/is-phone.ts',
    ],
    thresholds: {
        high: 90,
        low: 80,
        break: 80,
    },
    concurrency: 4,
    tempDirName: '.cache/stryker',
    ignorePatterns: ['.cache', 'coverage', 'dist', 'reports'],
    disableTypeChecks: false,
};
