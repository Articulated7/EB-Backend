/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MarketService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List open orders from a character
   * List open market orders placed by a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/orders/`
   *
   * Alternate route: `/v2/characters/{character_id}/orders/`
   *
   * ---
   * This route is cached for up to 1200 seconds
   * @returns any Open market orders placed by a character
   * @throws ApiError
   */
  public getCharactersCharacterIdOrders({
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
     * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    is_buy_order?: boolean;
    /**
     * Signifies whether the buy/sell order was placed on behalf of a corporation.
     */
    is_corporation: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * ID of the location where order was placed
     */
    location_id: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    min_volume?: number;
    /**
     * Unique order ID
     */
    order_id: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range: '1' | '10' | '2' | '20' | '3' | '30' | '4' | '40' | '5' | 'region' | 'solarsystem' | 'station';
    /**
     * ID of the region where order was placed
     */
    region_id: number;
    /**
     * The type ID of the item transacted in this order
     */
    type_id: number;
    /**
     * Quantity of items still required or offered
     */
    volume_remain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volume_total: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/orders/',
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
   * List historical orders by a character
   * List cancelled and expired market orders placed by a character up to 90 days in the past.
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/orders/history/`
   *
   * Alternate route: `/legacy/characters/{character_id}/orders/history/`
   *
   * Alternate route: `/v1/characters/{character_id}/orders/history/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Expired and cancelled market orders placed by a character
   * @throws ApiError
   */
  public getCharactersCharacterIdOrdersHistory({
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
     * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    is_buy_order?: boolean;
    /**
     * Signifies whether the buy/sell order was placed on behalf of a corporation.
     */
    is_corporation: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * ID of the location where order was placed
     */
    location_id: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    min_volume?: number;
    /**
     * Unique order ID
     */
    order_id: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range: '1' | '10' | '2' | '20' | '3' | '30' | '4' | '40' | '5' | 'region' | 'solarsystem' | 'station';
    /**
     * ID of the region where order was placed
     */
    region_id: number;
    /**
     * Current order state
     */
    state: 'cancelled' | 'expired';
    /**
     * The type ID of the item transacted in this order
     */
    type_id: number;
    /**
     * Quantity of items still required or offered
     */
    volume_remain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volume_total: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/orders/history/',
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
   * List open orders from a corporation
   * List open market orders placed on behalf of a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/orders/`
   *
   * Alternate route: `/v3/corporations/{corporation_id}/orders/`
   *
   * ---
   * This route is cached for up to 1200 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Accountant, Trader
   *
   * @returns any A list of open market orders
   * @throws ApiError
   */
  public getCorporationsCorporationIdOrders({
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
     * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    is_buy_order?: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * The character who issued this order
     */
    issued_by: number;
    /**
     * ID of the location where order was placed
     */
    location_id: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    min_volume?: number;
    /**
     * Unique order ID
     */
    order_id: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range: '1' | '10' | '2' | '20' | '3' | '30' | '4' | '40' | '5' | 'region' | 'solarsystem' | 'station';
    /**
     * ID of the region where order was placed
     */
    region_id: number;
    /**
     * The type ID of the item transacted in this order
     */
    type_id: number;
    /**
     * Quantity of items still required or offered
     */
    volume_remain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volume_total: number;
    /**
     * The corporation wallet division used for this order.
     */
    wallet_division: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/orders/',
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
   * List historical orders from a corporation
   * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/orders/history/`
   *
   * Alternate route: `/v2/corporations/{corporation_id}/orders/history/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Accountant, Trader
   *
   * @returns any Expired and cancelled market orders placed on behalf of a corporation
   * @throws ApiError
   */
  public getCorporationsCorporationIdOrdersHistory({
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
     * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    is_buy_order?: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * The character who issued this order
     */
    issued_by?: number;
    /**
     * ID of the location where order was placed
     */
    location_id: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    min_volume?: number;
    /**
     * Unique order ID
     */
    order_id: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range: '1' | '10' | '2' | '20' | '3' | '30' | '4' | '40' | '5' | 'region' | 'solarsystem' | 'station';
    /**
     * ID of the region where order was placed
     */
    region_id: number;
    /**
     * Current order state
     */
    state: 'cancelled' | 'expired';
    /**
     * The type ID of the item transacted in this order
     */
    type_id: number;
    /**
     * Quantity of items still required or offered
     */
    volume_remain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volume_total: number;
    /**
     * The corporation wallet division used for this order
     */
    wallet_division: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/orders/history/',
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
   * Get item groups
   * Get a list of item groups
   *
   * ---
   * Alternate route: `/dev/markets/groups/`
   *
   * Alternate route: `/legacy/markets/groups/`
   *
   * Alternate route: `/v1/markets/groups/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of item group ids
   * @throws ApiError
   */
  public getMarketsGroups({
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/markets/groups/',
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
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get item group information
   * Get information on an item group
   *
   * ---
   * Alternate route: `/dev/markets/groups/{market_group_id}/`
   *
   * Alternate route: `/legacy/markets/groups/{market_group_id}/`
   *
   * Alternate route: `/v1/markets/groups/{market_group_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about an item group
   * @throws ApiError
   */
  public getMarketsGroupsMarketGroupId({
    marketGroupId,
    acceptLanguage = 'en',
    datasource = 'tranquility',
    ifNoneMatch,
    language = 'en',
  }: {
    /**
     * An Eve item group ID
     */
    marketGroupId: number,
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
  }): CancelablePromise<{
    /**
     * description string
     */
    description: string;
    /**
     * market_group_id integer
     */
    market_group_id: number;
    /**
     * name string
     */
    name: string;
    /**
     * parent_group_id integer
     */
    parent_group_id?: number;
    /**
     * types array
     */
    types: Array<number>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/markets/groups/{market_group_id}/',
      path: {
        'market_group_id': marketGroupId,
      },
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
        404: `Market group not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * List market prices
   * Return a list of prices
   *
   * ---
   * Alternate route: `/dev/markets/prices/`
   *
   * Alternate route: `/legacy/markets/prices/`
   *
   * Alternate route: `/v1/markets/prices/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of prices
   * @throws ApiError
   */
  public getMarketsPrices({
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
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
     * adjusted_price number
     */
    adjusted_price?: number;
    /**
     * average_price number
     */
    average_price?: number;
    /**
     * type_id integer
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/markets/prices/',
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
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * List orders in a structure
   * Return all orders in a structure
   *
   * ---
   * Alternate route: `/dev/markets/structures/{structure_id}/`
   *
   * Alternate route: `/legacy/markets/structures/{structure_id}/`
   *
   * Alternate route: `/v1/markets/structures/{structure_id}/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of orders
   * @throws ApiError
   */
  public getMarketsStructuresStructureId({
    structureId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * Return orders in this structure
     */
    structureId: number,
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
     * duration integer
     */
    duration: number;
    /**
     * is_buy_order boolean
     */
    is_buy_order: boolean;
    /**
     * issued string
     */
    issued: string;
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * min_volume integer
     */
    min_volume: number;
    /**
     * order_id integer
     */
    order_id: number;
    /**
     * price number
     */
    price: number;
    /**
     * range string
     */
    range: 'station' | 'region' | 'solarsystem' | '1' | '2' | '3' | '4' | '5' | '10' | '20' | '30' | '40';
    /**
     * type_id integer
     */
    type_id: number;
    /**
     * volume_remain integer
     */
    volume_remain: number;
    /**
     * volume_total integer
     */
    volume_total: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/markets/structures/{structure_id}/',
      path: {
        'structure_id': structureId,
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
   * List historical market statistics in a region
   * Return a list of historical market statistics for the specified type in a region
   *
   * ---
   * Alternate route: `/dev/markets/{region_id}/history/`
   *
   * Alternate route: `/legacy/markets/{region_id}/history/`
   *
   * Alternate route: `/v1/markets/{region_id}/history/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any A list of historical market statistics
   * @throws ApiError
   */
  public getMarketsRegionIdHistory({
    regionId,
    typeId,
    datasource = 'tranquility',
    ifNoneMatch,
  }: {
    /**
     * Return statistics in this region
     */
    regionId: number,
    /**
     * Return statistics for this type
     */
    typeId: number,
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
     * average number
     */
    average: number;
    /**
     * The date of this historical statistic entry
     */
    date: string;
    /**
     * highest number
     */
    highest: number;
    /**
     * lowest number
     */
    lowest: number;
    /**
     * Total number of orders happened that day
     */
    order_count: number;
    /**
     * Total
     */
    volume: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/markets/{region_id}/history/',
      path: {
        'region_id': regionId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'type_id': typeId,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Type not found`,
        420: `Error limited`,
        422: `Not found`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
        520: `Internal error thrown from the EVE server`,
      },
    });
  }

  /**
   * List orders in a region
   * Return a list of orders in a region
   *
   * ---
   * Alternate route: `/dev/markets/{region_id}/orders/`
   *
   * Alternate route: `/legacy/markets/{region_id}/orders/`
   *
   * Alternate route: `/v1/markets/{region_id}/orders/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of orders
   * @throws ApiError
   */
  public getMarketsRegionIdOrders({
    regionId,
    datasource = 'tranquility',
    ifNoneMatch,
    orderType = 'all',
    page = 1,
    typeId,
  }: {
    /**
     * Return orders in this region
     */
    regionId: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * ETag from a previous request. A 304 will be returned if this matches the current ETag
     */
    ifNoneMatch?: string,
    /**
     * Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
     */
    orderType?: 'buy' | 'sell' | 'all',
    /**
     * Which page of results to return
     */
    page?: number,
    /**
     * Return orders only for this type
     */
    typeId?: number,
  }): CancelablePromise<Array<{
    /**
     * duration integer
     */
    duration: number;
    /**
     * is_buy_order boolean
     */
    is_buy_order: boolean;
    /**
     * issued string
     */
    issued: string;
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * min_volume integer
     */
    min_volume: number;
    /**
     * order_id integer
     */
    order_id: number;
    /**
     * price number
     */
    price: number;
    /**
     * range string
     */
    range: 'station' | 'region' | 'solarsystem' | '1' | '2' | '3' | '4' | '5' | '10' | '20' | '30' | '40';
    /**
     * The solar system this order was placed
     */
    system_id: number;
    /**
     * type_id integer
     */
    type_id: number;
    /**
     * volume_remain integer
     */
    volume_remain: number;
    /**
     * volume_total integer
     */
    volume_total: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/markets/{region_id}/orders/',
      path: {
        'region_id': regionId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'order_type': orderType,
        'page': page,
        'type_id': typeId,
      },
      errors: {
        304: `Not modified`,
        400: `Bad request`,
        404: `Not found`,
        420: `Error limited`,
        422: `Not found`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * List type IDs relevant to a market
   * Return a list of type IDs that have active orders in the region, for efficient market indexing.
   *
   * ---
   * Alternate route: `/dev/markets/{region_id}/types/`
   *
   * Alternate route: `/legacy/markets/{region_id}/types/`
   *
   * Alternate route: `/v1/markets/{region_id}/types/`
   *
   * ---
   * This route is cached for up to 600 seconds
   * @returns number A list of type IDs
   * @throws ApiError
   */
  public getMarketsRegionIdTypes({
    regionId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
  }: {
    /**
     * Return statistics in this region
     */
    regionId: number,
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
  }): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/markets/{region_id}/types/',
      path: {
        'region_id': regionId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'page': page,
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
