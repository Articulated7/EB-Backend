/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CalendarService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List calendar event summaries
   * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/calendar/`
   *
   * Alternate route: `/legacy/characters/{character_id}/calendar/`
   *
   * Alternate route: `/v1/characters/{character_id}/calendar/`
   *
   * Alternate route: `/v2/characters/{character_id}/calendar/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any A collection of event summaries
   * @throws ApiError
   */
  public getCharactersCharacterIdCalendar({
    characterId,
    datasource = 'tranquility',
    fromEvent,
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
     * The event ID to retrieve events from
     */
    fromEvent?: number,
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
     * event_date string
     */
    event_date?: string;
    /**
     * event_id integer
     */
    event_id?: number;
    /**
     * event_response string
     */
    event_response?: 'declined' | 'not_responded' | 'accepted' | 'tentative';
    /**
     * importance integer
     */
    importance?: number;
    /**
     * title string
     */
    title?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/calendar/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'from_event': fromEvent,
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
   * Get an event
   * Get all the information for a specific event
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`
   *
   * Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`
   *
   * Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns any Full details of a specific event
   * @throws ApiError
   */
  public getCharactersCharacterIdCalendarEventId({
    characterId,
    eventId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The id of the event requested
     */
    eventId: number,
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
  }): CancelablePromise<{
    /**
     * date string
     */
    date: string;
    /**
     * Length in minutes
     */
    duration: number;
    /**
     * event_id integer
     */
    event_id: number;
    /**
     * importance integer
     */
    importance: number;
    /**
     * owner_id integer
     */
    owner_id: number;
    /**
     * owner_name string
     */
    owner_name: string;
    /**
     * owner_type string
     */
    owner_type: 'eve_server' | 'corporation' | 'faction' | 'character' | 'alliance';
    /**
     * response string
     */
    response: string;
    /**
     * text string
     */
    text: string;
    /**
     * title string
     */
    title: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/calendar/{event_id}/',
      path: {
        'character_id': characterId,
        'event_id': eventId,
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
   * Respond to an event
   * Set your response status to an event
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`
   *
   * Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`
   *
   * Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`
   *
   * ---
   * This route is cached for up to 5 seconds
   * @returns void
   * @throws ApiError
   */
  public putCharactersCharacterIdCalendarEventId({
    characterId,
    eventId,
    response,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The ID of the event requested
     */
    eventId: number,
    /**
     * The response value to set, overriding current value
     */
    response: {
      /**
       * response string
       */
      response: 'accepted' | 'declined' | 'tentative';
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
      method: 'PUT',
      url: '/characters/{character_id}/calendar/{event_id}/',
      path: {
        'character_id': characterId,
        'event_id': eventId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: response,
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
   * Get attendees
   * Get all invited attendees for a given event
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`
   *
   * Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`
   *
   * Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`
   *
   * Alternate route: `/v2/characters/{character_id}/calendar/{event_id}/attendees/`
   *
   * ---
   * This route is cached for up to 600 seconds
   * @returns any List of attendees
   * @throws ApiError
   */
  public getCharactersCharacterIdCalendarEventIdAttendees({
    characterId,
    eventId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The id of the event requested
     */
    eventId: number,
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
     * character_id integer
     */
    character_id?: number;
    /**
     * event_response string
     */
    event_response?: 'declined' | 'not_responded' | 'accepted' | 'tentative';
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/calendar/{event_id}/attendees/',
      path: {
        'character_id': characterId,
        'event_id': eventId,
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

}
