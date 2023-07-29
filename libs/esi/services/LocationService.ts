/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class LocationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get character location
   * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/location/`
   *
   * Alternate route: `/legacy/characters/{character_id}/location/`
   *
   * Alternate route: `/v1/characters/{character_id}/location/`
   *
   * Alternate route: `/v2/characters/{character_id}/location/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
   * @throws ApiError
   */
  public getCharactersCharacterIdLocation({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
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
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<{
    /**
     * solar_system_id integer
     */
    solar_system_id: number
    /**
     * station_id integer
     */
    station_id?: number
    /**
     * structure_id integer
     */
    structure_id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/location/',
      path: {
        character_id: characterId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
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
   * Get character online
   * Checks if the character is currently online
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/online/`
   *
   * Alternate route: `/v2/characters/{character_id}/online/`
   *
   * Alternate route: `/v3/characters/{character_id}/online/`
   *
   * ---
   * This route is cached for up to 60 seconds
   * @returns any Object describing the character's online status
   * @throws ApiError
   */
  public getCharactersCharacterIdOnline({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
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
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<{
    /**
     * Timestamp of the last login
     */
    last_login?: string
    /**
     * Timestamp of the last logout
     */
    last_logout?: string
    /**
     * Total number of times the character has logged in
     */
    logins?: number
    /**
     * If the character is online
     */
    online: boolean
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/online/',
      path: {
        character_id: characterId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
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
   * Get current ship
   * Get the current ship type, name and id
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/ship/`
   *
   * Alternate route: `/legacy/characters/{character_id}/ship/`
   *
   * Alternate route: `/v1/characters/{character_id}/ship/`
   *
   * Alternate route: `/v2/characters/{character_id}/ship/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any Get the current ship type, name and id
   * @throws ApiError
   */
  public getCharactersCharacterIdShip({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
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
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<{
    /**
     * Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
     */
    ship_item_id: number
    /**
     * ship_name string
     */
    ship_name: string
    /**
     * ship_type_id integer
     */
    ship_type_id: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/ship/',
      path: {
        character_id: characterId
      },
      headers: {
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
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
}
