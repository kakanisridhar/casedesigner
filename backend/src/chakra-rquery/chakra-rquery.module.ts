import { Module } from '@nestjs/common'
import { ChakraRqueryGeneratorService } from './chakra-rquery-generator/chakra-rquery-generator.service'

@Module({
  providers: [ChakraRqueryGeneratorService],
  exports: [ChakraRqueryGeneratorService],
})
export class ChakraRqueryModule {}
