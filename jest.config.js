module.exports = {
    roots: ['<rootDir>/src/unit'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/unit/mock/imageMock.ts'
    },
    testEnvironment: 'jest-environment-jsdom'
};
