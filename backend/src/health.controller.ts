import { Controller, Get } from '@nestjs/common'
import {
  HttpHealthIndicator,
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus'

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly dns: HttpHealthIndicator,
    private readonly db: TypeOrmHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.dns.pingCheck('network', 'https://www.wikipedia.org'),
      () => this.db.pingCheck('database', { timeout: 300 }),
    ])
  }
}
