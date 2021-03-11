import Joi from '@hapi/joi'
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces'
import path from 'path'

import { Env, NodeEnv } from 'common/utils'
import loggerConfig, { LogLvl, LOGGER_CONFIG_KEY } from 'config/logger'
import ormConfig, { ORM_CONFIG_KEY } from 'config/orm'

export const configSchema = Joi.object({
  [Env.NODE_ENV]: Joi.string()
    .default('DEV')
    .valid(...Object.values(NodeEnv))
    .required(),
  [Env.HOST]: Joi.string().default('0.0.0.0'),
  [Env.PORT]: Joi.number().required(),
  [Env.LOG_LVL]: Joi.string().default(LogLvl[process.env.NODE_ENV]),
  [Env.POSTGRES_DB]: Joi.string().required(),
  [Env.POSTGRES_MULTIPLE_DATABASES]: Joi.string(),
  [Env.POSTGRES_HOST]: Joi.string().required(),
  [Env.POSTGRES_PASSWORD]: Joi.string().required(),
  [Env.POSTGRES_PORT]: Joi.number().required(),
  [Env.POSTGRES_USER]: Joi.string().required(),
})

const currentEnv = process.env.NODE_ENV as NodeEnv
const envWithEnvFiles = [NodeEnv.TEST, NodeEnv.PROD]

const rawOptions: ConfigModuleOptions = {
  isGlobal: true,
  ignoreEnvFile: envWithEnvFiles.includes(currentEnv),
  validationSchema: configSchema,
  load: [loggerConfig, ormConfig],
  envFilePath: [
    path.resolve(process.cwd(), `.env.${currentEnv}`),
    path.resolve(process.cwd(), `.env`),
    path.resolve(process.cwd(), `../.env`),
  ],
}

export { LOGGER_CONFIG_KEY, ORM_CONFIG_KEY }

export default rawOptions
