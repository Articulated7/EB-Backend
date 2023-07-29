/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class AllianceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List all alliances
   * List all active player alliances
   *
   * ---
   * Alternate route: `/dev/alliances/`
   *
   * Alternate route: `/legacy/alliances/`
   *
   * Alternate route: `/v1/alliances/`
   *
   * Alternate route: `/v2/alliances/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns number List of Alliance IDs
   * @throws ApiError
   */
  public getAlliances({
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/alliances/',
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
   * Get alliance information
   * Public information about an alliance
   *
   * ---
   * Alternate route: `/dev/alliances/{alliance_id}/`
   *
   * Alternate route: `/legacy/alliances/{alliance_id}/`
   *
   * Alternate route: `/v3/alliances/{alliance_id}/`
   *
   * Alternate route: `/v4/alliances/{alliance_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Public data about an alliance
   * @throws ApiError
   */
  public getAlliancesAllianceId({
    allianceId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * An EVE alliance ID
     */
    allianceId: number
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
     * ID of the corporation that created the alliance
     */
    creator_corporation_id: number
    /**
     * ID of the character that created the alliance
     */
    creator_id: number
    /**
     * date_founded string
     */
    date_founded: string
    /**
     * the executor corporation ID, if this alliance is not closed
     */
    executor_corporation_id?: number
    /**
     * Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare
     */
    faction_id?: number
    /**
     * the full name of the alliance
     */
    name: string
    /**
     * the short name of the alliance
     */
    ticker: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/alliances/{alliance_id}/',
      path: {
        alliance_id: allianceId
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
        404: `Alliance not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * List alliance's corporations
   * List all current member corporations of an alliance
   *
   * ---
   * Alternate route: `/dev/alliances/{alliance_id}/corporations/`
   *
   * Alternate route: `/legacy/alliances/{alliance_id}/corporations/`
   *
   * Alternate route: `/v1/alliances/{alliance_id}/corporations/`
   *
   * Alternate route: `/v2/alliances/{alliance_id}/corporations/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns number List of corporation IDs
   * @throws ApiError
   */
  public getAlliancesAllianceIdCorporations({
    allianceId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * An EVE alliance ID
     */
    allianceId: number
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/alliances/{alliance_id}/corporations/',
      path: {
        alliance_id: allianceId
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
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get alliance icon
   * Get the icon urls for a alliance
   *
   * ---
   * Alternate route: `/legacy/alliances/{alliance_id}/icons/`
   *
   * Alternate route: `/v1/alliances/{alliance_id}/icons/`
   *
   * ---
   * This route expires daily at 11:05
   *
   * ---
   * [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/alliances/{alliance_id}/icons/)
   * @returns any Icon URLs for the given alliance id and server
   * @throws ApiError
   */
  public getAlliancesAllianceIdIcons({
    allianceId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * An EVE alliance ID
     */
    allianceId: number
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
     * px128x128 string
     */
    px128x128?: string
    /**
     * px64x64 string
     */
    px64x64?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/alliances/{alliance_id}/icons/',
      path: {
        alliance_id: allianceId
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
        404: `No image server for this datasource`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }
}
