import { Test, TestingModule } from '@nestjs/testing'
import { LocationSyncController } from './location-sync.controller'
import { LocationSyncService } from './location-sync.service'

describe('LocationSyncController', () => {
  let locationSyncController: LocationSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationSyncController],
      providers: [LocationSyncService]
    }).compile()

    locationSyncController = app.get<LocationSyncController>(
      LocationSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(locationSyncController.getHello()).toBe('Hello World!')
    })
  })
})
