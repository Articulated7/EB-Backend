/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class RoutesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get route
   * Get the systems between origin and destination
   *
   * ---
   * Alternate route: `/dev/route/{origin}/{destination}/`
   *
   * Alternate route: `/legacy/route/{origin}/{destination}/`
   *
   * Alternate route: `/v1/route/{origin}/{destination}/`
   *
   * ---
   * This route is cached for up to 86400 seconds
   * @returns number Solar systems in route from origin to destination
   * @throws ApiError
   */
  public getRouteOriginDestination({
    destination,
    origin,
    avoid,
    connections,
    datasource = 'tranquility',
    flag = 'shortest',
    ifNoneMatch
  }: {
    /**
     * destination solar system ID
     */
    destination: number
    /**
     * origin solar system ID
     */
    origin: number
    /**
     * avoid solar system ID(s)
     */
    avoid?: Array<number>
    /**
     * connected solar system pairs
     */
    connections?: Array<any[]>
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * route security preference
     */
    flag?: 'shortest' | 'secure' | 'insecure'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/route/{origin}/{destination}/',
      path: {
        destination: destination,
        origin: origin
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        avoid: avoid,
        connections: connections,
        datasource: datasource,
        flag: flag
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `No route found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }
}
