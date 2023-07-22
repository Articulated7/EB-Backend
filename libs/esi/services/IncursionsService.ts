/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IncursionsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List incursions
   * Return a list of current incursions
   *
   * ---
   * Alternate route: `/dev/incursions/`
   *
   * Alternate route: `/legacy/incursions/`
   *
   * Alternate route: `/v1/incursions/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of incursions
   * @throws ApiError
   */
  public getIncursions({
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
     * The constellation id in which this incursion takes place
     */
    constellation_id: number;
    /**
     * The attacking faction's id
     */
    faction_id: number;
    /**
     * Whether the final encounter has boss or not
     */
    has_boss: boolean;
    /**
     * A list of infested solar system ids that are a part of this incursion
     */
    infested_solar_systems: Array<number>;
    /**
     * Influence of this incursion as a float from 0 to 1
     */
    influence: number;
    /**
     * Staging solar system for this incursion
     */
    staging_solar_system_id: number;
    /**
     * The state of this incursion
     */
    state: 'withdrawing' | 'mobilizing' | 'established';
    /**
     * The type of this incursion
     */
    type: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/incursions/',
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
