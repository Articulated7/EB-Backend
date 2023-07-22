/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CorporationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get npc corporations
   * Get a list of npc corporations
   *
   * ---
   * Alternate route: `/dev/corporations/npccorps/`
   *
   * Alternate route: `/v2/corporations/npccorps/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of npc corporation ids
   * @throws ApiError
   */
  public getCorporationsNpccorps({
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/npccorps/',
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
   * Get corporation information
   * Public information about a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/`
   *
   * Alternate route: `/v5/corporations/{corporation_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Public information about a corporation
   * @throws ApiError
   */
  public getCorporationsCorporationId({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * ID of the alliance that corporation is a member of, if any
     */
    alliance_id?: number;
    /**
     * ceo_id integer
     */
    ceo_id: number;
    /**
     * creator_id integer
     */
    creator_id: number;
    /**
     * date_founded string
     */
    date_founded?: string;
    /**
     * description string
     */
    description?: string;
    /**
     * faction_id integer
     */
    faction_id?: number;
    /**
     * home_station_id integer
     */
    home_station_id?: number;
    /**
     * member_count integer
     */
    member_count: number;
    /**
     * the full name of the corporation
     */
    name: string;
    /**
     * shares integer
     */
    shares?: number;
    /**
     * tax_rate number
     */
    tax_rate: number;
    /**
     * the short name of the corporation
     */
    ticker: string;
    /**
     * url string
     */
    url?: string;
    /**
     * war_eligible boolean
     */
    war_eligible?: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/',
      path: {
        'corporation_id': corporationId,
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
        404: `Corporation not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get alliance history
   * Get a list of all the alliances a corporation has been a member of
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/`
   *
   * Alternate route: `/v3/corporations/{corporation_id}/alliancehistory/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Alliance history for the given corporation
   * @throws ApiError
   */
  public getCorporationsCorporationIdAlliancehistory({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * alliance_id integer
     */
    alliance_id?: number;
    /**
     * True if the alliance has been closed
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
      url: '/corporations/{corporation_id}/alliancehistory/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation blueprints
   * Returns a list of blueprints the corporation owns
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/blueprints/`
   *
   * Alternate route: `/v3/corporations/{corporation_id}/blueprints/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of corporation blueprints
   * @throws ApiError
   */
  public getCorporationsCorporationIdBlueprints({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
    location_flag: 'AssetSafety' | 'AutoFit' | 'Bonus' | 'Booster' | 'BoosterBay' | 'Capsule' | 'Cargo' | 'CorpDeliveries' | 'CorpSAG1' | 'CorpSAG2' | 'CorpSAG3' | 'CorpSAG4' | 'CorpSAG5' | 'CorpSAG6' | 'CorpSAG7' | 'CrateLoot' | 'Deliveries' | 'DroneBay' | 'DustBattle' | 'DustDatabank' | 'FighterBay' | 'FighterTube0' | 'FighterTube1' | 'FighterTube2' | 'FighterTube3' | 'FighterTube4' | 'FleetHangar' | 'FrigateEscapeBay' | 'Hangar' | 'HangarAll' | 'HiSlot0' | 'HiSlot1' | 'HiSlot2' | 'HiSlot3' | 'HiSlot4' | 'HiSlot5' | 'HiSlot6' | 'HiSlot7' | 'HiddenModifiers' | 'Implant' | 'Impounded' | 'JunkyardReprocessed' | 'JunkyardTrashed' | 'LoSlot0' | 'LoSlot1' | 'LoSlot2' | 'LoSlot3' | 'LoSlot4' | 'LoSlot5' | 'LoSlot6' | 'LoSlot7' | 'Locked' | 'MedSlot0' | 'MedSlot1' | 'MedSlot2' | 'MedSlot3' | 'MedSlot4' | 'MedSlot5' | 'MedSlot6' | 'MedSlot7' | 'OfficeFolder' | 'Pilot' | 'PlanetSurface' | 'QuafeBay' | 'QuantumCoreRoom' | 'Reward' | 'RigSlot0' | 'RigSlot1' | 'RigSlot2' | 'RigSlot3' | 'RigSlot4' | 'RigSlot5' | 'RigSlot6' | 'RigSlot7' | 'SecondaryStorage' | 'ServiceSlot0' | 'ServiceSlot1' | 'ServiceSlot2' | 'ServiceSlot3' | 'ServiceSlot4' | 'ServiceSlot5' | 'ServiceSlot6' | 'ServiceSlot7' | 'ShipHangar' | 'ShipOffline' | 'Skill' | 'SkillInTraining' | 'SpecializedAmmoHold' | 'SpecializedCommandCenterHold' | 'SpecializedFuelBay' | 'SpecializedGasHold' | 'SpecializedIndustrialShipHold' | 'SpecializedLargeShipHold' | 'SpecializedMaterialBay' | 'SpecializedMediumShipHold' | 'SpecializedMineralHold' | 'SpecializedOreHold' | 'SpecializedPlanetaryCommoditiesHold' | 'SpecializedSalvageHold' | 'SpecializedShipHold' | 'SpecializedSmallShipHold' | 'StructureActive' | 'StructureFuel' | 'StructureInactive' | 'StructureOffline' | 'SubSystemBay' | 'SubSystemSlot0' | 'SubSystemSlot1' | 'SubSystemSlot2' | 'SubSystemSlot3' | 'SubSystemSlot4' | 'SubSystemSlot5' | 'SubSystemSlot6' | 'SubSystemSlot7' | 'Unlocked' | 'Wallet' | 'Wardrobe';
    /**
     * References a station, a ship or an item_id if this blueprint is located within a container.
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
      url: '/corporations/{corporation_id}/blueprints/',
      path: {
        'corporation_id': corporationId,
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
   * Get all corporation ALSC logs
   * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/containers/logs/`
   *
   * Alternate route: `/v3/corporations/{corporation_id}/containers/logs/`
   *
   * ---
   * This route is cached for up to 600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of corporation ALSC logs
   * @throws ApiError
   */
  public getCorporationsCorporationIdContainersLogs({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * action string
     */
    action: 'add' | 'assemble' | 'configure' | 'enter_password' | 'lock' | 'move' | 'repackage' | 'set_name' | 'set_password' | 'unlock';
    /**
     * ID of the character who performed the action.
     */
    character_id: number;
    /**
     * ID of the container
     */
    container_id: number;
    /**
     * Type ID of the container
     */
    container_type_id: number;
    /**
     * location_flag string
     */
    location_flag: 'AssetSafety' | 'AutoFit' | 'Bonus' | 'Booster' | 'BoosterBay' | 'Capsule' | 'Cargo' | 'CorpDeliveries' | 'CorpSAG1' | 'CorpSAG2' | 'CorpSAG3' | 'CorpSAG4' | 'CorpSAG5' | 'CorpSAG6' | 'CorpSAG7' | 'CrateLoot' | 'Deliveries' | 'DroneBay' | 'DustBattle' | 'DustDatabank' | 'FighterBay' | 'FighterTube0' | 'FighterTube1' | 'FighterTube2' | 'FighterTube3' | 'FighterTube4' | 'FleetHangar' | 'FrigateEscapeBay' | 'Hangar' | 'HangarAll' | 'HiSlot0' | 'HiSlot1' | 'HiSlot2' | 'HiSlot3' | 'HiSlot4' | 'HiSlot5' | 'HiSlot6' | 'HiSlot7' | 'HiddenModifiers' | 'Implant' | 'Impounded' | 'JunkyardReprocessed' | 'JunkyardTrashed' | 'LoSlot0' | 'LoSlot1' | 'LoSlot2' | 'LoSlot3' | 'LoSlot4' | 'LoSlot5' | 'LoSlot6' | 'LoSlot7' | 'Locked' | 'MedSlot0' | 'MedSlot1' | 'MedSlot2' | 'MedSlot3' | 'MedSlot4' | 'MedSlot5' | 'MedSlot6' | 'MedSlot7' | 'OfficeFolder' | 'Pilot' | 'PlanetSurface' | 'QuafeBay' | 'QuantumCoreRoom' | 'Reward' | 'RigSlot0' | 'RigSlot1' | 'RigSlot2' | 'RigSlot3' | 'RigSlot4' | 'RigSlot5' | 'RigSlot6' | 'RigSlot7' | 'SecondaryStorage' | 'ServiceSlot0' | 'ServiceSlot1' | 'ServiceSlot2' | 'ServiceSlot3' | 'ServiceSlot4' | 'ServiceSlot5' | 'ServiceSlot6' | 'ServiceSlot7' | 'ShipHangar' | 'ShipOffline' | 'Skill' | 'SkillInTraining' | 'SpecializedAmmoHold' | 'SpecializedCommandCenterHold' | 'SpecializedFuelBay' | 'SpecializedGasHold' | 'SpecializedIndustrialShipHold' | 'SpecializedLargeShipHold' | 'SpecializedMaterialBay' | 'SpecializedMediumShipHold' | 'SpecializedMineralHold' | 'SpecializedOreHold' | 'SpecializedPlanetaryCommoditiesHold' | 'SpecializedSalvageHold' | 'SpecializedShipHold' | 'SpecializedSmallShipHold' | 'StructureActive' | 'StructureFuel' | 'StructureInactive' | 'StructureOffline' | 'SubSystemBay' | 'SubSystemSlot0' | 'SubSystemSlot1' | 'SubSystemSlot2' | 'SubSystemSlot3' | 'SubSystemSlot4' | 'SubSystemSlot5' | 'SubSystemSlot6' | 'SubSystemSlot7' | 'Unlocked' | 'Wallet' | 'Wardrobe';
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * Timestamp when this log was created
     */
    logged_at: string;
    /**
     * new_config_bitmask integer
     */
    new_config_bitmask?: number;
    /**
     * old_config_bitmask integer
     */
    old_config_bitmask?: number;
    /**
     * Type of password set if action is of type SetPassword or EnterPassword
     */
    password_type?: 'config' | 'general';
    /**
     * Quantity of the item being acted upon
     */
    quantity?: number;
    /**
     * Type ID of the item being acted upon
     */
    type_id?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/containers/logs/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation divisions
   * Return corporation hangar and wallet division names, only show if a division is not using the default name
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/divisions/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/divisions/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of corporation division names
   * @throws ApiError
   */
  public getCorporationsCorporationIdDivisions({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * hangar array
     */
    hangar?: Array<{
      /**
       * division integer
       */
      division?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * wallet array
     */
    wallet?: Array<{
      /**
       * division integer
       */
      division?: number;
      /**
       * name string
       */
      name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/divisions/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation facilities
   * Return a corporation's facilities
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/facilities/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/facilities/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Factory_Manager
   *
   * @returns any List of corporation facilities
   * @throws ApiError
   */
  public getCorporationsCorporationIdFacilities({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * facility_id integer
     */
    facility_id: number;
    /**
     * system_id integer
     */
    system_id: number;
    /**
     * type_id integer
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/facilities/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation icon
   * Get the icon urls for a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/icons/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/icons/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Urls for icons for the given corporation id and server
   * @throws ApiError
   */
  public getCorporationsCorporationIdIcons({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * px64x64 string
     */
    px64x64?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/icons/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation medals
   * Returns a corporation's medals
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/medals/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/medals/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of medals
   * @throws ApiError
   */
  public getCorporationsCorporationIdMedals({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * created_at string
     */
    created_at: string;
    /**
     * ID of the character who created this medal
     */
    creator_id: number;
    /**
     * description string
     */
    description: string;
    /**
     * medal_id integer
     */
    medal_id: number;
    /**
     * title string
     */
    title: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/medals/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation issued medals
   * Returns medals issued by a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/medals/issued/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/medals/issued/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any A list of issued medals
   * @throws ApiError
   */
  public getCorporationsCorporationIdMedalsIssued({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * ID of the character who was rewarded this medal
     */
    character_id: number;
    /**
     * issued_at string
     */
    issued_at: string;
    /**
     * ID of the character who issued the medal
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
    status: 'private' | 'public';
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/medals/issued/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation members
   * Return the current member list of a corporation, the token's character need to be a member of the corporation.
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/members/`
   *
   * Alternate route: `/v4/corporations/{corporation_id}/members/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns number List of member character IDs
   * @throws ApiError
   */
  public getCorporationsCorporationIdMembers({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/members/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation member limit
   * Return a corporation's member limit, not including CEO himself
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/members/limit/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/members/limit/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns number The corporation's member limit
   * @throws ApiError
   */
  public getCorporationsCorporationIdMembersLimit({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
  }): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/members/limit/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation's members' titles
   * Returns a corporation's members' titles
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/members/titles/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/members/titles/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any A list of members and theirs titles
   * @throws ApiError
   */
  public getCorporationsCorporationIdMembersTitles({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * character_id integer
     */
    character_id: number;
    /**
     * A list of title_id
     */
    titles: Array<number>;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/members/titles/',
      path: {
        'corporation_id': corporationId,
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
   * Track corporation members
   * Returns additional information about a corporation's members which helps tracking their activities
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/membertracking/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/membertracking/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of member character IDs
   * @throws ApiError
   */
  public getCorporationsCorporationIdMembertracking({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * base_id integer
     */
    base_id?: number;
    /**
     * character_id integer
     */
    character_id: number;
    /**
     * location_id integer
     */
    location_id?: number;
    /**
     * logoff_date string
     */
    logoff_date?: string;
    /**
     * logon_date string
     */
    logon_date?: string;
    /**
     * ship_type_id integer
     */
    ship_type_id?: number;
    /**
     * start_date string
     */
    start_date?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/membertracking/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation member roles
   * Return the roles of all members if the character has the personnel manager role or any grantable role.
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/roles/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/roles/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any List of member character ID's and roles
   * @throws ApiError
   */
  public getCorporationsCorporationIdRoles({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * character_id integer
     */
    character_id: number;
    /**
     * grantable_roles array
     */
    grantable_roles?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * grantable_roles_at_base array
     */
    grantable_roles_at_base?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * grantable_roles_at_hq array
     */
    grantable_roles_at_hq?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * grantable_roles_at_other array
     */
    grantable_roles_at_other?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
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
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/roles/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation member roles history
   * Return how roles have changed for a coporation's members, up to a month
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/roles/history/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/roles/history/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of role changes
   * @throws ApiError
   */
  public getCorporationsCorporationIdRolesHistory({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * changed_at string
     */
    changed_at: string;
    /**
     * The character whose roles are changed
     */
    character_id: number;
    /**
     * ID of the character who issued this change
     */
    issuer_id: number;
    /**
     * new_roles array
     */
    new_roles: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * old_roles array
     */
    old_roles: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * role_type string
     */
    role_type: 'grantable_roles' | 'grantable_roles_at_base' | 'grantable_roles_at_hq' | 'grantable_roles_at_other' | 'roles' | 'roles_at_base' | 'roles_at_hq' | 'roles_at_other';
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/roles/history/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation shareholders
   * Return the current shareholders of a corporation.
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/shareholders/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/shareholders/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/shareholders/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of shareholders
   * @throws ApiError
   */
  public getCorporationsCorporationIdShareholders({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * share_count integer
     */
    share_count: number;
    /**
     * shareholder_id integer
     */
    shareholder_id: number;
    /**
     * shareholder_type string
     */
    shareholder_type: 'character' | 'corporation';
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/shareholders/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation standings
   * Return corporation standings from agents, NPC corporations, and factions
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/standings/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/standings/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of standings
   * @throws ApiError
   */
  public getCorporationsCorporationIdStandings({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
      url: '/corporations/{corporation_id}/standings/',
      path: {
        'corporation_id': corporationId,
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
   * Get corporation starbases (POSes)
   * Returns list of corporation starbases (POSes)
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/starbases/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/starbases/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of starbases (POSes)
   * @throws ApiError
   */
  public getCorporationsCorporationIdStarbases({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
     */
    moon_id?: number;
    /**
     * When the POS onlined, for starbases (POSes) in online state
     */
    onlined_since?: string;
    /**
     * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
     */
    reinforced_until?: string;
    /**
     * Unique ID for this starbase (POS)
     */
    starbase_id: number;
    /**
     * state string
     */
    state?: 'offline' | 'online' | 'onlining' | 'reinforced' | 'unanchoring';
    /**
     * The solar system this starbase (POS) is in, unanchored POSes have this information
     */
    system_id: number;
    /**
     * Starbase (POS) type
     */
    type_id: number;
    /**
     * When the POS started unanchoring, for starbases (POSes) in unanchoring state
     */
    unanchor_at?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/starbases/',
      path: {
        'corporation_id': corporationId,
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
   * Get starbase (POS) detail
   * Returns various settings and fuels of a starbase (POS)
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/starbases/{starbase_id}/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/starbases/{starbase_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of starbases (POSes)
   * @throws ApiError
   */
  public getCorporationsCorporationIdStarbasesStarbaseId({
    corporationId,
    starbaseId,
    systemId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
    /**
     * An EVE starbase (POS) ID
     */
    starbaseId: number,
    /**
     * The solar system this starbase (POS) is located in,
     */
    systemId: number,
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
     * allow_alliance_members boolean
     */
    allow_alliance_members: boolean;
    /**
     * allow_corporation_members boolean
     */
    allow_corporation_members: boolean;
    /**
     * Who can anchor starbase (POS) and its structures
     */
    anchor: 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    /**
     * attack_if_at_war boolean
     */
    attack_if_at_war: boolean;
    /**
     * attack_if_other_security_status_dropping boolean
     */
    attack_if_other_security_status_dropping: boolean;
    /**
     * Starbase (POS) will attack if target's security standing is lower than this value
     */
    attack_security_status_threshold?: number;
    /**
     * Starbase (POS) will attack if target's standing is lower than this value
     */
    attack_standing_threshold?: number;
    /**
     * Who can take fuel blocks out of the starbase (POS)'s fuel bay
     */
    fuel_bay_take: 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    /**
     * Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
     */
    fuel_bay_view: 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    /**
     * Fuel blocks and other things that will be consumed when operating a starbase (POS)
     */
    fuels?: Array<{
      /**
       * quantity integer
       */
      quantity: number;
      /**
       * type_id integer
       */
      type_id: number;
    }>;
    /**
     * Who can offline starbase (POS) and its structures
     */
    offline: 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    /**
     * Who can online starbase (POS) and its structures
     */
    online: 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    /**
     * Who can unanchor starbase (POS) and its structures
     */
    unanchor: 'alliance_member' | 'config_starbase_equipment_role' | 'corporation_member' | 'starbase_fuel_technician_role';
    /**
     * True if the starbase (POS) is using alliance standings, otherwise using corporation's
     */
    use_alliance_standings: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/starbases/{starbase_id}/',
      path: {
        'corporation_id': corporationId,
        'starbase_id': starbaseId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'system_id': systemId,
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
   * Get corporation structures
   * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/structures/`
   *
   * Alternate route: `/v4/corporations/{corporation_id}/structures/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Station_Manager
   *
   * @returns any List of corporation structures' information
   * @throws ApiError
   */
  public getCorporationsCorporationIdStructures({
    corporationId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
    /**
     * Language to use in the response
     */
    acceptLanguage?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Language to use in the response, takes precedence over Accept-Language
     */
    language?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
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
     * ID of the corporation that owns the structure
     */
    corporation_id: number;
    /**
     * Date on which the structure will run out of fuel
     */
    fuel_expires?: string;
    /**
     * The structure name
     */
    name?: string;
    /**
     * The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect
     */
    next_reinforce_apply?: string;
    /**
     * The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply
     */
    next_reinforce_hour?: number;
    /**
     * The id of the ACL profile for this citadel
     */
    profile_id: number;
    /**
     * The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property
     */
    reinforce_hour?: number;
    /**
     * Contains a list of service upgrades, and their state
     */
    services?: Array<{
      /**
       * name string
       */
      name: string;
      /**
       * state string
       */
      state: 'online' | 'offline' | 'cleanup';
    }>;
    /**
     * state string
     */
    state: 'anchor_vulnerable' | 'anchoring' | 'armor_reinforce' | 'armor_vulnerable' | 'deploy_vulnerable' | 'fitting_invulnerable' | 'hull_reinforce' | 'hull_vulnerable' | 'online_deprecated' | 'onlining_vulnerable' | 'shield_vulnerable' | 'unanchored' | 'unknown';
    /**
     * Date at which the structure will move to it's next state
     */
    state_timer_end?: string;
    /**
     * Date at which the structure entered it's current state
     */
    state_timer_start?: string;
    /**
     * The Item ID of the structure
     */
    structure_id: number;
    /**
     * The solar system the structure is in
     */
    system_id: number;
    /**
     * The type id of the structure
     */
    type_id: number;
    /**
     * Date at which the structure will unanchor
     */
    unanchors_at?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/structures/',
      path: {
        'corporation_id': corporationId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
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
   * Get corporation titles
   * Returns a corporation's titles
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/titles/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/titles/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any A list of titles
   * @throws ApiError
   */
  public getCorporationsCorporationIdTitles({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
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
     * grantable_roles array
     */
    grantable_roles?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * grantable_roles_at_base array
     */
    grantable_roles_at_base?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * grantable_roles_at_hq array
     */
    grantable_roles_at_hq?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * grantable_roles_at_other array
     */
    grantable_roles_at_other?: Array<'Account_Take_1' | 'Account_Take_2' | 'Account_Take_3' | 'Account_Take_4' | 'Account_Take_5' | 'Account_Take_6' | 'Account_Take_7' | 'Accountant' | 'Auditor' | 'Communications_Officer' | 'Config_Equipment' | 'Config_Starbase_Equipment' | 'Container_Take_1' | 'Container_Take_2' | 'Container_Take_3' | 'Container_Take_4' | 'Container_Take_5' | 'Container_Take_6' | 'Container_Take_7' | 'Contract_Manager' | 'Diplomat' | 'Director' | 'Factory_Manager' | 'Fitting_Manager' | 'Hangar_Query_1' | 'Hangar_Query_2' | 'Hangar_Query_3' | 'Hangar_Query_4' | 'Hangar_Query_5' | 'Hangar_Query_6' | 'Hangar_Query_7' | 'Hangar_Take_1' | 'Hangar_Take_2' | 'Hangar_Take_3' | 'Hangar_Take_4' | 'Hangar_Take_5' | 'Hangar_Take_6' | 'Hangar_Take_7' | 'Junior_Accountant' | 'Personnel_Manager' | 'Rent_Factory_Facility' | 'Rent_Office' | 'Rent_Research_Facility' | 'Security_Officer' | 'Skill_Plan_Manager' | 'Starbase_Defense_Operator' | 'Starbase_Fuel_Technician' | 'Station_Manager' | 'Trader'>;
    /**
     * name string
     */
    name?: string;
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
    /**
     * title_id integer
     */
    title_id?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/titles/',
      path: {
        'corporation_id': corporationId,
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
