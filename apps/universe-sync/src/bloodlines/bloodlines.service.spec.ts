import { Test, TestingModule } from '@nestjs/testing';
import { BloodlinesService } from './bloodlines.service';

describe('BloodlinesService', () => {
  let service: BloodlinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodlinesService],
    }).compile();

    service = module.get<BloodlinesService>(BloodlinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
