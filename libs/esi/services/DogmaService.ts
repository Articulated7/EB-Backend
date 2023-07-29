/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class DogmaService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get attributes
   * Get a list of dogma attribute ids
   *
   * ---
   * Alternate route: `/dev/dogma/attributes/`
   *
   * Alternate route: `/legacy/dogma/attributes/`
   *
   * Alternate route: `/v1/dogma/attributes/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of dogma attribute ids
   * @throws ApiError
   */
  public getDogmaAttributes({
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
      url: '/dogma/attributes/',
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
   * Get attribute information
   * Get information on a dogma attribute
   *
   * ---
   * Alternate route: `/dev/dogma/attributes/{attribute_id}/`
   *
   * Alternate route: `/legacy/dogma/attributes/{attribute_id}/`
   *
   * Alternate route: `/v1/dogma/attributes/{attribute_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a dogma attribute
   * @throws ApiError
   */
  public getDogmaAttributesAttributeId({
    attributeId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * A dogma attribute ID
     */
    attributeId: number
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
     * attribute_id integer
     */
    attribute_id: number
    /**
     * default_value number
     */
    default_value?: number
    /**
     * description string
     */
    description?: string
    /**
     * display_name string
     */
    display_name?: string
    /**
     * high_is_good boolean
     */
    high_is_good?: boolean
    /**
     * icon_id integer
     */
    icon_id?: number
    /**
     * name string
     */
    name?: string
    /**
     * published boolean
     */
    published?: boolean
    /**
     * stackable boolean
     */
    stackable?: boolean
    /**
     * unit_id integer
     */
    unit_id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/dogma/attributes/{attribute_id}/',
      path: {
        attribute_id: attributeId
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
        404: `Dogma attribute not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get dynamic item information
   * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
   *
   * ---
   * Alternate route: `/dev/dogma/dynamic/items/{type_id}/{item_id}/`
   *
   * Alternate route: `/legacy/dogma/dynamic/items/{type_id}/{item_id}/`
   *
   * Alternate route: `/v1/dogma/dynamic/items/{type_id}/{item_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Details about a dynamic item
   * @throws ApiError
   */
  public getDogmaDynamicItemsTypeIdItemId({
    itemId,
    typeId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * item_id integer
     */
    itemId: number
    /**
     * type_id integer
     */
    typeId: number
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
     * The ID of the character who created the item
     */
    created_by: number
    /**
     * dogma_attributes array
     */
    dogma_attributes: Array<{
      /**
       * attribute_id integer
       */
      attribute_id: number
      /**
       * value number
       */
      value: number
    }>
    /**
     * dogma_effects array
     */
    dogma_effects: Array<{
      /**
       * effect_id integer
       */
      effect_id: number
      /**
       * is_default boolean
       */
      is_default: boolean
    }>
    /**
     * The type ID of the mutator used to generate the dynamic item.
     */
    mutator_type_id: number
    /**
     * The type ID of the source item the mutator was applied to create the dynamic item.
     */
    source_type_id: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/dogma/dynamic/items/{type_id}/{item_id}/',
      path: {
        item_id: itemId,
        type_id: typeId
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
        404: `Item not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }

  /**
   * Get effects
   * Get a list of dogma effect ids
   *
   * ---
   * Alternate route: `/dev/dogma/effects/`
   *
   * Alternate route: `/legacy/dogma/effects/`
   *
   * Alternate route: `/v1/dogma/effects/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns number A list of dogma effect ids
   * @throws ApiError
   */
  public getDogmaEffects({
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
      url: '/dogma/effects/',
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
   * Get effect information
   * Get information on a dogma effect
   *
   * ---
   * Alternate route: `/dev/dogma/effects/{effect_id}/`
   *
   * Alternate route: `/v2/dogma/effects/{effect_id}/`
   *
   * ---
   * This route expires daily at 11:05
   * @returns any Information about a dogma effect
   * @throws ApiError
   */
  public getDogmaEffectsEffectId({
    effectId,
    datasource = 'tranquility',
    ifNoneMatch
  }: {
    /**
     * A dogma effect ID
     */
    effectId: number
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
    description?: string
    /**
     * disallow_auto_repeat boolean
     */
    disallow_auto_repeat?: boolean
    /**
     * discharge_attribute_id integer
     */
    discharge_attribute_id?: number
    /**
     * display_name string
     */
    display_name?: string
    /**
     * duration_attribute_id integer
     */
    duration_attribute_id?: number
    /**
     * effect_category integer
     */
    effect_category?: number
    /**
     * effect_id integer
     */
    effect_id: number
    /**
     * electronic_chance boolean
     */
    electronic_chance?: boolean
    /**
     * falloff_attribute_id integer
     */
    falloff_attribute_id?: number
    /**
     * icon_id integer
     */
    icon_id?: number
    /**
     * is_assistance boolean
     */
    is_assistance?: boolean
    /**
     * is_offensive boolean
     */
    is_offensive?: boolean
    /**
     * is_warp_safe boolean
     */
    is_warp_safe?: boolean
    /**
     * modifiers array
     */
    modifiers?: Array<{
      /**
       * domain string
       */
      domain?: string
      /**
       * effect_id integer
       */
      effect_id?: number
      /**
       * func string
       */
      func: string
      /**
       * modified_attribute_id integer
       */
      modified_attribute_id?: number
      /**
       * modifying_attribute_id integer
       */
      modifying_attribute_id?: number
      /**
       * operator integer
       */
      operator?: number
    }>
    /**
     * name string
     */
    name?: string
    /**
     * post_expression integer
     */
    post_expression?: number
    /**
     * pre_expression integer
     */
    pre_expression?: number
    /**
     * published boolean
     */
    published?: boolean
    /**
     * range_attribute_id integer
     */
    range_attribute_id?: number
    /**
     * range_chance boolean
     */
    range_chance?: boolean
    /**
     * tracking_speed_attribute_id integer
     */
    tracking_speed_attribute_id?: number
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/dogma/effects/{effect_id}/',
      path: {
        effect_id: effectId
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
        404: `Dogma effect not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`
      }
    })
  }
}
