import { Injectable } from '@nestjs/common'
import { Generator } from '../../generator'

@Injectable()
export class ChakraReduxGeneratorService implements Generator {
  getName(): string {
    return 'Chakra Redux'
  }
  generate() {
    throw new Error('Method not implemented.')
  }
}
