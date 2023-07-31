import { BullModule } from '@nestjs/bullmq'

export const statusQueue = BullModule.registerQueue({
  name: 'status'
})

export const universeTypesQueue = BullModule.registerQueue({
  name: 'universe-types'
})

export const universeAncestriesQueue = BullModule.registerQueue({
  name: 'universe-ancestries'
})

export const universeAsteroidBeltQueue = BullModule.registerQueue({
  name: 'universe-asteroid-belt'
})

export const universeBloodlinesQueue = BullModule.registerQueue({
  name: 'universe-bloodlines'
})

export const universeCategoriesQueue = BullModule.registerQueue({
  name: 'universe-catagories'
})

export const universeConstellationsQueue = BullModule.registerQueue({
  name: 'universe-constellations'
})

export const universeFactionsQueue = BullModule.registerQueue({
  name: 'universe-factions'
})

export const universeGraphicsQueue = BullModule.registerQueue({
  name: 'universe-graphics'
})

export const universeGroupsQueue = BullModule.registerQueue({
  name: 'universe-groups'
})

export const universeMoonsQueue = BullModule.registerQueue({
  name: 'universe-moons'
})

export const universePlanetsQueue = BullModule.registerQueue({
  name: 'universe-planets'
})

export const universeRacesQueue = BullModule.registerQueue({
  name: 'universe-races'
})

export const universeRegionsQueue = BullModule.registerQueue({
  name: 'universe-regions'
})

export const universeStargatesQueue = BullModule.registerQueue({
  name: 'universe-stargates'
})

export const universeStarsQueue = BullModule.registerQueue({
  name: 'universe-stars'
})

export const universeStationsQueue = BullModule.registerQueue({
  name: 'universe-stations'
})

export const universeStructuresQueue = BullModule.registerQueue({
  name: 'universe-structures'
})

export const universeSystemJumpsQueue = BullModule.registerQueue({
  name: 'universe-system-jumps'
})

export const universeSystemKillsQueue = BullModule.registerQueue({
  name: 'universe-system-kills'
})

export const universeSystemsQueue = BullModule.registerQueue({
  name: 'universe-systems'
})
