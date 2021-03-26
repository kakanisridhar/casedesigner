import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Inject,
} from '@nestjs/common'
import { Logger } from 'winston'

import { Generator } from './generator'

@Controller()
export class AppController {
  constructor(
    @Inject('Generators') private generators: Generator[],
    @Inject('winston') private readonly logger: Logger
  ) {}

  @Get('generators')
  getGenerators(): string[] {
    return this.generators.map((g) => g.getName())
  }
}
