/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FittingsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get fittings
   * Return fittings of a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/fittings/`
   *
   * Alternate route: `/v2/characters/{character_id}/fittings/`
   *
   * ---
   * This route is cached for up to 300 seconds
   * @returns any A list of fittings
   * @throws ApiError
   */
  public getCharactersCharacterIdFittings({
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
     * description string
     */
    description: string;
    /**
     * fitting_id integer
     */
    fitting_id: number;
    /**
     * items array
     */
    items: Array<{
      /**
       * flag string
       */
      flag: 'Cargo' | 'DroneBay' | 'FighterBay' | 'HiSlot0' | 'HiSlot1' | 'HiSlot2' | 'HiSlot3' | 'HiSlot4' | 'HiSlot5' | 'HiSlot6' | 'HiSlot7' | 'Invalid' | 'LoSlot0' | 'LoSlot1' | 'LoSlot2' | 'LoSlot3' | 'LoSlot4' | 'LoSlot5' | 'LoSlot6' | 'LoSlot7' | 'MedSlot0' | 'MedSlot1' | 'MedSlot2' | 'MedSlot3' | 'MedSlot4' | 'MedSlot5' | 'MedSlot6' | 'MedSlot7' | 'RigSlot0' | 'RigSlot1' | 'RigSlot2' | 'ServiceSlot0' | 'ServiceSlot1' | 'ServiceSlot2' | 'ServiceSlot3' | 'ServiceSlot4' | 'ServiceSlot5' | 'ServiceSlot6' | 'ServiceSlot7' | 'SubSystemSlot0' | 'SubSystemSlot1' | 'SubSystemSlot2' | 'SubSystemSlot3';
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
     * name string
     */
    name: string;
    /**
     * ship_type_id integer
     */
    ship_type_id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/fittings/',
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
   * Create fitting
   * Save a new fitting for a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/fittings/`
   *
   * Alternate route: `/v2/characters/{character_id}/fittings/`
   *
   * @returns any A list of fittings
   * @throws ApiError
   */
  public postCharactersCharacterIdFittings({
    characterId,
    fitting,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * Details about the new fitting
     */
    fitting: {
      /**
       * description string
       */
      description: string;
      /**
       * items array
       */
      items: Array<{
        /**
         * Fitting location for the item. Entries placed in 'Invalid' will be discarded. If this leaves the fitting with nothing, it will cause an error.
         */
        flag: 'Cargo' | 'DroneBay' | 'FighterBay' | 'HiSlot0' | 'HiSlot1' | 'HiSlot2' | 'HiSlot3' | 'HiSlot4' | 'HiSlot5' | 'HiSlot6' | 'HiSlot7' | 'Invalid' | 'LoSlot0' | 'LoSlot1' | 'LoSlot2' | 'LoSlot3' | 'LoSlot4' | 'LoSlot5' | 'LoSlot6' | 'LoSlot7' | 'MedSlot0' | 'MedSlot1' | 'MedSlot2' | 'MedSlot3' | 'MedSlot4' | 'MedSlot5' | 'MedSlot6' | 'MedSlot7' | 'RigSlot0' | 'RigSlot1' | 'RigSlot2' | 'ServiceSlot0' | 'ServiceSlot1' | 'ServiceSlot2' | 'ServiceSlot3' | 'ServiceSlot4' | 'ServiceSlot5' | 'ServiceSlot6' | 'ServiceSlot7' | 'SubSystemSlot0' | 'SubSystemSlot1' | 'SubSystemSlot2' | 'SubSystemSlot3';
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
       * name string
       */
      name: string;
      /**
       * ship_type_id integer
       */
      ship_type_id: number;
    },
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
     * fitting_id integer
     */
    fitting_id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/{character_id}/fittings/',
      path: {
        'character_id': characterId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: fitting,
      errors: {
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
   * Delete fitting
   * Delete a fitting from a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/`
   *
   * Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public deleteCharactersCharacterIdFittingsFittingId({
    characterId,
    fittingId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * ID for a fitting of this character
     */
    fittingId: number,
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
      url: '/characters/{character_id}/fittings/{fitting_id}/',
      path: {
        'character_id': characterId,
        'fitting_id': fittingId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      errors: {
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
