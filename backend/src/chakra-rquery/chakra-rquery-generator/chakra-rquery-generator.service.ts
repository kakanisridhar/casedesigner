import { Injectable } from '@nestjs/common'
import { Generator } from '../../generator'

@Injectable()
export class ChakraRqueryGeneratorService implements Generator {
  getName(): string {
    return 'Chakra React Query'
  }
  generate() {
    throw new Error('Method not implemented.')
  }
}
