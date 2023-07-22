/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlanetaryInteractionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get colonies
   * Returns a list of all planetary colonies owned by a character.
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/planets/`
   *
   * Alternate route: `/legacy/characters/{character_id}/planets/`
   *
   * Alternate route: `/v1/characters/{character_id}/planets/`
   *
   * ---
   * This route is cached for up to 600 seconds
   * @returns any List of colonies
   * @throws ApiError
   */
  public getCharactersCharacterIdPlanets({
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
     * last_update string
     */
    last_update: string;
    /**
     * num_pins integer
     */
    num_pins: number;
    /**
     * owner_id integer
     */
    owner_id: number;
    /**
     * planet_id integer
     */
    planet_id: number;
    /**
     * planet_type string
     */
    planet_type: 'temperate' | 'barren' | 'oceanic' | 'ice' | 'gas' | 'lava' | 'storm' | 'plasma';
    /**
     * solar_system_id integer
     */
    solar_system_id: number;
    /**
     * upgrade_level integer
     */
    upgrade_level: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/planets/',
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
   * Get colony layout
   * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/planets/{planet_id}/`
   *
   * Alternate route: `/v3/characters/{character_id}/planets/{planet_id}/`
   *
   * @returns any Colony layout
   * @throws ApiError
   */
  public getCharactersCharacterIdPlanetsPlanetId({
    characterId,
    planetId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * Planet id of the target planet
     */
    planetId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * links array
     */
    links: Array<{
      /**
       * destination_pin_id integer
       */
      destination_pin_id: number;
      /**
       * link_level integer
       */
      link_level: number;
      /**
       * source_pin_id integer
       */
      source_pin_id: number;
    }>;
    /**
     * pins array
     */
    pins: Array<{
      /**
       * contents array
       */
      contents?: Array<{
        /**
         * amount integer
         */
        amount: number;
        /**
         * type_id integer
         */
        type_id: number;
      }>;
      /**
       * expiry_time string
       */
      expiry_time?: string;
      /**
       * extractor_details object
       */
      extractor_details?: {
        /**
         * in seconds
         */
        cycle_time?: number;
        /**
         * head_radius number
         */
        head_radius?: number;
        /**
         * heads array
         */
        heads: Array<{
          /**
           * head_id integer
           */
          head_id: number;
          /**
           * latitude number
           */
          latitude: number;
          /**
           * longitude number
           */
          longitude: number;
        }>;
        /**
         * product_type_id integer
         */
        product_type_id?: number;
        /**
         * qty_per_cycle integer
         */
        qty_per_cycle?: number;
      };
      /**
       * factory_details object
       */
      factory_details?: {
        /**
         * schematic_id integer
         */
        schematic_id: number;
      };
      /**
       * install_time string
       */
      install_time?: string;
      /**
       * last_cycle_start string
       */
      last_cycle_start?: string;
      /**
       * latitude number
       */
      latitude: number;
      /**
       * longitude number
       */
      longitude: number;
      /**
       * pin_id integer
       */
      pin_id: number;
      /**
       * schematic_id integer
       */
      schematic_id?: number;
      /**
       * type_id integer
       */
      type_id: number;
    }>;
    /**
     * routes array
     */
    routes: Array<{
      /**
       * content_type_id integer
       */
      content_type_id: number;
      /**
       * destination_pin_id integer
       */
      destination_pin_id: number;
      /**
       * quantity number
       */
      quantity: number;
      /**
       * route_id integer
       */
      route_id: number;
      /**
       * source_pin_id integer
       */
      source_pin_id: number;
      /**
       * list of pin ID waypoints
       */
      waypoints?: Array<number>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/planets/{planet_id}/',
      path: {
        'character_id': characterId,
        'planet_id': planetId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Colony not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * List corporation customs offices
   * List customs offices owned by a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/customs_offices/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/customs_offices/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/customs_offices/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any A list of customs offices and their settings
   * @throws ApiError
   */
  public getCorporationsCorporationIdCustomsOffices({
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
     * Only present if alliance access is allowed
     */
    alliance_tax_rate?: number;
    /**
     * standing_level and any standing related tax rate only present when this is true
     */
    allow_access_with_standings: boolean;
    /**
     * allow_alliance_access boolean
     */
    allow_alliance_access: boolean;
    /**
     * bad_standing_tax_rate number
     */
    bad_standing_tax_rate?: number;
    /**
     * corporation_tax_rate number
     */
    corporation_tax_rate?: number;
    /**
     * Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
     */
    excellent_standing_tax_rate?: number;
    /**
     * good_standing_tax_rate number
     */
    good_standing_tax_rate?: number;
    /**
     * neutral_standing_tax_rate number
     */
    neutral_standing_tax_rate?: number;
    /**
     * unique ID of this customs office
     */
    office_id: number;
    /**
     * reinforce_exit_end integer
     */
    reinforce_exit_end: number;
    /**
     * Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
     */
    reinforce_exit_start: number;
    /**
     * Access is allowed only for entities with this level of standing or better
     */
    standing_level?: 'bad' | 'excellent' | 'good' | 'neutral' | 'terrible';
    /**
     * ID of the solar system this customs office is located in
     */
    system_id: number;
    /**
     * terrible_standing_tax_rate number
     */
    terrible_standing_tax_rate?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/customs_offices/',
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
   * Get schematic information
   * Get information on a planetary factory schematic
   *
   * ---
   * Alternate route: `/dev/universe/schematics/{schematic_id}/`
   *
   * Alternate route: `/legacy/universe/schematics/{schematic_id}/`
   *
   * Alternate route: `/v1/universe/schematics/{schematic_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Public data about a schematic
   * @throws ApiError
   */
  public getUniverseSchematicsSchematicId({
    schematicId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * A PI schematic ID
     */
    schematicId: number,
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
     * Time in seconds to process a run
     */
    cycle_time: number;
    /**
     * schematic_name string
     */
    schematic_name: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/schematics/{schematic_id}/',
      path: {
        'schematic_id': schematicId,
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
        404: `Schematic not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
