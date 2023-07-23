import { Test, TestingModule } from '@nestjs/testing';
import { SystemKillsService } from './system-kills.service';

describe('SystemKillsService', () => {
  let service: SystemKillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemKillsService],
    }).compile();

    service = module.get<SystemKillsService>(SystemKillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
