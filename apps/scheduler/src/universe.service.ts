import { InjectQueue } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { Queue } from 'bullmq'
import { DateTime } from 'luxon'
import { EVEClient } from 'libs/esi/index'
import { HttpService } from '@nestjs/axios'
import { getPageCount } from 'libs/helpers/axios'
import { InjectRepository } from '@nestjs/typeorm'
import { SyncStatus } from '../../../libs/database/entity/SyncStatus'
import { Repository } from 'typeorm'
import { System } from '../../../libs/database'

@Injectable()
export class UniverseSchedulerService {
  private readonly logger = new Logger(UniverseSchedulerService.name)

  constructor(
    private readonly httpService: HttpService,
    @InjectQueue('universe-types') private typesQueue: Queue,
    @InjectQueue('universe-ancestries') private ancestryQueue: Queue,
    @InjectQueue('universe-bloodlines') private bloodlineQueue: Queue,
    @InjectQueue('universe-catagories') private categoryQueue: Queue,
    @InjectQueue('universe-constellations') private constellationQueue: Queue,
    @InjectQueue('universe-factions') private factionQueue: Queue,
    @InjectQueue('universe-graphics') private graphicQueue: Queue,
    @InjectQueue('universe-groups') private groupQueue: Queue,
    @InjectQueue('universe-moons') private moonQueue: Queue,
    @InjectQueue('universe-planets') private planetQueue: Queue,
    @InjectQueue('universe-races') private raceQueue: Queue,
    @InjectQueue('universe-regions') private regionQueue: Queue,
    @InjectQueue('universe-stargates') private stargateQueue: Queue,
    @InjectQueue('universe-stars') private starQueue: Queue,
    @InjectQueue('universe-stations') private stationQueue: Queue,
    @InjectQueue('universe-structures') private structureQueue: Queue,
    @InjectQueue('universe-system-jumps') private systemJumpQueue: Queue,
    @InjectQueue('universe-system-kills') private systemKillQueue: Queue,
    @InjectQueue('universe-systems') private systemQueue: Queue,
    @InjectQueue('universe-asteroid-belt') private asteroidBeltQueue: Queue,
    @InjectRepository(SyncStatus)
    private syncStatusRepository: Repository<SyncStatus>,
    @InjectRepository(System)
    private systemRepository: Repository<System>
  ) {}

  @Cron('0 10 11 * * *', {
    name: 'universe-types',
    timeZone: 'UTC'
  })
  async scheduleTypeSync() {
    this.logger.debug('creating types sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'types',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

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
    this.logger.debug('creating ancestries sync job')
    await this.syncStatusRepository.upsert(
      {
        name: 'ancestries',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    await this.ancestryQueue.add(
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
    this.logger.debug('creating factions sync job')
    await this.syncStatusRepository.upsert(
      {
        name: 'factions',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )
    await this.factionQueue.add(
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
    this.logger.debug('creating bloodlines sync job')
    await this.syncStatusRepository.upsert(
      {
        name: 'bloodlines',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )
    await this.bloodlineQueue.add(
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
    this.logger.debug('creating races sync job')
    await this.syncStatusRepository.upsert(
      {
        name: 'races',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )
    await this.raceQueue.add(
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
    this.logger.debug('creating system jumps sync job')
    await this.syncStatusRepository.upsert(
      {
        name: 'system-jumps',
        interval: 3600,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 1 }).toISO()
      },
      ['name']
    )
    await this.systemJumpQueue.add(
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
    this.logger.debug('creating system kills sync job')
    await this.syncStatusRepository.upsert(
      {
        name: 'system-kills',
        interval: 3600,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 1 }).toISO()
      },
      ['name']
    )
    await this.systemKillQueue.add(
      'universe-system-kills',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-categories',
    timeZone: 'UTC'
  })
  async scheduleCategoriesSync() {
    this.logger.debug('creating categories sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'categories',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    this.logger.debug('getting category ids')

    const client = new EVEClient()

    const res = await client.universe.getUniverseCategories({})

    for (const c of res) {
      await this.categoryQueue.add(
        `catagory-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-groups',
    timeZone: 'UTC'
  })
  async scheduleGroupsSync() {
    this.logger.debug('creating groups sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'groups',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

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

    for (const c of allGroupIds) {
      await this.groupQueue.add(
        `group-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-graphics',
    timeZone: 'UTC'
  })
  async scheduleGraphicsSync() {
    this.logger.debug('creating graphics sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'graphics',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    this.logger.debug('getting graphic ids')

    const client = new EVEClient()

    const res = await client.universe.getUniverseGraphics({})

    for (const c of res) {
      await this.graphicQueue.add(
        `graphic-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-constellations',
    timeZone: 'UTC'
  })
  async scheduleConstellationSync() {
    this.logger.debug('creating constellations sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'constellations',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const client = new EVEClient()

    const res = await client.universe.getUniverseConstellations({})

    for (const c of res) {
      await this.constellationQueue.add(
        `constellation-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 20 11 * * *', {
    name: 'universe-moons',
    timeZone: 'UTC'
  })
  async scheduleMoonsSync() {
    this.logger.debug('creating moons sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'moons',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const planets = await this.systemRepository.find({
      select: { planet: true },
      cache: 300
    })

    // @ts-ignore
    const res = planets
      .map((s) => s.planet.map((x) => x.moons.flat()))
      .flat()
      .flat()

    for (const c of res) {
      await this.moonQueue.add(
        `moon-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 20 11 * * *', {
    name: 'universe-asteroid-belt',
    timeZone: 'UTC'
  })
  async scheduleAsteroidBeltSync() {
    this.logger.debug('creating asteroid belt sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'asteroid-belt',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const belts = await this.systemRepository.find({
      select: { planet: true },
      cache: 300
    })

    // @ts-ignore
    const res = belts
      .map((s) => s.planet.map((x) => x.asteroid_belts.flat()))
      .flat()
      .flat()

    for (const c of res) {
      await this.moonQueue.add(
        `moon-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 20 11 * * *', {
    name: 'universe-planets',
    timeZone: 'UTC'
  })
  async schedulePlanetsSync() {
    this.logger.debug('creating planets sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'planets',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )
    const planets = await this.systemRepository.find({
      select: { planet: true },
      cache: 300
    })

    // @ts-ignore
    const res = planets.map((s) => s.planet.map((x) => x.planet_id)).flat()

    for (const c of res) {
      await this.planetQueue.add(
        `constellation-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-regions',
    timeZone: 'UTC'
  })
  async scheduleRegionsSync() {
    this.logger.debug('creating regions sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'regions',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const client = new EVEClient()

    const res = await client.universe.getUniverseRegions({})

    for (const c of res) {
      await this.regionQueue.add(
        `region-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 20 11 * * *', {
    name: 'universe-stargates',
    timeZone: 'UTC'
  })
  async scheduleStargateSync() {
    this.logger.debug('creating stargate sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'stargate',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const systems = await this.systemRepository.find({
      select: { stargate: true },
      cache: 300
    })

    const res = systems.map((s) => s.stargate).flat()

    for (const c of res) {
      await this.stargateQueue.add(
        `stargate-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 20 11 * * *', {
    name: 'universe-stars',
    timeZone: 'UTC'
  })
  async scheduleStarsSync() {
    this.logger.debug('creating stars sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'constellations',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const systems = await this.systemRepository.find({
      select: { starId: true },
      cache: 300
    })

    const res = systems.map((s) => s.starId).flat()

    for (const c of res) {
      await this.starQueue.add(
        `star-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 20 11 * * *', {
    name: 'universe-stations',
    timeZone: 'UTC'
  })
  async scheduleStationsSync() {
    this.logger.debug('creating stations sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'stations',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const systems = await this.systemRepository.find({
      select: {
        stations: true
      },
      cache: 300
    })

    const res = systems.map((s) => s.stations).flat()

    for (const c of res) {
      await this.stationQueue.add(
        `station-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-structures',
    timeZone: 'UTC'
  })
  async scheduleStructuresSync() {
    this.logger.debug('creating structures sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'structures',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const client = new EVEClient()

    const res = await client.universe.getUniverseStructures({})

    for (const c of res) {
      await this.structureQueue.add(
        `structure-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }

  @Cron('0 10 11 * * *', {
    name: 'universe-systems',
    timeZone: 'UTC'
  })
  async scheduleSystemsSync() {
    this.logger.debug('creating systems sync job')

    await this.syncStatusRepository.upsert(
      {
        name: 'systems',
        interval: 86400,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ hours: 24 }).toISO()
      },
      ['name']
    )

    const client = new EVEClient()

    const res = await client.universe.getUniverseSystems({})

    for (const c of res) {
      await this.systemQueue.add(
        `system-${c}`,
        {
          submitTime: DateTime.now().toUTC().toISO(),
          id: c
        },
        { removeOnComplete: true, removeOnFail: 10 }
      )
    }
  }
}
