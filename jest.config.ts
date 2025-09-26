import type { Config } from 'jest';

const config: Config = {
    rootDir: './',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(git|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
    }
}

export default config;