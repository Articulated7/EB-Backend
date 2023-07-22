/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoyaltyService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get loyalty points
   * Return a list of loyalty points for all corporations the character has worked for
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/loyalty/points/`
   *
   * Alternate route: `/legacy/characters/{character_id}/loyalty/points/`
   *
   * Alternate route: `/v1/characters/{character_id}/loyalty/points/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of loyalty points
   * @throws ApiError
   */
  public getCharactersCharacterIdLoyaltyPoints({
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
  }): CancelablePromise<Array<{
    /**
     * corporation_id integer
     */
    corporation_id: number;
    /**
     * loyalty_points integer
     */
    loyalty_points: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/loyalty/points/',
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
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * List loyalty store offers
   * Return a list of offers from a specific corporation's loyalty store
   *
   * ---
   * Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/`
   *
   * Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/`
   *
   * Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any A list of offers
   * @throws ApiError
   */
  public getLoyaltyStoresCorporationIdOffers({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
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
  }): CancelablePromise<Array<{
    /**
     * Analysis kredit cost
     */
    ak_cost?: number;
    /**
     * isk_cost integer
     */
    isk_cost: number;
    /**
     * lp_cost integer
     */
    lp_cost: number;
    /**
     * offer_id integer
     */
    offer_id: number;
    /**
     * quantity integer
     */
    quantity: number;
    /**
     * required_items array
     */
    required_items: Array<{
      /**
       * quantity integer
       */
      quantity: number;
      /**
       * type_id integer
       */
      type_id: number;
    }>;
    /**
     * type_id integer
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/loyalty/stores/{corporation_id}/offers/',
      path: {
        'corporation_id': corporationId,
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
        404: `No loyalty point store found for the provided corporation`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
