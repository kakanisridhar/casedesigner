export enum Env {
  DEBUG = 'DEBUG',
  HOST = 'HOST',
  PORT = 'PORT',
  NODE_ENV = 'NODE_ENV',
  JWT_SECRET = 'JWT_SECRET',
  REFRESH_TOKEN_DURATION = 'REFRESH_TOKEN_DURATION',
  ACCESS_TOKEN_DURATION = 'ACCESS_TOKEN_DURATION',
  ADMIN_EMAIL = 'ADMIN_EMAIL',
  ADMIN_PASS = 'ADMIN_PASS',
  LOG_LVL = 'LOG_LVL',
  POSTGRES_USER = 'POSTGRES_USER',
  POSTGRES_PASSWORD = 'POSTGRES_PASSWORD',
  POSTGRES_DB = 'POSTGRES_DB',
  POSTGRES_HOST = 'POSTGRES_HOST',
  POSTGRES_PORT = 'POSTGRES_PORT',
  POSTGRES_MULTIPLE_DATABASES = 'POSTGRES_MULTIPLE_DATABASES',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum NodeEnv {
  DEV = 'DEV',
  TEST = 'TEST',
  PROD = 'PROD',
  STAGING = 'STAGING',
}