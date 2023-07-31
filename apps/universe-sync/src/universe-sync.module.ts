import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bullmq'
import {
  universeTypesQueue,
  universeAncestriesQueue,
  universeBloodlinesQueue,
  universeCategoriesQueue,
  universeConstellationsQueue,
  universeFactionsQueue,
  universeGraphicsQueue,
  universeGroupsQueue,
  universeMoonsQueue,
  universePlanetsQueue,
  universeRacesQueue,
  universeRegionsQueue,
  universeStargatesQueue,
  universeStarsQueue,
  universeStationsQueue,
  universeStructuresQueue,
  universeSystemJumpsQueue,
  universeSystemKillsQueue,
  universeSystemsQueue
} from 'libs/queues'
import { GroupsService } from './groups/groups.service'
import { AncestriesService } from './ancestries/ancestries.service'
import { TypesService } from './types/types.service'
import { BloodlinesService } from './bloodlines/bloodlines.service'
import { CatagoriesService } from './catagories/catagories.service'
import { ConstellationsService } from './constellations/constellations.service'
import { FactionsService } from './factions/factions.service'
import { GraphicsService } from './graphics/graphics.service'
import { MoonsService } from './moons/moons.service'
import { PlanetsService } from './planets/planets.service'
import { RacesService } from './races/races.service'
import { RegionsService } from './regions/regions.service'
import { StargatesService } from './stargates/stargates.service'
import { StarsService } from './stars/stars.service'
import { StationsService } from './stations/stations.service'
import { StructuresService } from './structures/structures.service'
import { SystemJumpsService } from './system-jumps/system-jumps.service'
import { SystemKillsService } from './system-kills/system-kills.service'
import { SystemsService } from './systems/systems.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SyncStatus } from '../../../libs/database/entity/SyncStatus'
import { Ancestry, Bloodline, System } from '../../../libs/database'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: Number(process.env.DATABASE_PORT) ?? 5432,
      username: process.env.DATABASE_USERNAME ?? 'postgres',
      password: process.env.DATABASE_PASSWORD ?? 'postgres',
      database: process.env.DATABASE_NAME ?? 'postgres',
      autoLoadEntities: true,
      synchronize: false,
      cache: {
        type: 'ioredis',
        options: {
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT) || 6379,
          db: 2
        }
      }
    }),
    TypeOrmModule.forFeature([Ancestry, Bloodline, System]),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379
      }
    }),
    universeTypesQueue,
    universeAncestriesQueue,
    universeBloodlinesQueue,
    universeCategoriesQueue,
    universeConstellationsQueue,
    universeFactionsQueue,
    universeGraphicsQueue,
    universeGroupsQueue,
    universeMoonsQueue,
    universePlanetsQueue,
    universePlanetsQueue,
    universeRacesQueue,
    universeRegionsQueue,
    universeStargatesQueue,
    universeStarsQueue,
    universeStationsQueue,
    universeStructuresQueue,
    universeSystemJumpsQueue,
    universeSystemKillsQueue,
    universeSystemsQueue
  ],
  controllers: [],
  providers: [
    GroupsService,
    CatagoriesService,
    AncestriesService,
    TypesService,
    BloodlinesService,
    ConstellationsService,
    FactionsService,
    GraphicsService,
    MoonsService,
    PlanetsService,
    RacesService,
    RegionsService,
    StargatesService,
    StarsService,
    StationsService,
    StructuresService,
    SystemJumpsService,
    SystemKillsService,
    SystemsService
  ]
})
export class UniverseSyncModule {}
