-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Alliance" (
    "AllianceId" INTEGER NOT NULL,
    "CreatorCorporationId" INTEGER NOT NULL,
    "CreatorId" INTEGER NOT NULL,
    "DateFounded" TIMESTAMPTZ NOT NULL,
    "ExecutorCorporationId" INTEGER NOT NULL,
    "FactionId" INTEGER,
    "Name" TEXT NOT NULL,
    "Ticker" TEXT NOT NULL,

    CONSTRAINT "Alliance_pkey" PRIMARY KEY ("AllianceId")
);

-- CreateTable
CREATE TABLE "AllianceContact" (
    "AllianceId" INTEGER NOT NULL,
    "ContactId" INTEGER NOT NULL,
    "ContactType" TEXT,
    "LabelIds" JSONB,
    "Standing" DOUBLE PRECISION,

    CONSTRAINT "AllianceContact_pkey" PRIMARY KEY ("AllianceId","ContactId")
);

-- CreateTable
CREATE TABLE "AllianceContactLabel" (
    "AllianceId" INTEGER NOT NULL,
    "LabelId" BIGINT NOT NULL,
    "LabelName" TEXT NOT NULL,

    CONSTRAINT "AllianceContactLabel_pkey" PRIMARY KEY ("AllianceId","LabelId")
);

-- CreateTable
CREATE TABLE "AllianceIcons" (
    "AllianceId" INTEGER NOT NULL,
    "Px128x128" TEXT,
    "Px64x64" TEXT,

    CONSTRAINT "AllianceIcons_pkey" PRIMARY KEY ("AllianceId")
);

-- CreateTable
CREATE TABLE "Character" (
    "CharacterId" INTEGER NOT NULL,
    "AllianceId" INTEGER,
    "Birthday" TIMESTAMPTZ,
    "BloodlineId" INTEGER,
    "CorporationId" INTEGER,
    "Description" TEXT,
    "FactionId" INTEGER,
    "Gender" TEXT,
    "Name" TEXT,
    "RaceId" INTEGER,
    "SecurityStatus" DOUBLE PRECISION,
    "Title" TEXT,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterAgentResearch" (
    "CharacterId" INTEGER NOT NULL,
    "AgentId" INTEGER NOT NULL,
    "PointsPerDay" DOUBLE PRECISION,
    "RemainderPoints" DOUBLE PRECISION,
    "SkillTypeId" INTEGER,
    "StartedAt" TIMESTAMPTZ,

    CONSTRAINT "CharacterAgentResearch_pkey" PRIMARY KEY ("CharacterId","AgentId")
);

-- CreateTable
CREATE TABLE "CharacterAssets" (
    "CharacterId" INTEGER NOT NULL,
    "IsBlueprintCopy" BOOLEAN,
    "IsSingleton" BOOLEAN,
    "ItemId" BIGINT NOT NULL,
    "LocationFlag" TEXT,
    "LocationId" BIGINT,
    "LocationType" TEXT,
    "Quantity" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "CharacterAssets_pkey" PRIMARY KEY ("ItemId")
);

-- CreateTable
CREATE TABLE "CharacterAttributes" (
    "CharacterId" INTEGER NOT NULL,
    "AccruedRemapCooldownDate" TIMESTAMPTZ,
    "BonusRemaps" INTEGER,
    "Charisma" INTEGER,
    "Intelligence" INTEGER,
    "LastRemapDate" TIMESTAMPTZ,
    "Memory" INTEGER,
    "Perception" INTEGER,
    "Willpower" INTEGER,

    CONSTRAINT "CharacterAttributes_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterBlueprints" (
    "CharacterId" INTEGER NOT NULL,
    "ItemId" BIGINT NOT NULL,
    "LocationFlag" TEXT,
    "LocationId" BIGINT,
    "MaterialEfficiency" INTEGER,
    "Quantity" INTEGER,
    "Runs" INTEGER,
    "TimeEfficiency" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "CharacterBlueprints_pkey" PRIMARY KEY ("ItemId")
);

-- CreateTable
CREATE TABLE "CharacterBookmarks" (
    "CharacterId" INTEGER NOT NULL,
    "BookmarkId" INTEGER NOT NULL,
    "Coordinates" JSONB,
    "Created" TIMESTAMPTZ,
    "CreatorId" INTEGER,
    "FolderId" INTEGER,
    "Item" JSONB,
    "Label" TEXT,
    "LocationId" INTEGER,
    "Notes" TEXT,

    CONSTRAINT "CharacterBookmarks_pkey" PRIMARY KEY ("BookmarkId")
);

-- CreateTable
CREATE TABLE "CharacterBookmarksFolders" (
    "CharacterId" INTEGER NOT NULL,
    "FolderId" INTEGER NOT NULL,
    "Name" TEXT,

    CONSTRAINT "CharacterBookmarksFolders_pkey" PRIMARY KEY ("FolderId")
);

-- CreateTable
CREATE TABLE "CharacterCalendar" (
    "CharacterId" INTEGER NOT NULL,
    "EventId" INTEGER NOT NULL,
    "Date" TIMESTAMPTZ,
    "Duration" INTEGER,
    "Importance" INTEGER,
    "OwnerId" INTEGER,
    "OwnerName" TEXT,
    "OwnerType" TEXT,
    "Response" TEXT,
    "Text" TEXT,
    "Title" TEXT,

    CONSTRAINT "CharacterCalendar_pkey" PRIMARY KEY ("EventId")
);

-- CreateTable
CREATE TABLE "CharacterCalendarAttendees" (
    "CharacterId" INTEGER NOT NULL,
    "EventId" INTEGER NOT NULL,
    "AttendeeId" INTEGER,
    "EventResponse" TEXT,

    CONSTRAINT "CharacterCalendarAttendees_pkey" PRIMARY KEY ("EventId")
);

-- CreateTable
CREATE TABLE "CharacterCalendarHeaders" (
    "CharacterId" INTEGER NOT NULL,
    "EventDate" TIMESTAMPTZ,
    "EventId" INTEGER NOT NULL,
    "EventResponse" TEXT,
    "Importance" INTEGER,
    "Title" TEXT,

    CONSTRAINT "CharacterCalendarHeaders_pkey" PRIMARY KEY ("CharacterId","EventId")
);

-- CreateTable
CREATE TABLE "CharacterClones" (
    "CharacterId" INTEGER NOT NULL,
    "HomeLocation" JSONB,
    "JumpClones" JSONB,
    "LastCloneJumpDate" TIMESTAMPTZ,
    "LastStationChangeDate" TIMESTAMPTZ,

    CONSTRAINT "CharacterClones_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterContact" (
    "CharacterId" INTEGER NOT NULL,
    "ContactId" INTEGER NOT NULL,
    "ContactType" TEXT,
    "IsBlocked" BOOLEAN,
    "IsWatched" BOOLEAN,
    "LabelIds" JSONB,
    "Standing" DOUBLE PRECISION,

    CONSTRAINT "CharacterContact_pkey" PRIMARY KEY ("CharacterId","ContactId")
);

-- CreateTable
CREATE TABLE "CharacterContactLabel" (
    "CharacterId" INTEGER NOT NULL,
    "LabelId" BIGINT NOT NULL,
    "LabelName" TEXT,

    CONSTRAINT "CharacterContactLabel_pkey" PRIMARY KEY ("CharacterId","LabelId")
);

-- CreateTable
CREATE TABLE "CharacterContracts" (
    "CharacterId" INTEGER NOT NULL,
    "AcceptorId" INTEGER,
    "AssigneeId" INTEGER,
    "Availability" TEXT,
    "Buyout" DECIMAL,
    "Collateral" DECIMAL,
    "ContractId" INTEGER NOT NULL,
    "DateAccepted" TIMESTAMPTZ,
    "DateCompleted" TIMESTAMPTZ,
    "DateExpired" TIMESTAMPTZ,
    "DateIssued" TIMESTAMPTZ,
    "DaysToComplete" INTEGER,
    "EndLocationId" BIGINT,
    "ForCorporation" BOOLEAN,
    "IssuerCorporationId" INTEGER,
    "IssuerId" INTEGER,
    "Price" DECIMAL,
    "Reward" DECIMAL,
    "StartLocationId" BIGINT,
    "Status" TEXT,
    "Title" TEXT,
    "Type" TEXT,
    "Volume" DECIMAL,

    CONSTRAINT "CharacterContracts_pkey" PRIMARY KEY ("ContractId")
);

-- CreateTable
CREATE TABLE "CharacterContractsBid" (
    "CharacterId" INTEGER NOT NULL,
    "ContractId" INTEGER NOT NULL,
    "Amount" DOUBLE PRECISION,
    "BidId" INTEGER,
    "BidderId" INTEGER,
    "DateBid" TIMESTAMPTZ,

    CONSTRAINT "CharacterContractsBid_pkey" PRIMARY KEY ("ContractId")
);

-- CreateTable
CREATE TABLE "CharacterContractsItems" (
    "CharacterId" INTEGER NOT NULL,
    "ContractId" INTEGER NOT NULL,
    "IsIncluded" BOOLEAN,
    "IsSingleton" BOOLEAN,
    "Quantity" INTEGER,
    "RawQuantity" INTEGER,
    "RecordId" BIGINT NOT NULL,
    "TypeId" INTEGER,

    CONSTRAINT "CharacterContractsItems_pkey" PRIMARY KEY ("ContractId","RecordId")
);

-- CreateTable
CREATE TABLE "CharacterCorporationHistory" (
    "CharacterId" INTEGER NOT NULL,
    "CorporationId" INTEGER NOT NULL,
    "IsDeleted" BOOLEAN,
    "RecordId" INTEGER NOT NULL,
    "StartDate" TIMESTAMPTZ,

    CONSTRAINT "CharacterCorporationHistory_pkey" PRIMARY KEY ("CharacterId","RecordId")
);

-- CreateTable
CREATE TABLE "CharacterFatigue" (
    "CharacterId" INTEGER NOT NULL,
    "JumpFatigueExpireDate" TIMESTAMPTZ,
    "LastJumpDate" TIMESTAMPTZ,
    "LastUpDateDate" TIMESTAMPTZ,

    CONSTRAINT "CharacterFatigue_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterFittings" (
    "CharacterId" INTEGER NOT NULL,
    "Description" TEXT,
    "FittingId" INTEGER NOT NULL,
    "Items" JSONB,
    "Name" TEXT,
    "ShipTypeId" INTEGER,

    CONSTRAINT "CharacterFittings_pkey" PRIMARY KEY ("FittingId")
);

-- CreateTable
CREATE TABLE "CharacterFleet" (
    "CharacterId" INTEGER NOT NULL,
    "FleetId" BIGINT NOT NULL,
    "Role" TEXT,
    "SquadId" BIGINT,
    "WingId" BIGINT,

    CONSTRAINT "CharacterFleet_pkey" PRIMARY KEY ("FleetId")
);

-- CreateTable
CREATE TABLE "CharacterFwStats" (
    "CharacterId" INTEGER NOT NULL,
    "CurrentRank" INTEGER,
    "EnlistedOn" TIMESTAMPTZ,
    "FactionId" INTEGER,
    "HighestRank" INTEGER,
    "Kills" JSONB,
    "VictoryPoints" JSONB,

    CONSTRAINT "CharacterFwStats_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterImplants" (
    "CharacterId" INTEGER NOT NULL,
    "Implants" JSONB,

    CONSTRAINT "CharacterImplants_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterIndustryJobs" (
    "CharacterId" INTEGER NOT NULL,
    "ActivityId" INTEGER,
    "BlueprintId" BIGINT,
    "BlueprintLocationId" BIGINT,
    "BlueprintTypeId" INTEGER,
    "CompletedCharacterId" INTEGER,
    "CompletedDate" TIMESTAMPTZ,
    "Cost" DECIMAL,
    "Duration" INTEGER,
    "EndDate" TIMESTAMPTZ,
    "FacilityId" BIGINT,
    "InstallerId" INTEGER,
    "JoBid" INTEGER NOT NULL,
    "LicensedRuns" INTEGER,
    "OutputLocationId" BIGINT,
    "PauseDate" TIMESTAMPTZ,
    "Probability" DOUBLE PRECISION,
    "ProductTypeId" INTEGER,
    "Runs" INTEGER,
    "StartDate" TIMESTAMPTZ,
    "StationId" BIGINT,
    "Status" TEXT,
    "SuccessfulRuns" INTEGER,

    CONSTRAINT "CharacterIndustryJobs_pkey" PRIMARY KEY ("JoBid")
);

-- CreateTable
CREATE TABLE "CharacterLocation" (
    "CharacterId" INTEGER NOT NULL,
    "SolarSystemId" INTEGER,
    "StationId" INTEGER,
    "StructureId" BIGINT,

    CONSTRAINT "CharacterLocation_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterLoyaltyPoints" (
    "CharacterId" INTEGER NOT NULL,
    "CorporationId" INTEGER NOT NULL,
    "LoyaltyPoints" INTEGER,

    CONSTRAINT "CharacterLoyaltyPoints_pkey" PRIMARY KEY ("CharacterId","CorporationId")
);

-- CreateTable
CREATE TABLE "CharacterMail" (
    "CharacterId" INTEGER NOT NULL,
    "MailId" INTEGER NOT NULL,
    "Body" TEXT,
    "From" INTEGER,
    "Label" JSONB,
    "Read" BOOLEAN,
    "Recipients" JSONB,
    "Subject" TEXT,
    "Timestamp" TIMESTAMPTZ,

    CONSTRAINT "CharacterMail_pkey" PRIMARY KEY ("MailId")
);

-- CreateTable
CREATE TABLE "CharacterMailHeaders" (
    "CharacterId" INTEGER NOT NULL,
    "From" INTEGER,
    "IsRead" BOOLEAN,
    "Label" JSONB,
    "MailId" INTEGER NOT NULL,
    "Recipients" JSONB,
    "Subject" TEXT,
    "Timestamp" TIMESTAMPTZ,

    CONSTRAINT "CharacterMailHeaders_pkey" PRIMARY KEY ("MailId")
);

-- CreateTable
CREATE TABLE "CharacterMailLabel" (
    "CharacterId" INTEGER NOT NULL,
    "Label" JSONB,
    "TotalUnreadCount" INTEGER,

    CONSTRAINT "CharacterMailLabel_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterMailList" (
    "CharacterId" INTEGER NOT NULL,
    "MailingListId" INTEGER NOT NULL,
    "Name" TEXT,

    CONSTRAINT "CharacterMailList_pkey" PRIMARY KEY ("CharacterId","MailingListId")
);

-- CreateTable
CREATE TABLE "CharacterMedals" (
    "CharacterId" INTEGER NOT NULL,
    "CorporationId" INTEGER,
    "Date" TIMESTAMPTZ,
    "Description" TEXT,
    "Graphic" JSONB,
    "IssuerId" INTEGER,
    "MedalId" INTEGER NOT NULL,
    "Reason" TEXT,
    "Status" TEXT,
    "Title" TEXT,

    CONSTRAINT "CharacterMedals_pkey" PRIMARY KEY ("CharacterId","MedalId")
);

-- CreateTable
CREATE TABLE "CharacterMining" (
    "CharacterId" INTEGER NOT NULL,
    "Date" TIMESTAMPTZ NOT NULL,
    "Quantity" BIGINT,
    "SolarSystemId" INTEGER NOT NULL,
    "TypeId" INTEGER NOT NULL,

    CONSTRAINT "CharacterMining_pkey" PRIMARY KEY ("CharacterId","Date","SolarSystemId","TypeId")
);

-- CreateTable
CREATE TABLE "CharacterNotification" (
    "CharacterId" INTEGER NOT NULL,
    "IsRead" BOOLEAN,
    "NotificationId" BIGINT NOT NULL,
    "SenderId" INTEGER,
    "SenderType" TEXT,
    "Text" TEXT,
    "Timestamp" TIMESTAMPTZ,
    "Type" TEXT,

    CONSTRAINT "CharacterNotification_pkey" PRIMARY KEY ("NotificationId")
);

-- CreateTable
CREATE TABLE "CharacterNotificationContact" (
    "CharacterId" INTEGER NOT NULL,
    "Message" TEXT,
    "NotificationId" INTEGER NOT NULL,
    "SendDate" TIMESTAMPTZ,
    "SenderCharacterId" INTEGER,
    "StandingLevel" DOUBLE PRECISION,

    CONSTRAINT "CharacterNotificationContact_pkey" PRIMARY KEY ("NotificationId")
);

-- CreateTable
CREATE TABLE "CharacterOnlineHistory" (
    "CharacterId" INTEGER NOT NULL,
    "LastLogin" TIMESTAMPTZ,
    "LastLogout" TIMESTAMPTZ,
    "Logins" INTEGER,
    "Online" BOOLEAN,

    CONSTRAINT "CharacterOnlineHistory_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterOpportunity" (
    "CharacterId" INTEGER NOT NULL,
    "CompletedAt" TIMESTAMPTZ,
    "TaskId" INTEGER NOT NULL,

    CONSTRAINT "CharacterOpportunity_pkey" PRIMARY KEY ("CharacterId","TaskId")
);

-- CreateTable
CREATE TABLE "CharacterOrder" (
    "CharacterId" INTEGER NOT NULL,
    "Duration" INTEGER,
    "Escrow" DECIMAL,
    "IsBuyOrder" BOOLEAN,
    "IsCorporation" BOOLEAN,
    "Issued" TIMESTAMPTZ,
    "LocationId" BIGINT,
    "MinVolume" INTEGER,
    "OrderId" BIGINT NOT NULL,
    "Price" DECIMAL,
    "Range" TEXT,
    "RegionId" INTEGER,
    "TypeId" INTEGER,
    "VolumeRemain" INTEGER,
    "VolumeTotal" INTEGER,

    CONSTRAINT "CharacterOrder_pkey" PRIMARY KEY ("OrderId")
);

-- CreateTable
CREATE TABLE "CharacterOrderHistory" (
    "CharacterId" INTEGER NOT NULL,
    "Duration" INTEGER,
    "Escrow" DECIMAL,
    "IsBuyOrder" BOOLEAN,
    "IsCorporation" BOOLEAN,
    "Issued" TIMESTAMPTZ,
    "LocationId" BIGINT,
    "MinVolume" INTEGER,
    "OrderId" BIGINT NOT NULL,
    "Price" DECIMAL,
    "Range" TEXT,
    "RegionId" INTEGER,
    "State" TEXT,
    "TypeId" INTEGER,
    "VolumeRemain" INTEGER,
    "VolumeTotal" INTEGER,

    CONSTRAINT "CharacterOrderHistory_pkey" PRIMARY KEY ("OrderId")
);

-- CreateTable
CREATE TABLE "CharacterPlanet" (
    "CharacterId" INTEGER NOT NULL,
    "LastUpDate" TIMESTAMPTZ,
    "NumPins" INTEGER,
    "OwnerId" INTEGER,
    "PlanetId" INTEGER NOT NULL,
    "PlanetType" TEXT,
    "SolarSystemId" INTEGER,
    "UpgradeLevel" INTEGER,

    CONSTRAINT "CharacterPlanet_pkey" PRIMARY KEY ("CharacterId","PlanetId")
);

-- CreateTable
CREATE TABLE "CharacterPlanetLayout" (
    "CharacterId" INTEGER NOT NULL,
    "PlanetId" INTEGER NOT NULL,
    "Links" JSONB,
    "Pins" JSONB,
    "Routes" JSONB,

    CONSTRAINT "CharacterPlanetLayout_pkey" PRIMARY KEY ("CharacterId","PlanetId")
);

-- CreateTable
CREATE TABLE "CharacterPortrait" (
    "CharacterId" INTEGER NOT NULL,
    "Px128x128" TEXT,
    "Px256x256" TEXT,
    "Px512x512" TEXT,
    "Px64x64" TEXT,

    CONSTRAINT "CharacterPortrait_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterRoles" (
    "CharacterId" INTEGER NOT NULL,
    "Roles" JSONB,
    "RolesAtBase" JSONB,
    "RolesAtHq" JSONB,
    "RolesAtOther" JSONB,

    CONSTRAINT "CharacterRoles_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterShip" (
    "CharacterId" INTEGER NOT NULL,
    "ShipItemId" BIGINT NOT NULL,
    "ShipName" TEXT,
    "ShipTypeId" INTEGER,

    CONSTRAINT "CharacterShip_pkey" PRIMARY KEY ("ShipItemId")
);

-- CreateTable
CREATE TABLE "CharacterSkillqueue" (
    "CharacterId" INTEGER NOT NULL,
    "FinishDate" TIMESTAMPTZ,
    "FinishedLevel" INTEGER,
    "LevelEndSp" INTEGER,
    "LevelStartSp" INTEGER,
    "QueuePosition" INTEGER,
    "SkillId" INTEGER NOT NULL,
    "StartDate" TIMESTAMPTZ,
    "TrainingStartSp" INTEGER,

    CONSTRAINT "CharacterSkillqueue_pkey" PRIMARY KEY ("CharacterId","SkillId")
);

-- CreateTable
CREATE TABLE "CharacterSkills" (
    "CharacterId" INTEGER NOT NULL,
    "Skills" JSONB,
    "TotalSp" BIGINT,
    "UnallocatedSp" INTEGER,

    CONSTRAINT "CharacterSkills_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterStandings" (
    "CharacterId" INTEGER NOT NULL,
    "FromId" INTEGER NOT NULL,
    "FromType" TEXT,
    "Standing" DOUBLE PRECISION,

    CONSTRAINT "CharacterStandings_pkey" PRIMARY KEY ("CharacterId","FromId")
);

-- CreateTable
CREATE TABLE "CharacterTitle" (
    "CharacterId" INTEGER NOT NULL,
    "Name" TEXT,
    "TitleId" INTEGER NOT NULL,

    CONSTRAINT "CharacterTitle_pkey" PRIMARY KEY ("CharacterId","TitleId")
);

-- CreateTable
CREATE TABLE "CharacterWallet" (
    "CharacterId" INTEGER NOT NULL,
    "WalletBalance" DECIMAL,

    CONSTRAINT "CharacterWallet_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CharacterWalletJournal" (
    "CharacterId" INTEGER NOT NULL,
    "Amount" DECIMAL,
    "Balance" DECIMAL,
    "ContextId" BIGINT,
    "ContextIdType" TEXT,
    "Date" TIMESTAMPTZ,
    "Description" TEXT,
    "FirstPartyId" INTEGER,
    "Id" BIGINT NOT NULL,
    "Reason" TEXT,
    "RefType" TEXT,
    "SecondPartyId" INTEGER,
    "Tax" DECIMAL,
    "TaxReceiverId" INTEGER,

    CONSTRAINT "CharacterWalletJournal_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "CharacterWalletTransactions" (
    "CharacterId" INTEGER NOT NULL,
    "ClientId" INTEGER,
    "Date" TIMESTAMPTZ,
    "IsBuy" BOOLEAN,
    "IsPersonal" BOOLEAN,
    "JournalRefId" BIGINT,
    "LocationId" BIGINT,
    "Quantity" INTEGER,
    "TransactionId" BIGINT NOT NULL,
    "TypeId" INTEGER,
    "UnitPrice" DECIMAL,

    CONSTRAINT "CharacterWalletTransactions_pkey" PRIMARY KEY ("TransactionId")
);

-- CreateTable
CREATE TABLE "ContractsPublic" (
    "RegionId" INTEGER,
    "Buyout" DECIMAL,
    "Collateral" DECIMAL,
    "ContractId" INTEGER NOT NULL,
    "DateExpired" TIMESTAMPTZ,
    "DateIssued" TIMESTAMPTZ,
    "DaysToComplete" INTEGER,
    "EndLocationId" BIGINT,
    "ForCorporation" BOOLEAN,
    "IssuerCorporationId" INTEGER,
    "IssuerId" INTEGER,
    "Price" DECIMAL,
    "Reward" DECIMAL,
    "StartLocationId" BIGINT,
    "Title" TEXT,
    "Type" TEXT,
    "Volume" DECIMAL,

    CONSTRAINT "ContractsPublic_pkey" PRIMARY KEY ("ContractId")
);

-- CreateTable
CREATE TABLE "ContractsPublicBid" (
    "ContractId" INTEGER NOT NULL,
    "Amount" DOUBLE PRECISION,
    "BidId" INTEGER NOT NULL,
    "DateBid" TIMESTAMPTZ,

    CONSTRAINT "ContractsPublicBid_pkey" PRIMARY KEY ("ContractId","BidId")
);

-- CreateTable
CREATE TABLE "ContractsPublicItems" (
    "ContractId" INTEGER,
    "IsBlueprintCopy" BOOLEAN,
    "IsIncluded" BOOLEAN,
    "ItemId" BIGINT,
    "MaterialEfficiency" INTEGER,
    "Quantity" INTEGER,
    "RecordId" BIGINT NOT NULL,
    "Runs" INTEGER,
    "TimeEfficiency" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "ContractsPublicItems_pkey" PRIMARY KEY ("RecordId")
);

-- CreateTable
CREATE TABLE "corporationMiningExtractions" (
    "ChunkArrivalTime" TIMESTAMPTZ,
    "ExtractionStartTime" TIMESTAMPTZ,
    "MoonId" INTEGER,
    "NaturalDecayTime" TIMESTAMPTZ,
    "StructureId" BIGINT NOT NULL,

    CONSTRAINT "corporationMiningExtractions_pkey" PRIMARY KEY ("StructureId")
);

-- CreateTable
CREATE TABLE "corporationMiningObservers" (
    "ObserverId" BIGINT NOT NULL,
    "CharacterId" INTEGER NOT NULL,
    "LastUpDated" TIMESTAMPTZ NOT NULL,
    "Quantity" BIGINT,
    "RecordedCorporationId" INTEGER,
    "TypeId" INTEGER NOT NULL,

    CONSTRAINT "corporationMiningObservers_pkey" PRIMARY KEY ("ObserverId","CharacterId","LastUpDated","TypeId")
);

-- CreateTable
CREATE TABLE "Corporation" (
    "CorporationId" INTEGER NOT NULL,
    "AllianceId" INTEGER,
    "CeoId" INTEGER,
    "CreatorId" INTEGER,
    "DateFounded" TIMESTAMPTZ,
    "Description" TEXT,
    "FactionId" INTEGER,
    "HomeStationId" INTEGER,
    "MemberCount" INTEGER,
    "Name" TEXT,
    "Shares" BIGINT,
    "TaxRate" DOUBLE PRECISION,
    "Ticker" TEXT,
    "Url" TEXT,
    "WarEligible" BOOLEAN,

    CONSTRAINT "Corporation_pkey" PRIMARY KEY ("CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationAlliancehistory" (
    "CorporationId" INTEGER NOT NULL,
    "AllianceId" INTEGER,
    "IsDeleted" BOOLEAN,
    "RecordId" INTEGER NOT NULL,
    "StartDate" TIMESTAMPTZ,

    CONSTRAINT "CorporationAlliancehistory_pkey" PRIMARY KEY ("CorporationId","RecordId")
);

-- CreateTable
CREATE TABLE "CorporationAssets" (
    "CorporationId" INTEGER NOT NULL,
    "IsBlueprintCopy" BOOLEAN,
    "IsSingleton" BOOLEAN,
    "ItemId" BIGINT NOT NULL,
    "LocationFlag" TEXT,
    "LocationId" BIGINT,
    "LocationType" TEXT,
    "Quantity" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "CorporationAssets_pkey" PRIMARY KEY ("CorporationId","ItemId")
);

-- CreateTable
CREATE TABLE "CorporationBlueprints" (
    "CorporationId" INTEGER NOT NULL,
    "ItemId" BIGINT NOT NULL,
    "LocationFlag" TEXT,
    "LocationId" BIGINT,
    "MaterialEfficiency" INTEGER,
    "Quantity" INTEGER,
    "Runs" INTEGER,
    "TimeEfficiency" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "CorporationBlueprints_pkey" PRIMARY KEY ("CorporationId","ItemId")
);

-- CreateTable
CREATE TABLE "CorporationBookmarks" (
    "CorporationId" INTEGER NOT NULL,
    "BookmarkId" INTEGER NOT NULL,
    "Coordinates" JSONB,
    "Created" TIMESTAMPTZ,
    "CreatorId" INTEGER,
    "FolderId" INTEGER,
    "Item" JSONB,
    "Label" TEXT,
    "LocationId" INTEGER,
    "Notes" TEXT,

    CONSTRAINT "CorporationBookmarks_pkey" PRIMARY KEY ("CorporationId","BookmarkId")
);

-- CreateTable
CREATE TABLE "CorporationBookmarksFolders" (
    "CorporationId" INTEGER NOT NULL,
    "CreatorId" INTEGER,
    "FolderId" INTEGER NOT NULL,
    "Name" TEXT,

    CONSTRAINT "CorporationBookmarksFolders_pkey" PRIMARY KEY ("CorporationId","FolderId")
);

-- CreateTable
CREATE TABLE "CorporationContact" (
    "CorporationId" INTEGER NOT NULL,
    "ContactId" INTEGER NOT NULL,
    "ContactType" TEXT,
    "IsWatched" BOOLEAN,
    "LabelIds" JSONB,
    "Standing" DOUBLE PRECISION,

    CONSTRAINT "CorporationContact_pkey" PRIMARY KEY ("CorporationId","ContactId")
);

-- CreateTable
CREATE TABLE "CorporationContactLabel" (
    "CorporationId" INTEGER,
    "LabelId" BIGINT NOT NULL,
    "LabelName" TEXT,

    CONSTRAINT "CorporationContactLabel_pkey" PRIMARY KEY ("LabelId")
);

-- CreateTable
CREATE TABLE "CorporationContainersLogs" (
    "CorporationId" INTEGER,
    "Action" TEXT,
    "CharacterId" INTEGER,
    "ContainerId" BIGINT NOT NULL,
    "ContainerTypeId" INTEGER,
    "LocationFlag" TEXT,
    "LocationId" BIGINT,
    "LoggedAt" TIMESTAMPTZ,
    "NewConfigBitmask" INTEGER,
    "OldConfigBitmask" INTEGER,
    "PasswordType" TEXT,
    "Quantity" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "CorporationContainersLogs_pkey" PRIMARY KEY ("ContainerId")
);

-- CreateTable
CREATE TABLE "CorporationContracts" (
    "CorporationId" INTEGER,
    "AcceptorId" INTEGER,
    "AssigneeId" INTEGER,
    "Availability" TEXT,
    "Buyout" DECIMAL,
    "Collateral" DECIMAL,
    "ContractId" INTEGER NOT NULL,
    "DateAccepted" TIMESTAMPTZ,
    "DateCompleted" TIMESTAMPTZ,
    "DateExpired" TIMESTAMPTZ,
    "DateIssued" TIMESTAMPTZ,
    "DaysToComplete" INTEGER,
    "EndLocationId" BIGINT,
    "ForCorporation" BOOLEAN,
    "IssuerCorporationId" INTEGER,
    "IssuerId" INTEGER,
    "Price" DECIMAL,
    "Reward" DECIMAL,
    "StartLocationId" BIGINT,
    "Status" TEXT,
    "Title" TEXT,
    "Type" TEXT,
    "Volume" DECIMAL,

    CONSTRAINT "CorporationContracts_pkey" PRIMARY KEY ("ContractId")
);

-- CreateTable
CREATE TABLE "CorporationContractsBid" (
    "ContractId" INTEGER NOT NULL,
    "Amount" DOUBLE PRECISION,
    "BidId" INTEGER,
    "BidderId" INTEGER NOT NULL,
    "DateBid" TIMESTAMPTZ,

    CONSTRAINT "CorporationContractsBid_pkey" PRIMARY KEY ("BidderId")
);

-- CreateTable
CREATE TABLE "CorporationContractsItems" (
    "ContractId" INTEGER NOT NULL,
    "IsIncluded" BOOLEAN,
    "IsSingleton" BOOLEAN,
    "Quantity" INTEGER,
    "RawQuantity" INTEGER,
    "RecordId" BIGINT NOT NULL,
    "TypeId" INTEGER,

    CONSTRAINT "CorporationContractsItems_pkey" PRIMARY KEY ("RecordId")
);

-- CreateTable
CREATE TABLE "CorporationCustomsOffices" (
    "CorporationId" INTEGER,
    "AllianceTaxRate" DOUBLE PRECISION,
    "AllowAccessWithStandings" BOOLEAN,
    "AllowAllianceAccess" BOOLEAN,
    "BadStandingTaxRate" DOUBLE PRECISION,
    "CorporationTaxRate" DOUBLE PRECISION,
    "ExcellentStandingTaxRate" DOUBLE PRECISION,
    "GoodStandingTaxRate" DOUBLE PRECISION,
    "NeutralStandingTaxRate" DOUBLE PRECISION,
    "OfficeId" BIGINT NOT NULL,
    "ReinforceExitEnd" INTEGER,
    "ReinforceExitStart" INTEGER,
    "StandingLevel" TEXT,
    "SystemId" INTEGER,
    "TerribleStandingTaxRate" DOUBLE PRECISION,

    CONSTRAINT "CorporationCustomsOffices_pkey" PRIMARY KEY ("OfficeId")
);

-- CreateTable
CREATE TABLE "CorporationDivisions" (
    "CorporationId" INTEGER NOT NULL,
    "Hangar" JSONB,
    "Wallet" JSONB,

    CONSTRAINT "CorporationDivisions_pkey" PRIMARY KEY ("CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationFacilities" (
    "CorporationId" INTEGER,
    "FacilityId" BIGINT NOT NULL,
    "SystemId" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "CorporationFacilities_pkey" PRIMARY KEY ("FacilityId")
);

-- CreateTable
CREATE TABLE "CorporationFwStats" (
    "CorporationId" INTEGER NOT NULL,
    "EnlistedOn" TIMESTAMPTZ,
    "FactionId" INTEGER,
    "Kills" JSONB,
    "Pilots" INTEGER,
    "VictoryPoints" JSONB,

    CONSTRAINT "CorporationFwStats_pkey" PRIMARY KEY ("CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationIcons" (
    "CorporationId" INTEGER NOT NULL,
    "Px128x128" TEXT,
    "Px256x256" TEXT,
    "Px64x64" TEXT,

    CONSTRAINT "CorporationIcons_pkey" PRIMARY KEY ("CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationIndustryJobs" (
    "CorporationId" INTEGER NOT NULL,
    "ActivityId" INTEGER,
    "BlueprintId" BIGINT,
    "BlueprintLocationId" BIGINT,
    "BlueprintTypeId" INTEGER,
    "CompletedCharacterId" INTEGER,
    "CompletedDate" TIMESTAMPTZ,
    "Cost" DECIMAL,
    "Duration" INTEGER,
    "EndDate" TIMESTAMPTZ,
    "FacilityId" BIGINT,
    "InstallerId" INTEGER,
    "JoBid" INTEGER NOT NULL,
    "LicensedRuns" INTEGER,
    "LocationId" BIGINT,
    "OutputLocationId" BIGINT,
    "PauseDate" TIMESTAMPTZ,
    "Probability" DOUBLE PRECISION,
    "ProductTypeId" INTEGER,
    "Runs" INTEGER,
    "StartDate" TIMESTAMPTZ,
    "Status" TEXT,
    "SuccessfulRuns" INTEGER,

    CONSTRAINT "CorporationIndustryJobs_pkey" PRIMARY KEY ("JoBid")
);

-- CreateTable
CREATE TABLE "CorporationMedals" (
    "CorporationId" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMPTZ,
    "CreatorId" INTEGER,
    "Description" TEXT,
    "MedalId" INTEGER NOT NULL,
    "Title" TEXT,

    CONSTRAINT "CorporationMedals_pkey" PRIMARY KEY ("CorporationId","MedalId")
);

-- CreateTable
CREATE TABLE "CorporationMedalsIssued" (
    "CorporationId" INTEGER,
    "CharacterId" INTEGER NOT NULL,
    "IssuedAt" TIMESTAMPTZ,
    "IssuerId" INTEGER,
    "MedalId" INTEGER NOT NULL,
    "Reason" TEXT,
    "Status" TEXT,

    CONSTRAINT "CorporationMedalsIssued_pkey" PRIMARY KEY ("CharacterId","MedalId")
);

-- CreateTable
CREATE TABLE "CorporationMembers" (
    "CorporationId" INTEGER NOT NULL,
    "Members" JSONB,

    CONSTRAINT "CorporationMembers_pkey" PRIMARY KEY ("CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationMembersLimit" (
    "CorporationId" INTEGER NOT NULL,
    "MemberLimit" INTEGER,

    CONSTRAINT "CorporationMembersLimit_pkey" PRIMARY KEY ("CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationMembersTitle" (
    "CorporationId" INTEGER NOT NULL,
    "CharacterId" INTEGER NOT NULL,
    "Title" JSONB,

    CONSTRAINT "CorporationMembersTitle_pkey" PRIMARY KEY ("CharacterId","CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationMembertracking" (
    "CorporationId" INTEGER NOT NULL,
    "BaseId" INTEGER,
    "CharacterId" INTEGER NOT NULL,
    "LocationId" BIGINT,
    "LogoffDate" TIMESTAMPTZ,
    "LogonDate" TIMESTAMPTZ,
    "ShipTypeId" INTEGER,
    "StartDate" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "CorporationMembertracking_pkey" PRIMARY KEY ("CharacterId","StartDate")
);

-- CreateTable
CREATE TABLE "CorporationNpccorps" (
    "CorporationId" INTEGER NOT NULL,

    CONSTRAINT "CorporationNpccorps_pkey" PRIMARY KEY ("CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationOrder" (
    "CorporationId" INTEGER NOT NULL,
    "Duration" INTEGER,
    "Escrow" DECIMAL,
    "IsBuyOrder" BOOLEAN,
    "Issued" TIMESTAMPTZ,
    "IssuedBy" INTEGER,
    "LocationId" BIGINT,
    "MinVolume" INTEGER,
    "OrderId" BIGINT NOT NULL,
    "Price" DECIMAL,
    "Range" TEXT,
    "RegionId" INTEGER,
    "TypeId" INTEGER,
    "VolumeRemain" INTEGER,
    "VolumeTotal" INTEGER,
    "WalletDivision" INTEGER,

    CONSTRAINT "CorporationOrder_pkey" PRIMARY KEY ("OrderId")
);

-- CreateTable
CREATE TABLE "CorporationOrderHistory" (
    "CorporationId" INTEGER NOT NULL,
    "Duration" INTEGER,
    "Escrow" DECIMAL,
    "IsBuyOrder" BOOLEAN,
    "Issued" TIMESTAMPTZ,
    "IssuedBy" INTEGER,
    "LocationId" BIGINT,
    "MinVolume" INTEGER,
    "OrderId" BIGINT NOT NULL,
    "Price" DECIMAL,
    "Range" TEXT,
    "RegionId" INTEGER,
    "State" TEXT,
    "TypeId" INTEGER,
    "VolumeRemain" INTEGER,
    "VolumeTotal" INTEGER,
    "WalletDivision" INTEGER,

    CONSTRAINT "CorporationOrderHistory_pkey" PRIMARY KEY ("OrderId")
);

-- CreateTable
CREATE TABLE "CorporationRoles" (
    "CorporationId" INTEGER NOT NULL,
    "CharacterId" INTEGER NOT NULL,
    "GrantableRoles" JSONB,
    "GrantableRolesAtBase" JSONB,
    "GrantableRolesAtHq" JSONB,
    "GrantableRolesAtOther" JSONB,
    "Roles" JSONB,
    "RolesAtBase" JSONB,
    "RolesAtHq" JSONB,
    "RolesAtOther" JSONB,

    CONSTRAINT "CorporationRoles_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "CorporationRolesHistory" (
    "CorporationId" INTEGER,
    "ChangedAt" TIMESTAMPTZ NOT NULL,
    "CharacterId" INTEGER NOT NULL,
    "IssuerId" INTEGER,
    "NewRoles" JSONB,
    "OldRoles" JSONB,
    "RoleType" TEXT,

    CONSTRAINT "CorporationRolesHistory_pkey" PRIMARY KEY ("CharacterId","ChangedAt")
);

-- CreateTable
CREATE TABLE "CorporationShareholders" (
    "CorporationId" INTEGER NOT NULL,
    "ShareCount" BIGINT,
    "ShareholderId" INTEGER NOT NULL,
    "ShareholderType" TEXT,

    CONSTRAINT "CorporationShareholders_pkey" PRIMARY KEY ("ShareholderId","CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationStandings" (
    "CorporationId" INTEGER NOT NULL,
    "FromId" INTEGER NOT NULL,
    "FromType" TEXT,
    "Standing" DOUBLE PRECISION,

    CONSTRAINT "CorporationStandings_pkey" PRIMARY KEY ("CorporationId","FromId")
);

-- CreateTable
CREATE TABLE "CorporationStarbases" (
    "CorporationId" INTEGER,
    "StarbaseId" BIGINT NOT NULL,
    "AllowAllianceMembers" BOOLEAN,
    "AllowCorporationMembers" BOOLEAN,
    "Anchor" TEXT,
    "AttackIfAtWar" BOOLEAN,
    "AttackIfOtherSecurityStatusDropping" BOOLEAN,
    "AttackSecurityStatusThreshold" DOUBLE PRECISION,
    "AttackStandingThreshold" DOUBLE PRECISION,
    "FuelBayTake" TEXT,
    "FuelBayView" TEXT,
    "Fuels" JSONB,
    "Offline" TEXT,
    "Online" TEXT,
    "Unanchor" TEXT,
    "UseAlliancetandings" BOOLEAN,

    CONSTRAINT "CorporationStarbases_pkey" PRIMARY KEY ("StarbaseId")
);

-- CreateTable
CREATE TABLE "CorporationStructure" (
    "CorporationId" INTEGER,
    "FuelExpires" TIMESTAMPTZ,
    "Name" TEXT,
    "NextReinforceApply" TIMESTAMPTZ,
    "NextReinforceHour" INTEGER,
    "ProfileId" INTEGER,
    "ReinforceHour" INTEGER,
    "Services" JSONB,
    "State" TEXT,
    "StateTimerEnd" TIMESTAMPTZ,
    "StateTimerStart" TIMESTAMPTZ,
    "StructureId" BIGINT NOT NULL,
    "SystemId" INTEGER,
    "TypeId" INTEGER,
    "UnanchorsAt" TIMESTAMPTZ,

    CONSTRAINT "CorporationStructure_pkey" PRIMARY KEY ("StructureId")
);

-- CreateTable
CREATE TABLE "CorporationTitle" (
    "CorporationId" INTEGER NOT NULL,
    "GrantableRoles" JSONB,
    "GrantableRolesAtBase" JSONB,
    "GrantableRolesAtHq" JSONB,
    "GrantableRolesAtOther" JSONB,
    "Name" TEXT,
    "Roles" JSONB,
    "RolesAtBase" JSONB,
    "RolesAtHq" JSONB,
    "RolesAtOther" JSONB,
    "TitleId" INTEGER NOT NULL,

    CONSTRAINT "CorporationTitle_pkey" PRIMARY KEY ("TitleId","CorporationId")
);

-- CreateTable
CREATE TABLE "CorporationWallet" (
    "CorporationId" INTEGER NOT NULL,
    "Balance" DECIMAL,
    "Division" INTEGER NOT NULL,

    CONSTRAINT "CorporationWallet_pkey" PRIMARY KEY ("CorporationId","Division")
);

-- CreateTable
CREATE TABLE "CorporationWalletDivisionJournal" (
    "CorporationId" INTEGER NOT NULL,
    "Division" INTEGER,
    "Amount" DECIMAL,
    "Balance" DECIMAL,
    "ContextId" BIGINT,
    "ContextIdType" TEXT,
    "Date" TIMESTAMPTZ,
    "Description" TEXT,
    "FirstPartyId" INTEGER,
    "Id" BIGINT NOT NULL,
    "Reason" TEXT,
    "RefType" TEXT,
    "SecondPartyId" INTEGER,
    "Tax" DECIMAL,
    "TaxReceiverId" INTEGER,

    CONSTRAINT "CorporationWalletDivisionJournal_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "CorporationWalletDivisionTransaction" (
    "CorporationId" INTEGER NOT NULL,
    "Division" INTEGER,
    "ClientId" INTEGER,
    "Date" TIMESTAMPTZ,
    "IsBuy" BOOLEAN,
    "JournalRefId" BIGINT,
    "LocationId" BIGINT,
    "Quantity" INTEGER,
    "TransactionId" BIGINT NOT NULL,
    "TypeId" INTEGER,
    "UnitPrice" DECIMAL,

    CONSTRAINT "CorporationWalletDivisionTransaction_pkey" PRIMARY KEY ("TransactionId")
);

-- CreateTable
CREATE TABLE "DogmaAttributes" (
    "AttributeId" INTEGER NOT NULL,
    "DefaultValue" DOUBLE PRECISION,
    "Description" TEXT,
    "DisplayName" TEXT,
    "HighIsGood" BOOLEAN,
    "IconId" INTEGER,
    "Name" TEXT,
    "Published" BOOLEAN,
    "Stackable" BOOLEAN,
    "UnitId" INTEGER,

    CONSTRAINT "DogmaAttributes_pkey" PRIMARY KEY ("AttributeId")
);

-- CreateTable
CREATE TABLE "DogmaDynamicItems" (
    "ItemId" BIGINT NOT NULL,
    "TypeId" INTEGER,
    "CreatedBy" INTEGER,
    "DogmaAttributes" JSONB,
    "DogmaEffects" JSONB,
    "MutatorTypeId" INTEGER,
    "SourceTypeId" INTEGER,

    CONSTRAINT "DogmaDynamicItems_pkey" PRIMARY KEY ("ItemId")
);

-- CreateTable
CREATE TABLE "DogmaEffects" (
    "EffectId" INTEGER NOT NULL,
    "Description" TEXT,
    "DisallowAutoRepeat" BOOLEAN,
    "DischargeAttributeId" INTEGER,
    "DisplayName" TEXT,
    "DurationAttributeId" INTEGER,
    "EffectCategory" INTEGER,
    "ElectronicChance" BOOLEAN,
    "FalloffAttributeId" INTEGER,
    "IconId" INTEGER,
    "IsAssistance" BOOLEAN,
    "IsOffensive" BOOLEAN,
    "IsWarpSafe" BOOLEAN,
    "Modifiers" JSONB,
    "Name" TEXT,
    "PostExpression" INTEGER,
    "PreExpression" INTEGER,
    "Published" BOOLEAN,
    "RangeAttributeId" INTEGER,
    "RangeChance" BOOLEAN,
    "TrackingSpeedAttributeId" INTEGER,

    CONSTRAINT "DogmaEffects_pkey" PRIMARY KEY ("EffectId")
);

-- CreateTable
CREATE TABLE "Incursion" (
    "ConstellationId" INTEGER NOT NULL,
    "FactionId" INTEGER,
    "HasBoss" BOOLEAN,
    "InfestedSolarSystem" JSONB,
    "Influence" DOUBLE PRECISION,
    "StagingSolarSystemId" INTEGER,
    "State" TEXT,
    "Type" TEXT,

    CONSTRAINT "Incursion_pkey" PRIMARY KEY ("ConstellationId")
);

-- CreateTable
CREATE TABLE "IndustryFacilities" (
    "FacilityId" BIGINT NOT NULL,
    "OwnerId" INTEGER,
    "RegionId" INTEGER,
    "SolarSystemId" INTEGER,
    "Tax" DOUBLE PRECISION,
    "TypeId" INTEGER,

    CONSTRAINT "IndustryFacilities_pkey" PRIMARY KEY ("FacilityId")
);

-- CreateTable
CREATE TABLE "IndustrySystem" (
    "CostIndices" JSONB,
    "SolarSystemId" INTEGER NOT NULL,

    CONSTRAINT "IndustrySystem_pkey" PRIMARY KEY ("SolarSystemId")
);

-- CreateTable
CREATE TABLE "killmails" (
    "KillmailHash" TEXT,
    "KillmailId" INTEGER NOT NULL,
    "Attackers" JSONB,
    "KillmailTime" TIMESTAMPTZ,
    "MoonId" INTEGER,
    "SolarSystemId" INTEGER,
    "Victim" JSONB,
    "WarId" INTEGER,

    CONSTRAINT "killmails_pkey" PRIMARY KEY ("KillmailId")
);

-- CreateTable
CREATE TABLE "LoyaltyStoreOffer" (
    "CorporationId" INTEGER NOT NULL,
    "AkCost" INTEGER,
    "IskCost" BIGINT,
    "LpCost" INTEGER,
    "OfferId" INTEGER NOT NULL,
    "Quantity" INTEGER,
    "RequiredItems" JSONB,
    "TypeId" INTEGER,

    CONSTRAINT "LoyaltyStoreOffer_pkey" PRIMARY KEY ("CorporationId","OfferId")
);

-- CreateTable
CREATE TABLE "MarketGroupMarket" (
    "MarketGroupId" INTEGER NOT NULL,
    "Description" TEXT,
    "Name" TEXT,
    "ParentGroupId" INTEGER,
    "Types" JSONB,

    CONSTRAINT "MarketGroupMarket_pkey" PRIMARY KEY ("MarketGroupId")
);

-- CreateTable
CREATE TABLE "MarketHistory" (
    "TypeId" INTEGER NOT NULL,
    "RegionId" INTEGER NOT NULL,
    "Timestamp" TIMESTAMPTZ NOT NULL,
    "Average" DECIMAL,
    "Date" TIMESTAMPTZ,
    "Highest" DECIMAL,
    "Lowest" DECIMAL,
    "OrderCount" BIGINT,
    "Volume" BIGINT,

    CONSTRAINT "MarketHistory_pkey" PRIMARY KEY ("TypeId","RegionId","Timestamp")
);

-- CreateTable
CREATE TABLE "MarketOrder" (
    "RegionId" INTEGER,
    "Duration" INTEGER,
    "IsBuyOrder" BOOLEAN,
    "Issued" TIMESTAMPTZ,
    "LocationId" BIGINT,
    "MinVolume" INTEGER,
    "OrderId" BIGINT NOT NULL,
    "Price" DECIMAL,
    "Range" TEXT,
    "SystemId" INTEGER,
    "TypeId" INTEGER,
    "VolumeRemain" INTEGER,
    "VolumeTotal" INTEGER,

    CONSTRAINT "MarketOrder_pkey" PRIMARY KEY ("OrderId")
);

-- CreateTable
CREATE TABLE "MarketPrice" (
    "AdjustedPrice" DECIMAL,
    "AveragePrice" DECIMAL,
    "TypeId" INTEGER NOT NULL,
    "Timestamp" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "MarketPrice_pkey" PRIMARY KEY ("TypeId","Timestamp")
);

-- CreateTable
CREATE TABLE "MarketStructure" (
    "StructureId" BIGINT NOT NULL,
    "Duration" INTEGER,
    "IsBuyOrder" BOOLEAN,
    "Issued" TIMESTAMPTZ,
    "LocationId" BIGINT,
    "MinVolume" INTEGER,
    "OrderId" BIGINT,
    "Price" DECIMAL,
    "Range" TEXT,
    "TypeId" INTEGER,
    "VolumeRemain" INTEGER,
    "VolumeTotal" INTEGER,

    CONSTRAINT "MarketStructure_pkey" PRIMARY KEY ("StructureId")
);

-- CreateTable
CREATE TABLE "OpportunityGroup" (
    "GroupId" INTEGER NOT NULL,
    "ConnectedGroup" JSONB,
    "Description" TEXT,
    "Name" TEXT,
    "Notification" TEXT,
    "RequiredTasks" JSONB,

    CONSTRAINT "OpportunityGroup_pkey" PRIMARY KEY ("GroupId")
);

-- CreateTable
CREATE TABLE "OpportunityTask" (
    "TaskId" INTEGER NOT NULL,
    "Description" TEXT,
    "Name" TEXT,
    "Notification" TEXT,

    CONSTRAINT "OpportunityTask_pkey" PRIMARY KEY ("TaskId")
);

-- CreateTable
CREATE TABLE "SovereigntyCampaigns" (
    "AttackersScore" DOUBLE PRECISION,
    "CampaignId" INTEGER NOT NULL,
    "ConstellationId" INTEGER,
    "DefenderId" INTEGER,
    "DefenderScore" DOUBLE PRECISION,
    "EventType" TEXT,
    "Participants" JSONB,
    "SolarSystemId" INTEGER,
    "StartTime" TIMESTAMPTZ,
    "StructureId" BIGINT,

    CONSTRAINT "SovereigntyCampaigns_pkey" PRIMARY KEY ("CampaignId")
);

-- CreateTable
CREATE TABLE "SovereigntyMap" (
    "AllianceId" INTEGER,
    "CorporationId" INTEGER,
    "FactionId" INTEGER,
    "SystemId" INTEGER NOT NULL,

    CONSTRAINT "SovereigntyMap_pkey" PRIMARY KEY ("SystemId")
);

-- CreateTable
CREATE TABLE "SovereigntyStructure" (
    "AllianceId" INTEGER,
    "SolarSystemId" INTEGER,
    "StructureId" BIGINT NOT NULL,
    "StructureTypeId" INTEGER,
    "VulnerabilityOccupancyLevel" DOUBLE PRECISION,
    "VulnerableEndTime" TIMESTAMPTZ,
    "VulnerableStartTime" TIMESTAMPTZ,

    CONSTRAINT "SovereigntyStructure_pkey" PRIMARY KEY ("StructureId")
);

-- CreateTable
CREATE TABLE "Status" (
    "Id" BIGSERIAL NOT NULL,
    "Timestamp" TIMESTAMPTZ,
    "Players" INTEGER,
    "ServerVersion" TEXT,
    "StartTime" TIMESTAMPTZ,
    "Vip" BOOLEAN,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Ancestry" (
    "BloodlineId" INTEGER,
    "Description" TEXT,
    "IconId" INTEGER,
    "Id" INTEGER NOT NULL,
    "Name" TEXT,
    "ShortDescription" TEXT,

    CONSTRAINT "Ancestry_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "AsteroIdBelt" (
    "AsteroIdBeltId" INTEGER NOT NULL,
    "Name" TEXT,
    "Position" JSONB,
    "SystemId" INTEGER,

    CONSTRAINT "AsteroIdBelt_pkey" PRIMARY KEY ("AsteroIdBeltId")
);

-- CreateTable
CREATE TABLE "Bloodline" (
    "BloodlineId" INTEGER NOT NULL,
    "Charisma" INTEGER,
    "CorporationId" INTEGER,
    "Description" TEXT,
    "Intelligence" INTEGER,
    "Memory" INTEGER,
    "Name" TEXT,
    "Perception" INTEGER,
    "RaceId" INTEGER,
    "ShipTypeId" INTEGER,
    "Willpower" INTEGER,

    CONSTRAINT "Bloodline_pkey" PRIMARY KEY ("BloodlineId")
);

-- CreateTable
CREATE TABLE "Categories" (
    "CategoryId" INTEGER NOT NULL,
    "Group" JSONB,
    "Name" TEXT,
    "Published" BOOLEAN,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("CategoryId")
);

-- CreateTable
CREATE TABLE "Constellation" (
    "ConstellationId" INTEGER NOT NULL,
    "Name" TEXT,
    "Position" JSONB,
    "RegionId" INTEGER,
    "System" JSONB,

    CONSTRAINT "Constellation_pkey" PRIMARY KEY ("ConstellationId")
);

-- CreateTable
CREATE TABLE "Factions" (
    "CorporationId" INTEGER,
    "Description" TEXT,
    "FactionId" INTEGER NOT NULL,
    "IsUnique" BOOLEAN,
    "MilitiaCorporationId" INTEGER,
    "Name" TEXT,
    "SizeFactor" DOUBLE PRECISION,
    "SolarSystemId" INTEGER,
    "StationCount" INTEGER,
    "StationSystemCount" INTEGER,

    CONSTRAINT "Factions_pkey" PRIMARY KEY ("FactionId")
);

-- CreateTable
CREATE TABLE "Graphic" (
    "GraphicId" INTEGER NOT NULL,
    "CollisionFile" TEXT,
    "GraphicFile" TEXT,
    "IconFolder" TEXT,
    "SofDna" TEXT,
    "SofFationName" TEXT,
    "SofHullName" TEXT,
    "SofRaceName" TEXT,

    CONSTRAINT "Graphic_pkey" PRIMARY KEY ("GraphicId")
);

-- CreateTable
CREATE TABLE "Group" (
    "GroupId" INTEGER NOT NULL,
    "CategoryId" INTEGER,
    "Name" TEXT,
    "Published" BOOLEAN,
    "Types" JSONB,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("GroupId")
);

-- CreateTable
CREATE TABLE "Moon" (
    "MoonId" INTEGER NOT NULL,
    "Name" TEXT,
    "Position" JSONB,
    "SystemId" INTEGER,

    CONSTRAINT "Moon_pkey" PRIMARY KEY ("MoonId")
);

-- CreateTable
CREATE TABLE "Planet" (
    "PlanetId" INTEGER NOT NULL,
    "Name" TEXT,
    "Position" JSONB,
    "SystemId" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("PlanetId")
);

-- CreateTable
CREATE TABLE "Race" (
    "AllianceId" INTEGER,
    "Description" TEXT,
    "Name" TEXT,
    "RaceId" INTEGER NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("RaceId")
);

-- CreateTable
CREATE TABLE "Region" (
    "RegionId" INTEGER NOT NULL,
    "Constellation" JSONB,
    "Description" TEXT,
    "Name" TEXT,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("RegionId")
);

-- CreateTable
CREATE TABLE "Schematic" (
    "SchematicId" INTEGER NOT NULL,
    "CycleTime" INTEGER,
    "SchematicName" TEXT,

    CONSTRAINT "Schematic_pkey" PRIMARY KEY ("SchematicId")
);

-- CreateTable
CREATE TABLE "Stargate" (
    "StargateId" INTEGER NOT NULL,
    "Destination" JSONB,
    "Name" TEXT,
    "Position" JSONB,
    "SystemId" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "Stargate_pkey" PRIMARY KEY ("StargateId")
);

-- CreateTable
CREATE TABLE "Star" (
    "StarId" INTEGER NOT NULL,
    "Age" BIGINT,
    "Luminosity" DOUBLE PRECISION,
    "Name" TEXT,
    "Radius" BIGINT,
    "SolarSystemId" INTEGER,
    "SpectralClass" TEXT,
    "Temperature" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "Star_pkey" PRIMARY KEY ("StarId")
);

-- CreateTable
CREATE TABLE "Stations" (
    "StationId" INTEGER NOT NULL,
    "MaxDockableShipVolume" DOUBLE PRECISION,
    "Name" TEXT,
    "OfficeRentalCost" DOUBLE PRECISION,
    "Owner" INTEGER,
    "Position" JSONB,
    "RaceId" INTEGER,
    "ReprocessingEfficiency" DOUBLE PRECISION,
    "ReprocessingStationsTake" DOUBLE PRECISION,
    "Services" JSONB,
    "SystemId" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "Stations_pkey" PRIMARY KEY ("StationId")
);

-- CreateTable
CREATE TABLE "Structure" (
    "StructureId" BIGINT NOT NULL,
    "Name" TEXT,
    "OwnerId" INTEGER,
    "Position" JSONB,
    "SolarSystemId" INTEGER,
    "TypeId" INTEGER,

    CONSTRAINT "Structure_pkey" PRIMARY KEY ("StructureId")
);

-- CreateTable
CREATE TABLE "SystemJump" (
    "ShipJumps" INTEGER,
    "SystemId" INTEGER NOT NULL,
    "Timestamp" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "SystemJump_pkey" PRIMARY KEY ("SystemId","Timestamp")
);

-- CreateTable
CREATE TABLE "SystemKill" (
    "NpcKills" INTEGER,
    "PodKills" INTEGER,
    "ShipKills" INTEGER,
    "SystemId" INTEGER NOT NULL,
    "Timestamp" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "SystemKill_pkey" PRIMARY KEY ("SystemId","Timestamp")
);

-- CreateTable
CREATE TABLE "System" (
    "SystemId" INTEGER NOT NULL,
    "ConstellationId" INTEGER,
    "Name" TEXT,
    "Planet" JSONB,
    "Position" JSONB,
    "SecurityClass" TEXT,
    "SecurityStatus" DOUBLE PRECISION,
    "StarId" INTEGER,
    "Stargate" JSONB,
    "Stations" JSONB,

    CONSTRAINT "System_pkey" PRIMARY KEY ("SystemId")
);

-- CreateTable
CREATE TABLE "Types" (
    "TypeId" INTEGER NOT NULL,
    "Capacity" DOUBLE PRECISION,
    "Description" TEXT,
    "DogmaAttributes" JSONB,
    "DogmaEffects" JSONB,
    "GraphicId" INTEGER,
    "GroupId" INTEGER,
    "IconId" INTEGER,
    "MarketGroupId" INTEGER,
    "Mass" DOUBLE PRECISION,
    "Name" TEXT,
    "PackagedVolume" DOUBLE PRECISION,
    "PortionSize" INTEGER,
    "Published" BOOLEAN,
    "Radius" DOUBLE PRECISION,
    "Volume" DOUBLE PRECISION,

    CONSTRAINT "Types_pkey" PRIMARY KEY ("TypeId")
);

-- CreateTable
CREATE TABLE "Wars" (
    "Aggressor" JSONB,
    "Ally" JSONB,
    "Declared" TIMESTAMPTZ,
    "Defender" JSONB,
    "Finished" TIMESTAMPTZ,
    "Id" INTEGER NOT NULL,
    "Mutual" BOOLEAN,
    "OpenForAlly" BOOLEAN,
    "Retracted" TIMESTAMPTZ,
    "Started" TIMESTAMPTZ,

    CONSTRAINT "Wars_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllianceContact" ADD CONSTRAINT "AllianceContact_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllianceContactLabel" ADD CONSTRAINT "AllianceContactLabel_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllianceIcons" ADD CONSTRAINT "AllianceIcons_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_BloodlineId_fkey" FOREIGN KEY ("BloodlineId") REFERENCES "Bloodline"("BloodlineId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAgentResearch" ADD CONSTRAINT "CharacterAgentResearch_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAssets" ADD CONSTRAINT "CharacterAssets_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAttributes" ADD CONSTRAINT "CharacterAttributes_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterBlueprints" ADD CONSTRAINT "CharacterBlueprints_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterBookmarks" ADD CONSTRAINT "CharacterBookmarks_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterBookmarksFolders" ADD CONSTRAINT "CharacterBookmarksFolders_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterCalendar" ADD CONSTRAINT "CharacterCalendar_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterCalendarAttendees" ADD CONSTRAINT "CharacterCalendarAttendees_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterCalendarHeaders" ADD CONSTRAINT "CharacterCalendarHeaders_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterClones" ADD CONSTRAINT "CharacterClones_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterContact" ADD CONSTRAINT "CharacterContact_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterContactLabel" ADD CONSTRAINT "CharacterContactLabel_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterContracts" ADD CONSTRAINT "CharacterContracts_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterContractsBid" ADD CONSTRAINT "CharacterContractsBid_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterContractsBid" ADD CONSTRAINT "CharacterContractsBid_ContractId_fkey" FOREIGN KEY ("ContractId") REFERENCES "CharacterContracts"("ContractId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterContractsItems" ADD CONSTRAINT "CharacterContractsItems_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterContractsItems" ADD CONSTRAINT "CharacterContractsItems_ContractId_fkey" FOREIGN KEY ("ContractId") REFERENCES "CharacterContracts"("ContractId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterCorporationHistory" ADD CONSTRAINT "CharacterCorporationHistory_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterCorporationHistory" ADD CONSTRAINT "CharacterCorporationHistory_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterFatigue" ADD CONSTRAINT "CharacterFatigue_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterFittings" ADD CONSTRAINT "CharacterFittings_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterFleet" ADD CONSTRAINT "CharacterFleet_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterFwStats" ADD CONSTRAINT "CharacterFwStats_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterImplants" ADD CONSTRAINT "CharacterImplants_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterIndustryJobs" ADD CONSTRAINT "CharacterIndustryJobs_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterLocation" ADD CONSTRAINT "CharacterLocation_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterLoyaltyPoints" ADD CONSTRAINT "CharacterLoyaltyPoints_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterLoyaltyPoints" ADD CONSTRAINT "CharacterLoyaltyPoints_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMail" ADD CONSTRAINT "CharacterMail_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMailHeaders" ADD CONSTRAINT "CharacterMailHeaders_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMailLabel" ADD CONSTRAINT "CharacterMailLabel_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMailList" ADD CONSTRAINT "CharacterMailList_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMedals" ADD CONSTRAINT "CharacterMedals_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMedals" ADD CONSTRAINT "CharacterMedals_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMining" ADD CONSTRAINT "CharacterMining_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterNotification" ADD CONSTRAINT "CharacterNotification_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterNotificationContact" ADD CONSTRAINT "CharacterNotificationContact_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterOnlineHistory" ADD CONSTRAINT "CharacterOnlineHistory_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterOpportunity" ADD CONSTRAINT "CharacterOpportunity_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterOrder" ADD CONSTRAINT "CharacterOrder_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterOrderHistory" ADD CONSTRAINT "CharacterOrderHistory_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterPlanet" ADD CONSTRAINT "CharacterPlanet_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterPlanetLayout" ADD CONSTRAINT "CharacterPlanetLayout_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterPortrait" ADD CONSTRAINT "CharacterPortrait_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterRoles" ADD CONSTRAINT "CharacterRoles_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterShip" ADD CONSTRAINT "CharacterShip_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkillqueue" ADD CONSTRAINT "CharacterSkillqueue_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkills" ADD CONSTRAINT "CharacterSkills_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterStandings" ADD CONSTRAINT "CharacterStandings_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterTitle" ADD CONSTRAINT "CharacterTitle_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterWallet" ADD CONSTRAINT "CharacterWallet_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterWalletJournal" ADD CONSTRAINT "CharacterWalletJournal_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterWalletTransactions" ADD CONSTRAINT "CharacterWalletTransactions_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Corporation" ADD CONSTRAINT "Corporation_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationAlliancehistory" ADD CONSTRAINT "CorporationAlliancehistory_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationAlliancehistory" ADD CONSTRAINT "CorporationAlliancehistory_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationAssets" ADD CONSTRAINT "CorporationAssets_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationBlueprints" ADD CONSTRAINT "CorporationBlueprints_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationBookmarks" ADD CONSTRAINT "CorporationBookmarks_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationBookmarksFolders" ADD CONSTRAINT "CorporationBookmarksFolders_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationContact" ADD CONSTRAINT "CorporationContact_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationContactLabel" ADD CONSTRAINT "CorporationContactLabel_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationContainersLogs" ADD CONSTRAINT "CorporationContainersLogs_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationContracts" ADD CONSTRAINT "CorporationContracts_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationContractsBid" ADD CONSTRAINT "CorporationContractsBid_ContractId_fkey" FOREIGN KEY ("ContractId") REFERENCES "CorporationContracts"("ContractId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationContractsItems" ADD CONSTRAINT "CorporationContractsItems_ContractId_fkey" FOREIGN KEY ("ContractId") REFERENCES "CorporationContracts"("ContractId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationCustomsOffices" ADD CONSTRAINT "CorporationCustomsOffices_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationDivisions" ADD CONSTRAINT "CorporationDivisions_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationFacilities" ADD CONSTRAINT "CorporationFacilities_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationFwStats" ADD CONSTRAINT "CorporationFwStats_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationIcons" ADD CONSTRAINT "CorporationIcons_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationIndustryJobs" ADD CONSTRAINT "CorporationIndustryJobs_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationMedals" ADD CONSTRAINT "CorporationMedals_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationMedalsIssued" ADD CONSTRAINT "CorporationMedalsIssued_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationMembers" ADD CONSTRAINT "CorporationMembers_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationMembersLimit" ADD CONSTRAINT "CorporationMembersLimit_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationMembersTitle" ADD CONSTRAINT "CorporationMembersTitle_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationMembertracking" ADD CONSTRAINT "CorporationMembertracking_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationNpccorps" ADD CONSTRAINT "CorporationNpccorps_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationOrder" ADD CONSTRAINT "CorporationOrder_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationOrderHistory" ADD CONSTRAINT "CorporationOrderHistory_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationRoles" ADD CONSTRAINT "CorporationRoles_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationRolesHistory" ADD CONSTRAINT "CorporationRolesHistory_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationShareholders" ADD CONSTRAINT "CorporationShareholders_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationStandings" ADD CONSTRAINT "CorporationStandings_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationStarbases" ADD CONSTRAINT "CorporationStarbases_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationStructure" ADD CONSTRAINT "CorporationStructure_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationTitle" ADD CONSTRAINT "CorporationTitle_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationWallet" ADD CONSTRAINT "CorporationWallet_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationWalletDivisionJournal" ADD CONSTRAINT "CorporationWalletDivisionJournal_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporationWalletDivisionTransaction" ADD CONSTRAINT "CorporationWalletDivisionTransaction_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoyaltyStoreOffer" ADD CONSTRAINT "LoyaltyStoreOffer_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SovereigntyMap" ADD CONSTRAINT "SovereigntyMap_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SovereigntyMap" ADD CONSTRAINT "SovereigntyMap_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SovereigntyStructure" ADD CONSTRAINT "SovereigntyStructure_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ancestry" ADD CONSTRAINT "Ancestry_BloodlineId_fkey" FOREIGN KEY ("BloodlineId") REFERENCES "Bloodline"("BloodlineId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloodline" ADD CONSTRAINT "Bloodline_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factions" ADD CONSTRAINT "Factions_CorporationId_fkey" FOREIGN KEY ("CorporationId") REFERENCES "Corporation"("CorporationId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_AllianceId_fkey" FOREIGN KEY ("AllianceId") REFERENCES "Alliance"("AllianceId") ON DELETE SET NULL ON UPDATE CASCADE;
