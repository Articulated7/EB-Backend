import { Controller, Get, Logger } from '@nestjs/common'
import { SchedulerService } from './scheduler.service'
import { UniverseSchedulerService } from './universe.service'

@Controller()
export class SchedulerController {
  private readonly logger = new Logger(SchedulerController.name)
  constructor(
    private readonly schedulerService: SchedulerService,
    private readonly universeScheduler: UniverseSchedulerService
  ) {}

  @Get('/trigger/universe/catagories')
  async triggerUniverseCategorySync() {
    this.logger.debug('triggering universe category sync')
    await this.universeScheduler.scheduleCategoriesSync()
    return 'ok'
  }

  @Get('/trigger/universe/groups')
  async triggerUniverseGroupsSync() {
    this.logger.debug('triggering universe groups sync')
    await this.universeScheduler.scheduleGroupsSync()
    return 'ok'
  }

  @Get('/trigger/universe/types')
  async triggerUniverseTypesSync() {
    this.logger.debug('triggering universe types sync')
    await this.universeScheduler.scheduleTypeSync()
    return 'ok'
  }

  @Get('/trigger/universe/ancestries')
  async triggerUniverseAncestriesSync() {
    this.logger.debug('triggering universe ancestries sync')
    await this.universeScheduler.scheduleAncestriesSync()
    return 'ok'
  }

  @Get('/trigger/universe/factions')
  async triggerUniverseFactionsSync() {
    this.logger.debug('triggering universe factions sync')
    await this.universeScheduler.scheduleFactionsSync()
    return 'ok'
  }

  @Get('/trigger/universe/bloodlines')
  async triggerUniverseBloodlinesSync() {
    this.logger.debug('triggering universe bloodlines sync')
    await this.universeScheduler.scheduleBloodlinesSync()
    return 'ok'
  }

  @Get('/trigger/universe/races')
  async triggerUniverseRacesSync() {
    this.logger.debug('triggering universe races sync')
    await this.universeScheduler.scheduleRacesSync()
    return 'ok'
  }

  @Get('/trigger/universe/system-jumps')
  async triggerUniverseSystemJumpsSync() {
    this.logger.debug('triggering universe system jumps sync')
    await this.universeScheduler.scheduleSystemJumpsSync()
    return 'ok'
  }

  @Get('/trigger/universe/system-kills')
  async triggerUniverseSystemKillsSync() {
    this.logger.debug('triggering universe system kills sync')
    await this.universeScheduler.scheduleSystemKillsSync()
    return 'ok'
  }
}
