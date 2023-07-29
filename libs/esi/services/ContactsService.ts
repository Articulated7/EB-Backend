/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class ContactsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get alliance contacts
   * Return contacts of an alliance
   *
   * ---
   * Alternate route: `/dev/alliances/{alliance_id}/contacts/`
   *
   * Alternate route: `/v2/alliances/{alliance_id}/contacts/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of contacts
   * @throws ApiError
   */
  public getAlliancesAllianceIdContacts({
    allianceId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token
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
       * contact_id integer
       */
      contact_id: number
      /**
       * contact_type string
       */
      contact_type: 'character' | 'corporation' | 'alliance' | 'faction'
      /**
       * label_ids array
       */
      label_ids?: Array<number>
      /**
       * Standing of the contact
       */
      standing: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/alliances/{alliance_id}/contacts/',
      path: {
        alliance_id: allianceId
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
   * Get alliance contact labels
   * Return custom labels for an alliance's contacts
   *
   * ---
   * Alternate route: `/dev/alliances/{alliance_id}/contacts/labels/`
   *
   * Alternate route: `/legacy/alliances/{alliance_id}/contacts/labels/`
   *
   * Alternate route: `/v1/alliances/{alliance_id}/contacts/labels/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of alliance contact labels
   * @throws ApiError
   */
  public getAlliancesAllianceIdContactsLabels({
    allianceId,
    datasource = 'tranquility',
    ifNoneMatch,
    token
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
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * label_id integer
       */
      label_id: number
      /**
       * label_name string
       */
      label_name: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/alliances/{alliance_id}/contacts/labels/',
      path: {
        alliance_id: allianceId
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
   * Delete contacts
   * Bulk delete contacts
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contacts/`
   *
   * Alternate route: `/v2/characters/{character_id}/contacts/`
   *
   * @returns void
   * @throws ApiError
   */
  public deleteCharactersCharacterIdContacts({
    characterId,
    contactIds,
    datasource = 'tranquility',
    token
  }: {
    /**
     * An EVE character ID
     */
    characterId: number
    /**
     * A list of contacts to delete
     */
    contactIds: Array<number>
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/characters/{character_id}/contacts/',
      path: {
        character_id: characterId
      },
      query: {
        contact_ids: contactIds,
        datasource: datasource,
        token: token
      },
      errors: {
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
   * Get contacts
   * Return contacts of a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contacts/`
   *
   * Alternate route: `/v2/characters/{character_id}/contacts/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of contacts
   * @throws ApiError
   */
  public getCharactersCharacterIdContacts({
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
       * contact_id integer
       */
      contact_id: number
      /**
       * contact_type string
       */
      contact_type: 'character' | 'corporation' | 'alliance' | 'faction'
      /**
       * Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false
       */
      is_blocked?: boolean
      /**
       * Whether this contact is being watched
       */
      is_watched?: boolean
      /**
       * label_ids array
       */
      label_ids?: Array<number>
      /**
       * Standing of the contact
       */
      standing: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/contacts/',
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
   * Add contacts
   * Bulk add contacts with same settings
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contacts/`
   *
   * Alternate route: `/v2/characters/{character_id}/contacts/`
   *
   * @returns number A list of contact ids that successfully created
   * @throws ApiError
   */
  public postCharactersCharacterIdContacts({
    characterId,
    contactIds,
    standing,
    datasource = 'tranquility',
    labelIds,
    token,
    watched = false
  }: {
    /**
     * An EVE character ID
     */
    characterId: number
    /**
     * A list of contacts
     */
    contactIds: Array<number>
    /**
     * Standing for the contact
     */
    standing: number
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * Add custom labels to the new contact
     */
    labelIds?: Array<number>
    /**
     * Access token to use if unable to set a header
     */
    token?: string
    /**
     * Whether the contact should be watched, note this is only effective on characters
     */
    watched?: boolean
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/{character_id}/contacts/',
      path: {
        character_id: characterId
      },
      query: {
        datasource: datasource,
        label_ids: labelIds,
        standing: standing,
        token: token,
        watched: watched
      },
      body: contactIds,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
        520: `Internal error thrown from the EVE server`
      }
    })
  }

  /**
   * Edit contacts
   * Bulk edit contacts with same settings
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contacts/`
   *
   * Alternate route: `/v2/characters/{character_id}/contacts/`
   *
   * @returns void
   * @throws ApiError
   */
  public putCharactersCharacterIdContacts({
    characterId,
    contactIds,
    standing,
    datasource = 'tranquility',
    labelIds,
    token,
    watched = false
  }: {
    /**
     * An EVE character ID
     */
    characterId: number
    /**
     * A list of contacts
     */
    contactIds: Array<number>
    /**
     * Standing for the contact
     */
    standing: number
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * Add custom labels to the contact
     */
    labelIds?: Array<number>
    /**
     * Access token to use if unable to set a header
     */
    token?: string
    /**
     * Whether the contact should be watched, note this is only effective on characters
     */
    watched?: boolean
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/characters/{character_id}/contacts/',
      path: {
        character_id: characterId
      },
      query: {
        datasource: datasource,
        label_ids: labelIds,
        standing: standing,
        token: token,
        watched: watched
      },
      body: contactIds,
      errors: {
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
   * Get contact labels
   * Return custom labels for a character's contacts
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contacts/labels/`
   *
   * Alternate route: `/legacy/characters/{character_id}/contacts/labels/`
   *
   * Alternate route: `/v1/characters/{character_id}/contacts/labels/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of contact labels
   * @throws ApiError
   */
  public getCharactersCharacterIdContactsLabels({
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
  }): CancelablePromise<
    Array<{
      /**
       * label_id integer
       */
      label_id: number
      /**
       * label_name string
       */
      label_name: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/contacts/labels/',
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
   * Get corporation contacts
   * Return contacts of a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/contacts/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/contacts/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of contacts
   * @throws ApiError
   */
  public getCorporationsCorporationIdContacts({
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
       * contact_id integer
       */
      contact_id: number
      /**
       * contact_type string
       */
      contact_type: 'character' | 'corporation' | 'alliance' | 'faction'
      /**
       * Whether this contact is being watched
       */
      is_watched?: boolean
      /**
       * label_ids array
       */
      label_ids?: Array<number>
      /**
       * Standing of the contact
       */
      standing: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/contacts/',
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
   * Get corporation contact labels
   * Return custom labels for a corporation's contacts
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/contacts/labels/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/contacts/labels/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/contacts/labels/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of corporation contact labels
   * @throws ApiError
   */
  public getCorporationsCorporationIdContactsLabels({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
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
     * Access token to use if unable to set a header
     */
    token?: string
  }): CancelablePromise<
    Array<{
      /**
       * label_id integer
       */
      label_id: number
      /**
       * label_name string
       */
      label_name: string
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/contacts/labels/',
      path: {
        corporation_id: corporationId
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
