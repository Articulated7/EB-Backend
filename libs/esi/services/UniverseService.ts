/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UniverseService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get ancestries
   * Get all character ancestries
   *
   * ---
   * Alternate route: `/legacy/universe/ancestries/`
   *
   * Alternate route: `/v1/universe/ancestries/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any A list of ancestries
   * @throws ApiError
   */
  public getUniverseAncestries({
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
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
  }): CancelablePromise<Array<{
    /**
     * The bloodline associated with this ancestry
     */
    bloodline_id: number;
    /**
     * description string
     */
    description: string;
    /**
     * icon_id integer
     */
    icon_id?: number;
    /**
     * id integer
     */
    id: number;
    /**
     * name string
     */
    name: string;
    /**
     * short_description string
     */
    short_description?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/ancestries/',
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
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
   * Get asteroid belt information
   * Get information on an asteroid belt
   *
   * ---
   * Alternate route: `/legacy/universe/asteroid_belts/{asteroid_belt_id}/`
   *
   * Alternate route: `/v1/universe/asteroid_belts/{asteroid_belt_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about an asteroid belt
   * @throws ApiError
   */
  public getUniverseAsteroidBeltsAsteroidBeltId({
    asteroidBeltId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * asteroid_belt_id integer
     */
    asteroidBeltId: number,
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
     * name string
     */
    name: string;
    /**
     * position object
     */
    position: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * The solar system this asteroid belt is in
     */
    system_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/asteroid_belts/{asteroid_belt_id}/',
      path: {
        'asteroid_belt_id': asteroidBeltId,
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
        404: `Asteroid belt not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get bloodlines
   * Get a list of bloodlines
   *
   * ---
   * Alternate route: `/legacy/universe/bloodlines/`
   *
   * Alternate route: `/v1/universe/bloodlines/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any A list of bloodlines
   * @throws ApiError
   */
  public getUniverseBloodlines({
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
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
  }): CancelablePromise<Array<{
    /**
     * bloodline_id integer
     */
    bloodline_id: number;
    /**
     * charisma integer
     */
    charisma: number;
    /**
     * corporation_id integer
     */
    corporation_id: number;
    /**
     * description string
     */
    description: string;
    /**
     * intelligence integer
     */
    intelligence: number;
    /**
     * memory integer
     */
    memory: number;
    /**
     * name string
     */
    name: string;
    /**
     * perception integer
     */
    perception: number;
    /**
     * race_id integer
     */
    race_id: number;
    /**
     * ship_type_id integer
     */
    ship_type_id: number | null;
    /**
     * willpower integer
     */
    willpower: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/bloodlines/',
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
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
   * Get item categories
   * Get a list of item categories
   *
   * ---
   * Alternate route: `/legacy/universe/categories/`
   *
   * Alternate route: `/v1/universe/categories/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of item category ids
   * @throws ApiError
   */
  public getUniverseCategories({
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
      url: '/universe/categories/',
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
   * Get item category information
   * Get information of an item category
   *
   * ---
   * Alternate route: `/legacy/universe/categories/{category_id}/`
   *
   * Alternate route: `/v1/universe/categories/{category_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about an item category
   * @throws ApiError
   */
  public getUniverseCategoriesCategoryId({
    categoryId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
    /**
     * An Eve item category ID
     */
    categoryId: number,
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
  }): CancelablePromise<{
    /**
     * category_id integer
     */
    category_id: number;
    /**
     * groups array
     */
    groups: Array<number>;
    /**
     * name string
     */
    name: string;
    /**
     * published boolean
     */
    published: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/categories/{category_id}/',
      path: {
        'category_id': categoryId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Category not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get constellations
   * Get a list of constellations
   *
   * ---
   * Alternate route: `/legacy/universe/constellations/`
   *
   * Alternate route: `/v1/universe/constellations/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of constellation ids
   * @throws ApiError
   */
  public getUniverseConstellations({
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
      url: '/universe/constellations/',
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
   * Get constellation information
   * Get information on a constellation
   *
   * ---
   * Alternate route: `/legacy/universe/constellations/{constellation_id}/`
   *
   * Alternate route: `/v1/universe/constellations/{constellation_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a constellation
   * @throws ApiError
   */
  public getUniverseConstellationsConstellationId({
    constellationId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
    /**
     * constellation_id integer
     */
    constellationId: number,
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
  }): CancelablePromise<{
    /**
     * constellation_id integer
     */
    constellation_id: number;
    /**
     * name string
     */
    name: string;
    /**
     * position object
     */
    position: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * The region this constellation is in
     */
    region_id: number;
    /**
     * systems array
     */
    systems: Array<number>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/constellations/{constellation_id}/',
      path: {
        'constellation_id': constellationId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Constellation not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get factions
   * Get a list of factions
   *
   * ---
   * Alternate route: `/dev/universe/factions/`
   *
   * Alternate route: `/v2/universe/factions/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any A list of factions
   * @throws ApiError
   */
  public getUniverseFactions({
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
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
  }): CancelablePromise<Array<{
    /**
     * corporation_id integer
     */
    corporation_id?: number;
    /**
     * description string
     */
    description: string;
    /**
     * faction_id integer
     */
    faction_id: number;
    /**
     * is_unique boolean
     */
    is_unique: boolean;
    /**
     * militia_corporation_id integer
     */
    militia_corporation_id?: number;
    /**
     * name string
     */
    name: string;
    /**
     * size_factor number
     */
    size_factor: number;
    /**
     * solar_system_id integer
     */
    solar_system_id?: number;
    /**
     * station_count integer
     */
    station_count: number;
    /**
     * station_system_count integer
     */
    station_system_count: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/factions/',
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
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
   * Get graphics
   * Get a list of graphics
   *
   * ---
   * Alternate route: `/legacy/universe/graphics/`
   *
   * Alternate route: `/v1/universe/graphics/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of graphic ids
   * @throws ApiError
   */
  public getUniverseGraphics({
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
      url: '/universe/graphics/',
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
   * Get graphic information
   * Get information on a graphic
   *
   * ---
   * Alternate route: `/dev/universe/graphics/{graphic_id}/`
   *
   * Alternate route: `/legacy/universe/graphics/{graphic_id}/`
   *
   * Alternate route: `/v1/universe/graphics/{graphic_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a graphic
   * @throws ApiError
   */
  public getUniverseGraphicsGraphicId({
    graphicId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * graphic_id integer
     */
    graphicId: number,
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
     * collision_file string
     */
    collision_file?: string;
    /**
     * graphic_file string
     */
    graphic_file?: string;
    /**
     * graphic_id integer
     */
    graphic_id: number;
    /**
     * icon_folder string
     */
    icon_folder?: string;
    /**
     * sof_dna string
     */
    sof_dna?: string;
    /**
     * sof_fation_name string
     */
    sof_fation_name?: string;
    /**
     * sof_hull_name string
     */
    sof_hull_name?: string;
    /**
     * sof_race_name string
     */
    sof_race_name?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/graphics/{graphic_id}/',
      path: {
        'graphic_id': graphicId,
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
        404: `Graphic not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get item groups
   * Get a list of item groups
   *
   * ---
   * Alternate route: `/legacy/universe/groups/`
   *
   * Alternate route: `/v1/universe/groups/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of item group ids
   * @throws ApiError
   */
  public getUniverseGroups({
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
  }: {
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/groups/',
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'page': page,
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
   * Get item group information
   * Get information on an item group
   *
   * ---
   * Alternate route: `/dev/universe/groups/{group_id}/`
   *
   * Alternate route: `/legacy/universe/groups/{group_id}/`
   *
   * Alternate route: `/v1/universe/groups/{group_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about an item group
   * @throws ApiError
   */
  public getUniverseGroupsGroupId({
    groupId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
    /**
     * An Eve item group ID
     */
    groupId: number,
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
  }): CancelablePromise<{
    /**
     * category_id integer
     */
    category_id: number;
    /**
     * group_id integer
     */
    group_id: number;
    /**
     * name string
     */
    name: string;
    /**
     * published boolean
     */
    published: boolean;
    /**
     * types array
     */
    types: Array<number>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/groups/{group_id}/',
      path: {
        'group_id': groupId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Group not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Bulk names to IDs
   * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
   *
   * ---
   * Alternate route: `/dev/universe/ids/`
   *
   * Alternate route: `/legacy/universe/ids/`
   *
   * Alternate route: `/v1/universe/ids/`
   *
   * @returns any List of id/name associations for a set of names divided by category. Any name passed in that did not have a match will be ommitted
   * @throws ApiError
   */
  public postUniverseIds({
    names,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    language = 'en',
  }: {
    /**
     * The names to resolve
     */
    names: Array<string>,
    /**
     * Language to use in the response
     */
    acceptLanguage?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Language to use in the response, takes precedence over Accept-Language
     */
    language?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
  }): CancelablePromise<{
    /**
     * agents array
     */
    agents?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * alliances array
     */
    alliances?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * characters array
     */
    characters?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * constellations array
     */
    constellations?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * corporations array
     */
    corporations?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * factions array
     */
    factions?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * inventory_types array
     */
    inventory_types?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * regions array
     */
    regions?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * stations array
     */
    stations?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
    /**
     * systems array
     */
    systems?: Array<{
      /**
       * id integer
       */
      id?: number;
      /**
       * name string
       */
      name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/universe/ids/',
      headers: {
        'Accept-Language': acceptLanguage,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      body: names,
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
   * Get moon information
   * Get information on a moon
   *
   * ---
   * Alternate route: `/legacy/universe/moons/{moon_id}/`
   *
   * Alternate route: `/v1/universe/moons/{moon_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a moon
   * @throws ApiError
   */
  public getUniverseMoonsMoonId({
    moonId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * moon_id integer
     */
    moonId: number,
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
     * moon_id integer
     */
    moon_id: number;
    /**
     * name string
     */
    name: string;
    /**
     * position object
     */
    position: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * The solar system this moon is in
     */
    system_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/moons/{moon_id}/',
      path: {
        'moon_id': moonId,
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
        404: `Moon not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get names and categories for a set of IDs
   * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions
   *
   * ---
   * Alternate route: `/dev/universe/names/`
   *
   * Alternate route: `/v3/universe/names/`
   *
   * @returns any List of id/name associations for a set of IDs. All IDs must resolve to a name, or nothing will be returned
   * @throws ApiError
   */
  public postUniverseNames({
    ids,
    datasource = 'tranquility',
  }: {
    /**
     * The ids to resolve
     */
    ids: Array<number>,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
  }): CancelablePromise<Array<{
    /**
     * category string
     */
    category: 'alliance' | 'character' | 'constellation' | 'corporation' | 'inventory_type' | 'region' | 'solar_system' | 'station' | 'faction';
    /**
     * id integer
     */
    id: number;
    /**
     * name string
     */
    name: string;
  }>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/universe/names/',
      query: {
        'datasource': datasource,
      },
      body: ids,
      errors: {
        400: `Bad request`,
        404: `Ensure all IDs are valid before resolving`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get planet information
   * Get information on a planet
   *
   * ---
   * Alternate route: `/legacy/universe/planets/{planet_id}/`
   *
   * Alternate route: `/v1/universe/planets/{planet_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a planet
   * @throws ApiError
   */
  public getUniversePlanetsPlanetId({
    planetId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * planet_id integer
     */
    planetId: number,
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
     * name string
     */
    name: string;
    /**
     * planet_id integer
     */
    planet_id: number;
    /**
     * position object
     */
    position: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * The solar system this planet is in
     */
    system_id: number;
    /**
     * type_id integer
     */
    type_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/planets/{planet_id}/',
      path: {
        'planet_id': planetId,
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
        404: `Planet not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get character races
   * Get a list of character races
   *
   * ---
   * Alternate route: `/dev/universe/races/`
   *
   * Alternate route: `/legacy/universe/races/`
   *
   * Alternate route: `/v1/universe/races/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any A list of character races
   * @throws ApiError
   */
  public getUniverseRaces({
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
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
  }): CancelablePromise<Array<{
    /**
     * The alliance generally associated with this race
     */
    alliance_id: number;
    /**
     * description string
     */
    description: string;
    /**
     * name string
     */
    name: string;
    /**
     * race_id integer
     */
    race_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/races/',
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
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
   * Get regions
   * Get a list of regions
   *
   * ---
   * Alternate route: `/legacy/universe/regions/`
   *
   * Alternate route: `/v1/universe/regions/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of region ids
   * @throws ApiError
   */
  public getUniverseRegions({
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
      url: '/universe/regions/',
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
   * Get region information
   * Get information on a region
   *
   * ---
   * Alternate route: `/legacy/universe/regions/{region_id}/`
   *
   * Alternate route: `/v1/universe/regions/{region_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a region
   * @throws ApiError
   */
  public getUniverseRegionsRegionId({
    regionId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
    /**
     * region_id integer
     */
    regionId: number,
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
  }): CancelablePromise<{
    /**
     * constellations array
     */
    constellations: Array<number>;
    /**
     * description string
     */
    description?: string;
    /**
     * name string
     */
    name: string;
    /**
     * region_id integer
     */
    region_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/regions/{region_id}/',
      path: {
        'region_id': regionId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Region not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get stargate information
   * Get information on a stargate
   *
   * ---
   * Alternate route: `/legacy/universe/stargates/{stargate_id}/`
   *
   * Alternate route: `/v1/universe/stargates/{stargate_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a stargate
   * @throws ApiError
   */
  public getUniverseStargatesStargateId({
    stargateId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * stargate_id integer
     */
    stargateId: number,
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
     * destination object
     */
    destination: {
      /**
       * The stargate this stargate connects to
       */
      stargate_id: number;
      /**
       * The solar system this stargate connects to
       */
      system_id: number;
    };
    /**
     * name string
     */
    name: string;
    /**
     * position object
     */
    position: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * stargate_id integer
     */
    stargate_id: number;
    /**
     * The solar system this stargate is in
     */
    system_id: number;
    /**
     * type_id integer
     */
    type_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/stargates/{stargate_id}/',
      path: {
        'stargate_id': stargateId,
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
        404: `Stargate not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get star information
   * Get information on a star
   *
   * ---
   * Alternate route: `/legacy/universe/stars/{star_id}/`
   *
   * Alternate route: `/v1/universe/stars/{star_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a star
   * @throws ApiError
   */
  public getUniverseStarsStarId({
    starId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * star_id integer
     */
    starId: number,
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
     * Age of star in years
     */
    age: number;
    /**
     * luminosity number
     */
    luminosity: number;
    /**
     * name string
     */
    name: string;
    /**
     * radius integer
     */
    radius: number;
    /**
     * solar_system_id integer
     */
    solar_system_id: number;
    /**
     * spectral_class string
     */
    spectral_class: 'K2 V' | 'K4 V' | 'G2 V' | 'G8 V' | 'M7 V' | 'K7 V' | 'M2 V' | 'K5 V' | 'M3 V' | 'G0 V' | 'G7 V' | 'G3 V' | 'F9 V' | 'G5 V' | 'F6 V' | 'K8 V' | 'K9 V' | 'K6 V' | 'G9 V' | 'G6 V' | 'G4 VI' | 'G4 V' | 'F8 V' | 'F2 V' | 'F1 V' | 'K3 V' | 'F0 VI' | 'G1 VI' | 'G0 VI' | 'K1 V' | 'M4 V' | 'M1 V' | 'M6 V' | 'M0 V' | 'K2 IV' | 'G2 VI' | 'K0 V' | 'K5 IV' | 'F5 VI' | 'G6 VI' | 'F6 VI' | 'F2 IV' | 'G3 VI' | 'M8 V' | 'F1 VI' | 'K1 IV' | 'F7 V' | 'G5 VI' | 'M5 V' | 'G7 VI' | 'F5 V' | 'F4 VI' | 'F8 VI' | 'K3 IV' | 'F4 IV' | 'F0 V' | 'G7 IV' | 'G8 VI' | 'F2 VI' | 'F4 V' | 'F7 VI' | 'F3 V' | 'G1 V' | 'G9 VI' | 'F3 IV' | 'F9 VI' | 'M9 V' | 'K0 IV' | 'F1 IV' | 'G4 IV' | 'F3 VI' | 'K4 IV' | 'G5 IV' | 'G3 IV' | 'G1 IV' | 'K7 IV' | 'G0 IV' | 'K6 IV' | 'K9 IV' | 'G2 IV' | 'F9 IV' | 'F0 IV' | 'K8 IV' | 'G8 IV' | 'F6 IV' | 'F5 IV' | 'A0' | 'A0IV' | 'A0IV2';
    /**
     * temperature integer
     */
    temperature: number;
    /**
     * type_id integer
     */
    type_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/stars/{star_id}/',
      path: {
        'star_id': starId,
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
   * Get station information
   * Get information on a station
   *
   * ---
   * Alternate route: `/dev/universe/stations/{station_id}/`
   *
   * Alternate route: `/v2/universe/stations/{station_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a station
   * @throws ApiError
   */
  public getUniverseStationsStationId({
    stationId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * station_id integer
     */
    stationId: number,
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
     * max_dockable_ship_volume number
     */
    max_dockable_ship_volume: number;
    /**
     * name string
     */
    name: string;
    /**
     * office_rental_cost number
     */
    office_rental_cost: number;
    /**
     * ID of the corporation that controls this station
     */
    owner?: number;
    /**
     * position object
     */
    position: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * race_id integer
     */
    race_id?: number;
    /**
     * reprocessing_efficiency number
     */
    reprocessing_efficiency: number;
    /**
     * reprocessing_stations_take number
     */
    reprocessing_stations_take: number;
    /**
     * services array
     */
    services: Array<'bounty-missions' | 'assasination-missions' | 'courier-missions' | 'interbus' | 'reprocessing-plant' | 'refinery' | 'market' | 'black-market' | 'stock-exchange' | 'cloning' | 'surgery' | 'dna-therapy' | 'repair-facilities' | 'factory' | 'labratory' | 'gambling' | 'fitting' | 'paintshop' | 'news' | 'storage' | 'insurance' | 'docking' | 'office-rental' | 'jump-clone-facility' | 'loyalty-point-store' | 'navy-offices' | 'security-offices'>;
    /**
     * station_id integer
     */
    station_id: number;
    /**
     * The solar system this station is in
     */
    system_id: number;
    /**
     * type_id integer
     */
    type_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/stations/{station_id}/',
      path: {
        'station_id': stationId,
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
        404: `Station not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * List all public structures
   * List all public structures
   *
   * ---
   * Alternate route: `/dev/universe/structures/`
   *
   * Alternate route: `/legacy/universe/structures/`
   *
   * Alternate route: `/v1/universe/structures/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns number List of public structure IDs
   * @throws ApiError
   */
  public getUniverseStructures({
    datasource = 'tranquility',
    filter,
    ifNoneMatch,
  }: {
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Only list public structures that have this service online
     */
    filter?: 'market' | 'manufacturing_basic',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/structures/',
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'filter': filter,
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
   * Get structure information
   * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
   *
   * ---
   * Alternate route: `/v2/universe/structures/{structure_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Data about a structure
   * @throws ApiError
   */
  public getUniverseStructuresStructureId({
    structureId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An Eve structure ID
     */
    structureId: number,
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
     * The full name of the structure
     */
    name: string;
    /**
     * The ID of the corporation who owns this particular structure
     */
    owner_id: number;
    /**
     * Coordinates of the structure in Cartesian space relative to the Sun, in metres.
     *
     */
    position?: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * solar_system_id integer
     */
    solar_system_id: number;
    /**
     * type_id integer
     */
    type_id?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/structures/{structure_id}/',
      path: {
        'structure_id': structureId,
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
        404: `Structure not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get system jumps
   * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
   *
   * ---
   * Alternate route: `/legacy/universe/system_jumps/`
   *
   * Alternate route: `/v1/universe/system_jumps/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of systems and number of jumps
   * @throws ApiError
   */
  public getUniverseSystemJumps({
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
  }): CancelablePromise<Array<{
    /**
     * ship_jumps integer
     */
    ship_jumps: number;
    /**
     * system_id integer
     */
    system_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/system_jumps/',
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
   * Get system kills
   * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
   *
   * ---
   * Alternate route: `/v2/universe/system_kills/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of systems and number of ship, pod and NPC kills
   * @throws ApiError
   */
  public getUniverseSystemKills({
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
  }): CancelablePromise<Array<{
    /**
     * Number of NPC ships killed in this system
     */
    npc_kills: number;
    /**
     * Number of pods killed in this system
     */
    pod_kills: number;
    /**
     * Number of player ships killed in this system
     */
    ship_kills: number;
    /**
     * system_id integer
     */
    system_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/system_kills/',
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
   * Get solar systems
   * Get a list of solar systems
   *
   * ---
   * Alternate route: `/dev/universe/systems/`
   *
   * Alternate route: `/legacy/universe/systems/`
   *
   * Alternate route: `/v1/universe/systems/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of solar system ids
   * @throws ApiError
   */
  public getUniverseSystems({
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
      url: '/universe/systems/',
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
   * Get solar system information
   * Get information on a solar system.
   *
   * ---
   * Alternate route: `/dev/universe/systems/{system_id}/`
   *
   * Alternate route: `/v4/universe/systems/{system_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a solar system
   * @throws ApiError
   */
  public getUniverseSystemsSystemId({
    systemId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
    /**
     * system_id integer
     */
    systemId: number,
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
  }): CancelablePromise<{
    /**
     * The constellation this solar system is in
     */
    constellation_id: number;
    /**
     * name string
     */
    name: string;
    /**
     * planets array
     */
    planets?: Array<{
      /**
       * asteroid_belts array
       */
      asteroid_belts?: Array<number>;
      /**
       * moons array
       */
      moons?: Array<number>;
      /**
       * planet_id integer
       */
      planet_id: number;
    }>;
    /**
     * position object
     */
    position: {
      /**
       * x number
       */
      'x': number;
      /**
       * y number
       */
      'y': number;
      /**
       * z number
       */
      'z': number;
    };
    /**
     * security_class string
     */
    security_class?: string;
    /**
     * security_status number
     */
    security_status: number;
    /**
     * star_id integer
     */
    star_id?: number;
    /**
     * stargates array
     */
    stargates?: Array<number>;
    /**
     * stations array
     */
    stations?: Array<number>;
    /**
     * system_id integer
     */
    system_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/systems/{system_id}/',
      path: {
        'system_id': systemId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Solar system not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get types
   * Get a list of type ids
   *
   * ---
   * Alternate route: `/legacy/universe/types/`
   *
   * Alternate route: `/v1/universe/types/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of type ids
   * @throws ApiError
   */
  public getUniverseTypes({
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
  }: {
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/types/',
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'page': page,
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
   * Get type information
   * Get information on a type
   *
   * ---
   * Alternate route: `/dev/universe/types/{type_id}/`
   *
   * Alternate route: `/v3/universe/types/{type_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a type
   * @throws ApiError
   */
  public getUniverseTypesTypeId({
    typeId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
    /**
     * An Eve item type ID
     */
    typeId: number,
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
  }): CancelablePromise<{
    /**
     * capacity number
     */
    capacity?: number;
    /**
     * description string
     */
    description: string;
    /**
     * dogma_attributes array
     */
    dogma_attributes?: Array<{
      /**
       * attribute_id integer
       */
      attribute_id: number;
      /**
       * value number
       */
      value: number;
    }>;
    /**
     * dogma_effects array
     */
    dogma_effects?: Array<{
      /**
       * effect_id integer
       */
      effect_id: number;
      /**
       * is_default boolean
       */
      is_default: boolean;
    }>;
    /**
     * graphic_id integer
     */
    graphic_id?: number;
    /**
     * group_id integer
     */
    group_id: number;
    /**
     * icon_id integer
     */
    icon_id?: number;
    /**
     * This only exists for types that can be put on the market
     */
    market_group_id?: number;
    /**
     * mass number
     */
    mass?: number;
    /**
     * name string
     */
    name: string;
    /**
     * packaged_volume number
     */
    packaged_volume?: number;
    /**
     * portion_size integer
     */
    portion_size?: number;
    /**
     * published boolean
     */
    published: boolean;
    /**
     * radius number
     */
    radius?: number;
    /**
     * type_id integer
     */
    type_id: number;
    /**
     * volume number
     */
    volume?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/universe/types/{type_id}/',
      path: {
        'type_id': typeId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Type not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
