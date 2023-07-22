/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ContractsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get contracts
   * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contracts/`
   *
   * Alternate route: `/legacy/characters/{character_id}/contracts/`
   *
   * Alternate route: `/v1/characters/{character_id}/contracts/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of contracts
   * @throws ApiError
   */
  public getCharactersCharacterIdContracts({
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
     * Who will accept the contract
     */
    acceptor_id: number;
    /**
     * ID to whom the contract is assigned, can be alliance, corporation or character ID
     */
    assignee_id: number;
    /**
     * To whom the contract is available
     */
    availability: 'public' | 'personal' | 'corporation' | 'alliance';
    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;
    /**
     * contract_id integer
     */
    contract_id: number;
    /**
     * Date of confirmation of contract
     */
    date_accepted?: string;
    /**
     * Date of completed of contract
     */
    date_completed?: string;
    /**
     * Expiration date of the contract
     */
    date_expired: string;
    /**
     * Сreation date of the contract
     */
    date_issued: string;
    /**
     * Number of days to perform the contract
     */
    days_to_complete?: number;
    /**
     * End location ID (for Couriers contract)
     */
    end_location_id?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    for_corporation: boolean;
    /**
     * Character's corporation ID for the issuer
     */
    issuer_corporation_id: number;
    /**
     * Character ID for the issuer
     */
    issuer_id: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     */
    start_location_id?: number;
    /**
     * Status of the the contract
     */
    status: 'outstanding' | 'in_progress' | 'finished_issuer' | 'finished_contractor' | 'finished' | 'cancelled' | 'rejected' | 'failed' | 'deleted' | 'reversed';
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: 'unknown' | 'item_exchange' | 'auction' | 'courier' | 'loan';
    /**
     * Volume of items in the contract
     */
    volume?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/contracts/',
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
   * Get contract bids
   * Lists bids on a particular auction contract
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/bids/`
   *
   * Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/bids/`
   *
   * Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/bids/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of bids
   * @throws ApiError
   */
  public getCharactersCharacterIdContractsContractIdBids({
    characterId,
    contractId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * ID of a contract
     */
    contractId: number,
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
     * The amount bid, in ISK
     */
    amount: number;
    /**
     * Unique ID for the bid
     */
    bid_id: number;
    /**
     * Character ID of the bidder
     */
    bidder_id: number;
    /**
     * Datetime when the bid was placed
     */
    date_bid: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/contracts/{contract_id}/bids/',
      path: {
        'character_id': characterId,
        'contract_id': contractId,
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
        404: `Not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get contract items
   * Lists items of a particular contract
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/items/`
   *
   * Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/items/`
   *
   * Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/items/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of items in this contract
   * @throws ApiError
   */
  public getCharactersCharacterIdContractsContractIdItems({
    characterId,
    contractId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * ID of a contract
     */
    contractId: number,
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
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     */
    is_included: boolean;
    /**
     * is_singleton boolean
     */
    is_singleton: boolean;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
     */
    raw_quantity?: number;
    /**
     * Unique ID for the item
     */
    record_id: number;
    /**
     * Type ID for item
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/contracts/{contract_id}/items/',
      path: {
        'character_id': characterId,
        'contract_id': contractId,
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
        404: `Not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get public contract bids
   * Lists bids on a public auction contract
   *
   * ---
   * Alternate route: `/dev/contracts/public/bids/{contract_id}/`
   *
   * Alternate route: `/legacy/contracts/public/bids/{contract_id}/`
   *
   * Alternate route: `/v1/contracts/public/bids/{contract_id}/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of bids
   * @throws ApiError
   */
  public getContractsPublicBidsContractId({
    contractId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
  }: {
    /**
     * ID of a contract
     */
    contractId: number,
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
  }): CancelablePromise<Array<{
    /**
     * The amount bid, in ISK
     */
    amount: number;
    /**
     * Unique ID for the bid
     */
    bid_id: number;
    /**
     * Datetime when the bid was placed
     */
    date_bid: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/contracts/public/bids/{contract_id}/',
      path: {
        'contract_id': contractId,
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
        403: `Not Authorized to see contract`,
        404: `Not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get public contract items
   * Lists items of a public contract
   *
   * ---
   * Alternate route: `/dev/contracts/public/items/{contract_id}/`
   *
   * Alternate route: `/legacy/contracts/public/items/{contract_id}/`
   *
   * Alternate route: `/v1/contracts/public/items/{contract_id}/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of items in this contract
   * @throws ApiError
   */
  public getContractsPublicItemsContractId({
    contractId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
  }: {
    /**
     * ID of a contract
     */
    contractId: number,
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
  }): CancelablePromise<Array<{
    /**
     * is_blueprint_copy boolean
     */
    is_blueprint_copy?: boolean;
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     */
    is_included: boolean;
    /**
     * Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract
     */
    item_id?: number;
    /**
     * Material Efficiency Level of the blueprint
     */
    material_efficiency?: number;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * Unique ID for the item, used by the contract system
     */
    record_id: number;
    /**
     * Number of runs remaining if the blueprint is a copy, -1 if it is an original
     */
    runs?: number;
    /**
     * Time Efficiency Level of the blueprint
     */
    time_efficiency?: number;
    /**
     * Type ID for item
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/contracts/public/items/{contract_id}/',
      path: {
        'contract_id': contractId,
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
        403: `Not Authorized to see contract`,
        404: `Not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get public contracts
   * Returns a paginated list of all public contracts in the given region
   *
   * ---
   * Alternate route: `/dev/contracts/public/{region_id}/`
   *
   * Alternate route: `/legacy/contracts/public/{region_id}/`
   *
   * Alternate route: `/v1/contracts/public/{region_id}/`
   *
   * ---
   * This route is cached for up to 1800 seconds
   * @returns any A list of contracts
   * @throws ApiError
   */
  public getContractsPublicRegionId({
    regionId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
  }: {
    /**
     * An EVE region id
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
  }): CancelablePromise<Array<{
    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;
    /**
     * contract_id integer
     */
    contract_id: number;
    /**
     * Expiration date of the contract
     */
    date_expired: string;
    /**
     * Сreation date of the contract
     */
    date_issued: string;
    /**
     * Number of days to perform the contract
     */
    days_to_complete?: number;
    /**
     * End location ID (for Couriers contract)
     */
    end_location_id?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    for_corporation?: boolean;
    /**
     * Character's corporation ID for the issuer
     */
    issuer_corporation_id: number;
    /**
     * Character ID for the issuer
     */
    issuer_id: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     */
    start_location_id?: number;
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: 'unknown' | 'item_exchange' | 'auction' | 'courier' | 'loan';
    /**
     * Volume of items in the contract
     */
    volume?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/contracts/public/{region_id}/',
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
        404: `Region not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get corporation contracts
   * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/contracts/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/contracts/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/contracts/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of contracts
   * @throws ApiError
   */
  public getCorporationsCorporationIdContracts({
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
     * Who will accept the contract
     */
    acceptor_id: number;
    /**
     * ID to whom the contract is assigned, can be corporation or character ID
     */
    assignee_id: number;
    /**
     * To whom the contract is available
     */
    availability: 'public' | 'personal' | 'corporation' | 'alliance';
    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;
    /**
     * contract_id integer
     */
    contract_id: number;
    /**
     * Date of confirmation of contract
     */
    date_accepted?: string;
    /**
     * Date of completed of contract
     */
    date_completed?: string;
    /**
     * Expiration date of the contract
     */
    date_expired: string;
    /**
     * Сreation date of the contract
     */
    date_issued: string;
    /**
     * Number of days to perform the contract
     */
    days_to_complete?: number;
    /**
     * End location ID (for Couriers contract)
     */
    end_location_id?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    for_corporation: boolean;
    /**
     * Character's corporation ID for the issuer
     */
    issuer_corporation_id: number;
    /**
     * Character ID for the issuer
     */
    issuer_id: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     */
    start_location_id?: number;
    /**
     * Status of the the contract
     */
    status: 'outstanding' | 'in_progress' | 'finished_issuer' | 'finished_contractor' | 'finished' | 'cancelled' | 'rejected' | 'failed' | 'deleted' | 'reversed';
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: 'unknown' | 'item_exchange' | 'auction' | 'courier' | 'loan';
    /**
     * Volume of items in the contract
     */
    volume?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/contracts/',
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
   * Get corporation contract bids
   * Lists bids on a particular auction contract
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/bids/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/bids/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of bids
   * @throws ApiError
   */
  public getCorporationsCorporationIdContractsContractIdBids({
    contractId,
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    page = 1,
    token,
  }: {
    /**
     * ID of a contract
     */
    contractId: number,
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
     * The amount bid, in ISK
     */
    amount: number;
    /**
     * Unique ID for the bid
     */
    bid_id: number;
    /**
     * Character ID of the bidder
     */
    bidder_id: number;
    /**
     * Datetime when the bid was placed
     */
    date_bid: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/contracts/{contract_id}/bids/',
      path: {
        'contract_id': contractId,
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
        404: `Not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get corporation contract items
   * Lists items of a particular contract
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/items/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/items/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/items/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any A list of items in this contract
   * @throws ApiError
   */
  public getCorporationsCorporationIdContractsContractIdItems({
    contractId,
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * ID of a contract
     */
    contractId: number,
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
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     */
    is_included: boolean;
    /**
     * is_singleton boolean
     */
    is_singleton: boolean;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
     */
    raw_quantity?: number;
    /**
     * Unique ID for the item
     */
    record_id: number;
    /**
     * Type ID for item
     */
    type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/contracts/{contract_id}/items/',
      path: {
        'contract_id': contractId,
        'corporation_id': corporationId,
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
        404: `Not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
        520: `Internal error thrown from the EVE server. Most of the time this means you have hit an EVE server rate limit`,
      },
    });
  }

}
