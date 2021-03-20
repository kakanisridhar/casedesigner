import {
  HttpModule,
  Module,
  INestApplication,
  ValidationPipe,
  CanActivate,
} from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TerminusModule } from '@nestjs/terminus'
import helmet from 'helmet'
import { WinstonModule } from 'nest-winston'

import configOptions, { ORM_CONFIG_KEY, LOGGER_CONFIG_KEY } from 'config/config'
import { HealthController } from 'health.controller'
import { AppController } from './app.controller'

@Module({
  imports: [
    HttpModule,
    TerminusModule,
    ConfigModule.forRoot(configOptions),
    /*TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get(ORM_CONFIG_KEY),
      inject: [ConfigService],
    }),*/
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get(LOGGER_CONFIG_KEY),
      inject: [ConfigService],
    }),
  ],
  controllers: [HealthController, AppController],
})
export class AppModule {}

export function prepareApp(app: INestApplication) {
  app.use(helmet())
  app.enableShutdownHooks()
  app.enableCors()

  return app
}
