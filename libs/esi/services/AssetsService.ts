/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class AssetsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get character assets
   * Return a list of the characters assets
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/assets/`
   *
   * Alternate route: `/v5/characters/{character_id}/assets/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A flat list of the users assets
   * @throws ApiError
   */
  public getCharactersCharacterIdAssets({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token
  }: {
    /**
     * An EVE character ID
     */
    characterId: number
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
    /**
     * Which page of results to return
     */
    page?: number
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * is_blueprint_copy boolean
       */
      is_blueprint_copy?: boolean
      /**
       * is_singleton boolean
       */
      is_singleton: boolean
      /**
       * item_id integer
       */
      item_id: number
      /**
       * location_flag string
       */
      location_flag:
        | 'AssetSafety'
        | 'AutoFit'
        | 'BoosterBay'
        | 'Cargo'
        | 'CorporationGoalDeliveries'
        | 'CorpseBay'
        | 'Deliveries'
        | 'DroneBay'
        | 'FighterBay'
        | 'FighterTube0'
        | 'FighterTube1'
        | 'FighterTube2'
        | 'FighterTube3'
        | 'FighterTube4'
        | 'FleetHangar'
        | 'FrigateEscapeBay'
        | 'Hangar'
        | 'HangarAll'
        | 'HiSlot0'
        | 'HiSlot1'
        | 'HiSlot2'
        | 'HiSlot3'
        | 'HiSlot4'
        | 'HiSlot5'
        | 'HiSlot6'
        | 'HiSlot7'
        | 'HiddenModifiers'
        | 'Implant'
        | 'LoSlot0'
        | 'LoSlot1'
        | 'LoSlot2'
        | 'LoSlot3'
        | 'LoSlot4'
        | 'LoSlot5'
        | 'LoSlot6'
        | 'LoSlot7'
        | 'Locked'
        | 'MedSlot0'
        | 'MedSlot1'
        | 'MedSlot2'
        | 'MedSlot3'
        | 'MedSlot4'
        | 'MedSlot5'
        | 'MedSlot6'
        | 'MedSlot7'
        | 'MobileDepotHold'
        | 'QuafeBay'
        | 'RigSlot0'
        | 'RigSlot1'
        | 'RigSlot2'
        | 'RigSlot3'
        | 'RigSlot4'
        | 'RigSlot5'
        | 'RigSlot6'
        | 'RigSlot7'
        | 'ShipHangar'
        | 'Skill'
        | 'SpecializedAmmoHold'
        | 'SpecializedAsteroidHold'
        | 'SpecializedCommandCenterHold'
        | 'SpecializedFuelBay'
        | 'SpecializedGasHold'
        | 'SpecializedIceHold'
        | 'SpecializedIndustrialShipHold'
        | 'SpecializedLargeShipHold'
        | 'SpecializedMaterialBay'
        | 'SpecializedMediumShipHold'
        | 'SpecializedMineralHold'
        | 'SpecializedOreHold'
        | 'SpecializedPlanetaryCommoditiesHold'
        | 'SpecializedSalvageHold'
        | 'SpecializedShipHold'
        | 'SpecializedSmallShipHold'
        | 'StructureDeedBay'
        | 'SubSystemBay'
        | 'SubSystemSlot0'
        | 'SubSystemSlot1'
        | 'SubSystemSlot2'
        | 'SubSystemSlot3'
        | 'SubSystemSlot4'
        | 'SubSystemSlot5'
        | 'SubSystemSlot6'
        | 'SubSystemSlot7'
        | 'Unlocked'
        | 'Wardrobe'
      /**
       * location_id integer
       */
      location_id: number
      /**
       * location_type string
       */
      location_type: 'station' | 'solar_system' | 'item' | 'other'
      /**
       * quantity integer
       */
      quantity: number
      /**
       * type_id integer
       */
      type_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/assets/',
      path: {
        character_id: characterId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
        page: page,
        token: token
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Requested page does not exist`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get character asset locations
   * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/assets/locations/`
   *
   * Alternate route: `/v2/characters/{character_id}/assets/locations/`
   *
   * @returns any List of asset locations
   * @throws ApiError
   */
  public postCharactersCharacterIdAssetsLocations({
    characterId,
    itemIds,
    datasource = 'tranquility',
    token
  }: {
    /**
     * An EVE character ID
     */
    characterId: number
    /**
     * A list of item ids
     */
    itemIds: Array<number>
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * item_id integer
       */
      item_id: number
      /**
       * position object
       */
      position: {
        /**
         * x number
         */
        x: number
        /**
         * y number
         */
        y: number
        /**
         * z number
         */
        z: number
      }
    }>
  > {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/{character_id}/assets/locations/',
      path: {
        character_id: characterId
      },
      query: {
        datasource: datasource,
        token: token
      },
      body: itemIds,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get character asset names
   * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/assets/names/`
   *
   * Alternate route: `/legacy/characters/{character_id}/assets/names/`
   *
   * Alternate route: `/v1/characters/{character_id}/assets/names/`
   *
   * @returns any List of asset names
   * @throws ApiError
   */
  public postCharactersCharacterIdAssetsNames({
    characterId,
    itemIds,
    datasource = 'tranquility',
    token
  }: {
    /**
     * An EVE character ID
     */
    characterId: number
    /**
     * A list of item ids
     */
    itemIds: Array<number>
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * item_id integer
       */
      item_id: number
      /**
       * name string
       */
      name: string
    }>
  > {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/{character_id}/assets/names/',
      path: {
        character_id: characterId
      },
      query: {
        datasource: datasource,
        token: token
      },
      body: itemIds,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get corporation assets
   * Return a list of the corporation assets
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/assets/`
   *
   * Alternate route: `/v5/corporations/{corporation_id}/assets/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any A list of assets
   * @throws ApiError
   */
  public getCorporationsCorporationIdAssets({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
    /**
     * Which page of results to return
     */
    page?: number
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * is_blueprint_copy boolean
       */
      is_blueprint_copy?: boolean
      /**
       * is_singleton boolean
       */
      is_singleton: boolean
      /**
       * item_id integer
       */
      item_id: number
      /**
       * location_flag string
       */
      location_flag:
        | 'AssetSafety'
        | 'AutoFit'
        | 'Bonus'
        | 'Booster'
        | 'BoosterBay'
        | 'Capsule'
        | 'Cargo'
        | 'CorpDeliveries'
        | 'CorpSAG1'
        | 'CorpSAG2'
        | 'CorpSAG3'
        | 'CorpSAG4'
        | 'CorpSAG5'
        | 'CorpSAG6'
        | 'CorpSAG7'
        | 'CorporationGoalDeliveries'
        | 'CrateLoot'
        | 'Deliveries'
        | 'DroneBay'
        | 'DustBattle'
        | 'DustDatabank'
        | 'FighterBay'
        | 'FighterTube0'
        | 'FighterTube1'
        | 'FighterTube2'
        | 'FighterTube3'
        | 'FighterTube4'
        | 'FleetHangar'
        | 'FrigateEscapeBay'
        | 'Hangar'
        | 'HangarAll'
        | 'HiSlot0'
        | 'HiSlot1'
        | 'HiSlot2'
        | 'HiSlot3'
        | 'HiSlot4'
        | 'HiSlot5'
        | 'HiSlot6'
        | 'HiSlot7'
        | 'HiddenModifiers'
        | 'Implant'
        | 'Impounded'
        | 'JunkyardReprocessed'
        | 'JunkyardTrashed'
        | 'LoSlot0'
        | 'LoSlot1'
        | 'LoSlot2'
        | 'LoSlot3'
        | 'LoSlot4'
        | 'LoSlot5'
        | 'LoSlot6'
        | 'LoSlot7'
        | 'Locked'
        | 'MedSlot0'
        | 'MedSlot1'
        | 'MedSlot2'
        | 'MedSlot3'
        | 'MedSlot4'
        | 'MedSlot5'
        | 'MedSlot6'
        | 'MedSlot7'
        | 'MobileDepotHold'
        | 'OfficeFolder'
        | 'Pilot'
        | 'PlanetSurface'
        | 'QuafeBay'
        | 'QuantumCoreRoom'
        | 'Reward'
        | 'RigSlot0'
        | 'RigSlot1'
        | 'RigSlot2'
        | 'RigSlot3'
        | 'RigSlot4'
        | 'RigSlot5'
        | 'RigSlot6'
        | 'RigSlot7'
        | 'SecondaryStorage'
        | 'ServiceSlot0'
        | 'ServiceSlot1'
        | 'ServiceSlot2'
        | 'ServiceSlot3'
        | 'ServiceSlot4'
        | 'ServiceSlot5'
        | 'ServiceSlot6'
        | 'ServiceSlot7'
        | 'ShipHangar'
        | 'ShipOffline'
        | 'Skill'
        | 'SkillInTraining'
        | 'SpecializedAmmoHold'
        | 'SpecializedAsteroidHold'
        | 'SpecializedCommandCenterHold'
        | 'SpecializedFuelBay'
        | 'SpecializedGasHold'
        | 'SpecializedIceHold'
        | 'SpecializedIndustrialShipHold'
        | 'SpecializedLargeShipHold'
        | 'SpecializedMaterialBay'
        | 'SpecializedMediumShipHold'
        | 'SpecializedMineralHold'
        | 'SpecializedOreHold'
        | 'SpecializedPlanetaryCommoditiesHold'
        | 'SpecializedSalvageHold'
        | 'SpecializedShipHold'
        | 'SpecializedSmallShipHold'
        | 'StructureActive'
        | 'StructureFuel'
        | 'StructureInactive'
        | 'StructureOffline'
        | 'SubSystemBay'
        | 'SubSystemSlot0'
        | 'SubSystemSlot1'
        | 'SubSystemSlot2'
        | 'SubSystemSlot3'
        | 'SubSystemSlot4'
        | 'SubSystemSlot5'
        | 'SubSystemSlot6'
        | 'SubSystemSlot7'
        | 'Unlocked'
        | 'Wallet'
        | 'Wardrobe'
      /**
       * location_id integer
       */
      location_id: number
      /**
       * location_type string
       */
      location_type: 'station' | 'solar_system' | 'item' | 'other'
      /**
       * quantity integer
       */
      quantity: number
      /**
       * type_id integer
       */
      type_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/assets/',
      path: {
        corporation_id: corporationId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
        page: page,
        token: token
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get corporation asset locations
   * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/assets/locations/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/assets/locations/`
   *
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of asset locations
   * @throws ApiError
   */
  public postCorporationsCorporationIdAssetsLocations({
    corporationId,
    itemIds,
    datasource = 'tranquility',
    token
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number
    /**
     * A list of item ids
     */
    itemIds: Array<number>
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * item_id integer
       */
      item_id: number
      /**
       * position object
       */
      position: {
        /**
         * x number
         */
        x: number
        /**
         * y number
         */
        y: number
        /**
         * z number
         */
        z: number
      }
    }>
  > {
    return this.httpRequest.request({
      method: 'POST',
      url: '/corporations/{corporation_id}/assets/locations/',
      path: {
        corporation_id: corporationId
      },
      query: {
        datasource: datasource,
        token: token
      },
      body: itemIds,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Invalid IDs`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get corporation asset names
   * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/assets/names/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/assets/names/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/assets/names/`
   *
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any List of asset names
   * @throws ApiError
   */
  public postCorporationsCorporationIdAssetsNames({
    corporationId,
    itemIds,
    datasource = 'tranquility',
    token
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number
    /**
     * A list of item ids
     */
    itemIds: Array<number>
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * item_id integer
       */
      item_id: number
      /**
       * name string
       */
      name: string
    }>
  > {
    return this.httpRequest.request({
      method: 'POST',
      url: '/corporations/{corporation_id}/assets/names/',
      path: {
        corporation_id: corporationId
      },
      query: {
        datasource: datasource,
        token: token
      },
      body: itemIds,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Invalid IDs`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }
}
