/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CharacterService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Character affiliation
   * Bulk lookup of character IDs to corporation, alliance and faction
   *
   * ---
   * Alternate route: `/dev/characters/affiliation/`
   *
   * Alternate route: `/v2/characters/affiliation/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Character corporation, alliance and faction IDs
   * @throws ApiError
   */
  public postCharactersAffiliation({
    characters,
    datasource = 'tranquility',
  }: {
    /**
     * The character IDs to fetch affiliations for. All characters must exist, or none will be returned
     */
    characters: Array<number>,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
  }): CancelablePromise<Array<{
    /**
     * The character's alliance ID, if their corporation is in an alliance
     */
    alliance_id?: number;
    /**
     * The character's ID
     */
    character_id: number;
    /**
     * The character's corporation ID
     */
    corporation_id: number;
    /**
     * The character's faction ID, if their corporation is in a faction
     */
    faction_id?: number;
  }>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/affiliation/',
      query: {
        'datasource': datasource,
      },
      body: characters,
      errors: {
        400: `Bad request`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get character's public information
   * Public information about a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/`
   *
   * Alternate route: `/v5/characters/{character_id}/`
   *
   * ---
   * This route is cached for up to 604800 seconds
   * @returns any Public data for the given character
   * @throws ApiError
   */
  public getCharactersCharacterId({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
  }): CancelablePromise<{
    /**
     * The character's alliance ID
     */
    alliance_id?: number;
    /**
     * Creation date of the character
     */
    birthday: string;
    /**
     * bloodline_id integer
     */
    bloodline_id: number;
    /**
     * The character's corporation ID
     */
    corporation_id: number;
    /**
     * description string
     */
    description?: string;
    /**
     * ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
     */
    faction_id?: number;
    /**
     * gender string
     */
    gender: 'female' | 'male';
    /**
     * name string
     */
    name: string;
    /**
     * race_id integer
     */
    race_id: number;
    /**
     * security_status number
     */
    security_status?: number;
    /**
     * The individual title of the character
     */
    title?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Character not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get agents research
   * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/agents_research/`
   *
   * Alternate route: `/v2/characters/{character_id}/agents_research/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of agents research information
   * @throws ApiError
   */
  public getCharactersCharacterIdAgentsResearch({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * agent_id integer
     */
    agent_id: number;
    /**
     * points_per_day number
     */
    points_per_day: number;
    /**
     * remainder_points number
     */
    remainder_points: number;
    /**
     * skill_type_id integer
     */
    skill_type_id: number;
    /**
     * started_at string
     */
    started_at: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/agents_research/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get blueprints
   * Return a list of blueprints the character owns
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/blueprints/`
   *
   * Alternate route: `/v3/characters/{character_id}/blueprints/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of blueprints
   * @throws ApiError
   */
  public getCharactersCharacterIdBlueprints({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Which page of results to return
     */
    page?: number,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * Unique ID for this item.
     */
    item_id: number;
    /**
     * Type of the location_id
     */
    location_flag: 'AutoFit' | 'Cargo' | 'CorpseBay' | 'DroneBay' | 'FleetHangar' | 'Deliveries' | 'HiddenModifiers' | 'Hangar' | 'HangarAll' | 'LoSlot0' | 'LoSlot1' | 'LoSlot2' | 'LoSlot3' | 'LoSlot4' | 'LoSlot5' | 'LoSlot6' | 'LoSlot7' | 'MedSlot0' | 'MedSlot1' | 'MedSlot2' | 'MedSlot3' | 'MedSlot4' | 'MedSlot5' | 'MedSlot6' | 'MedSlot7' | 'HiSlot0' | 'HiSlot1' | 'HiSlot2' | 'HiSlot3' | 'HiSlot4' | 'HiSlot5' | 'HiSlot6' | 'HiSlot7' | 'AssetSafety' | 'Locked' | 'Unlocked' | 'Implant' | 'QuafeBay' | 'RigSlot0' | 'RigSlot1' | 'RigSlot2' | 'RigSlot3' | 'RigSlot4' | 'RigSlot5' | 'RigSlot6' | 'RigSlot7' | 'ShipHangar' | 'SpecializedFuelBay' | 'SpecializedOreHold' | 'SpecializedGasHold' | 'SpecializedMineralHold' | 'SpecializedSalvageHold' | 'SpecializedShipHold' | 'SpecializedSmallShipHold' | 'SpecializedMediumShipHold' | 'SpecializedLargeShipHold' | 'SpecializedIndustrialShipHold' | 'SpecializedAmmoHold' | 'SpecializedCommandCenterHold' | 'SpecializedPlanetaryCommoditiesHold' | 'SpecializedMaterialBay' | 'SubSystemSlot0' | 'SubSystemSlot1' | 'SubSystemSlot2' | 'SubSystemSlot3' | 'SubSystemSlot4' | 'SubSystemSlot5' | 'SubSystemSlot6' | 'SubSystemSlot7' | 'FighterBay' | 'FighterTube0' | 'FighterTube1' | 'FighterTube2' | 'FighterTube3' | 'FighterTube4' | 'Module';
    /**
     * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
     */
    location_id: number;
    /**
     * Material Efficiency Level of the blueprint.
     */
    material_efficiency: number;
    /**
     * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
     */
    quantity: number;
    /**
     * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
     */
    runs: number;
    /**
     * Time Efficiency Level of the blueprint.
     */
    time_efficiency: number;
    /**
     * type_id integer
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/blueprints/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'page': page,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get corporation history
   * Get a list of all the corporations a character has been a member of
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/corporationhistory/`
   *
   * Alternate route: `/v2/characters/{character_id}/corporationhistory/`
   *
   * ---
   * This route is cached for up to 86400 seconds
   * @returns any Corporation history for the given character
   * @throws ApiError
   */
  public getCharactersCharacterIdCorporationhistory({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
  }): CancelablePromise<Array<{
    /**
     * corporation_id integer
     */
    corporation_id: number;
    /**
     * True if the corporation has been deleted
     */
    is_deleted?: boolean;
    /**
     * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
     */
    record_id: number;
    /**
     * start_date string
     */
    start_date: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/corporationhistory/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Calculate a CSPA charge cost
   * Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/cspa/`
   *
   * Alternate route: `/v5/characters/{character_id}/cspa/`
   *
   * @returns number Aggregate cost of sending a mail from the source character to the target characters, in ISK
   * @throws ApiError
   */
  public postCharactersCharacterIdCspa({
    characterId,
    characters,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The target characters to calculate the charge for
     */
    characters: Array<number>,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/{character_id}/cspa/',
      path: {
        'character_id': characterId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: characters,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get jump fatigue
   * Return a character's jump activation and fatigue information
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/fatigue/`
   *
   * Alternate route: `/v2/characters/{character_id}/fatigue/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any Jump activation and fatigue information
   * @throws ApiError
   */
  public getCharactersCharacterIdFatigue({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * Character's jump fatigue expiry
     */
    jump_fatigue_expire_date?: string;
    /**
     * Character's last jump activation
     */
    last_jump_date?: string;
    /**
     * Character's last jump update
     */
    last_update_date?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/fatigue/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get medals
   * Return a list of medals the character has
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/medals/`
   *
   * Alternate route: `/v2/characters/{character_id}/medals/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of medals
   * @throws ApiError
   */
  public getCharactersCharacterIdMedals({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * corporation_id integer
     */
    corporation_id: number;
    /**
     * date string
     */
    date: string;
    /**
     * description string
     */
    description: string;
    /**
     * graphics array
     */
    graphics: Array<{
      /**
       * color integer
       */
      color?: number;
      /**
       * graphic string
       */
      graphic: string;
      /**
       * layer integer
       */
      layer: number;
      /**
       * part integer
       */
      part: number;
    }>;
    /**
     * issuer_id integer
     */
    issuer_id: number;
    /**
     * medal_id integer
     */
    medal_id: number;
    /**
     * reason string
     */
    reason: string;
    /**
     * status string
     */
    status: 'public' | 'private';
    /**
     * title string
     */
    title: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/medals/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get character notifications
   * Return character notifications
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/notifications/`
   *
   * Alternate route: `/v5/characters/{character_id}/notifications/`
   *
   * Alternate route: `/v6/characters/{character_id}/notifications/`
   *
   * ---
   * This route is cached for up to 600 seconds
   * @returns any Returns your recent notifications
   * @throws ApiError
   */
  public getCharactersCharacterIdNotifications({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * is_read boolean
     */
    is_read?: boolean;
    /**
     * notification_id integer
     */
    notification_id: number;
    /**
     * sender_id integer
     */
    sender_id: number;
    /**
     * sender_type string
     */
    sender_type: 'character' | 'corporation' | 'alliance' | 'faction' | 'other';
    /**
     * text string
     */
    text?: string;
    /**
     * timestamp string
     */
    timestamp: string;
    /**
     * type string
     */
    type: 'AcceptedAlly' | 'AcceptedSurrender' | 'AgentRetiredTrigravian' | 'AllAnchoringMsg' | 'AllMaintenanceBillMsg' | 'AllStrucInvulnerableMsg' | 'AllStructVulnerableMsg' | 'AllWarCorpJoinedAllianceMsg' | 'AllWarDeclaredMsg' | 'AllWarInvalidatedMsg' | 'AllWarRetractedMsg' | 'AllWarSurrenderMsg' | 'AllianceCapitalChanged' | 'AllianceWarDeclaredV2' | 'AllyContractCancelled' | 'AllyJoinedWarAggressorMsg' | 'AllyJoinedWarAllyMsg' | 'AllyJoinedWarDefenderMsg' | 'BattlePunishFriendlyFire' | 'BillOutOfMoneyMsg' | 'BillPaidCorpAllMsg' | 'BountyClaimMsg' | 'BountyESSShared' | 'BountyESSTaken' | 'BountyPlacedAlliance' | 'BountyPlacedChar' | 'BountyPlacedCorp' | 'BountyYourBountyClaimed' | 'BuddyConnectContactAdd' | 'CharAppAcceptMsg' | 'CharAppRejectMsg' | 'CharAppWithdrawMsg' | 'CharLeftCorpMsg' | 'CharMedalMsg' | 'CharTerminationMsg' | 'CloneActivationMsg' | 'CloneActivationMsg2' | 'CloneMovedMsg' | 'CloneRevokedMsg1' | 'CloneRevokedMsg2' | 'CombatOperationFinished' | 'ContactAdd' | 'ContactEdit' | 'ContainerPasswordMsg' | 'ContractRegionChangedToPochven' | 'CorpAllBillMsg' | 'CorpAppAcceptMsg' | 'CorpAppInvitedMsg' | 'CorpAppNewMsg' | 'CorpAppRejectCustomMsg' | 'CorpAppRejectMsg' | 'CorpBecameWarEligible' | 'CorpDividendMsg' | 'CorpFriendlyFireDisableTimerCompleted' | 'CorpFriendlyFireDisableTimerStarted' | 'CorpFriendlyFireEnableTimerCompleted' | 'CorpFriendlyFireEnableTimerStarted' | 'CorpKicked' | 'CorpLiquidationMsg' | 'CorpNewCEOMsg' | 'CorpNewsMsg' | 'CorpNoLongerWarEligible' | 'CorpOfficeExpirationMsg' | 'CorpStructLostMsg' | 'CorpTaxChangeMsg' | 'CorpVoteCEORevokedMsg' | 'CorpVoteMsg' | 'CorpWarDeclaredMsg' | 'CorpWarDeclaredV2' | 'CorpWarFightingLegalMsg' | 'CorpWarInvalidatedMsg' | 'CorpWarRetractedMsg' | 'CorpWarSurrenderMsg' | 'CorporationGoalClosed' | 'CorporationGoalCompleted' | 'CorporationGoalCreated' | 'CustomsMsg' | 'DeclareWar' | 'DistrictAttacked' | 'DustAppAcceptedMsg' | 'ESSMainBankLink' | 'EntosisCaptureStarted' | 'ExpertSystemExpired' | 'ExpertSystemExpiryImminent' | 'FWAllianceKickMsg' | 'FWAllianceWarningMsg' | 'FWCharKickMsg' | 'FWCharRankGainMsg' | 'FWCharRankLossMsg' | 'FWCharWarningMsg' | 'FWCorpJoinMsg' | 'FWCorpKickMsg' | 'FWCorpLeaveMsg' | 'FWCorpWarningMsg' | 'FacWarCorpJoinRequestMsg' | 'FacWarCorpJoinWithdrawMsg' | 'FacWarCorpLeaveRequestMsg' | 'FacWarCorpLeaveWithdrawMsg' | 'FacWarLPDisqualifiedEvent' | 'FacWarLPDisqualifiedKill' | 'FacWarLPPayoutEvent' | 'FacWarLPPayoutKill' | 'GameTimeAdded' | 'GameTimeReceived' | 'GameTimeSent' | 'GiftReceived' | 'IHubDestroyedByBillFailure' | 'IncursionCompletedMsg' | 'IndustryOperationFinished' | 'IndustryTeamAuctionLost' | 'IndustryTeamAuctionWon' | 'InfrastructureHubBillAboutToExpire' | 'InsuranceExpirationMsg' | 'InsuranceFirstShipMsg' | 'InsuranceInvalidatedMsg' | 'InsuranceIssuedMsg' | 'InsurancePayoutMsg' | 'InvasionCompletedMsg' | 'InvasionSystemLogin' | 'InvasionSystemStart' | 'JumpCloneDeletedMsg1' | 'JumpCloneDeletedMsg2' | 'KillReportFinalBlow' | 'KillReportVictim' | 'KillRightAvailable' | 'KillRightAvailableOpen' | 'KillRightEarned' | 'KillRightUnavailable' | 'KillRightUnavailableOpen' | 'KillRightUsed' | 'LocateCharMsg' | 'MadeWarMutual' | 'MercOfferRetractedMsg' | 'MercOfferedNegotiationMsg' | 'MissionCanceledTriglavian' | 'MissionOfferExpirationMsg' | 'MissionTimeoutMsg' | 'MoonminingAutomaticFracture' | 'MoonminingExtractionCancelled' | 'MoonminingExtractionFinished' | 'MoonminingExtractionStarted' | 'MoonminingLaserFired' | 'MutualWarExpired' | 'MutualWarInviteAccepted' | 'MutualWarInviteRejected' | 'MutualWarInviteSent' | 'NPCStandingsGained' | 'NPCStandingsLost' | 'OfferToAllyRetracted' | 'OfferedSurrender' | 'OfferedToAlly' | 'OfficeLeaseCanceledInsufficientStandings' | 'OldLscMessages' | 'OperationFinished' | 'OrbitalAttacked' | 'OrbitalReinforced' | 'OwnershipTransferred' | 'RaffleCreated' | 'RaffleExpired' | 'RaffleFinished' | 'ReimbursementMsg' | 'ResearchMissionAvailableMsg' | 'RetractsWar' | 'SeasonalChallengeCompleted' | 'SovAllClaimAquiredMsg' | 'SovAllClaimLostMsg' | 'SovCommandNodeEventStarted' | 'SovCorpBillLateMsg' | 'SovCorpClaimFailMsg' | 'SovDisruptorMsg' | 'SovStationEnteredFreeport' | 'SovStructureDestroyed' | 'SovStructureReinforced' | 'SovStructureSelfDestructCancel' | 'SovStructureSelfDestructFinished' | 'SovStructureSelfDestructRequested' | 'SovereigntyIHDamageMsg' | 'SovereigntySBUDamageMsg' | 'SovereigntyTCUDamageMsg' | 'StationAggressionMsg1' | 'StationAggressionMsg2' | 'StationConquerMsg' | 'StationServiceDisabled' | 'StationServiceEnabled' | 'StationStateChangeMsg' | 'StoryLineMissionAvailableMsg' | 'StructureAnchoring' | 'StructureCourierContractChanged' | 'StructureDestroyed' | 'StructureFuelAlert' | 'StructureImpendingAbandonmentAssetsAtRisk' | 'StructureItemsDelivered' | 'StructureItemsMovedToSafety' | 'StructureLostArmor' | 'StructureLostShields' | 'StructureOnline' | 'StructurePaintPurchased' | 'StructureServicesOffline' | 'StructureUnanchoring' | 'StructureUnderAttack' | 'StructureWentHighPower' | 'StructureWentLowPower' | 'StructuresJobsCancelled' | 'StructuresJobsPaused' | 'StructuresReinforcementChanged' | 'TowerAlertMsg' | 'TowerResourceAlertMsg' | 'TransactionReversalMsg' | 'TutorialMsg' | 'WarAdopted ' | 'WarAllyInherited' | 'WarAllyOfferDeclinedMsg' | 'WarConcordInvalidates' | 'WarDeclared' | 'WarEndedHqSecurityDrop' | 'WarHQRemovedFromSpace' | 'WarInherited' | 'WarInvalid' | 'WarRetracted' | 'WarRetractedByConcord' | 'WarSurrenderDeclinedMsg' | 'WarSurrenderOfferMsg';
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/notifications/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get new contact notifications
   * Return notifications about having been added to someone's contact list
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/notifications/contacts/`
   *
   * Alternate route: `/v2/characters/{character_id}/notifications/contacts/`
   *
   * ---
   * This route is cached for up to 600 seconds
   * @returns any A list of contact notifications
   * @throws ApiError
   */
  public getCharactersCharacterIdNotificationsContacts({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * message string
     */
    message: string;
    /**
     * notification_id integer
     */
    notification_id: number;
    /**
     * send_date string
     */
    send_date: string;
    /**
     * sender_character_id integer
     */
    sender_character_id: number;
    /**
     * A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
     */
    standing_level: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/notifications/contacts/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get character portraits
   * Get portrait urls for a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/portrait/`
   *
   * Alternate route: `/v2/characters/{character_id}/portrait/`
   *
   * Alternate route: `/v3/characters/{character_id}/portrait/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Public data for the given character
   * @throws ApiError
   */
  public getCharactersCharacterIdPortrait({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
  }): CancelablePromise<{
    /**
     * px128x128 string
     */
    px128x128?: string;
    /**
     * px256x256 string
     */
    px256x256?: string;
    /**
     * px512x512 string
     */
    px512x512?: string;
    /**
     * px64x64 string
     */
    px64x64?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/portrait/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `No image server for this datasource`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get character corporation roles
   * Returns a character's corporation roles
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/roles/`
   *
   * Alternate route: `/v3/characters/{character_id}/roles/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any The character's roles in thier corporation
   * @throws ApiError
   */
  public getCharactersCharacterIdRoles({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * roles array
     */
    roles?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * roles_at_base array
     */
    roles_at_base?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * roles_at_hq array
     */
    roles_at_hq?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * roles_at_other array
     */
    roles_at_other?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/roles/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get standings
   * Return character standings from agents, NPC corporations, and factions
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/standings/`
   *
   * Alternate route: `/v2/characters/{character_id}/standings/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of standings
   * @throws ApiError
   */
  public getCharactersCharacterIdStandings({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * from_id integer
     */
    from_id: number;
    /**
     * from_type string
     */
    from_type: 'agent' | 'npc_corp' | 'faction';
    /**
     * standing number
     */
    standing: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/standings/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get character corporation titles
   * Returns a character's titles
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/titles/`
   *
   * Alternate route: `/v2/characters/{character_id}/titles/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of titles
   * @throws ApiError
   */
  public getCharactersCharacterIdTitles({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * name string
     */
    name?: string;
    /**
     * title_id integer
     */
    title_id?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/titles/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
