/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserInterfaceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Set Autopilot Waypoint
   * Set a solar system as autopilot waypoint
   *
   * ---
   * Alternate route: `/dev/ui/autopilot/waypoint/`
   *
   * Alternate route: `/legacy/ui/autopilot/waypoint/`
   *
   * Alternate route: `/v2/ui/autopilot/waypoint/`
   *
   * @returns void
   * @throws ApiError
   */
  public postUiAutopilotWaypoint({
    destinationId,
    addToBeginning = false,
    clearOtherWaypoints = false,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * The destination to travel to, can be solar system, station or structure's id
     */
    destinationId: number,
    /**
     * Whether this solar system should be added to the beginning of all waypoints
     */
    addToBeginning?: boolean,
    /**
     * Whether clean other waypoints beforing adding this one
     */
    clearOtherWaypoints?: boolean,
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
      method: 'POST',
      url: '/ui/autopilot/waypoint/',
      query: {
        'add_to_beginning': addToBeginning,
        'clear_other_waypoints': clearOtherWaypoints,
        'datasource': datasource,
        'destination_id': destinationId,
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

  /**
   * Open Contract Window
   * Open the contract window inside the client
   *
   * ---
   * Alternate route: `/dev/ui/openwindow/contract/`
   *
   * Alternate route: `/legacy/ui/openwindow/contract/`
   *
   * Alternate route: `/v1/ui/openwindow/contract/`
   *
   * @returns void
   * @throws ApiError
   */
  public postUiOpenwindowContract({
    contractId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * The contract to open
     */
    contractId: number,
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
      method: 'POST',
      url: '/ui/openwindow/contract/',
      query: {
        'contract_id': contractId,
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

  /**
   * Open Information Window
   * Open the information window for a character, corporation or alliance inside the client
   *
   * ---
   * Alternate route: `/dev/ui/openwindow/information/`
   *
   * Alternate route: `/legacy/ui/openwindow/information/`
   *
   * Alternate route: `/v1/ui/openwindow/information/`
   *
   * @returns void
   * @throws ApiError
   */
  public postUiOpenwindowInformation({
    targetId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * The target to open
     */
    targetId: number,
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
      method: 'POST',
      url: '/ui/openwindow/information/',
      query: {
        'datasource': datasource,
        'target_id': targetId,
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

  /**
   * Open Market Details
   * Open the market details window for a specific typeID inside the client
   *
   * ---
   * Alternate route: `/dev/ui/openwindow/marketdetails/`
   *
   * Alternate route: `/legacy/ui/openwindow/marketdetails/`
   *
   * Alternate route: `/v1/ui/openwindow/marketdetails/`
   *
   * @returns void
   * @throws ApiError
   */
  public postUiOpenwindowMarketdetails({
    typeId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * The item type to open in market window
     */
    typeId: number,
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
      method: 'POST',
      url: '/ui/openwindow/marketdetails/',
      query: {
        'datasource': datasource,
        'token': token,
        'type_id': typeId,
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

  /**
   * Open New Mail Window
   * Open the New Mail window, according to settings from the request if applicable
   *
   * ---
   * Alternate route: `/dev/ui/openwindow/newmail/`
   *
   * Alternate route: `/legacy/ui/openwindow/newmail/`
   *
   * Alternate route: `/v1/ui/openwindow/newmail/`
   *
   * @returns void
   * @throws ApiError
   */
  public postUiOpenwindowNewmail({
    newMail,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * The details of mail to create
     */
    newMail: {
      /**
       * body string
       */
      body: string;
      /**
       * recipients array
       */
      recipients: Array<number>;
      /**
       * subject string
       */
      subject: string;
      /**
       * to_corp_or_alliance_id integer
       */
      to_corp_or_alliance_id?: number;
      /**
       * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
       */
      to_mailing_list_id?: number;
    },
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
      method: 'POST',
      url: '/ui/openwindow/newmail/',
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: newMail,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        422: `Invalid request`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

}
