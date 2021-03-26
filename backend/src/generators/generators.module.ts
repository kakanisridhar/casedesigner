import { Module } from '@nestjs/common'
import { ChakraRqueryModule } from 'chakra-rquery/chakra-rquery.module'
import { ChakraReduxModule } from 'chakra-redux/chakra-redux.module'
import { ChakraReduxGeneratorService } from 'chakra-redux/chakra-redux-generator/chakra-redux-generator.service'
import { ChakraRqueryGeneratorService } from 'chakra-rquery/chakra-rquery-generator/chakra-rquery-generator.service'

const generators = {
  provide: 'Generators',
  useFactory: (chakraReduxGeneratorService, chakraRqueryGeneratorService) => {
    return [chakraReduxGeneratorService, chakraRqueryGeneratorService]
  },
  inject: [ChakraReduxGeneratorService, ChakraRqueryGeneratorService],
}

@Module({
  imports: [ChakraRqueryModule, ChakraReduxModule],
  exports: [ChakraRqueryModule, ChakraReduxModule, 'Generators'],
  providers: [generators],
})
export class GeneratorsModule {}
