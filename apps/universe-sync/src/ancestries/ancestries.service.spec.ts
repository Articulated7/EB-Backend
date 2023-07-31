import { Test, TestingModule } from '@nestjs/testing'
import { AncestriesService } from './ancestries.service'

describe('AncestriesService', () => {
  let service: AncestriesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AncestriesService]
    }).compile()

    service = module.get<AncestriesService>(AncestriesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
