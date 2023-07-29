/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class OpportunitiesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a character's completed tasks
   * Return a list of tasks finished by a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/opportunities/`
   *
   * Alternate route: `/legacy/characters/{character_id}/opportunities/`
   *
   * Alternate route: `/v1/characters/{character_id}/opportunities/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of opportunities task ids
   * @throws ApiError
   */
  public getCharactersCharacterIdOpportunities({
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
       * completed_at string
       */
      completed_at: string
      /**
       * task_id integer
       */
      task_id: number
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/opportunities/',
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
   * Get opportunities groups
   * Return a list of opportunities groups
   *
   * ---
   * Alternate route: `/dev/opportunities/groups/`
   *
   * Alternate route: `/legacy/opportunities/groups/`
   *
   * Alternate route: `/v1/opportunities/groups/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of opportunities group ids
   * @throws ApiError
   */
  public getOpportunitiesGroups({
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/opportunities/groups/',
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
   * Get opportunities group
   * Return information of an opportunities group
   *
   * ---
   * Alternate route: `/dev/opportunities/groups/{group_id}/`
   *
   * Alternate route: `/legacy/opportunities/groups/{group_id}/`
   *
   * Alternate route: `/v1/opportunities/groups/{group_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Details of an opportunities group
   * @throws ApiError
   */
  public getOpportunitiesGroupsGroupId({
    groupId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en'
  }: {
    /**
     * ID of an opportunities group
     */
    groupId: number
    /**
     * Language to use in the response
     */
    acceptLanguage?:
      | 'en'
      | 'en-us'
      | 'de'
      | 'fr'
      | 'ja'
      | 'ru'
      | 'zh'
      | 'ko'
      | 'es'
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility'
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string
    /**
     * Language to use in the response, takes precedence over Accept-Language
     */
    language?: 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es'
  }): CancelablePromise<{
    /**
     * The groups that are connected to this group on the opportunities map
     */
    connected_groups: Array<number>
    /**
     * description string
     */
    description: string
    /**
     * group_id integer
     */
    group_id: number
    /**
     * name string
     */
    name: string
    /**
     * notification string
     */
    notification: string
    /**
     * Tasks need to complete for this group
     */
    required_tasks: Array<number>
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/opportunities/groups/{group_id}/',
      path: {
        group_id: groupId
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch
      },
      query: {
        datasource: datasource,
        language: language
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
   * Get opportunities tasks
   * Return a list of opportunities tasks
   *
   * ---
   * Alternate route: `/dev/opportunities/tasks/`
   *
   * Alternate route: `/legacy/opportunities/tasks/`
   *
   * Alternate route: `/v1/opportunities/tasks/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of opportunities task ids
   * @throws ApiError
   */
  public getOpportunitiesTasks({
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/opportunities/tasks/',
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
   * Get opportunities task
   * Return information of an opportunities task
   *
   * ---
   * Alternate route: `/dev/opportunities/tasks/{task_id}/`
   *
   * Alternate route: `/legacy/opportunities/tasks/{task_id}/`
   *
   * Alternate route: `/v1/opportunities/tasks/{task_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Details of an opportunities task
   * @throws ApiError
   */
  public getOpportunitiesTasksTaskId({
    taskId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * ID of an opportunities task
     */
    taskId: number
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
     * description string
     */
    description: string
    /**
     * name string
     */
    name: string
    /**
     * notification string
     */
    notification: string
    /**
     * task_id integer
     */
    task_id: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/opportunities/tasks/{task_id}/',
      path: {
        task_id: taskId
      },
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
