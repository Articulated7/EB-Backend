/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InsuranceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List insurance levels
   * Return available insurance levels for all ship types
   *
   * ---
   * Alternate route: `/dev/insurance/prices/`
   *
   * Alternate route: `/legacy/insurance/prices/`
   *
   * Alternate route: `/v1/insurance/prices/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of insurance levels for all ship types
   * @throws ApiError
   */
  public getInsurancePrices({
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
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
  }): CancelablePromise<Array<{
    /**
     * A list of a available insurance levels for this ship type
     */
    levels: Array<{
      /**
       * cost number
       */
      cost: number;
      /**
       * Localized insurance level
       */
      name: string;
      /**
       * payout number
       */
      payout: number;
    }>;
    /**
     * type_id integer
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/insurance/prices/',
      headers: {
        'Accept-Language': acceptLanguage,
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'language': language,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
