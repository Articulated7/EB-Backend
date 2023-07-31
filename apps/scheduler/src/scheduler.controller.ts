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

  @Get('/trigger/universe/ancestries')
  async triggerUniverseAncestriesSync() {
    this.logger.debug('triggering universe ancestries sync')
    await this.universeScheduler.scheduleAncestriesSync()
    return 'ok'
  }

  @Get('/trigger/universe/bloodlines')
  async triggerUniverseBloodlinesSync() {
    this.logger.debug('triggering universe bloodlines sync')
    await this.universeScheduler.scheduleBloodlinesSync()
    return 'ok'
  }

  @Get('/trigger/universe/categories')
  async triggerUniverseCategorySync() {
    this.logger.debug('triggering universe category sync')
    await this.universeScheduler.scheduleCategoriesSync()
    return 'ok'
  }

  @Get('/trigger/universe/constellations')
  async triggerUniverseConstellationsSync() {
    this.logger.debug('triggering universe constellations sync')
    await this.universeScheduler.scheduleConstellationSync()
    return 'ok'
  }

  @Get('/trigger/universe/factions')
  async triggerUniverseFactionsSync() {
    this.logger.debug('triggering universe factions sync')
    await this.universeScheduler.scheduleFactionsSync()
    return 'ok'
  }

  @Get('/trigger/universe/graphics')
  async triggerUniverseGraphicsSync() {
    this.logger.debug('triggering universe graphics sync')
    await this.universeScheduler.scheduleGraphicsSync()
    return 'ok'
  }

  @Get('/trigger/universe/groups')
  async triggerUniverseGroupsSync() {
    this.logger.debug('triggering universe groups sync')
    await this.universeScheduler.scheduleGroupsSync()
    return 'ok'
  }

  @Get('/trigger/universe/moons')
  async triggerUniverseMoonsSync() {
    this.logger.debug('triggering universe moons sync')
    await this.universeScheduler.scheduleMoonsSync()
    return 'ok'
  }

  @Get('/trigger/universe/planets')
  async triggerUniversePlanetsSync() {
    this.logger.debug('triggering universe planets sync')
    await this.universeScheduler.schedulePlanetsSync()
    return 'ok'
  }

  @Get('/trigger/universe/races')
  async triggerUniverseRacesSync() {
    this.logger.debug('triggering universe races sync')
    await this.universeScheduler.scheduleRacesSync()
    return 'ok'
  }

  @Get('/trigger/universe/regions')
  async triggerUniverseRegionsSync() {
    this.logger.debug('triggering universe regions sync')
    await this.universeScheduler.scheduleRegionsSync()
    return 'ok'
  }

  @Get('/trigger/universe/stargates')
  async triggerUniverseStargatesSync() {
    this.logger.debug('triggering universe stargates sync')
    await this.universeScheduler.scheduleStargateSync()
    return 'ok'
  }

  @Get('/trigger/universe/stars')
  async triggerUniverseStarsSync() {
    this.logger.debug('triggering universe stars sync')
    await this.universeScheduler.scheduleStarsSync()
    return 'ok'
  }

  @Get('/trigger/universe/stations')
  async triggerUniverseStationsSync() {
    this.logger.debug('triggering universe stations sync')
    await this.universeScheduler.scheduleStationsSync()
    return 'ok'
  }

  @Get('/trigger/universe/structures')
  async triggerUniverseStructuresSync() {
    this.logger.debug('triggering universe structures sync')
    await this.universeScheduler.scheduleStructuresSync()
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

  @Get('/trigger/universe/systems')
  async triggerUniverseSystemsSync() {
    this.logger.debug('triggering universe system sync')
    await this.universeScheduler.scheduleSystemsSync()
    return 'ok'
  }

  @Get('/trigger/universe/types')
  async triggerUniverseTypesSync() {
    this.logger.debug('triggering universe types sync')
    await this.universeScheduler.scheduleTypeSync()
    return 'ok'
  }
}
