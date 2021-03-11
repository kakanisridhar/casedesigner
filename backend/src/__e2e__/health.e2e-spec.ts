import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { bootstapE2eApp } from '__e2e__/helpers/bootstrap';

describe('HealthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const { nestApp } = await bootstapE2eApp();
    app = nestApp;
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/health').expect(200);
  });
});
