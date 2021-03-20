/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const path = require('path')
const winston = require('winston')

const { combine, simple, colorize, label } = winston.format

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }),
        label({ message: true, label: 'Jest' }),
        simple()
      ),
    }),
  ],
})

if (process.env.E2E) {
  dotenv.config({
    path: path.join(__dirname, '.env.test'),
  })

  logger.info('app env variables loaded from' + __dirname)
}

const commonConfig = {
  moduleFileExtensions: ['js', 'json', 'ts', '.graphql'],
  moduleDirectories: ['src', 'node_modules'],
  rootDir: 'src',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  setupFilesAfterEnv: ['../jest.setup.js'],
}

const unitConfig = {
  ...commonConfig,
  testRegex: '\\.spec.ts$',
  setupFiles: ['jest-ts-auto-mock'],
  coverageDirectory: '../coverage',
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
}

const e2eConfig = {
  ...commonConfig,
  testRegex: '.e2e-spec.ts$',
}

module.exports = process.env.E2E ? e2eConfig : unitConfig
