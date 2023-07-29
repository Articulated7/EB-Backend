/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class BookmarksService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List bookmarks
   * A list of your character's personal bookmarks
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/bookmarks/`
   *
   * Alternate route: `/v2/characters/{character_id}/bookmarks/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of bookmarks
   * @throws ApiError
   */
  public getCharactersCharacterIdBookmarks({
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
       * bookmark_id integer
       */
      bookmark_id: number
      /**
       * Optional object that is returned if a bookmark was made on a planet or a random location in space.
       */
      coordinates?: {
        /**
         * x number
         */
        x: number
        /**
         * y number
         */
        y: number
        /**
         * z number
         */
        z: number
      }
      /**
       * created string
       */
      created: string
      /**
       * creator_id integer
       */
      creator_id: number
      /**
       * folder_id integer
       */
      folder_id?: number
      /**
       * Optional object that is returned if a bookmark was made on a particular item.
       */
      item?: {
        /**
         * item_id integer
         */
        item_id: number
        /**
         * type_id integer
         */
        type_id: number
      }
      /**
       * label string
       */
      label: string
      /**
       * location_id integer
       */
      location_id: number
      /**
       * notes string
       */
      notes: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/bookmarks/',
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
   * List bookmark folders
   * A list of your character's personal bookmark folders
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/bookmarks/folders/`
   *
   * Alternate route: `/v2/characters/{character_id}/bookmarks/folders/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any List of bookmark folders
   * @throws ApiError
   */
  public getCharactersCharacterIdBookmarksFolders({
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
       * folder_id integer
       */
      folder_id: number
      /**
       * name string
       */
      name: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/bookmarks/folders/',
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
   * List corporation bookmarks
   * A list of your corporation's bookmarks
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/bookmarks/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/bookmarks/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any List of corporation owned bookmarks
   * @throws ApiError
   */
  public getCorporationsCorporationIdBookmarks({
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
       * bookmark_id integer
       */
      bookmark_id: number
      /**
       * Optional object that is returned if a bookmark was made on a planet or a random location in space.
       */
      coordinates?: {
        /**
         * x number
         */
        x: number
        /**
         * y number
         */
        y: number
        /**
         * z number
         */
        z: number
      }
      /**
       * created string
       */
      created: string
      /**
       * creator_id integer
       */
      creator_id: number
      /**
       * folder_id integer
       */
      folder_id?: number
      /**
       * Optional object that is returned if a bookmark was made on a particular item.
       */
      item?: {
        /**
         * item_id integer
         */
        item_id: number
        /**
         * type_id integer
         */
        type_id: number
      }
      /**
       * label string
       */
      label: string
      /**
       * location_id integer
       */
      location_id: number
      /**
       * notes string
       */
      notes: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/bookmarks/',
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
   * List corporation bookmark folders
   * A list of your corporation's bookmark folders
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/bookmarks/folders/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/folders/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/bookmarks/folders/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any List of corporation owned bookmark folders
   * @throws ApiError
   */
  public getCorporationsCorporationIdBookmarksFolders({
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
       * creator_id integer
       */
      creator_id?: number
      /**
       * folder_id integer
       */
      folder_id: number
      /**
       * name string
       */
      name: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/bookmarks/folders/',
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
}
