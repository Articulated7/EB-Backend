import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialTables1690506347724 implements MigrationInterface {
  name = 'InitialTables1690506347724'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "alliance" ("id" integer NOT NULL, "creatorCorporationId" integer NOT NULL, "creatorId" integer NOT NULL, "dateFounded" TIMESTAMP WITH TIME ZONE NOT NULL, "executorCorporationId" integer NOT NULL, "factionId" integer, "name" text NOT NULL, "ticker" text NOT NULL, CONSTRAINT "PK_4ca41472d33b43df4e3ac16c7a3" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "alliance_contact" ("allianceId" integer NOT NULL, "contactId" integer NOT NULL, "contactType" text, "labelIds" jsonb, "Standing" double precision, CONSTRAINT "PK_ce1e8522e06f50316f4dad70e2d" PRIMARY KEY ("allianceId", "contactId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_ce1e8522e06f50316f4dad70e2" ON "alliance_contact" ("allianceId", "contactId") '
    )
    await queryRunner.query(
      'CREATE TABLE "alliance_icon" ("allianceId" integer NOT NULL, "px128x128" text, "px64x64" text, CONSTRAINT "PK_e5450820f514e14ce3e526103ab" PRIMARY KEY ("allianceId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "alliance_contact_label" ("allianceId" integer NOT NULL, "labelId" bigint NOT NULL, "labelName" text NOT NULL, CONSTRAINT "PK_9a3b828666b0ede8d97f5e7f8cc" PRIMARY KEY ("allianceId", "labelId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_9a3b828666b0ede8d97f5e7f8c" ON "alliance_contact_label" ("allianceId", "labelId") '
    )
    await queryRunner.query(
      'CREATE TABLE "bloodline" ("id" integer NOT NULL, "charisma" integer NOT NULL, "corporationId" integer NOT NULL, "description" character varying NOT NULL, "intelligence" integer NOT NULL, "memory" integer NOT NULL, "name" character varying NOT NULL, "perception" integer NOT NULL, "raceId" integer NOT NULL, "shipTypeId" integer NOT NULL, "willpower" integer NOT NULL, CONSTRAINT "PK_700b4f859f3c07d0218b77b38ba" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "ancestry" ("id" integer NOT NULL, "bloodlineId" integer NOT NULL, "description" text NOT NULL, "iconId" integer, "name" text NOT NULL, "shortDescription" text, CONSTRAINT "PK_cc8f8a92d5918e1091e61241e21" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "category" ("id" integer NOT NULL, "group" jsonb NOT NULL, "name" text NOT NULL, "published" boolean NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "asteroid_belt" ("asteroIdBeltId" integer NOT NULL, "name" text, "position" jsonb, "systemId" integer, CONSTRAINT "PK_6a7ed883b7b98dd8e9769a62714" PRIMARY KEY ("asteroIdBeltId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_agent_research" ("characterId" integer NOT NULL, "agentId" integer NOT NULL, "pointsPerDay" double precision, "remainderPoints" double precision, "skillTypeId" integer, "startedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_51170abb0eb5e2abb6e630afecf" PRIMARY KEY ("characterId", "agentId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_51170abb0eb5e2abb6e630afec" ON "character_agent_research" ("agentId", "characterId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_asset" ("characterId" integer NOT NULL, "isBlueprintCopy" boolean, "isSingleton" boolean, "itemId" bigint NOT NULL, "locationFlag" text, "locationId" bigint, "locationType" text, "quantity" integer, "typeId" integer, CONSTRAINT "PK_4635b50ab93f31851ac625e0add" PRIMARY KEY ("itemId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character" ("id" integer NOT NULL, "allianceId" integer, "birthday" TIMESTAMP WITH TIME ZONE, "bloodlineId" integer, "corporationId" integer, "description" text, "factionId" integer, "gender" text, "name" text, "raceId" integer, "securityStatus" double precision, "title" text, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_attribute" ("characterId" integer NOT NULL, "accruedRemapCooldownDate" TIMESTAMP WITH TIME ZONE, "bonusRemaps" integer, "charisma" integer, "intelligence" integer, "lastRemapDate" TIMESTAMP WITH TIME ZONE, "memory" integer, "perception" integer, "willpower" integer, CONSTRAINT "PK_2ad63bddf4362457c649b91d4ae" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_blueprint" ("characterId" integer NOT NULL, "itemId" bigint NOT NULL, "locationFlag" text, "locationId" bigint, "materialEfficiency" integer, "quantity" integer, "runs" integer, "timeEfficiency" integer, "typeId" integer, CONSTRAINT "PK_651d9f0f8d2a52a3006c0d8093e" PRIMARY KEY ("itemId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_bookmark" ("characterId" integer NOT NULL, "bookmarkId" integer NOT NULL, "coordinates" jsonb, "created" TIMESTAMP WITH TIME ZONE, "creatorId" integer, "folderId" integer, "item" jsonb, "label" text, "locationId" integer, "notes" text, CONSTRAINT "PK_c862a90f532d7f9d80f50d1d3de" PRIMARY KEY ("bookmarkId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_bookmarks_folder" ("characterId" integer NOT NULL, "folderId" integer NOT NULL, "name" text, CONSTRAINT "PK_6a9119d7f30a0b5ed7652b0d668" PRIMARY KEY ("folderId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_calendar" ("characterId" integer NOT NULL, "eventId" integer NOT NULL, "date" TIMESTAMP WITH TIME ZONE, "duration" integer, "importance" integer, "ownerId" integer, "ownerName" text, "ownerType" text, "response" text, "text" text, "title" text, CONSTRAINT "PK_730cbc48a577eee606649b12320" PRIMARY KEY ("characterId", "eventId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_730cbc48a577eee606649b1232" ON "character_calendar" ("eventId", "characterId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_calendar_attendee" ("characterId" integer NOT NULL, "eventId" integer NOT NULL, "eventResponse" text, CONSTRAINT "PK_5fb3dd7c74b785317a14c7faf85" PRIMARY KEY ("characterId", "eventId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_5fb3dd7c74b785317a14c7faf8" ON "character_calendar_attendee" ("eventId", "characterId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_clone" ("characterId" integer NOT NULL, "homeLocation" jsonb, "jumpClones" jsonb, "lastCloneJumpDate" TIMESTAMP WITH TIME ZONE, "lastStationChangeDate" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_ef72175f6915dc92892120ddf00" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_calendar_header" ("characterId" integer NOT NULL, "eventDate" TIMESTAMP WITH TIME ZONE, "eventId" integer NOT NULL, "eventResponse" text, "importance" integer, "title" text, CONSTRAINT "PK_264b2542e9252e2c7579a55e4a7" PRIMARY KEY ("characterId", "eventId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_264b2542e9252e2c7579a55e4a" ON "character_calendar_header" ("characterId", "eventId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_contact" ("characterId" integer NOT NULL, "contactId" integer NOT NULL, "contactType" text, "isBlocked" boolean, "isWatched" boolean, "labelIds" jsonb, "standing" double precision, CONSTRAINT "PK_a39d6e7b1a727e09ec83121f80c" PRIMARY KEY ("characterId", "contactId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_a39d6e7b1a727e09ec83121f80" ON "character_contact" ("characterId", "contactId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_contract" ("id" integer NOT NULL, "characterId" integer NOT NULL, "acceptorId" integer, "assigneeId" integer, "availability" text, "buyout" numeric, "collateral" numeric, "dateAccepted" TIMESTAMP WITH TIME ZONE, "dateCompleted" TIMESTAMP WITH TIME ZONE, "dateExpired" TIMESTAMP WITH TIME ZONE, "dateIssued" TIMESTAMP WITH TIME ZONE, "daysToComplete" integer, "endLocationId" bigint, "forCorporation" boolean, "issuerCorporationId" integer, "issuerId" integer, "price" numeric, "reward" numeric, "startLocationId" bigint, "status" text, "title" text, "type" text, "volume" numeric, CONSTRAINT "PK_0e575498c68e4064b9760c7fcb3" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_contact_label" ("characterId" integer NOT NULL, "labelId" bigint NOT NULL, "labelName" text, CONSTRAINT "PK_fbd27ef7b2723b2725a0b49c0e0" PRIMARY KEY ("characterId", "labelId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_fbd27ef7b2723b2725a0b49c0e" ON "character_contact_label" ("characterId", "labelId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_contract_item" ("characterId" integer NOT NULL, "contractId" integer NOT NULL, "isIncluded" boolean, "isSingleton" boolean, "quantity" integer, "rawQuantity" integer, "recordId" bigint NOT NULL, "typeId" integer, CONSTRAINT "PK_0b7aab2878da947517bd5267581" PRIMARY KEY ("contractId", "recordId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_0b7aab2878da947517bd526758" ON "character_contract_item" ("contractId", "recordId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_contract_bid" ("characterId" integer NOT NULL, "contractId" integer NOT NULL, "amount" double precision, "bidId" integer NOT NULL, "bidderId" integer, "dateBid" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_7dc16781b501ff9e4305cbe6448" PRIMARY KEY ("bidId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_corporation_history" ("characterId" integer NOT NULL, "corporationId" integer NOT NULL, "isDeleted" boolean, "recordId" integer NOT NULL, "startDate" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_0ea96eb557c75da40c52746289c" PRIMARY KEY ("characterId", "recordId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_0ea96eb557c75da40c52746289" ON "character_corporation_history" ("characterId", "recordId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_fatigue" ("characterId" integer NOT NULL, "jumpFatigueExpireDate" TIMESTAMP WITH TIME ZONE, "lastJumpDate" TIMESTAMP WITH TIME ZONE, "lastUpDateDate" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_8a9a45d7c8cd31764bd116abb0d" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_fw_stat" ("characterId" integer NOT NULL, "currentRank" integer, "enlistedOn" TIMESTAMP WITH TIME ZONE, "factionId" integer, "highestRank" integer, "kills" jsonb, "victoryPoints" jsonb, CONSTRAINT "PK_b0d25667e91f2b21134cfabdadc" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_fitting" ("characterId" integer NOT NULL, "description" text, "fittingId" integer NOT NULL, "items" jsonb, "name" text, "shipTypeId" integer, CONSTRAINT "PK_9954655d084592a23551fe0afa5" PRIMARY KEY ("fittingId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_fleet" ("characterId" integer NOT NULL, "fleetId" bigint NOT NULL, "role" text, "squadId" bigint, "wingId" bigint, CONSTRAINT "PK_f20791d9a5d9272399e4984f058" PRIMARY KEY ("fleetId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_implant" ("characterId" integer NOT NULL, "implants" jsonb, CONSTRAINT "PK_8d3d16a05b63d66b70a0fd9597e" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_industry_job" ("characterId" integer NOT NULL, "activityId" integer, "blueprintId" bigint, "blueprintLocationId" bigint, "blueprintTypeId" integer, "completedCharacterId" integer, "completedDate" TIMESTAMP WITH TIME ZONE, "cost" numeric, "duration" integer, "endDate" TIMESTAMP WITH TIME ZONE, "facilityId" bigint, "installerId" integer, "joBid" integer NOT NULL, "licensedRuns" integer, "outputLocationId" bigint, "pauseDate" TIMESTAMP WITH TIME ZONE, "probability" double precision, "productTypeId" integer, "runs" integer, "startDate" TIMESTAMP WITH TIME ZONE, "stationId" bigint, "status" text, "successfulRuns" integer, CONSTRAINT "PK_d58b8d0eb9fa115765ee9008edc" PRIMARY KEY ("joBid"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_location" ("characterId" integer NOT NULL, "solarSystemId" integer, "stationId" integer, "structureId" bigint, CONSTRAINT "PK_ad2e10e1ac7b27edeefe8a945b0" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_mail" ("characterId" integer NOT NULL, "mailId" integer NOT NULL, "body" text, "from" integer, "label" jsonb, "read" boolean, "recipients" jsonb, "subject" text, "timestamp" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_4f0d3e0431d255f286422c235e6" PRIMARY KEY ("mailId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_loyalty_point" ("characterId" integer NOT NULL, "corporationId" integer NOT NULL, "loyaltyPoints" integer, CONSTRAINT "PK_d20f901e83b62e3300f3f75ea27" PRIMARY KEY ("characterId", "corporationId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_d20f901e83b62e3300f3f75ea2" ON "character_loyalty_point" ("characterId", "corporationId") '
    )
    await queryRunner.query(
      'CREATE TABLE "dogma_dynamic_item" ("itemId" bigint NOT NULL, "typeId" integer, "createdBy" integer, "dogmaAttributes" jsonb, "dogmaEffects" jsonb, "mutatorTypeId" integer, "sourceTypeId" integer, CONSTRAINT "PK_726270a3cf82478c08568dd8428" PRIMARY KEY ("itemId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_wallet_division_transaction" ("corporationId" integer NOT NULL, "division" integer, "clientId" integer, "date" TIMESTAMP WITH TIME ZONE, "isBuy" boolean, "journalRefId" bigint, "locationId" bigint, "quantity" integer, "transactionId" bigint NOT NULL, "typeId" integer, "unitPrice" numeric, CONSTRAINT "PK_ed83af6a1a4a008181e596a6530" PRIMARY KEY ("transactionId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "dogma_attribute" ("attributeId" integer NOT NULL, "defaultValue" double precision, "description" text, "displayName" text, "highIsGood" boolean, "iconId" integer, "name" text, "published" boolean, "stackable" boolean, "unitId" integer, CONSTRAINT "PK_9fbbc9857481c5cda27366b8d95" PRIMARY KEY ("attributeId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "faction" ("corporationId" integer, "description" character varying NOT NULL, "factionId" integer NOT NULL, "isUnique" boolean NOT NULL, "militiaCorporationId" integer, "name" character varying NOT NULL, "sizeFactor" double precision NOT NULL, "solarSystemId" integer, "stationCount" integer NOT NULL, "stationSystemCount" integer NOT NULL, CONSTRAINT "PK_4a42e4db052edeb799dfa54057e" PRIMARY KEY ("factionId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "dogma_effect" ("effectId" integer NOT NULL, "description" text, "disallowAutoRepeat" boolean, "dischargeAttributeId" integer, "displayName" text, "durationAttributeId" integer, "effectCategory" integer, "electronicChance" boolean, "falloffAttributeId" integer, "iconId" integer, "isAssistance" boolean, "isOffensive" boolean, "isWarpSafe" boolean, "modifiers" jsonb, "name" text, "postExpression" integer, "preExpression" integer, "published" boolean, "rangeAttributeId" integer, "rangeChance" boolean, "trackingSpeedAttributeId" integer, CONSTRAINT "PK_2e21e4a76e2d1129ce88354244e" PRIMARY KEY ("effectId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "esi_token" ("accountId" character varying NOT NULL, "characterId" integer NOT NULL, "characterName" character varying NOT NULL, "scopes" character varying NOT NULL, "tokenType" character varying NOT NULL, "expiresOn" TIMESTAMP WITH TIME ZONE NOT NULL, "refreshToken" character varying NOT NULL, CONSTRAINT "PK_f4b9c323e3f591b9af71c1de219" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "graphic" ("graphicId" integer NOT NULL, "collisionFile" text, "graphicFile" text, "iconFolder" text, "sofDna" text, "sofFationName" text, "sofHullName" text, "sofRaceName" text, CONSTRAINT "PK_73c631a8015db261074e2ebe127" PRIMARY KEY ("graphicId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_wallet_division_journal" ("corporationId" integer NOT NULL, "division" integer, "amount" numeric, "balance" numeric, "contextId" bigint, "contextIdType" text, "date" TIMESTAMP WITH TIME ZONE, "description" text, "firstPartyId" integer, "id" bigint NOT NULL, "reason" text, "refType" text, "secondPartyId" integer, "tax" numeric, "taxReceiverId" integer, CONSTRAINT "PK_d6f1fc9ac578d96ff739dc4939d" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "group" ("groupId" integer NOT NULL, "categoryId" integer NOT NULL, "name" character varying NOT NULL, "published" boolean NOT NULL, "types" jsonb NOT NULL, CONSTRAINT "PK_52a5b0126abd6ad70828290e822" PRIMARY KEY ("groupId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "industry_facility" ("facilityId" bigint NOT NULL, "ownerId" integer, "regionId" integer, "solarSystemId" integer, "tax" double precision, "typeId" integer, CONSTRAINT "PK_b0b07aeae641bb50455e152036f" PRIMARY KEY ("facilityId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "incursion" ("constellationId" integer NOT NULL, "factionId" integer, "hasBoss" boolean, "infestedSolarSystem" jsonb, "influence" double precision, "stagingSolarSystemId" integer, "state" text, "type" text, CONSTRAINT "PK_18f883b028845fa2f0cb27bf8d3" PRIMARY KEY ("constellationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "kill_mail" ("killmailHash" text, "killmailId" integer NOT NULL, "attackers" jsonb, "killmailTime" TIMESTAMP WITH TIME ZONE, "moonId" integer, "solarSystemId" integer, "victim" jsonb, "warId" integer, CONSTRAINT "PK_5d75f7df34f1cbb0b585ed86989" PRIMARY KEY ("killmailId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "loyalty_store_offer" ("corporationId" integer NOT NULL, "akCost" integer, "iskCost" bigint, "lpCost" integer, "offerId" integer NOT NULL, "quantity" integer, "requiredItems" jsonb, "typeId" integer, CONSTRAINT "PK_09987f38d28274499a4be9f43eb" PRIMARY KEY ("corporationId", "offerId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_09987f38d28274499a4be9f43e" ON "loyalty_store_offer" ("corporationId", "offerId") '
    )
    await queryRunner.query(
      'CREATE TABLE "industry_system" ("costIndices" jsonb, "solarSystemId" integer NOT NULL, CONSTRAINT "PK_d99bced85ea11c6a364c1d94e3e" PRIMARY KEY ("solarSystemId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "market_history" ("typeId" integer NOT NULL, "regionId" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "average" numeric, "date" TIMESTAMP WITH TIME ZONE, "highest" numeric, "lowest" numeric, "orderCount" bigint, "volume" bigint, CONSTRAINT "PK_beff84b96a5b716323ad9c2a02b" PRIMARY KEY ("typeId", "regionId", "timestamp"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_beff84b96a5b716323ad9c2a02" ON "market_history" ("regionId", "timestamp", "typeId") '
    )
    await queryRunner.query(
      'CREATE TABLE "market_order" ("regionId" integer, "duration" integer, "isBuyOrder" boolean, "issued" TIMESTAMP WITH TIME ZONE, "locationId" bigint, "minVolume" integer, "orderId" bigint NOT NULL, "price" numeric, "range" text, "systemId" integer, "typeId" integer, "volumeRemain" integer, "volumeTotal" integer, CONSTRAINT "PK_0180118dd8de2316ecea2ea5729" PRIMARY KEY ("orderId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "market_group" ("marketGroupId" integer NOT NULL, "description" text, "name" text, "parentGroupId" integer, "types" jsonb, CONSTRAINT "PK_0abdc06944cbb9731a9ede740bc" PRIMARY KEY ("marketGroupId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "market_price" ("adjustedPrice" numeric, "averagePrice" numeric, "typeId" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_c5e5653930a73a32ccdb8fd9793" PRIMARY KEY ("typeId", "timestamp"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_c5e5653930a73a32ccdb8fd979" ON "market_price" ("timestamp", "typeId") '
    )
    await queryRunner.query(
      'CREATE TABLE "market_structure" ("structureId" bigint NOT NULL, "duration" integer, "isBuyOrder" boolean, "issued" TIMESTAMP WITH TIME ZONE, "locationId" bigint, "minVolume" integer, "orderId" bigint, "price" numeric, "range" text, "typeId" integer, "volumeRemain" integer, "volumeTotal" integer, CONSTRAINT "PK_414473d451655079924716b0a8b" PRIMARY KEY ("structureId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "opportunity_group" ("groupId" integer NOT NULL, "connectedGroup" jsonb, "description" text, "name" text, "notification" text, "requiredTasks" jsonb, CONSTRAINT "PK_d6f5535c34eca8fe0409db6c37c" PRIMARY KEY ("groupId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "npc_corp" ("corporationId" integer NOT NULL, CONSTRAINT "PK_ad7385b7fb98837cb2bb69ad223" PRIMARY KEY ("corporationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "moon" ("moonId" integer NOT NULL, "name" text, "position" jsonb, "systemId" integer, CONSTRAINT "PK_0322673112b96ee4ae8d2e300e2" PRIMARY KEY ("moonId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "race" ("allianceId" integer, "description" text, "name" text, "raceId" integer NOT NULL, CONSTRAINT "PK_e6faf44f3acec75fdd82a34cb42" PRIMARY KEY ("raceId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "planet" ("planetId" integer NOT NULL, "name" text, "position" jsonb, "systemId" integer, "typeId" integer, CONSTRAINT "PK_c84c3c5708b49796e8f5db3422d" PRIMARY KEY ("planetId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "opportunity_task" ("taskId" integer NOT NULL, "description" text, "name" text, "notification" text, CONSTRAINT "PK_0e8240a078aaffb9595bc3bf25a" PRIMARY KEY ("taskId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "region" ("regionId" integer NOT NULL, "constellation" jsonb, "description" text, "name" text, CONSTRAINT "PK_cb65449537268bed2e491f862ce" PRIMARY KEY ("regionId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "schematic" ("schematicId" integer NOT NULL, "cycleTime" integer, "schematicName" text, CONSTRAINT "PK_3086530b0a7e37f21f2ba8db5a1" PRIMARY KEY ("schematicId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "sovereignty_map" ("allianceId" integer, "corporationId" integer, "factionId" integer, "systemId" integer NOT NULL, CONSTRAINT "PK_11b4b8d24e206ca4700c9b3d636" PRIMARY KEY ("systemId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "sovereignty_campaign" ("attackersScore" double precision, "campaignId" integer NOT NULL, "constellationId" integer, "defenderId" integer, "defenderScore" double precision, "eventType" text, "participants" jsonb, "solarSystemId" integer, "startTime" TIMESTAMP WITH TIME ZONE, "structureId" bigint, CONSTRAINT "PK_5efac12b5f0beb7fe47c539c68a" PRIMARY KEY ("campaignId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "stargate" ("stargateId" integer NOT NULL, "destination" jsonb, "name" text, "position" jsonb, "systemId" integer, "typeId" integer, CONSTRAINT "PK_cf49c78e61ee2e75e69428066c2" PRIMARY KEY ("stargateId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "star" ("starId" integer NOT NULL, "age" bigint, "luminosity" double precision, "name" text, "radius" bigint, "solarSystemId" integer, "spectralClass" text, "temperature" integer, "typeId" integer, CONSTRAINT "PK_0ec45eee5fc19237867ba29ce95" PRIMARY KEY ("starId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "sovereignty_structure" ("allianceId" integer, "solarSystemId" integer, "structureId" bigint NOT NULL, "structureTypeId" integer, "vulnerabilityOccupancyLevel" double precision, "vulnerableEndTime" TIMESTAMP WITH TIME ZONE, "vulnerableStartTime" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_0d02f9df61cd98a41f68aaba23e" PRIMARY KEY ("structureId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "station" ("stationId" integer NOT NULL, "maxDockableShipVolume" double precision, "name" text, "officeRentalCost" double precision, "owner" integer, "position" jsonb, "raceId" integer, "reprocessingEfficiency" double precision, "reprocessingStationsTake" double precision, "services" jsonb, "systemId" integer, "typeId" integer, CONSTRAINT "PK_b14eaf3511b75ce629917ebb048" PRIMARY KEY ("stationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "status" ("timestamp" TIMESTAMP NOT NULL, "players" integer NOT NULL, "serverVersion" integer NOT NULL, "startTime" TIMESTAMP NOT NULL, "vip" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_86e6fc051cd3e70747b07ab99e7" PRIMARY KEY ("timestamp"))'
    )
    await queryRunner.query(
      'CREATE TABLE "system_jump" ("shipJumps" integer, "systemId" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_30174ddd9ad43c157c1586e3b8a" PRIMARY KEY ("systemId", "timestamp"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_30174ddd9ad43c157c1586e3b8" ON "system_jump" ("systemId", "timestamp") '
    )
    await queryRunner.query(
      'CREATE TABLE "structure" ("structureId" bigint NOT NULL, "name" text, "ownerId" integer, "position" jsonb, "solarSystemId" integer, "typeId" integer, CONSTRAINT "PK_bd1e546b1e9ad844bc090b055c8" PRIMARY KEY ("structureId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "system" ("systemId" integer NOT NULL, "constellationId" integer, "name" text, "planet" jsonb, "position" jsonb, "securityClass" text, "securityStatus" double precision, "starId" integer, "stargate" jsonb, "stations" jsonb, CONSTRAINT "PK_6ae2e11ee9ad70fd1acbaec09c8" PRIMARY KEY ("systemId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "sync_status" ("name" character varying NOT NULL, "interval" integer NOT NULL, "lastSync" TIMESTAMP WITH TIME ZONE NOT NULL, "nextSync" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_f66e413a8a525683c5ff329c8f6" PRIMARY KEY ("name"))'
    )
    await queryRunner.query(
      'CREATE TABLE "system_kill" ("npcKills" integer, "podKills" integer, "shipKills" integer, "systemId" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_e9de47effc8668e0952a31be8cf" PRIMARY KEY ("systemId", "timestamp"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_e9de47effc8668e0952a31be8c" ON "system_kill" ("systemId", "timestamp") '
    )
    await queryRunner.query(
      'CREATE TABLE "type_" ("id" integer NOT NULL, "capacity" double precision NOT NULL, "description" text NOT NULL, "dogmaAttributes" jsonb, "dogmaEffects" jsonb, "graphicId" integer, "groupId" integer NOT NULL, "iconId" integer, "marketGroupId" integer, "mass" integer, "name" text NOT NULL, "packagedVolume" double precision NOT NULL, "portionSize" integer, "published" boolean NOT NULL, "radius" integer, "volume" integer, CONSTRAINT "PK_7d49ac631abac6d9245cb0c75c5" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "war" ("aggressor" jsonb, "ally" jsonb, "declared" TIMESTAMP WITH TIME ZONE, "defender" jsonb, "finished" TIMESTAMP WITH TIME ZONE, "id" integer NOT NULL, "mutual" boolean, "openForAlly" boolean, "retracted" TIMESTAMP WITH TIME ZONE, "started" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_9e70fb6a71074714eb0c2959aec" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_mail_header" ("characterId" integer NOT NULL, "from" integer, "isRead" boolean, "label" jsonb, "mailId" integer NOT NULL, "recipients" jsonb, "subject" text, "timestamp" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_7af86a445ae541e64a5c3d3acbd" PRIMARY KEY ("mailId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_mail_label" ("characterId" integer NOT NULL, "label" jsonb, "totalUnreadCount" integer, CONSTRAINT "PK_fbfe7940eda77bcc284c8b148b0" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_mail_list" ("characterId" integer NOT NULL, "mailingListId" integer NOT NULL, "name" text, CONSTRAINT "PK_3e205f01a8f0ea0f977baae8583" PRIMARY KEY ("characterId", "mailingListId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_3e205f01a8f0ea0f977baae858" ON "character_mail_list" ("characterId", "mailingListId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_medal" ("characterId" integer NOT NULL, "corporationId" integer, "date" TIMESTAMP WITH TIME ZONE, "description" text, "graphic" jsonb, "issuerId" integer, "medalId" integer NOT NULL, "reason" text, "status" text, "title" text, CONSTRAINT "PK_40472370a2cd26cafaf3502efe9" PRIMARY KEY ("characterId", "medalId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_40472370a2cd26cafaf3502efe" ON "character_medal" ("characterId", "medalId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_notification" ("characterId" integer NOT NULL, "isRead" boolean, "notificationId" bigint NOT NULL, "senderId" integer, "senderType" text, "text" text, "timestamp" TIMESTAMP WITH TIME ZONE, "type" text, CONSTRAINT "PK_59b27067b41ea7e2c7eadf8a935" PRIMARY KEY ("notificationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_notification_contact" ("characterId" integer NOT NULL, "message" text, "notificationId" integer NOT NULL, "sendDate" TIMESTAMP WITH TIME ZONE, "senderCharacterId" integer, "standingLevel" double precision, CONSTRAINT "PK_6ce67ae8ad3da66e2af34d418b0" PRIMARY KEY ("notificationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_mining" ("characterId" integer NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "quantity" bigint, "solarSystemId" integer NOT NULL, "typeId" integer NOT NULL, CONSTRAINT "PK_0cf2bf4626e18ff3f7de8c97f2c" PRIMARY KEY ("characterId", "date", "solarSystemId", "typeId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_0cf2bf4626e18ff3f7de8c97f2" ON "character_mining" ("characterId", "date", "solarSystemId", "typeId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_opportunity" ("characterId" integer NOT NULL, "completedAt" TIMESTAMP WITH TIME ZONE, "taskId" integer NOT NULL, CONSTRAINT "PK_3e96cabd3eac944bb74c2a5d4b3" PRIMARY KEY ("characterId", "taskId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_3e96cabd3eac944bb74c2a5d4b" ON "character_opportunity" ("characterId", "taskId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_online_history" ("characterId" integer NOT NULL, "lastLogin" TIMESTAMP WITH TIME ZONE, "lastLogout" TIMESTAMP WITH TIME ZONE, "logins" integer, "online" boolean, CONSTRAINT "PK_72b96490a1460b73d003116e859" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_order_history" ("characterId" integer NOT NULL, "duration" integer, "escrow" numeric, "isBuyOrder" boolean, "isCorporation" boolean, "issued" TIMESTAMP WITH TIME ZONE, "locationId" bigint, "minVolume" integer, "orderId" bigint NOT NULL, "price" numeric, "range" text, "regionId" integer, "state" text, "typeId" integer, "volumeRemain" integer, "volumeTotal" integer, CONSTRAINT "PK_59a2aedcc9e20aafb1667614566" PRIMARY KEY ("orderId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_order" ("characterId" integer NOT NULL, "duration" integer, "escrow" numeric, "isBuyOrder" boolean, "isCorporation" boolean, "issued" TIMESTAMP WITH TIME ZONE, "locationId" bigint, "minVolume" integer, "orderId" bigint NOT NULL, "price" numeric, "range" text, "regionId" integer, "typeId" integer, "volumeRemain" integer, "volumeTotal" integer, CONSTRAINT "PK_20c60832575210503ab88abb258" PRIMARY KEY ("orderId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_planet" ("characterId" integer NOT NULL, "lastUpDate" TIMESTAMP WITH TIME ZONE, "numPins" integer, "ownerId" integer, "planetId" integer NOT NULL, "planetType" text, "solarSystemId" integer, "upgradeLevel" integer, CONSTRAINT "PK_5b2081e5bf688cddd08b8ee7d64" PRIMARY KEY ("characterId", "planetId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_5b2081e5bf688cddd08b8ee7d6" ON "character_planet" ("characterId", "planetId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_planet_layout" ("characterId" integer NOT NULL, "planetId" integer NOT NULL, "links" jsonb, "pins" jsonb, "routes" jsonb, CONSTRAINT "PK_81841978dd6a028dd7adf3d3682" PRIMARY KEY ("characterId", "planetId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_81841978dd6a028dd7adf3d368" ON "character_planet_layout" ("characterId", "planetId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_portrait" ("characterId" integer NOT NULL, "px128x128" text, "px256x256" text, "px512x512" text, "px64x64" text, CONSTRAINT "PK_6b4900a5e2299a74bec999c68bd" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_role" ("characterId" integer NOT NULL, "roles" jsonb, "rolesAtBase" jsonb, "rolesAtHq" jsonb, "rolesAtOther" jsonb, CONSTRAINT "PK_0d34e9548aecf5a7daab63a8feb" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_ship" ("characterId" integer NOT NULL, "shipItemId" bigint NOT NULL, "shipName" text, "shipTypeId" integer, CONSTRAINT "PK_b65125cf0367364ed62d1665024" PRIMARY KEY ("shipItemId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_skill" ("characterId" integer NOT NULL, "skills" jsonb, "totalSp" bigint, "unallocatedSp" integer, CONSTRAINT "PK_39dcbdc540ee9ff68c7e39bcbe4" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_skill_queue" ("characterId" integer NOT NULL, "finishDate" TIMESTAMP WITH TIME ZONE, "finishedLevel" integer, "levelEndSp" integer, "levelStartSp" integer, "queuePosition" integer, "skillId" integer NOT NULL, "startDate" TIMESTAMP WITH TIME ZONE, "trainingStartSp" integer, CONSTRAINT "PK_281542f4d88352d9ffe9d1502ee" PRIMARY KEY ("characterId", "skillId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_281542f4d88352d9ffe9d1502e" ON "character_skill_queue" ("characterId", "skillId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_standing" ("characterId" integer NOT NULL, "fromId" integer NOT NULL, "fromType" text, "standing" double precision, CONSTRAINT "PK_144cef723baebc4393e22704c2a" PRIMARY KEY ("characterId", "fromId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_144cef723baebc4393e22704c2" ON "character_standing" ("characterId", "fromId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_title" ("characterId" integer NOT NULL, "name" text, "titleId" integer NOT NULL, CONSTRAINT "PK_eeea257d56a6e5158173fdbbbf0" PRIMARY KEY ("characterId", "titleId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_eeea257d56a6e5158173fdbbbf" ON "character_title" ("characterId", "titleId") '
    )
    await queryRunner.query(
      'CREATE TABLE "character_wallet" ("characterId" integer NOT NULL, "walletBalance" numeric, CONSTRAINT "PK_84f07c49d25ff232c5ac60f1f37" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_wallet_journal" ("characterId" integer NOT NULL, "amount" numeric, "balance" numeric, "contextId" bigint, "contextIdType" text, "date" TIMESTAMP WITH TIME ZONE, "description" text, "firstPartyId" integer, "id" bigint NOT NULL, "reason" text, "refType" text, "secondPartyId" integer, "tax" numeric, "taxReceiverId" integer, CONSTRAINT "PK_70b0cf6341619a16f5dbe990dca" PRIMARY KEY ("id"))'
    )
    await queryRunner.query(
      'CREATE TABLE "character_wallet_transaction" ("characterId" integer NOT NULL, "clientId" integer, "date" TIMESTAMP WITH TIME ZONE, "isBuy" boolean, "isPersonal" boolean, "journalRefId" bigint, "locationId" bigint, "quantity" integer, "transactionId" bigint NOT NULL, "typeId" integer, "unitPrice" numeric, CONSTRAINT "PK_33d6402ed5c1eb6c33fcce3bf2d" PRIMARY KEY ("transactionId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "constellation" ("constellationId" integer NOT NULL, "name" text, "position" jsonb, "regionId" integer, "system" jsonb, CONSTRAINT "PK_44a223bd934bb59f4d367bef3e6" PRIMARY KEY ("constellationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "contract_public" ("regionId" integer, "buyout" numeric, "collateral" numeric, "contractId" integer NOT NULL, "dateExpired" TIMESTAMP WITH TIME ZONE, "dateIssued" TIMESTAMP WITH TIME ZONE, "daysToComplete" integer, "endLocationId" bigint, "forCorporation" boolean, "issuerCorporationId" integer, "issuerId" integer, "price" numeric, "reward" numeric, "startLocationId" bigint, "title" text, "type" text, "volume" numeric, CONSTRAINT "PK_1366fe43d3a5789768daa172028" PRIMARY KEY ("contractId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "contract_public_bid" ("contractId" integer NOT NULL, "amount" double precision, "bidId" integer NOT NULL, "dateBid" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_b81283ca5852ad2325c0aca3d68" PRIMARY KEY ("contractId", "bidId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_b81283ca5852ad2325c0aca3d6" ON "contract_public_bid" ("bidId", "contractId") '
    )
    await queryRunner.query(
      'CREATE TABLE "contract_public_item" ("contractId" integer, "isBlueprintCopy" boolean, "isIncluded" boolean, "itemId" bigint, "materialEfficiency" integer, "quantity" integer, "recordId" bigint NOT NULL, "runs" integer, "timeEfficiency" integer, "typeId" integer, CONSTRAINT "PK_84d58195ebefbf51cc638122510" PRIMARY KEY ("recordId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation" ("corporationId" integer NOT NULL, "allianceId" integer, "ceoId" integer, "creatorId" integer, "dateFounded" TIMESTAMP WITH TIME ZONE, "description" text, "factionId" integer, "homeStationId" integer, "memberCount" integer, "name" text, "shares" bigint, "taxRate" double precision, "ticker" text, "url" text, "warEligible" boolean, CONSTRAINT "PK_04477959fa2aeff01ca52c3cc8e" PRIMARY KEY ("corporationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_alliance_history" ("corporationId" integer NOT NULL, "allianceId" integer, "isDeleted" boolean, "recordId" integer NOT NULL, "startDate" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_5faf85d6a138f9a616ae371814c" PRIMARY KEY ("corporationId", "recordId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_5faf85d6a138f9a616ae371814" ON "corporation_alliance_history" ("corporationId", "recordId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_asset" ("corporationId" integer NOT NULL, "isBlueprintCopy" boolean, "isSingleton" boolean, "itemId" bigint NOT NULL, "locationFlag" text, "locationId" bigint, "locationType" text, "quantity" integer, "typeId" integer, CONSTRAINT "PK_a0156620bd374670301148b2a66" PRIMARY KEY ("corporationId", "itemId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_a0156620bd374670301148b2a6" ON "corporation_asset" ("corporationId", "itemId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_bookmark" ("corporationId" integer NOT NULL, "bookmarkId" integer NOT NULL, "coordinates" jsonb, "created" TIMESTAMP WITH TIME ZONE, "creatorId" integer, "folderId" integer, "item" jsonb, "label" text, "locationId" integer, "notes" text, CONSTRAINT "PK_f144f4eae1d1e65d40624f0f956" PRIMARY KEY ("corporationId", "bookmarkId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_f144f4eae1d1e65d40624f0f95" ON "corporation_bookmark" ("bookmarkId", "corporationId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_blueprint" ("corporationId" integer NOT NULL, "itemId" bigint NOT NULL, "locationFlag" text, "locationId" bigint, "materialEfficiency" integer, "quantity" integer, "runs" integer, "timeEfficiency" integer, "typeId" integer, CONSTRAINT "PK_8f0fe2d58f0e65761a3830619d8" PRIMARY KEY ("corporationId", "itemId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_8f0fe2d58f0e65761a3830619d" ON "corporation_blueprint" ("corporationId", "itemId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_bookmark_folder" ("corporationId" integer NOT NULL, "creatorId" integer, "folderId" integer NOT NULL, "name" text, CONSTRAINT "PK_63529eb7e57c83624cf0e1333bd" PRIMARY KEY ("corporationId", "folderId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_63529eb7e57c83624cf0e1333b" ON "corporation_bookmark_folder" ("corporationId", "folderId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_contact" ("corporationId" integer NOT NULL, "contactId" integer NOT NULL, "contactType" text, "isWatched" boolean, "labelIds" jsonb, "standing" double precision, CONSTRAINT "PK_24af37e7d08f070804529004db3" PRIMARY KEY ("corporationId", "contactId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_24af37e7d08f070804529004db" ON "corporation_contact" ("contactId", "corporationId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_contact_label" ("corporationId" integer, "labelId" bigint NOT NULL, "labelName" text, CONSTRAINT "PK_e28de08a96bf6d4906f195ddbbd" PRIMARY KEY ("labelId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_container_log" ("corporationId" integer, "action" text, "characterId" integer, "containerId" bigint NOT NULL, "containerTypeId" integer, "locationFlag" text, "locationId" bigint, "loggedAt" TIMESTAMP WITH TIME ZONE, "newConfigBitmask" integer, "oldConfigBitmask" integer, "passwordType" text, "quantity" integer, "typeId" integer, CONSTRAINT "PK_11e094e4ff9ecf3b4075feb3e5e" PRIMARY KEY ("containerId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_contract" ("corporationId" integer, "acceptorId" integer, "assigneeId" integer, "availability" text, "buyout" numeric, "collateral" numeric, "contractId" integer NOT NULL, "dateAccepted" TIMESTAMP WITH TIME ZONE, "dateCompleted" TIMESTAMP WITH TIME ZONE, "dateExpired" TIMESTAMP WITH TIME ZONE, "dateIssued" TIMESTAMP WITH TIME ZONE, "daysToComplete" integer, "endLocationId" bigint, "forCorporation" boolean, "issuerCorporationId" integer, "issuerId" integer, "price" numeric, "reward" numeric, "startLocationId" bigint, "status" text, "title" text, "type" text, "volume" numeric, CONSTRAINT "PK_0624050fc67ebb3833f75ac8a61" PRIMARY KEY ("contractId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_contract_bid" ("contractId" integer NOT NULL, "amount" double precision, "bidId" integer, "bidderId" integer NOT NULL, "dateBid" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_de44147b087834d96b55f09aade" PRIMARY KEY ("bidderId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_contract_item" ("contractId" integer NOT NULL, "isIncluded" boolean, "isSingleton" boolean, "quantity" integer, "rawQuantity" integer, "recordId" bigint NOT NULL, "typeId" integer, CONSTRAINT "PK_a311a2d7950ad9aaace83150cd2" PRIMARY KEY ("recordId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_customs_office" ("corporationId" integer, "allianceTaxRate" double precision, "allowAccessWithStandings" boolean, "allowAllianceAccess" boolean, "badStandingTaxRate" double precision, "corporationTaxRate" double precision, "excellentStandingTaxRate" double precision, "goodStandingTaxRate" double precision, "neutralStandingTaxRate" double precision, "officeId" bigint NOT NULL, "reinforceExitEnd" integer, "reinforceExitStart" integer, "standingLevel" text, "systemId" integer, "terribleStandingTaxRate" double precision, CONSTRAINT "PK_c0bbc221bf79beba8bbe6b3b530" PRIMARY KEY ("officeId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_division" ("corporationId" integer NOT NULL, "hangar" jsonb, "wallet" jsonb, CONSTRAINT "PK_f522f2e638c5bf15619744d4625" PRIMARY KEY ("corporationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_facility" ("corporationId" integer, "facilityId" bigint NOT NULL, "systemId" integer, "typeId" integer, CONSTRAINT "PK_b31b06836c74156e15d318258cd" PRIMARY KEY ("corporationId", "facilityId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_b31b06836c74156e15d318258c" ON "corporation_facility" ("facilityId", "corporationId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_fw_stat" ("corporationId" integer NOT NULL, "enlistedOn" TIMESTAMP WITH TIME ZONE, "factionId" integer, "kills" jsonb, "pilots" integer, "victoryPoints" jsonb, CONSTRAINT "PK_c5330f6d64fdb366338d0bd5cb4" PRIMARY KEY ("corporationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_icon" ("corporationId" integer NOT NULL, "px128x128" text, "px256x256" text, "px64x64" text, CONSTRAINT "PK_f09ef054615cd3b71d7dcd31874" PRIMARY KEY ("corporationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_medal" ("corporationId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE, "creatorId" integer, "description" text, "medalId" integer NOT NULL, "title" text, CONSTRAINT "PK_193fa446a4e3ebbf712d6288473" PRIMARY KEY ("corporationId", "medalId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_193fa446a4e3ebbf712d628847" ON "corporation_medal" ("corporationId", "medalId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_medal_issued" ("corporationId" integer, "characterId" integer NOT NULL, "issuedAt" TIMESTAMP WITH TIME ZONE, "issuerId" integer, "medalId" integer NOT NULL, "reason" text, "status" text, CONSTRAINT "PK_f7adb39bfc282985fc59b5ff1bb" PRIMARY KEY ("characterId", "medalId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_f7adb39bfc282985fc59b5ff1b" ON "corporation_medal_issued" ("characterId", "medalId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_industry_job" ("corporationId" integer NOT NULL, "activityId" integer, "blueprintId" bigint, "blueprintLocationId" bigint, "blueprintTypeId" integer, "completedCharacterId" integer, "completedDate" TIMESTAMP WITH TIME ZONE, "cost" numeric, "duration" integer, "endDate" TIMESTAMP WITH TIME ZONE, "facilityId" bigint, "installerId" integer, "joBid" integer NOT NULL, "licensedRuns" integer, "locationId" bigint, "outputLocationId" bigint, "pauseDate" TIMESTAMP WITH TIME ZONE, "probability" double precision, "productTypeId" integer, "runs" integer, "startDate" TIMESTAMP WITH TIME ZONE, "status" text, "successfulRuns" integer, CONSTRAINT "PK_91d8942baf97be4a662d9e2c2ca" PRIMARY KEY ("joBid"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_member" ("corporationId" integer NOT NULL, "members" jsonb, CONSTRAINT "PK_5d180d7922e570fbcf6112e8bc2" PRIMARY KEY ("corporationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_member_title" ("corporationId" integer NOT NULL, "characterId" integer NOT NULL, "title" jsonb, CONSTRAINT "PK_4a3fba1ceb6955db5f199dab6af" PRIMARY KEY ("corporationId", "characterId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_4a3fba1ceb6955db5f199dab6a" ON "corporation_member_title" ("characterId", "corporationId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_member_limit" ("corporationId" integer NOT NULL, "memberLimit" integer, CONSTRAINT "PK_6e890e50fe0ee46b45a3f5c21c9" PRIMARY KEY ("corporationId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_member_tracking" ("corporationId" integer NOT NULL, "baseId" integer, "characterId" integer NOT NULL, "locationId" bigint, "logoffDate" TIMESTAMP WITH TIME ZONE, "logonDate" TIMESTAMP WITH TIME ZONE, "shipTypeId" integer, "startDate" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_9f960808bc34f944b6947eb34c2" PRIMARY KEY ("characterId", "startDate"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_9f960808bc34f944b6947eb34c" ON "corporation_member_tracking" ("characterId", "startDate") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_mining_extraction" ("chunkArrivalTime" TIMESTAMP WITH TIME ZONE, "extractionStartTime" TIMESTAMP WITH TIME ZONE, "moonId" integer, "naturalDecayTime" TIMESTAMP WITH TIME ZONE, "structureId" bigint NOT NULL, CONSTRAINT "PK_8b5dfe6848b9c969994b95c8976" PRIMARY KEY ("structureId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_mining_observer" ("observerId" bigint NOT NULL, "characterId" integer NOT NULL, "lastUpDated" TIMESTAMP WITH TIME ZONE NOT NULL, "quantity" bigint, "recordedCorporationId" integer, "typeId" integer NOT NULL, CONSTRAINT "PK_e27f4cb6cd6dcea2a7668b36e7b" PRIMARY KEY ("observerId", "characterId", "lastUpDated", "typeId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_e27f4cb6cd6dcea2a7668b36e7" ON "corporation_mining_observer" ("characterId", "lastUpDated", "observerId", "typeId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_order" ("corporationId" integer NOT NULL, "duration" integer, "escrow" numeric, "isBuyOrder" boolean, "issued" TIMESTAMP WITH TIME ZONE, "issuedBy" integer, "locationId" bigint, "minVolume" integer, "orderId" bigint NOT NULL, "price" numeric, "range" text, "regionId" integer, "typeId" integer, "volumeRemain" integer, "volumeTotal" integer, "walletDivision" integer, CONSTRAINT "PK_9e144664e6d695bd825b2515316" PRIMARY KEY ("orderId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_order_history" ("corporationId" integer NOT NULL, "duration" integer, "escrow" numeric, "isBuyOrder" boolean, "issued" TIMESTAMP WITH TIME ZONE, "issuedBy" integer, "locationId" bigint, "minVolume" integer, "orderId" bigint NOT NULL, "price" numeric, "range" text, "regionId" integer, "state" text, "typeId" integer, "volumeRemain" integer, "volumeTotal" integer, "walletDivision" integer, CONSTRAINT "PK_d9061241936755d239b74d228f8" PRIMARY KEY ("orderId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_role" ("corporationId" integer NOT NULL, "characterId" integer NOT NULL, "grantableRoles" jsonb, "grantableRolesAtBase" jsonb, "grantableRolesAtHq" jsonb, "grantableRolesAtOther" jsonb, "roles" jsonb, "rolesAtBase" jsonb, "rolesAtHq" jsonb, "rolesAtOther" jsonb, CONSTRAINT "PK_3a8814b5ad447719803742e59c3" PRIMARY KEY ("characterId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_role_history" ("corporationId" integer, "changedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "characterId" integer NOT NULL, "issuerId" integer, "newRoles" jsonb, "oldRoles" jsonb, "roleType" text, CONSTRAINT "PK_376dfbd36f691c18bf4b019d2ce" PRIMARY KEY ("changedAt", "characterId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_376dfbd36f691c18bf4b019d2c" ON "corporation_role_history" ("changedAt", "characterId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_shareholder" ("corporationId" integer NOT NULL, "shareCount" bigint, "shareholderId" integer NOT NULL, "shareholderType" text, CONSTRAINT "PK_4cec075a0f7b7817d8b0eb74625" PRIMARY KEY ("corporationId", "shareholderId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_4cec075a0f7b7817d8b0eb7462" ON "corporation_shareholder" ("corporationId", "shareholderId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_standing" ("corporationId" integer NOT NULL, "fromId" integer NOT NULL, "fromType" text, "standing" double precision, CONSTRAINT "PK_b9bfec3ab66140f20bc88f86b79" PRIMARY KEY ("corporationId", "fromId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_b9bfec3ab66140f20bc88f86b7" ON "corporation_standing" ("corporationId", "fromId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_structure" ("corporationId" integer, "fuelExpires" TIMESTAMP WITH TIME ZONE, "name" text, "nextReinforceApply" TIMESTAMP WITH TIME ZONE, "nextReinforceHour" integer, "profileId" integer, "reinforceHour" integer, "services" jsonb, "state" text, "stateTimerEnd" TIMESTAMP WITH TIME ZONE, "stateTimerStart" TIMESTAMP WITH TIME ZONE, "structureId" bigint NOT NULL, "systemId" integer, "typeId" integer, "unanchorsAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_ddd691f501bf70ccd69613ae5ce" PRIMARY KEY ("structureId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_starbase" ("corporationId" integer, "starbaseId" bigint NOT NULL, "allowAllianceMembers" boolean, "allowCorporationMembers" boolean, "anchor" text, "attackIfAtWar" boolean, "attackIfOtherSecurityStatusDropping" boolean, "attackSecurityStatusThreshold" double precision, "attackStandingThreshold" double precision, "fuelBayTake" text, "fuelBayView" text, "fuels" jsonb, "offline" text, "online" text, "unanchor" text, "useAlliancetandings" boolean, CONSTRAINT "PK_94f8050dc57de0ffe67748c2972" PRIMARY KEY ("starbaseId"))'
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_title" ("corporationId" integer NOT NULL, "grantableRoles" jsonb, "grantableRolesAtBase" jsonb, "grantableRolesAtHq" jsonb, "grantableRolesAtOther" jsonb, "name" text, "roles" jsonb, "rolesAtBase" jsonb, "rolesAtHq" jsonb, "rolesAtOther" jsonb, "titleId" integer NOT NULL, CONSTRAINT "PK_48a87907df045e73ab4aa2bec7f" PRIMARY KEY ("corporationId", "titleId"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_48a87907df045e73ab4aa2bec7" ON "corporation_title" ("corporationId", "titleId") '
    )
    await queryRunner.query(
      'CREATE TABLE "corporation_wallet" ("corporationId" integer NOT NULL, "balance" numeric, "division" integer NOT NULL, CONSTRAINT "PK_c27782d0aa1ffcb3e3d9dddfc06" PRIMARY KEY ("corporationId", "division"))'
    )
    await queryRunner.query(
      'CREATE UNIQUE INDEX "IDX_c27782d0aa1ffcb3e3d9dddfc0" ON "corporation_wallet" ("corporationId", "division") '
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX "public"."IDX_c27782d0aa1ffcb3e3d9dddfc0"'
    )
    await queryRunner.query('DROP TABLE "corporation_wallet"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_48a87907df045e73ab4aa2bec7"'
    )
    await queryRunner.query('DROP TABLE "corporation_title"')
    await queryRunner.query('DROP TABLE "corporation_starbase"')
    await queryRunner.query('DROP TABLE "corporation_structure"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_b9bfec3ab66140f20bc88f86b7"'
    )
    await queryRunner.query('DROP TABLE "corporation_standing"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_4cec075a0f7b7817d8b0eb7462"'
    )
    await queryRunner.query('DROP TABLE "corporation_shareholder"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_376dfbd36f691c18bf4b019d2c"'
    )
    await queryRunner.query('DROP TABLE "corporation_role_history"')
    await queryRunner.query('DROP TABLE "corporation_role"')
    await queryRunner.query('DROP TABLE "corporation_order_history"')
    await queryRunner.query('DROP TABLE "corporation_order"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_e27f4cb6cd6dcea2a7668b36e7"'
    )
    await queryRunner.query('DROP TABLE "corporation_mining_observer"')
    await queryRunner.query('DROP TABLE "corporation_mining_extraction"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_9f960808bc34f944b6947eb34c"'
    )
    await queryRunner.query('DROP TABLE "corporation_member_tracking"')
    await queryRunner.query('DROP TABLE "corporation_member_limit"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_4a3fba1ceb6955db5f199dab6a"'
    )
    await queryRunner.query('DROP TABLE "corporation_member_title"')
    await queryRunner.query('DROP TABLE "corporation_member"')
    await queryRunner.query('DROP TABLE "corporation_industry_job"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_f7adb39bfc282985fc59b5ff1b"'
    )
    await queryRunner.query('DROP TABLE "corporation_medal_issued"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_193fa446a4e3ebbf712d628847"'
    )
    await queryRunner.query('DROP TABLE "corporation_medal"')
    await queryRunner.query('DROP TABLE "corporation_icon"')
    await queryRunner.query('DROP TABLE "corporation_fw_stat"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_b31b06836c74156e15d318258c"'
    )
    await queryRunner.query('DROP TABLE "corporation_facility"')
    await queryRunner.query('DROP TABLE "corporation_division"')
    await queryRunner.query('DROP TABLE "corporation_customs_office"')
    await queryRunner.query('DROP TABLE "corporation_contract_item"')
    await queryRunner.query('DROP TABLE "corporation_contract_bid"')
    await queryRunner.query('DROP TABLE "corporation_contract"')
    await queryRunner.query('DROP TABLE "corporation_container_log"')
    await queryRunner.query('DROP TABLE "corporation_contact_label"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_24af37e7d08f070804529004db"'
    )
    await queryRunner.query('DROP TABLE "corporation_contact"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_63529eb7e57c83624cf0e1333b"'
    )
    await queryRunner.query('DROP TABLE "corporation_bookmark_folder"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_8f0fe2d58f0e65761a3830619d"'
    )
    await queryRunner.query('DROP TABLE "corporation_blueprint"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_f144f4eae1d1e65d40624f0f95"'
    )
    await queryRunner.query('DROP TABLE "corporation_bookmark"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_a0156620bd374670301148b2a6"'
    )
    await queryRunner.query('DROP TABLE "corporation_asset"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_5faf85d6a138f9a616ae371814"'
    )
    await queryRunner.query('DROP TABLE "corporation_alliance_history"')
    await queryRunner.query('DROP TABLE "corporation"')
    await queryRunner.query('DROP TABLE "contract_public_item"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_b81283ca5852ad2325c0aca3d6"'
    )
    await queryRunner.query('DROP TABLE "contract_public_bid"')
    await queryRunner.query('DROP TABLE "contract_public"')
    await queryRunner.query('DROP TABLE "constellation"')
    await queryRunner.query('DROP TABLE "character_wallet_transaction"')
    await queryRunner.query('DROP TABLE "character_wallet_journal"')
    await queryRunner.query('DROP TABLE "character_wallet"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_eeea257d56a6e5158173fdbbbf"'
    )
    await queryRunner.query('DROP TABLE "character_title"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_144cef723baebc4393e22704c2"'
    )
    await queryRunner.query('DROP TABLE "character_standing"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_281542f4d88352d9ffe9d1502e"'
    )
    await queryRunner.query('DROP TABLE "character_skill_queue"')
    await queryRunner.query('DROP TABLE "character_skill"')
    await queryRunner.query('DROP TABLE "character_ship"')
    await queryRunner.query('DROP TABLE "character_role"')
    await queryRunner.query('DROP TABLE "character_portrait"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_81841978dd6a028dd7adf3d368"'
    )
    await queryRunner.query('DROP TABLE "character_planet_layout"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_5b2081e5bf688cddd08b8ee7d6"'
    )
    await queryRunner.query('DROP TABLE "character_planet"')
    await queryRunner.query('DROP TABLE "character_order"')
    await queryRunner.query('DROP TABLE "character_order_history"')
    await queryRunner.query('DROP TABLE "character_online_history"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_3e96cabd3eac944bb74c2a5d4b"'
    )
    await queryRunner.query('DROP TABLE "character_opportunity"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_0cf2bf4626e18ff3f7de8c97f2"'
    )
    await queryRunner.query('DROP TABLE "character_mining"')
    await queryRunner.query('DROP TABLE "character_notification_contact"')
    await queryRunner.query('DROP TABLE "character_notification"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_40472370a2cd26cafaf3502efe"'
    )
    await queryRunner.query('DROP TABLE "character_medal"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_3e205f01a8f0ea0f977baae858"'
    )
    await queryRunner.query('DROP TABLE "character_mail_list"')
    await queryRunner.query('DROP TABLE "character_mail_label"')
    await queryRunner.query('DROP TABLE "character_mail_header"')
    await queryRunner.query('DROP TABLE "war"')
    await queryRunner.query('DROP TABLE "type_"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_e9de47effc8668e0952a31be8c"'
    )
    await queryRunner.query('DROP TABLE "system_kill"')
    await queryRunner.query('DROP TABLE "sync_status"')
    await queryRunner.query('DROP TABLE "system"')
    await queryRunner.query('DROP TABLE "structure"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_30174ddd9ad43c157c1586e3b8"'
    )
    await queryRunner.query('DROP TABLE "system_jump"')
    await queryRunner.query('DROP TABLE "status"')
    await queryRunner.query('DROP TABLE "station"')
    await queryRunner.query('DROP TABLE "sovereignty_structure"')
    await queryRunner.query('DROP TABLE "star"')
    await queryRunner.query('DROP TABLE "stargate"')
    await queryRunner.query('DROP TABLE "sovereignty_campaign"')
    await queryRunner.query('DROP TABLE "sovereignty_map"')
    await queryRunner.query('DROP TABLE "schematic"')
    await queryRunner.query('DROP TABLE "region"')
    await queryRunner.query('DROP TABLE "opportunity_task"')
    await queryRunner.query('DROP TABLE "planet"')
    await queryRunner.query('DROP TABLE "race"')
    await queryRunner.query('DROP TABLE "moon"')
    await queryRunner.query('DROP TABLE "npc_corp"')
    await queryRunner.query('DROP TABLE "opportunity_group"')
    await queryRunner.query('DROP TABLE "market_structure"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_c5e5653930a73a32ccdb8fd979"'
    )
    await queryRunner.query('DROP TABLE "market_price"')
    await queryRunner.query('DROP TABLE "market_group"')
    await queryRunner.query('DROP TABLE "market_order"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_beff84b96a5b716323ad9c2a02"'
    )
    await queryRunner.query('DROP TABLE "market_history"')
    await queryRunner.query('DROP TABLE "industry_system"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_09987f38d28274499a4be9f43e"'
    )
    await queryRunner.query('DROP TABLE "loyalty_store_offer"')
    await queryRunner.query('DROP TABLE "kill_mail"')
    await queryRunner.query('DROP TABLE "incursion"')
    await queryRunner.query('DROP TABLE "industry_facility"')
    await queryRunner.query('DROP TABLE "group"')
    await queryRunner.query('DROP TABLE "corporation_wallet_division_journal"')
    await queryRunner.query('DROP TABLE "graphic"')
    await queryRunner.query('DROP TABLE "esi_token"')
    await queryRunner.query('DROP TABLE "dogma_effect"')
    await queryRunner.query('DROP TABLE "faction"')
    await queryRunner.query('DROP TABLE "dogma_attribute"')
    await queryRunner.query(
      'DROP TABLE "corporation_wallet_division_transaction"'
    )
    await queryRunner.query('DROP TABLE "dogma_dynamic_item"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_d20f901e83b62e3300f3f75ea2"'
    )
    await queryRunner.query('DROP TABLE "character_loyalty_point"')
    await queryRunner.query('DROP TABLE "character_mail"')
    await queryRunner.query('DROP TABLE "character_location"')
    await queryRunner.query('DROP TABLE "character_industry_job"')
    await queryRunner.query('DROP TABLE "character_implant"')
    await queryRunner.query('DROP TABLE "character_fleet"')
    await queryRunner.query('DROP TABLE "character_fitting"')
    await queryRunner.query('DROP TABLE "character_fw_stat"')
    await queryRunner.query('DROP TABLE "character_fatigue"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_0ea96eb557c75da40c52746289"'
    )
    await queryRunner.query('DROP TABLE "character_corporation_history"')
    await queryRunner.query('DROP TABLE "character_contract_bid"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_0b7aab2878da947517bd526758"'
    )
    await queryRunner.query('DROP TABLE "character_contract_item"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_fbd27ef7b2723b2725a0b49c0e"'
    )
    await queryRunner.query('DROP TABLE "character_contact_label"')
    await queryRunner.query('DROP TABLE "character_contract"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_a39d6e7b1a727e09ec83121f80"'
    )
    await queryRunner.query('DROP TABLE "character_contact"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_264b2542e9252e2c7579a55e4a"'
    )
    await queryRunner.query('DROP TABLE "character_calendar_header"')
    await queryRunner.query('DROP TABLE "character_clone"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_5fb3dd7c74b785317a14c7faf8"'
    )
    await queryRunner.query('DROP TABLE "character_calendar_attendee"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_730cbc48a577eee606649b1232"'
    )
    await queryRunner.query('DROP TABLE "character_calendar"')
    await queryRunner.query('DROP TABLE "character_bookmarks_folder"')
    await queryRunner.query('DROP TABLE "character_bookmark"')
    await queryRunner.query('DROP TABLE "character_blueprint"')
    await queryRunner.query('DROP TABLE "character_attribute"')
    await queryRunner.query('DROP TABLE "character"')
    await queryRunner.query('DROP TABLE "character_asset"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_51170abb0eb5e2abb6e630afec"'
    )
    await queryRunner.query('DROP TABLE "character_agent_research"')
    await queryRunner.query('DROP TABLE "asteroid_belt"')
    await queryRunner.query('DROP TABLE "category"')
    await queryRunner.query('DROP TABLE "ancestry"')
    await queryRunner.query('DROP TABLE "bloodline"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_9a3b828666b0ede8d97f5e7f8c"'
    )
    await queryRunner.query('DROP TABLE "alliance_contact_label"')
    await queryRunner.query('DROP TABLE "alliance_icon"')
    await queryRunner.query(
      'DROP INDEX "public"."IDX_ce1e8522e06f50316f4dad70e2"'
    )
    await queryRunner.query('DROP TABLE "alliance_contact"')
    await queryRunner.query('DROP TABLE "alliance"')
  }
}
