import { Test, TestingModule } from '@nestjs/testing';
import { ChakraRqueryGeneratorService } from './chakra-rquery-generator.service';

describe('ChakraRqueryGeneratorService', () => {
  let service: ChakraRqueryGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChakraRqueryGeneratorService],
    }).compile();

    service = module.get<ChakraRqueryGeneratorService>(ChakraRqueryGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
