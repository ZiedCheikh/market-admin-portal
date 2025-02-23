/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageReporters: ['html', 'text-summary'], // Formats (HTML & console summary)
  coverageThreshold: {
    // Set minimum coverage thresholds
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  collectCoverageFrom: [
    'src/app/**/*.ts', // ✅ Include all TypeScript files
    '!src/main.ts', // ❌ Exclude main entry point
    '!src/environments/**', // ❌ Exclude environment files
  ],
};

export default config;
