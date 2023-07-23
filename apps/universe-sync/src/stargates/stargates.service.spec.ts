import { Test, TestingModule } from '@nestjs/testing';
import { StargatesService } from './stargates.service';

describe('StargatesService', () => {
  let service: StargatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StargatesService],
    }).compile();

    service = module.get<StargatesService>(StargatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
