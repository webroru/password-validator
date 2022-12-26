/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  //coveragePathIgnorePatterns: [ 'dist' ],
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
  ],
  rootDir: "tests",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage",
  //testEnvironment: "node"
};