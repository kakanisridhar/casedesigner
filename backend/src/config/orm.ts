import { registerAs } from '@nestjs/config'
import { ConnectionOptions } from 'typeorm'

import { Env, NodeEnv } from 'common/utils'

const entities = [NodeEnv.TEST].includes(process.env.NODE_ENV as NodeEnv)
  ? 'src/**/*.entity.ts'
  : 'dist/**/*.entity.js'

export const ORM_CONFIG_KEY = 'orm'

export default registerAs(
  ORM_CONFIG_KEY,
  (): ConnectionOptions => ({
    type: 'postgres',
    host: process.env[Env.POSTGRES_HOST],
    port: parseInt(process.env[Env.POSTGRES_PORT]),
    username: process.env[Env.POSTGRES_USER],
    password: process.env[Env.POSTGRES_PASSWORD],
    database: process.env[Env.POSTGRES_DB],
    entities: [entities],
    synchronize: true,
    logging: process.env[Env.DEBUG] === 'true',
  })
)
