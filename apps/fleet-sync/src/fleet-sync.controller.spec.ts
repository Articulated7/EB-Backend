import { Test, TestingModule } from '@nestjs/testing'
import { FleetSyncController } from './fleet-sync.controller'
import { FleetSyncService } from './fleet-sync.service'

describe('FleetSyncController', () => {
  let fleetSyncController: FleetSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FleetSyncController],
      providers: [FleetSyncService]
    }).compile()

    fleetSyncController = app.get<FleetSyncController>(FleetSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fleetSyncController.getHello()).toBe('Hello World!')
    })
  })
})
