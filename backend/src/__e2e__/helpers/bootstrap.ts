import { Provider } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

import { AppModule, prepareApp } from 'app.module';

interface IBootstrapE2eOptions {
  http?: boolean;
  extraProviders?: Provider<unknown>[];
}

const { PORT, HOST } = process.env;

export async function bootstapE2eApp({
  extraProviders,
  http,
}: IBootstrapE2eOptions = {}) {
  const test: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
    providers: extraProviders,
  }).compile();
  const expressApp = new ExpressAdapter(express());
  const nestApp = prepareApp(test.createNestApplication(http && expressApp));

  await nestApp.init();

  if (http)
    await new Promise((res) => expressApp.listen(Number(PORT), HOST, res));

  return {
    nestApp,
    expressApp,
  };
}
