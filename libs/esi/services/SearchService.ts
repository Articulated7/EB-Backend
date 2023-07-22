/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SearchService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Search on a string
   * Search for entities that match a given sub-string.
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/search/`
   *
   * Alternate route: `/legacy/characters/{character_id}/search/`
   *
   * Alternate route: `/v3/characters/{character_id}/search/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of search results
   * @throws ApiError
   */
  public getCharactersCharacterIdSearch({
    categories,
    characterId,
    search,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
    strict = false,
    token,
  }: {
    /**
     * Type of entities to search for
     */
    categories: Array<string>,
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The string to search on
     */
    search: string,
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
     * Whether the search should be a strict match
     */
    strict?: boolean,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<{
    /**
     * agent array
     */
    agent?: Array<number>;
    /**
     * alliance array
     */
    alliance?: Array<number>;
    /**
     * character array
     */
    character?: Array<number>;
    /**
     * constellation array
     */
    constellation?: Array<number>;
    /**
     * corporation array
     */
    corporation?: Array<number>;
    /**
     * faction array
     */
    faction?: Array<number>;
    /**
     * inventory_type array
     */
    inventory_type?: Array<number>;
    /**
     * region array
     */
    region?: Array<number>;
    /**
     * solar_system array
     */
    solar_system?: Array<number>;
    /**
     * station array
     */
    station?: Array<number>;
    /**
     * structure array
     */
    structure?: Array<number>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/search/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'categories': categories,
        'datasource': datasource,
        'language': language,
        'search': search,
        'strict': strict,
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

}
