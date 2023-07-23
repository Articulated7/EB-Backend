import { Test, TestingModule } from '@nestjs/testing';
import { ConstellationsService } from './constellations.service';

describe('ConstellationsService', () => {
  let service: ConstellationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstellationsService],
    }).compile();

    service = module.get<ConstellationsService>(ConstellationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
