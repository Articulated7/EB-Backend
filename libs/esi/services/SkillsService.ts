/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class SkillsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get character attributes
   * Return attributes of a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/attributes/`
   *
   * Alternate route: `/legacy/characters/{character_id}/attributes/`
   *
   * Alternate route: `/v1/characters/{character_id}/attributes/`
   *
   * ---
   * This route is cached for up to 120 seconds
   * @returns any Attributes of a character
   * @throws ApiError
   */
  public getCharactersCharacterIdAttributes({
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
     * Neural remapping cooldown after a character uses remap accrued over time
     */
    accrued_remap_cooldown_date?: string
    /**
     * Number of available bonus character neural remaps
     */
    bonus_remaps?: number
    /**
     * charisma integer
     */
    charisma: number
    /**
     * intelligence integer
     */
    intelligence: number
    /**
     * Datetime of last neural remap, including usage of bonus remaps
     */
    last_remap_date?: string
    /**
     * memory integer
     */
    memory: number
    /**
     * perception integer
     */
    perception: number
    /**
     * willpower integer
     */
    willpower: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/attributes/',
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
   * Get character's skill queue
   * List the configured skill queue for the given character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/skillqueue/`
   *
   * Alternate route: `/legacy/characters/{character_id}/skillqueue/`
   *
   * Alternate route: `/v2/characters/{character_id}/skillqueue/`
   *
   * ---
   * This route is cached for up to 120 seconds
   * @returns any The current skill queue, sorted ascending by finishing time
   * @throws ApiError
   */
  public getCharactersCharacterIdSkillqueue({
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
       * Date on which training of the skill will complete. Omitted if the skill queue is paused.
       */
      finish_date?: string
      /**
       * finished_level integer
       */
      finished_level: number
      /**
       * level_end_sp integer
       */
      level_end_sp?: number
      /**
       * Amount of SP that was in the skill when it started training it's current level. Used to calculate % of current level complete.
       */
      level_start_sp?: number
      /**
       * queue_position integer
       */
      queue_position: number
      /**
       * skill_id integer
       */
      skill_id: number
      /**
       * start_date string
       */
      start_date?: string
      /**
       * training_start_sp integer
       */
      training_start_sp?: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/skillqueue/',
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
   * Get character skills
   * List all trained skills for the given character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/skills/`
   *
   * Alternate route: `/v4/characters/{character_id}/skills/`
   *
   * ---
   * This route is cached for up to 120 seconds
   * @returns any Known skills for the character
   * @throws ApiError
   */
  public getCharactersCharacterIdSkills({
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
     * skills array
     */
    skills: Array<{
      /**
       * active_skill_level integer
       */
      active_skill_level: number
      /**
       * skill_id integer
       */
      skill_id: number
      /**
       * skillpoints_in_skill integer
       */
      skillpoints_in_skill: number
      /**
       * trained_skill_level integer
       */
      trained_skill_level: number
    }>
    /**
     * total_sp integer
     */
    total_sp: number
    /**
     * Skill points available to be assigned
     */
    unallocated_sp?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/skills/',
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
