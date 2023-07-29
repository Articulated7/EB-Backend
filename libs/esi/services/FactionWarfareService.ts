/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class FactionWarfareService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Overview of a character involved in faction warfare
   * Statistical overview of a character involved in faction warfare
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/fw/stats/`
   *
   * Alternate route: `/legacy/characters/{character_id}/fw/stats/`
   *
   * Alternate route: `/v1/characters/{character_id}/fw/stats/`
   *
   * Alternate route: `/v2/characters/{character_id}/fw/stats/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Faction warfare statistics for a given character
   * @throws ApiError
   */
  public getCharactersCharacterIdFwStats({
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
     * The given character's current faction rank
     */
    current_rank?: number
    /**
     * The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
     */
    enlisted_on?: string
    /**
     * The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
     */
    faction_id?: number
    /**
     * The given character's highest faction rank achieved
     */
    highest_rank?: number
    /**
     * Summary of kills done by the given character against enemy factions
     */
    kills: {
      /**
       * Last week's total number of kills by a given character against enemy factions
       */
      last_week: number
      /**
       * Total number of kills by a given character against enemy factions since the character enlisted
       */
      total: number
      /**
       * Yesterday's total number of kills by a given character against enemy factions
       */
      yesterday: number
    }
    /**
     * Summary of victory points gained by the given character for the enlisted faction
     */
    victory_points: {
      /**
       * Last week's victory points gained by the given character
       */
      last_week: number
      /**
       * Total victory points gained since the given character enlisted
       */
      total: number
      /**
       * Yesterday's victory points gained by the given character
       */
      yesterday: number
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/fw/stats/',
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
   * Overview of a corporation involved in faction warfare
   * Statistics about a corporation involved in faction warfare
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/fw/stats/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/fw/stats/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/fw/stats/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/fw/stats/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Faction warfare statistics for a given corporation
   * @throws ApiError
   */
  public getCorporationsCorporationIdFwStats({
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
  }): CancelablePromise<{
    /**
     * The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare
     */
    enlisted_on?: string
    /**
     * The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare
     */
    faction_id?: number
    /**
     * Summary of kills done by the given corporation against enemy factions
     */
    kills: {
      /**
       * Last week's total number of kills by members of the given corporation against enemy factions
       */
      last_week: number
      /**
       * Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
       */
      total: number
      /**
       * Yesterday's total number of kills by members of the given corporation against enemy factions
       */
      yesterday: number
    }
    /**
     * How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare
     */
    pilots?: number
    /**
     * Summary of victory points gained by the given corporation for the enlisted faction
     */
    victory_points: {
      /**
       * Last week's victory points gained by members of the given corporation
       */
      last_week: number
      /**
       * Total victory points gained since the given corporation enlisted
       */
      total: number
      /**
       * Yesterday's victory points gained by members of the given corporation
       */
      yesterday: number
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/fw/stats/',
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

  /**
   * List of the top factions in faction warfare
   * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
   *
   * ---
   * Alternate route: `/dev/fw/leaderboards/`
   *
   * Alternate route: `/legacy/fw/leaderboards/`
   *
   * Alternate route: `/v1/fw/leaderboards/`
   *
   * Alternate route: `/v2/fw/leaderboards/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Corporation leaderboard of kills and victory points within faction warfare
   * @throws ApiError
   */
  public getFwLeaderboards({
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
     * Top 4 rankings of factions by number of kills from yesterday, last week and in total
     */
    kills: {
      /**
       * Top 4 ranking of factions active in faction warfare by total kills. A faction is considered "active" if they have participated in faction warfare in the past 14 days
       */
      active_total: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * faction_id integer
         */
        faction_id?: number
      }>
      /**
       * Top 4 ranking of factions by kills in the past week
       */
      last_week: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * faction_id integer
         */
        faction_id?: number
      }>
      /**
       * Top 4 ranking of factions by kills in the past day
       */
      yesterday: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * faction_id integer
         */
        faction_id?: number
      }>
    }
    /**
     * Top 4 rankings of factions by victory points from yesterday, last week and in total
     */
    victory_points: {
      /**
       * Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered "active" if they have participated in faction warfare in the past 14 days
       */
      active_total: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * faction_id integer
         */
        faction_id?: number
      }>
      /**
       * Top 4 ranking of factions by victory points in the past week
       */
      last_week: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * faction_id integer
         */
        faction_id?: number
      }>
      /**
       * Top 4 ranking of factions by victory points in the past day
       */
      yesterday: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * faction_id integer
         */
        faction_id?: number
      }>
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fw/leaderboards/',
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
   * List of the top pilots in faction warfare
   * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
   *
   * ---
   * Alternate route: `/dev/fw/leaderboards/characters/`
   *
   * Alternate route: `/legacy/fw/leaderboards/characters/`
   *
   * Alternate route: `/v1/fw/leaderboards/characters/`
   *
   * Alternate route: `/v2/fw/leaderboards/characters/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Character leaderboard of kills and victory points within faction warfare
   * @throws ApiError
   */
  public getFwLeaderboardsCharacters({
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
     * Top 100 rankings of pilots by number of kills from yesterday, last week and in total
     */
    kills: {
      /**
       * Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
       */
      active_total: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * character_id integer
         */
        character_id?: number
      }>
      /**
       * Top 100 ranking of pilots by kills in the past week
       */
      last_week: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * character_id integer
         */
        character_id?: number
      }>
      /**
       * Top 100 ranking of pilots by kills in the past day
       */
      yesterday: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * character_id integer
         */
        character_id?: number
      }>
    }
    /**
     * Top 100 rankings of pilots by victory points from yesterday, last week and in total
     */
    victory_points: {
      /**
       * Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
       */
      active_total: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * character_id integer
         */
        character_id?: number
      }>
      /**
       * Top 100 ranking of pilots by victory points in the past week
       */
      last_week: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * character_id integer
         */
        character_id?: number
      }>
      /**
       * Top 100 ranking of pilots by victory points in the past day
       */
      yesterday: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * character_id integer
         */
        character_id?: number
      }>
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fw/leaderboards/characters/',
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
   * List of the top corporations in faction warfare
   * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
   *
   * ---
   * Alternate route: `/dev/fw/leaderboards/corporations/`
   *
   * Alternate route: `/legacy/fw/leaderboards/corporations/`
   *
   * Alternate route: `/v1/fw/leaderboards/corporations/`
   *
   * Alternate route: `/v2/fw/leaderboards/corporations/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Corporation leaderboard of kills and victory points within faction warfare
   * @throws ApiError
   */
  public getFwLeaderboardsCorporations({
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
     * Top 10 rankings of corporations by number of kills from yesterday, last week and in total
     */
    kills: {
      /**
       * Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
       */
      active_total: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * corporation_id integer
         */
        corporation_id?: number
      }>
      /**
       * Top 10 ranking of corporations by kills in the past week
       */
      last_week: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * corporation_id integer
         */
        corporation_id?: number
      }>
      /**
       * Top 10 ranking of corporations by kills in the past day
       */
      yesterday: Array<{
        /**
         * Amount of kills
         */
        amount?: number
        /**
         * corporation_id integer
         */
        corporation_id?: number
      }>
    }
    /**
     * Top 10 rankings of corporations by victory points from yesterday, last week and in total
     */
    victory_points: {
      /**
       * Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
       */
      active_total: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * corporation_id integer
         */
        corporation_id?: number
      }>
      /**
       * Top 10 ranking of corporations by victory points in the past week
       */
      last_week: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * corporation_id integer
         */
        corporation_id?: number
      }>
      /**
       * Top 10 ranking of corporations by victory points in the past day
       */
      yesterday: Array<{
        /**
         * Amount of victory points
         */
        amount?: number
        /**
         * corporation_id integer
         */
        corporation_id?: number
      }>
    }
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fw/leaderboards/corporations/',
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
   * An overview of statistics about factions involved in faction warfare
   * Statistical overviews of factions involved in faction warfare
   *
   * ---
   * Alternate route: `/dev/fw/stats/`
   *
   * Alternate route: `/legacy/fw/stats/`
   *
   * Alternate route: `/v1/fw/stats/`
   *
   * Alternate route: `/v2/fw/stats/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Per faction breakdown of faction warfare statistics
   * @throws ApiError
   */
  public getFwStats({
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
  }): CancelablePromise<
    Array<{
      /**
       * faction_id integer
       */
      faction_id: number
      /**
       * Summary of kills against an enemy faction for the given faction
       */
      kills: {
        /**
         * Last week's total number of kills against enemy factions
         */
        last_week: number
        /**
         * Total number of kills against enemy factions since faction warfare began
         */
        total: number
        /**
         * Yesterday's total number of kills against enemy factions
         */
        yesterday: number
      }
      /**
       * How many pilots fight for the given faction
       */
      pilots: number
      /**
       * The number of solar systems controlled by the given faction
       */
      systems_controlled: number
      /**
       * Summary of victory points gained for the given faction
       */
      victory_points: {
        /**
         * Last week's victory points gained
         */
        last_week: number
        /**
         * Total victory points gained since faction warfare began
         */
        total: number
        /**
         * Yesterday's victory points gained
         */
        yesterday: number
      }
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fw/stats/',
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
   * Ownership of faction warfare systems
   * An overview of the current ownership of faction warfare solar systems
   *
   * ---
   * Alternate route: `/dev/fw/systems/`
   *
   * Alternate route: `/legacy/fw/systems/`
   *
   * Alternate route: `/v2/fw/systems/`
   *
   * Alternate route: `/v3/fw/systems/`
   *
   * ---
   * This route is cached for up to 1800 seconds
   * @returns any All faction warfare solar systems
   * @throws ApiError
   */
  public getFwSystems({
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
  }): CancelablePromise<
    Array<{
      /**
       * contested string
       */
      contested: 'captured' | 'contested' | 'uncontested' | 'vulnerable'
      /**
       * occupier_faction_id integer
       */
      occupier_faction_id: number
      /**
       * owner_faction_id integer
       */
      owner_faction_id: number
      /**
       * solar_system_id integer
       */
      solar_system_id: number
      /**
       * victory_points integer
       */
      victory_points: number
      /**
       * victory_points_threshold integer
       */
      victory_points_threshold: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fw/systems/',
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
   * Data about which NPC factions are at war
   * Data about which NPC factions are at war
   *
   * ---
   * Alternate route: `/dev/fw/wars/`
   *
   * Alternate route: `/legacy/fw/wars/`
   *
   * Alternate route: `/v1/fw/wars/`
   *
   * Alternate route: `/v2/fw/wars/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any A list of NPC factions at war
   * @throws ApiError
   */
  public getFwWars({
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
  }): CancelablePromise<
    Array<{
      /**
       * The faction ID of the enemy faction.
       */
      against_id: number
      /**
       * faction_id integer
       */
      faction_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fw/wars/',
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
