/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class IndustryService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List character industry jobs
   * List industry jobs placed by a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/industry/jobs/`
   *
   * Alternate route: `/legacy/characters/{character_id}/industry/jobs/`
   *
   * Alternate route: `/v1/characters/{character_id}/industry/jobs/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any Industry jobs placed by a character
   * @throws ApiError
   */
  public getCharactersCharacterIdIndustryJobs({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    includeCompleted,
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
     * Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days
     */
    includeCompleted?: boolean
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * Job activity ID
       */
      activity_id: number
      /**
       * blueprint_id integer
       */
      blueprint_id: number
      /**
       * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
       */
      blueprint_location_id: number
      /**
       * blueprint_type_id integer
       */
      blueprint_type_id: number
      /**
       * ID of the character which completed this job
       */
      completed_character_id?: number
      /**
       * Date and time when this job was completed
       */
      completed_date?: string
      /**
       * The sume of job installation fee and industry facility tax
       */
      cost?: number
      /**
       * Job duration in seconds
       */
      duration: number
      /**
       * Date and time when this job finished
       */
      end_date: string
      /**
       * ID of the facility where this job is running
       */
      facility_id: number
      /**
       * ID of the character which installed this job
       */
      installer_id: number
      /**
       * Unique job ID
       */
      job_id: number
      /**
       * Number of runs blueprint is licensed for
       */
      licensed_runs?: number
      /**
       * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
       */
      output_location_id: number
      /**
       * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
       */
      pause_date?: string
      /**
       * Chance of success for invention
       */
      probability?: number
      /**
       * Type ID of product (manufactured, copied or invented)
       */
      product_type_id?: number
      /**
       * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
       */
      runs: number
      /**
       * Date and time when this job started
       */
      start_date: string
      /**
       * ID of the station where industry facility is located
       */
      station_id: number
      /**
       * status string
       */
      status:
        | 'active'
        | 'cancelled'
        | 'delivered'
        | 'paused'
        | 'ready'
        | 'reverted'
      /**
       * Number of successful runs for this job. Equal to runs unless this is an invention job
       */
      successful_runs?: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/industry/jobs/',
      path: {
        character_id: characterId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
        include_completed: includeCompleted,
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
   * Character mining ledger
   * Paginated record of all mining done by a character for the past 30 days
   *
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mining/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mining/`
   *
   * Alternate route: `/v1/characters/{character_id}/mining/`
   *
   * ---
   * This route is cached for up to 600 seconds
   * @returns any Mining ledger of a character
   * @throws ApiError
   */
  public getCharactersCharacterIdMining({
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
       * date string
       */
      date: string
      /**
       * quantity integer
       */
      quantity: number
      /**
       * solar_system_id integer
       */
      solar_system_id: number
      /**
       * type_id integer
       */
      type_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/mining/',
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
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Moon extraction timers
   * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
   *
   *
   * ---
   * Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/`
   *
   * Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/`
   *
   * Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/`
   *
   * ---
   * This route is cached for up to 1800 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Station_Manager
   *
   * @returns any A list of chunk timers
   * @throws ApiError
   */
  public getCorporationCorporationIdMiningExtractions({
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
       * The time at which the chunk being extracted will arrive and can be fractured by the moon mining drill.
       *
       */
      chunk_arrival_time: string
      /**
       * The time at which the current extraction was initiated.
       *
       */
      extraction_start_time: string
      /**
       * moon_id integer
       */
      moon_id: number
      /**
       * The time at which the chunk being extracted will naturally fracture if it is not first fractured by the moon mining drill.
       *
       */
      natural_decay_time: string
      /**
       * structure_id integer
       */
      structure_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporation/{corporation_id}/mining/extractions/',
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
   * Corporation mining observers
   * Paginated list of all entities capable of observing and recording mining for a corporation
   *
   *
   * ---
   * Alternate route: `/dev/corporation/{corporation_id}/mining/observers/`
   *
   * Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/`
   *
   * Alternate route: `/v1/corporation/{corporation_id}/mining/observers/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Accountant
   *
   * @returns any Observer list of a corporation
   * @throws ApiError
   */
  public getCorporationCorporationIdMiningObservers({
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
       * last_updated string
       */
      last_updated: string
      /**
       * The entity that was observing the asteroid field when it was mined.
       *
       */
      observer_id: number
      /**
       * The category of the observing entity
       */
      observer_type: 'structure'
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporation/{corporation_id}/mining/observers/',
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
   * Observed corporation mining
   * Paginated record of all mining seen by an observer
   *
   *
   * ---
   * Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/`
   *
   * Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/`
   *
   * Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Accountant
   *
   * @returns any Mining ledger of an observer
   * @throws ApiError
   */
  public getCorporationCorporationIdMiningObserversObserverId({
    corporationId,
    observerId,
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
     * A mining observer id
     */
    observerId: number
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
       * The character that did the mining
       *
       */
      character_id: number
      /**
       * last_updated string
       */
      last_updated: string
      /**
       * quantity integer
       */
      quantity: number
      /**
       * The corporation id of the character at the time data was recorded.
       *
       */
      recorded_corporation_id: number
      /**
       * type_id integer
       */
      type_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporation/{corporation_id}/mining/observers/{observer_id}/',
      path: {
        corporation_id: corporationId,
        observer_id: observerId
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
   * List corporation industry jobs
   * List industry jobs run by a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/`
   *
   * ---
   * This route is cached for up to 300 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Factory_Manager
   *
   * @returns any A list of corporation industry jobs
   * @throws ApiError
   */
  public getCorporationsCorporationIdIndustryJobs({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    includeCompleted = false,
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
     * Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days
     */
    includeCompleted?: boolean
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
       * Job activity ID
       */
      activity_id: number
      /**
       * blueprint_id integer
       */
      blueprint_id: number
      /**
       * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
       */
      blueprint_location_id: number
      /**
       * blueprint_type_id integer
       */
      blueprint_type_id: number
      /**
       * ID of the character which completed this job
       */
      completed_character_id?: number
      /**
       * Date and time when this job was completed
       */
      completed_date?: string
      /**
       * The sume of job installation fee and industry facility tax
       */
      cost?: number
      /**
       * Job duration in seconds
       */
      duration: number
      /**
       * Date and time when this job finished
       */
      end_date: string
      /**
       * ID of the facility where this job is running
       */
      facility_id: number
      /**
       * ID of the character which installed this job
       */
      installer_id: number
      /**
       * Unique job ID
       */
      job_id: number
      /**
       * Number of runs blueprint is licensed for
       */
      licensed_runs?: number
      /**
       * ID of the location for the industry facility
       */
      location_id: number
      /**
       * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
       */
      output_location_id: number
      /**
       * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
       */
      pause_date?: string
      /**
       * Chance of success for invention
       */
      probability?: number
      /**
       * Type ID of product (manufactured, copied or invented)
       */
      product_type_id?: number
      /**
       * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
       */
      runs: number
      /**
       * Date and time when this job started
       */
      start_date: string
      /**
       * status string
       */
      status:
        | 'active'
        | 'cancelled'
        | 'delivered'
        | 'paused'
        | 'ready'
        | 'reverted'
      /**
       * Number of successful runs for this job. Equal to runs unless this is an invention job
       */
      successful_runs?: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/industry/jobs/',
      path: {
        corporation_id: corporationId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
        include_completed: includeCompleted,
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
   * List industry facilities
   * Return a list of industry facilities
   *
   * ---
   * Alternate route: `/dev/industry/facilities/`
   *
   * Alternate route: `/legacy/industry/facilities/`
   *
   * Alternate route: `/v1/industry/facilities/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of facilities
   * @throws ApiError
   */
  public getIndustryFacilities({
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
  }): CancelablePromise<
    Array<{
      /**
       * ID of the facility
       */
      facility_id: number
      /**
       * Owner of the facility
       */
      owner_id: number
      /**
       * Region ID where the facility is
       */
      region_id: number
      /**
       * Solar system ID where the facility is
       */
      solar_system_id: number
      /**
       * Tax imposed by the facility
       */
      tax?: number
      /**
       * Type ID of the facility
       */
      type_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/industry/facilities/',
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * List solar system cost indices
   * Return cost indices for solar systems
   *
   * ---
   * Alternate route: `/dev/industry/systems/`
   *
   * Alternate route: `/legacy/industry/systems/`
   *
   * Alternate route: `/v1/industry/systems/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of cost indicies
   * @throws ApiError
   */
  public getIndustrySystems({
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
  }): CancelablePromise<
    Array<{
      /**
       * cost_indices array
       */
      cost_indices: Array<{
        /**
         * activity string
         */
        activity:
          | 'copying'
          | 'duplicating'
          | 'invention'
          | 'manufacturing'
          | 'none'
          | 'reaction'
          | 'researching_material_efficiency'
          | 'researching_technology'
          | 'researching_time_efficiency'
          | 'reverse_engineering'
        /**
         * cost_index number
         */
        cost_index: number
      }>
      /**
       * solar_system_id integer
       */
      solar_system_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/industry/systems/',
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }
}
