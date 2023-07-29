/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class StatusService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Retrieve the uptime and player counts
   * EVE Server status
   *
   * ---
   * Alternate route: `/dev/status/`
   *
   * Alternate route: `/legacy/status/`
   *
   * Alternate route: `/v1/status/`
   *
   * Alternate route: `/v2/status/`
   *
   * ---
   * This route is cached for up to 30 seconds
   * @returns any Server status
   * @throws ApiError
   */
  public getStatus({
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
  }): CancelablePromise<{
    /**
     * Current online player count
     */
    players: number
    /**
     * Running version as string
     */
    server_version: string
    /**
     * Server start timestamp
     */
    start_time: string
    /**
     * If the server is in VIP mode
     */
    vip?: boolean
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/status/',
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
