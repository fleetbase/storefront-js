import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        globals: true,
        coverage: {
            provider: 'v8',
            include: ['src/**/*.js'],
            exclude: ['src/index.js'],
            thresholds: {
                statements: 100,
                branches: 100,
                functions: 100,
                lines: 100,
            },
            reporter: ['text', 'json-summary', 'lcov'],
        },
    },
});
