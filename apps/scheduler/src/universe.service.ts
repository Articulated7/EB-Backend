import { InjectQueue } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { Queue } from 'bullmq'
import { DateTime } from 'luxon'
import { EVEClient } from 'libs/esi/index'
import { HttpService } from '@nestjs/axios'
import { getPageCount } from 'libs/helpers/axios'

@Injectable()
export class UniverseSchedulerService {
  private readonly logger = new Logger(UniverseSchedulerService.name)

  constructor(
    private readonly httpService: HttpService,
    @InjectQueue('universe-types') private typesQueue: Queue,
    @InjectQueue('universe-ancestries') private ancestriesQueue: Queue,
    @InjectQueue('universe-bloodlines') private bloodlinesQueue: Queue,
    @InjectQueue('universe-catagories') private catagoriesQueue: Queue,
    @InjectQueue('universe-constellations') private constellationsQueue: Queue,
    @InjectQueue('universe-factions') private factionsQueue: Queue,
    @InjectQueue('universe-graphics') private graphicsQueue: Queue,
    @InjectQueue('universe-groups') private groupsQueue: Queue,
    @InjectQueue('universe-moons') private MoonsQueue: Queue,
    @InjectQueue('universe-planets') private planetsQueue: Queue,
    @InjectQueue('universe-races') private racesQueue: Queue,
    @InjectQueue('universe-regions') private regionsQueue: Queue,
    @InjectQueue('universe-stargates') private stargatesQueue: Queue,
    @InjectQueue('universe-stars') private starsQueue: Queue,
    @InjectQueue('universe-stations') private stationsQueue: Queue,
    @InjectQueue('universe-structures') private structuresQueue: Queue,
    @InjectQueue('universe-system-jumps') private systemJumpsQueue: Queue,
    @InjectQueue('universe-system-kills') private systemKillsQueue: Queue,
    @InjectQueue('universe-systems') private systemsQueue: Queue
  ) {}

  @Cron('0 10 11 * * *', {
    name: 'universe-types',
    timeZone: 'UTC'
  })
  async scheduleTypeSync() {
    this.logger.debug('creating types sync job')

    this.logger.debug('getting types page count')

    const pages = await getPageCount(
      this.httpService.axiosRef,
      'https://esi.evetech.net/latest/universe/types/?datasource=tranquility&language=en-us'
    )

    for (let page = 1; page <= pages; page++) {
      await this.typesQueue.add(
        `universe-types-page-${page}`,
        { submitTime: DateTime.now().toUTC().toISO(), page: page },
        { removeOnComplete: true, removeOnFail: 5 }
      )
    }
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-ancestries',
    timeZone: 'UTC'
  })
  async scheduleAncestriesSync() {
    this.logger.debug('creating types sync job')
    await this.ancestriesQueue.add(
      'universe-ancestries',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-factions',
    timeZone: 'UTC'
  })
  async scheduleFactionsSync() {
    this.logger.debug('creating types sync job')
    await this.factionsQueue.add(
      'universe-factions',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-bloodlines',
    timeZone: 'UTC'
  })
  async scheduleBloodlinesSync() {
    this.logger.debug('creating types sync job')
    await this.bloodlinesQueue.add(
      'universe-bloodlines',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-races',
    timeZone: 'UTC'
  })
  async scheduleRacesSync() {
    this.logger.debug('creating types sync job')
    await this.racesQueue.add(
      'universe-races',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }

  @Cron('0 0 */1 * * *', {
    name: 'universe-system-jumps',
    timeZone: 'UTC'
  })
  async scheduleSystemJumpsSync() {
    this.logger.debug('creating types sync job')
    await this.systemJumpsQueue.add(
      'universe-system-jumps',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }

  @Cron('0 0 */1 * * *', {
    name: 'universe-system-kills',
    timeZone: 'UTC'
  })
  async scheduleSystemKillsSync() {
    this.logger.debug('creating types sync job')
    await this.systemKillsQueue.add(
      'universe-system-kills',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-catagories',
    timeZone: 'UTC'
  })
  async scheduleCategoriesSync() {
    this.logger.debug('creating catagories sync job')

    this.logger.debug('getting catigory ids')

    const client = new EVEClient()

    const res = await client.universe.getUniverseCategories({})

    res.forEach(async (c) => {
      await this.catagoriesQueue.add(
        `catagory-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    })
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-groups',
    timeZone: 'UTC'
  })
  async scheduleGroupsSync() {
    this.logger.debug('creating groups sync job')

    this.logger.debug('getting groups id page count')

    const pages = await getPageCount(
      this.httpService.axiosRef,
      'https://esi.evetech.net/latest/universe/groups/?datasource=tranquility&language=en-us'
    )

    this.logger.debug('getting groups ids')

    const client = new EVEClient()

    const allGroupIds: number[] = []

    for (let page = 1; page <= pages; page++) {
      const res = await client.universe.getUniverseGroups({ page })
      allGroupIds.push(...res)
    }

    allGroupIds.forEach(async (c) => {
      await this.groupsQueue.add(
        `group-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    })
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-graphics',
    timeZone: 'UTC'
  })
  async scheduleGraphicsSync() {
    this.logger.debug('creating catagories sync job')

    this.logger.debug('getting catigory ids')

    const client = new EVEClient()

    const res = await client.universe.getUniverseGraphics({})

    res.forEach(async (c) => {
      await this.graphicsQueue.add(
        `graphic-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    })
  }
}
