import { Test, TestingModule } from '@nestjs/testing';
import { ChakraReduxGeneratorService } from './chakra-redux-generator.service';

describe('ChakraReduxGeneratorService', () => {
  let service: ChakraReduxGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChakraReduxGeneratorService],
    }).compile();

    service = module.get<ChakraReduxGeneratorService>(ChakraReduxGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
