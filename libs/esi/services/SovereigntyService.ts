/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SovereigntyService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List sovereignty campaigns
   * Shows sovereignty data for campaigns.
   *
   * ---
   * Alternate route: `/dev/sovereignty/campaigns/`
   *
   * Alternate route: `/legacy/sovereignty/campaigns/`
   *
   * Alternate route: `/v1/sovereignty/campaigns/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any A list of sovereignty campaigns
   * @throws ApiError
   */
  public getSovereigntyCampaigns({
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
     * Score for all attacking parties, only present in Defense Events.
     *
     */
    attackers_score?: number;
    /**
     * Unique ID for this campaign.
     */
    campaign_id: number;
    /**
     * The constellation in which the campaign will take place.
     *
     */
    constellation_id: number;
    /**
     * Defending alliance, only present in Defense Events
     *
     */
    defender_id?: number;
    /**
     * Score for the defending alliance, only present in Defense Events.
     *
     */
    defender_score?: number;
    /**
     * Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as "Defense Events", station_freeport as "Freeport Events".
     *
     */
    event_type: 'tcu_defense' | 'ihub_defense' | 'station_defense' | 'station_freeport';
    /**
     * Alliance participating and their respective scores, only present in Freeport Events.
     *
     */
    participants?: Array<{
      /**
       * alliance_id integer
       */
      alliance_id: number;
      /**
       * score number
       */
      score: number;
    }>;
    /**
     * The solar system the structure is located in.
     *
     */
    solar_system_id: number;
    /**
     * Time the event is scheduled to start.
     *
     */
    start_time: string;
    /**
     * The structure item ID that is related to this campaign.
     *
     */
    structure_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sovereignty/campaigns/',
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
   * List sovereignty of systems
   * Shows sovereignty information for solar systems
   *
   * ---
   * Alternate route: `/dev/sovereignty/map/`
   *
   * Alternate route: `/legacy/sovereignty/map/`
   *
   * Alternate route: `/v1/sovereignty/map/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of sovereignty information for solar systems in New Eden
   * @throws ApiError
   */
  public getSovereigntyMap({
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
     * alliance_id integer
     */
    alliance_id?: number;
    /**
     * corporation_id integer
     */
    corporation_id?: number;
    /**
     * faction_id integer
     */
    faction_id?: number;
    /**
     * system_id integer
     */
    system_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sovereignty/map/',
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
   * List sovereignty structures
   * Shows sovereignty data for structures.
   *
   * ---
   * Alternate route: `/dev/sovereignty/structures/`
   *
   * Alternate route: `/legacy/sovereignty/structures/`
   *
   * Alternate route: `/v1/sovereignty/structures/`
   *
   * ---
   * This route is cached for up to 120 seconds
   * @returns any A list of sovereignty structures
   * @throws ApiError
   */
  public getSovereigntyStructures({
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
     * The alliance that owns the structure.
     *
     */
    alliance_id: number;
    /**
     * Solar system in which the structure is located.
     *
     */
    solar_system_id: number;
    /**
     * Unique item ID for this structure.
     */
    structure_id: number;
    /**
     * A reference to the type of structure this is.
     *
     */
    structure_type_id: number;
    /**
     * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.
     *
     */
    vulnerability_occupancy_level?: number;
    /**
     * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.
     *
     */
    vulnerable_end_time?: string;
    /**
     * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.
     *
     */
    vulnerable_start_time?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sovereignty/structures/',
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

}
