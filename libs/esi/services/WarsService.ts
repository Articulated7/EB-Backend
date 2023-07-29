/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class WarsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List wars
   * Return a list of wars
   *
   * ---
   * Alternate route: `/dev/wars/`
   *
   * Alternate route: `/legacy/wars/`
   *
   * Alternate route: `/v1/wars/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns number A list of war IDs, in descending order by war_id
   * @throws ApiError
   */
  public getWars({
    datasource = 'tranquility',
    ifNoneMatch,
    maxWarId
  }: {
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
    /**
     * Only return wars with ID smaller than this
     */
    maxWarId?: number
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/wars/',
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
        max_war_id: maxWarId
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
   * Get war information
   * Return details about a war
   *
   * ---
   * Alternate route: `/dev/wars/{war_id}/`
   *
   * Alternate route: `/legacy/wars/{war_id}/`
   *
   * Alternate route: `/v1/wars/{war_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Details about a war
   * @throws ApiError
   */
  public getWarsWarId({
    warId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * ID for a war
     */
    warId: number
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
  }): CancelablePromise<{
    /**
     * The aggressor corporation or alliance that declared this war, only contains either corporation_id or alliance_id
     */
    aggressor: {
      /**
       * Alliance ID if and only if the aggressor is an alliance
       */
      alliance_id?: number
      /**
       * Corporation ID if and only if the aggressor is a corporation
       */
      corporation_id?: number
      /**
       * ISK value of ships the aggressor has destroyed
       */
      isk_destroyed: number
      /**
       * The number of ships the aggressor has killed
       */
      ships_killed: number
    }
    /**
     * allied corporations or alliances, each object contains either corporation_id or alliance_id
     */
    allies?: Array<{
      /**
       * Alliance ID if and only if this ally is an alliance
       */
      alliance_id?: number
      /**
       * Corporation ID if and only if this ally is a corporation
       */
      corporation_id?: number
    }>
    /**
     * Time that the war was declared
     */
    declared: string
    /**
     * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
     */
    defender: {
      /**
       * Alliance ID if and only if the defender is an alliance
       */
      alliance_id?: number
      /**
       * Corporation ID if and only if the defender is a corporation
       */
      corporation_id?: number
      /**
       * ISK value of ships the defender has killed
       */
      isk_destroyed: number
      /**
       * The number of ships the defender has killed
       */
      ships_killed: number
    }
    /**
     * Time the war ended and shooting was no longer allowed
     */
    finished?: string
    /**
     * ID of the specified war
     */
    id: number
    /**
     * Was the war declared mutual by both parties
     */
    mutual: boolean
    /**
     * Is the war currently open for allies or not
     */
    open_for_allies: boolean
    /**
     * Time the war was retracted but both sides could still shoot each other
     */
    retracted?: string
    /**
     * Time when the war started and both sides could shoot each other
     */
    started?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/wars/{war_id}/',
      path: {
        war_id: warId
      },
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
        422: `War not found`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * List kills for a war
   * Return a list of kills related to a war
   *
   * ---
   * Alternate route: `/dev/wars/{war_id}/killmails/`
   *
   * Alternate route: `/legacy/wars/{war_id}/killmails/`
   *
   * Alternate route: `/v1/wars/{war_id}/killmails/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of killmail IDs and hashes
   * @throws ApiError
   */
  public getWarsWarIdKillmails({
    warId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1
  }: {
    /**
     * A valid war ID
     */
    warId: number
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
  }): CancelablePromise<
    Array<{
      /**
       * A hash of this killmail
       */
      killmail_hash: string
      /**
       * ID of this killmail
       */
      killmail_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/wars/{war_id}/killmails/',
      path: {
        war_id: warId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
        page: page
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        420: `Error limited`,
        422: `War not found`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }
}
