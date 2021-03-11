import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from 'app.controller'
import {
  dnsHealthIndicatorMock,
  healthCheckMock,
  typeormHealthIndicatorMock,
} from 'common/utils/mocks/nest'

describe('App Controller', () => {
  let controller: AppController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        dnsHealthIndicatorMock,
        healthCheckMock,
        typeormHealthIndicatorMock,
      ],
    }).compile()

    controller = module.get(AppController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
