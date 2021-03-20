import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common'

@Controller()
export class AppController {
  @Get('generators')
  getGenerators(): string[] {
    return ['chakra-redux-hookform']
  }
}
