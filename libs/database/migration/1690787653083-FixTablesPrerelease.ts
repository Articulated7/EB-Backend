import { MigrationInterface, QueryRunner } from 'typeorm'

export class FixTablesPrerelease1690787653083 implements MigrationInterface {
  name = 'FixTablesPrerelease1690787653083'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "group"')
    await queryRunner.query(
      'ALTER TABLE "category" ADD "group" jsonb array NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "group" DROP COLUMN "types"')
    await queryRunner.query(
      'ALTER TABLE "group" ADD "types" jsonb array NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "moon" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "moon" ALTER COLUMN "position" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "moon" ALTER COLUMN "systemId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "race" ALTER COLUMN "allianceId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "race" ALTER COLUMN "description" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "race" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "region" DROP COLUMN "constellation"')
    await queryRunner.query(
      'ALTER TABLE "region" ADD "constellation" jsonb array NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "region" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "position" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "systemId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "typeId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "destination" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "position" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "systemId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "typeId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "maxDockableShipVolume" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "officeRentalCost" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "position" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "reprocessingEfficiency" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "reprocessingStationsTake" SET NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "station" DROP COLUMN "services"')
    await queryRunner.query(
      'ALTER TABLE "station" ADD "services" jsonb array NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "systemId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "typeId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "age" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "luminosity" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "radius" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "solarSystemId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "spectralClass" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "temperature" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "typeId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_kill" ALTER COLUMN "npcKills" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_kill" ALTER COLUMN "podKills" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_kill" ALTER COLUMN "shipKills" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "ownerId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "position" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "solarSystemId" SET NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaAttributes"')
    await queryRunner.query(
      'ALTER TABLE "type_" ADD "dogmaAttributes" jsonb array DEFAULT \'{}\''
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaEffects"')
    await queryRunner.query(
      'ALTER TABLE "type_" ADD "dogmaEffects" jsonb array DEFAULT \'{}\''
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "mass"')
    await queryRunner.query('ALTER TABLE "type_" ADD "mass" double precision')
    await queryRunner.query(
      'ALTER TABLE "type_" ALTER COLUMN "packagedVolume" DROP NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "radius"')
    await queryRunner.query('ALTER TABLE "type_" ADD "radius" double precision')
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "volume"')
    await queryRunner.query('ALTER TABLE "type_" ADD "volume" double precision')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_30174ddd9ad43c157c1586e3b8"'
    )
    await queryRunner.query(
      'ALTER TABLE "system_jump" ALTER COLUMN "shipJumps" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_jump" DROP CONSTRAINT "PK_30174ddd9ad43c157c1586e3b8a"'
    )
    await queryRunner.query(
      'ALTER TABLE "system_jump" ADD CONSTRAINT "PK_972959161ba7e16959cd4b1a29d" PRIMARY KEY ("timestamp")'
    )
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "constellationId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "system" DROP COLUMN "planet"')
    await queryRunner.query(
      'ALTER TABLE "system" ADD "planet" jsonb array DEFAULT \'{}\''
    )
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "position" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "securityStatus" SET NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "system" DROP COLUMN "stargate"')
    await queryRunner.query(
      'ALTER TABLE "system" ADD "stargate" jsonb array NOT NULL DEFAULT \'{}\''
    )
    await queryRunner.query('ALTER TABLE "system" DROP COLUMN "stations"')
    await queryRunner.query(
      'ALTER TABLE "system" ADD "stations" jsonb array NOT NULL DEFAULT \'{}\''
    )
    await queryRunner.query(
      'ALTER TABLE "constellation" ALTER COLUMN "name" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "constellation" ALTER COLUMN "position" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "constellation" ALTER COLUMN "regionId" SET NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "constellation" DROP COLUMN "system"')
    await queryRunner.query(
      'ALTER TABLE "constellation" ADD "system" jsonb array NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "corporation_facility" ALTER COLUMN "systemId" SET NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "corporation_facility" ALTER COLUMN "typeId" SET NOT NULL'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_30174ddd9ad43c157c1586e3b8" ON "system_jump" ("systemId", "timestamp") '
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX "public"."IDX_30174ddd9ad43c157c1586e3b8"'
    )
    await queryRunner.query(
      'ALTER TABLE "corporation_facility" ALTER COLUMN "typeId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "corporation_facility" ALTER COLUMN "systemId" DROP NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "constellation" DROP COLUMN "system"')
    await queryRunner.query('ALTER TABLE "constellation" ADD "system" jsonb')
    await queryRunner.query(
      'ALTER TABLE "constellation" ALTER COLUMN "regionId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "constellation" ALTER COLUMN "position" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "constellation" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "system" DROP COLUMN "stations"')
    await queryRunner.query('ALTER TABLE "system" ADD "stations" jsonb')
    await queryRunner.query('ALTER TABLE "system" DROP COLUMN "stargate"')
    await queryRunner.query('ALTER TABLE "system" ADD "stargate" jsonb')
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "securityStatus" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "position" DROP NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "system" DROP COLUMN "planet"')
    await queryRunner.query('ALTER TABLE "system" ADD "planet" jsonb')
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system" ALTER COLUMN "constellationId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_jump" DROP CONSTRAINT "PK_972959161ba7e16959cd4b1a29d"'
    )
    await queryRunner.query(
      'ALTER TABLE "system_jump" ADD CONSTRAINT "PK_30174ddd9ad43c157c1586e3b8a" PRIMARY KEY ("timestamp", "systemId")'
    )
    await queryRunner.query(
      'ALTER TABLE "system_jump" ALTER COLUMN "shipJumps" DROP NOT NULL'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_30174ddd9ad43c157c1586e3b8" ON "system_jump" ("systemId", "timestamp") '
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "volume"')
    await queryRunner.query('ALTER TABLE "type_" ADD "volume" integer')
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "radius"')
    await queryRunner.query('ALTER TABLE "type_" ADD "radius" integer')
    await queryRunner.query(
      'ALTER TABLE "type_" ALTER COLUMN "packagedVolume" SET NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "mass"')
    await queryRunner.query('ALTER TABLE "type_" ADD "mass" integer')
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaEffects"')
    await queryRunner.query('ALTER TABLE "type_" ADD "dogmaEffects" jsonb')
    await queryRunner.query('ALTER TABLE "type_" DROP COLUMN "dogmaAttributes"')
    await queryRunner.query('ALTER TABLE "type_" ADD "dogmaAttributes" jsonb')
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "solarSystemId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "position" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "ownerId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "structure" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_kill" ALTER COLUMN "shipKills" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_kill" ALTER COLUMN "podKills" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "system_kill" ALTER COLUMN "npcKills" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "typeId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "temperature" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "spectralClass" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "solarSystemId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "radius" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "luminosity" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "star" ALTER COLUMN "age" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "typeId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "systemId" DROP NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "station" DROP COLUMN "services"')
    await queryRunner.query('ALTER TABLE "station" ADD "services" jsonb')
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "reprocessingStationsTake" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "reprocessingEfficiency" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "position" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "officeRentalCost" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "station" ALTER COLUMN "maxDockableShipVolume" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "typeId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "systemId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "position" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "stargate" ALTER COLUMN "destination" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "typeId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "systemId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "position" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "planet" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "region" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "region" DROP COLUMN "constellation"')
    await queryRunner.query('ALTER TABLE "region" ADD "constellation" jsonb')
    await queryRunner.query(
      'ALTER TABLE "race" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "race" ALTER COLUMN "description" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "race" ALTER COLUMN "allianceId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "moon" ALTER COLUMN "systemId" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "moon" ALTER COLUMN "position" DROP NOT NULL'
    )
    await queryRunner.query(
      'ALTER TABLE "moon" ALTER COLUMN "name" DROP NOT NULL'
    )
    await queryRunner.query('ALTER TABLE "group" DROP COLUMN "types"')
    await queryRunner.query('ALTER TABLE "group" ADD "types" jsonb NOT NULL')
    await queryRunner.query('ALTER TABLE "category" DROP COLUMN "group"')
    await queryRunner.query('ALTER TABLE "category" ADD "group" jsonb NOT NULL')
  }
}
