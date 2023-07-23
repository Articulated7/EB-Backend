import { Module } from '@nestjs/common'
import { SchedulerController } from './scheduler.controller'
import { SchedulerService } from './scheduler.service'
import { ScheduleModule } from '@nestjs/schedule'
import { BullModule } from '@nestjs/bullmq'
import { PrismaService } from 'libs/prisma.service'
import { BullBoardModule } from '@bull-board/nestjs'
import { ExpressAdapter } from '@bull-board/express'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import {
  statusQueue,
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
  universeSystemsQueue,
  universeTypesQueue
} from 'libs/queues'
import { UniverseSchedulerService } from './universe.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000
    }),
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379
      }
    }),
    statusQueue,
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
    universeSystemsQueue,
    BullBoardModule.forRoot({
      route: '/status',
      adapter: ExpressAdapter // Or FastifyAdapter from `@bull-board/fastify`
    }),
    BullBoardModule.forFeature({
      name: 'status',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-types',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-ancestries',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-bloodlines',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-catagories',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-constellations',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-factions',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-graphics',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-groups',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-moons',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-planets',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-races',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-regions',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-stargates',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-stars',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-stations',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-structures',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-system-jumps',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-system-kills',
      adapter: BullMQAdapter
    }),
    BullBoardModule.forFeature({
      name: 'universe-systems',
      adapter: BullMQAdapter
    })
  ],
  controllers: [SchedulerController],
  providers: [SchedulerService, UniverseSchedulerService, PrismaService]
})
export class SchedulerModule {}
