import { Module } from '@nestjs/common'
import { ChakraReduxGeneratorService } from './chakra-redux-generator/chakra-redux-generator.service'

@Module({
  providers: [ChakraReduxGeneratorService],
  exports: [ChakraReduxGeneratorService],
})
export class ChakraReduxModule {}
