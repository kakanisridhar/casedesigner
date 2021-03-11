import { HttpService } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  DNSHealthIndicator,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { createMock } from 'ts-auto-mock';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

export const healthCheckMock = {
  provide: HealthCheckService,
  useValue: createMock<HealthCheckService>(),
};

export const dnsHealthIndicatorMock = {
  provide: DNSHealthIndicator,
  useValue: createMock<DNSHealthIndicator>(),
};

export const typeormHealthIndicatorMock = {
  provide: TypeOrmHealthIndicator,
  useValue: createMock<TypeOrmHealthIndicator>(),
};

export const configMock = {
  provide: ConfigService,
  useValue: createMock<ConfigService>(),
};

export const jwtMock = {
  provide: JwtService,
  useValue: createMock<JwtService>(),
};

export const httpMock = {
  provide: HttpService,
  useValue: createMock<HttpService>(),
};

export const loggerMock = {
  provide: WINSTON_MODULE_PROVIDER,
  useValue: createMock<Logger>(),
};

export const reflectorMock = {
  provide: Reflector,
  useValue: createMock<Reflector>(),
};
