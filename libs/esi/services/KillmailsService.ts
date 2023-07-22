/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class KillmailsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a character's recent kills and losses
   * Return a list of a character's kills and losses going back 90 days
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/killmails/recent/`
   *
   * Alternate route: `/legacy/characters/{character_id}/killmails/recent/`
   *
   * Alternate route: `/v1/characters/{character_id}/killmails/recent/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of killmail IDs and hashes
   * @throws ApiError
   */
  public getCharactersCharacterIdKillmailsRecent({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Which page of results to return
     */
    page?: number,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * A hash of this killmail
     */
    killmail_hash: string;
    /**
     * ID of this killmail
     */
    killmail_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/killmails/recent/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'page': page,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get a corporation's recent kills and losses
   * Get a list of a corporation's kills and losses going back 90 days
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/`
   *
   * ---
   * This route is cached for up to 300 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Director
   *
   * @returns any A list of killmail IDs and hashes
   * @throws ApiError
   */
  public getCorporationsCorporationIdKillmailsRecent({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Which page of results to return
     */
    page?: number,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * A hash of this killmail
     */
    killmail_hash: string;
    /**
     * ID of this killmail
     */
    killmail_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/killmails/recent/',
      path: {
        'corporation_id': corporationId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'page': page,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get a single killmail
   * Return a single killmail from its ID and hash
   *
   * ---
   * Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/`
   *
   * Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/`
   *
   * Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/`
   *
   * ---
   * This route is cached for up to 30758400 seconds
   * @returns any A killmail
   * @throws ApiError
   */
  public getKillmailsKillmailIdKillmailHash({
    killmailHash,
    killmailId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * The killmail hash for verification
     */
    killmailHash: string,
    /**
     * The killmail ID to be queried
     */
    killmailId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
  }): CancelablePromise<{
    /**
     * attackers array
     */
    attackers: Array<{
      /**
       * alliance_id integer
       */
      alliance_id?: number;
      /**
       * character_id integer
       */
      character_id?: number;
      /**
       * corporation_id integer
       */
      corporation_id?: number;
      /**
       * damage_done integer
       */
      damage_done: number;
      /**
       * faction_id integer
       */
      faction_id?: number;
      /**
       * Was the attacker the one to achieve the final blow
       *
       */
      final_blow: boolean;
      /**
       * Security status for the attacker
       *
       */
      security_status: number;
      /**
       * What ship was the attacker flying
       *
       */
      ship_type_id?: number;
      /**
       * What weapon was used by the attacker for the kill
       *
       */
      weapon_type_id?: number;
    }>;
    /**
     * ID of the killmail
     */
    killmail_id: number;
    /**
     * Time that the victim was killed and the killmail generated
     *
     */
    killmail_time: string;
    /**
     * Moon if the kill took place at one
     */
    moon_id?: number;
    /**
     * Solar system that the kill took place in
     *
     */
    solar_system_id: number;
    /**
     * victim object
     */
    victim: {
      /**
       * alliance_id integer
       */
      alliance_id?: number;
      /**
       * character_id integer
       */
      character_id?: number;
      /**
       * corporation_id integer
       */
      corporation_id?: number;
      /**
       * How much total damage was taken by the victim
       *
       */
      damage_taken: number;
      /**
       * faction_id integer
       */
      faction_id?: number;
      /**
       * items array
       */
      items?: Array<{
        /**
         * Flag for the location of the item
         *
         */
        flag: number;
        /**
         * item_type_id integer
         */
        item_type_id: number;
        /**
         * items array
         */
        items?: Array<{
          /**
           * flag integer
           */
          flag: number;
          /**
           * item_type_id integer
           */
          item_type_id: number;
          /**
           * quantity_destroyed integer
           */
          quantity_destroyed?: number;
          /**
           * quantity_dropped integer
           */
          quantity_dropped?: number;
          /**
           * singleton integer
           */
          singleton: number;
        }>;
        /**
         * How many of the item were destroyed if any
         *
         */
        quantity_destroyed?: number;
        /**
         * How many of the item were dropped if any
         *
         */
        quantity_dropped?: number;
        /**
         * singleton integer
         */
        singleton: number;
      }>;
      /**
       * Coordinates of the victim in Cartesian space relative to the Sun
       *
       */
      position?: {
        /**
         * x number
         */
        'x': number;
        /**
         * y number
         */
        'y': number;
        /**
         * z number
         */
        'z': number;
      };
      /**
       * The ship that the victim was piloting and was destroyed
       *
       */
      ship_type_id: number;
    };
    /**
     * War if the killmail is generated in relation to an official war
     *
     */
    war_id?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/killmails/{killmail_id}/{killmail_hash}/',
      path: {
        'killmail_hash': killmailHash,
        'killmail_id': killmailId,
      },
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
        422: `Invalid killmail_id and/or killmail_hash`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
