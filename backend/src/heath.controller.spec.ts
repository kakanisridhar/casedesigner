import { Test, TestingModule } from '@nestjs/testing'

import { HealthController } from 'health.controller'
import {
  HttpHealthIndicatorMock,
  healthCheckMock,
  typeormHealthIndicatorMock,
} from 'common/utils/mocks/nest'

describe('Health Controller', () => {
  let controller: HealthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        HttpHealthIndicatorMock,
        healthCheckMock,
        typeormHealthIndicatorMock,
      ],
    }).compile()

    controller = module.get(HealthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
