/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class ClonesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get clones
   * A list of the character's clones
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/clones/`
   *
   * Alternate route: `/v3/characters/{character_id}/clones/`
   *
   * Alternate route: `/v4/characters/{character_id}/clones/`
   *
   * ---
   * This route is cached for up to 120 seconds
   * @returns any Clone information for the given character
   * @throws ApiError
   */
  public getCharactersCharacterIdClones({
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
     * home_location object
     */
    home_location?: {
      /**
       * location_id integer
       */
      location_id?: number
      /**
       * location_type string
       */
      location_type?: 'station' | 'structure'
    }
    /**
     * jump_clones array
     */
    jump_clones: Array<{
      /**
       * implants array
       */
      implants: Array<number>
      /**
       * jump_clone_id integer
       */
      jump_clone_id: number
      /**
       * location_id integer
       */
      location_id: number
      /**
       * location_type string
       */
      location_type: 'station' | 'structure'
      /**
       * name string
       */
      name?: string
    }>
    /**
     * last_clone_jump_date string
     */
    last_clone_jump_date?: string
    /**
     * last_station_change_date string
     */
    last_station_change_date?: string
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/clones/',
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
   * Get active implants
   * Return implants on the active clone of a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/implants/`
   *
   * Alternate route: `/legacy/characters/{character_id}/implants/`
   *
   * Alternate route: `/v1/characters/{character_id}/implants/`
   *
   * Alternate route: `/v2/characters/{character_id}/implants/`
   *
   * ---
   * This route is cached for up to 120 seconds
   * @returns number A list of implant type ids
   * @throws ApiError
   */
  public getCharactersCharacterIdImplants({
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/implants/',
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
