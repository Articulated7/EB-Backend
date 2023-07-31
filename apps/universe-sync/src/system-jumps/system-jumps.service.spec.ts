import { Test, TestingModule } from '@nestjs/testing'
import { SystemJumpsService } from './system-jumps.service'

describe('SystemJumpsService', () => {
  let service: SystemJumpsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemJumpsService]
    }).compile()

    service = module.get<SystemJumpsService>(SystemJumpsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
