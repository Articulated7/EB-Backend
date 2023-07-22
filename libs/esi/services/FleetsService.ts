/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FleetsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get character fleet info
   * Return the fleet ID the character is in, if any.
   *
   * ---
   * Alternate route: `/legacy/characters/{character_id}/fleet/`
   *
   * Alternate route: `/v1/characters/{character_id}/fleet/`
   *
   * ---
   * This route is cached for up to 60 seconds
   *
   * ---
   * Warning: This route has an upgrade available
   *
   * ---
   * [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/fleet/)
   * @returns any Details about the character's fleet
   * @throws ApiError
   */
  public getCharactersCharacterIdFleet({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
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
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * The character's current fleet ID
     */
    fleet_id: number;
    /**
     * Member’s role in fleet
     */
    role: 'fleet_commander' | 'squad_commander' | 'squad_member' | 'wing_commander';
    /**
     * ID of the squad the member is in. If not applicable, will be set to -1
     */
    squad_id: number;
    /**
     * ID of the wing the member is in. If not applicable, will be set to -1
     */
    wing_id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/fleet/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The character is not in a fleet`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get fleet information
   * Return details about a fleet
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any Details about a fleet
   * @throws ApiError
   */
  public getFleetsFleetId({
    fleetId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * Is free-move enabled
     */
    is_free_move: boolean;
    /**
     * Does the fleet have an active fleet advertisement
     */
    is_registered: boolean;
    /**
     * Is EVE Voice enabled
     */
    is_voice_enabled: boolean;
    /**
     * Fleet MOTD in CCP flavoured HTML
     */
    motd: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fleets/{fleet_id}/',
      path: {
        'fleet_id': fleetId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Update fleet
   * Update settings about a fleet
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public putFleetsFleetId({
    fleetId,
    newSettings,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * What to update for this fleet
     */
    newSettings: {
      /**
       * Should free-move be enabled in the fleet
       */
      is_free_move?: boolean;
      /**
       * New fleet MOTD in CCP flavoured HTML
       */
      motd?: string;
    },
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/fleets/{fleet_id}/',
      path: {
        'fleet_id': fleetId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: newSettings,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get fleet members
   * Return information about fleet members
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/members/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/members/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/members/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any A list of fleet members
   * @throws ApiError
   */
  public getFleetsFleetIdMembers({
    fleetId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * Language to use in the response
     */
    acceptLanguage?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Language to use in the response, takes precedence over Accept-Language
     */
    language?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * character_id integer
     */
    character_id: number;
    /**
     * join_time string
     */
    join_time: string;
    /**
     * Member’s role in fleet
     */
    role: 'fleet_commander' | 'wing_commander' | 'squad_commander' | 'squad_member';
    /**
     * Localized role names
     */
    role_name: string;
    /**
     * ship_type_id integer
     */
    ship_type_id: number;
    /**
     * Solar system the member is located in
     */
    solar_system_id: number;
    /**
     * ID of the squad the member is in. If not applicable, will be set to -1
     */
    squad_id: number;
    /**
     * Station in which the member is docked in, if applicable
     */
    station_id?: number;
    /**
     * Whether the member take fleet warps
     */
    takes_fleet_warp: boolean;
    /**
     * ID of the wing the member is in. If not applicable, will be set to -1
     */
    wing_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fleets/{fleet_id}/members/',
      path: {
        'fleet_id': fleetId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Create fleet invitation
   * Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/members/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/members/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/members/`
   *
   * @returns void
   * @throws ApiError
   */
  public postFleetsFleetIdMembers({
    fleetId,
    invitation,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * Details of the invitation
     */
    invitation: {
      /**
       * The character you want to invite
       */
      character_id: number;
      /**
       * If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
       */
      role: 'fleet_commander' | 'wing_commander' | 'squad_commander' | 'squad_member';
      /**
       * squad_id integer
       */
      squad_id?: number;
      /**
       * wing_id integer
       */
      wing_id?: number;
    },
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fleets/{fleet_id}/members/',
      path: {
        'fleet_id': fleetId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: invitation,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        422: `Errors in invitation`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Kick fleet member
   * Kick a fleet member
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public deleteFleetsFleetIdMembersMemberId({
    fleetId,
    memberId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * The character ID of a member in this fleet
     */
    memberId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fleets/{fleet_id}/members/{member_id}/',
      path: {
        'fleet_id': fleetId,
        'member_id': memberId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Move fleet member
   * Move a fleet member around
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public putFleetsFleetIdMembersMemberId({
    fleetId,
    memberId,
    movement,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * The character ID of a member in this fleet
     */
    memberId: number,
    /**
     * Details of the invitation
     */
    movement: {
      /**
       * If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified.
       */
      role: 'fleet_commander' | 'wing_commander' | 'squad_commander' | 'squad_member';
      /**
       * squad_id integer
       */
      squad_id?: number;
      /**
       * wing_id integer
       */
      wing_id?: number;
    },
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/fleets/{fleet_id}/members/{member_id}/',
      path: {
        'fleet_id': fleetId,
        'member_id': memberId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: movement,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        422: `Errors in invitation`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Delete fleet squad
   * Delete a fleet squad, only empty squads can be deleted
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public deleteFleetsFleetIdSquadsSquadId({
    fleetId,
    squadId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * The squad to delete
     */
    squadId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fleets/{fleet_id}/squads/{squad_id}/',
      path: {
        'fleet_id': fleetId,
        'squad_id': squadId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Rename fleet squad
   * Rename a fleet squad
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public putFleetsFleetIdSquadsSquadId({
    fleetId,
    naming,
    squadId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * New name of the squad
     */
    naming: {
      /**
       * name string
       */
      name: string;
    },
    /**
     * The squad to rename
     */
    squadId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/fleets/{fleet_id}/squads/{squad_id}/',
      path: {
        'fleet_id': fleetId,
        'squad_id': squadId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: naming,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get fleet wings
   * Return information about wings in a fleet
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/wings/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/wings/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/wings/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any A list of fleet wings
   * @throws ApiError
   */
  public getFleetsFleetIdWings({
    fleetId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * Language to use in the response
     */
    acceptLanguage?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Language to use in the response, takes precedence over Accept-Language
     */
    language?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * id integer
     */
    id: number;
    /**
     * name string
     */
    name: string;
    /**
     * squads array
     */
    squads: Array<{
      /**
       * id integer
       */
      id: number;
      /**
       * name string
       */
      name: string;
    }>;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fleets/{fleet_id}/wings/',
      path: {
        'fleet_id': fleetId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
        'token': token,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Create fleet wing
   * Create a new wing in a fleet
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/wings/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/wings/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/wings/`
   *
   * @returns any Wing created
   * @throws ApiError
   */
  public postFleetsFleetIdWings({
    fleetId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * The wing_id of the newly created wing
     */
    wing_id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fleets/{fleet_id}/wings/',
      path: {
        'fleet_id': fleetId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Delete fleet wing
   * Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public deleteFleetsFleetIdWingsWingId({
    fleetId,
    wingId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * The wing to delete
     */
    wingId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fleets/{fleet_id}/wings/{wing_id}/',
      path: {
        'fleet_id': fleetId,
        'wing_id': wingId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Rename fleet wing
   * Rename a fleet wing
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public putFleetsFleetIdWingsWingId({
    fleetId,
    naming,
    wingId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * New name of the wing
     */
    naming: {
      /**
       * name string
       */
      name: string;
    },
    /**
     * The wing to rename
     */
    wingId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/fleets/{fleet_id}/wings/{wing_id}/',
      path: {
        'fleet_id': fleetId,
        'wing_id': wingId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: naming,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Create fleet squad
   * Create a new squad in a fleet
   *
   * ---
   * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/`
   *
   * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/`
   *
   * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/`
   *
   * @returns any Squad created
   * @throws ApiError
   */
  public postFleetsFleetIdWingsWingIdSquads({
    fleetId,
    wingId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * ID for a fleet
     */
    fleetId: number,
    /**
     * The wing_id to create squad in
     */
    wingId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * The squad_id of the newly created squad
     */
    squad_id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fleets/{fleet_id}/wings/{wing_id}/squads/',
      path: {
        'fleet_id': fleetId,
        'wing_id': wingId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `The fleet does not exist or you don't have access to it`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
