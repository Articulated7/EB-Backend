/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MailService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Return mail headers
   * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/`
   *
   * Alternate route: `/v1/characters/{character_id}/mail/`
   *
   * ---
   * This route is cached for up to 30 seconds
   * @returns any The requested mail
   * @throws ApiError
   */
  public getCharactersCharacterIdMail({
    characterId,
    datasource = 'tranquility',
    ifNoneMatch,
    labels,
    lastMailId,
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
     * Fetch only mails that match one or more of the given labels
     */
    labels?: Array<number>,
    /**
     * List only mail with an ID lower than the given ID, if present
     */
    lastMailId?: number,
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * From whom the mail was sent
     */
    from?: number;
    /**
     * is_read boolean
     */
    is_read?: boolean;
    /**
     * labels array
     */
    labels?: Array<number>;
    /**
     * mail_id integer
     */
    mail_id?: number;
    /**
     * Recipients of the mail
     */
    recipients?: Array<{
      /**
       * recipient_id integer
       */
      recipient_id: number;
      /**
       * recipient_type string
       */
      recipient_type: 'alliance' | 'character' | 'corporation' | 'mailing_list';
    }>;
    /**
     * Mail subject
     */
    subject?: string;
    /**
     * When the mail was sent
     */
    timestamp?: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/mail/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'labels': labels,
        'last_mail_id': lastMailId,
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
   * Send a new mail
   * Create and send a new mail
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/`
   *
   * Alternate route: `/v1/characters/{character_id}/mail/`
   *
   * @returns number Mail created
   * @throws ApiError
   */
  public postCharactersCharacterIdMail({
    characterId,
    mail,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * The mail to send
     */
    mail: {
      /**
       * approved_cost integer
       */
      approved_cost?: number;
      /**
       * body string
       */
      body: string;
      /**
       * recipients array
       */
      recipients: Array<{
        /**
         * recipient_id integer
         */
        recipient_id: number;
        /**
         * recipient_type string
         */
        recipient_type: 'alliance' | 'character' | 'corporation' | 'mailing_list';
      }>;
      /**
       * subject string
       */
      subject: string;
    },
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/{character_id}/mail/',
      path: {
        'character_id': characterId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: mail,
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
        520: `Internal error thrown from the EVE server. Most of the time this means you have hit an EVE server rate limit`,
      },
    });
  }

  /**
   * Get mail labels and unread counts
   * Return a list of the users mail labels, unread counts for each label and a total unread count.
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/labels/`
   *
   * Alternate route: `/v3/characters/{character_id}/mail/labels/`
   *
   * ---
   * This route is cached for up to 30 seconds
   * @returns any A list of mail labels and unread counts
   * @throws ApiError
   */
  public getCharactersCharacterIdMailLabels({
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
  }): CancelablePromise<{
    /**
     * labels array
     */
    labels?: Array<{
      /**
       * color string
       */
      color?: '#0000fe' | '#006634' | '#0099ff' | '#00ff33' | '#01ffff' | '#349800' | '#660066' | '#666666' | '#999999' | '#99ffff' | '#9a0000' | '#ccff9a' | '#e6e6e6' | '#fe0000' | '#ff6600' | '#ffff01' | '#ffffcd' | '#ffffff';
      /**
       * label_id integer
       */
      label_id?: number;
      /**
       * name string
       */
      name?: string;
      /**
       * unread_count integer
       */
      unread_count?: number;
    }>;
    /**
     * total_unread_count integer
     */
    total_unread_count?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/mail/labels/',
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
   * Create a mail label
   * Create a mail label
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/labels/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/labels/`
   *
   * Alternate route: `/v2/characters/{character_id}/mail/labels/`
   *
   * @returns number Label created
   * @throws ApiError
   */
  public postCharactersCharacterIdMailLabels({
    characterId,
    label,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * Label to create
     */
    label: {
      /**
       * Hexadecimal string representing label color, in RGB format
       */
      color?: '#0000fe' | '#006634' | '#0099ff' | '#00ff33' | '#01ffff' | '#349800' | '#660066' | '#666666' | '#999999' | '#99ffff' | '#9a0000' | '#ccff9a' | '#e6e6e6' | '#fe0000' | '#ff6600' | '#ffff01' | '#ffffcd' | '#ffffff';
      /**
       * name string
       */
      name: string;
    },
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/characters/{character_id}/mail/labels/',
      path: {
        'character_id': characterId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: label,
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
   * Delete a mail label
   * Delete a mail label
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/labels/{label_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/labels/{label_id}/`
   *
   * Alternate route: `/v1/characters/{character_id}/mail/labels/{label_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public deleteCharactersCharacterIdMailLabelsLabelId({
    characterId,
    labelId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * An EVE label id
     */
    labelId: number,
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
      url: '/characters/{character_id}/mail/labels/{label_id}/',
      path: {
        'character_id': characterId,
        'label_id': labelId,
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
        422: `Default labels cannot be deleted`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Return mailing list subscriptions
   * Return all mailing lists that the character is subscribed to
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/lists/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/lists/`
   *
   * Alternate route: `/v1/characters/{character_id}/mail/lists/`
   *
   * ---
   * This route is cached for up to 120 seconds
   * @returns any Mailing lists
   * @throws ApiError
   */
  public getCharactersCharacterIdMailLists({
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
     * Mailing list ID
     */
    mailing_list_id: number;
    /**
     * name string
     */
    name: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/mail/lists/',
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
   * Delete a mail
   * Delete a mail
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
   *
   * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public deleteCharactersCharacterIdMailMailId({
    characterId,
    mailId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * An EVE mail ID
     */
    mailId: number,
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
      url: '/characters/{character_id}/mail/{mail_id}/',
      path: {
        'character_id': characterId,
        'mail_id': mailId,
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

  /**
   * Return a mail
   * Return the contents of an EVE mail
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
   *
   * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
   *
   * ---
   * This route is cached for up to 30 seconds
   * @returns any Contents of a mail
   * @throws ApiError
   */
  public getCharactersCharacterIdMailMailId({
    characterId,
    mailId,
    datasource = 'tranquility',
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * An EVE mail ID
     */
    mailId: number,
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
     * Mail's body
     */
    body?: string;
    /**
     * From whom the mail was sent
     */
    from?: number;
    /**
     * Labels attached to the mail
     */
    labels?: Array<number>;
    /**
     * Whether the mail is flagged as read
     */
    read?: boolean;
    /**
     * Recipients of the mail
     */
    recipients?: Array<{
      /**
       * recipient_id integer
       */
      recipient_id: number;
      /**
       * recipient_type string
       */
      recipient_type: 'alliance' | 'character' | 'corporation' | 'mailing_list';
    }>;
    /**
     * Mail subject
     */
    subject?: string;
    /**
     * When the mail was sent
     */
    timestamp?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/mail/{mail_id}/',
      path: {
        'character_id': characterId,
        'mail_id': mailId,
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
        404: `Mail not found`,
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Update metadata about a mail
   * Update metadata about a mail
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
   *
   * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
   *
   * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
   *
   * @returns void
   * @throws ApiError
   */
  public putCharactersCharacterIdMailMailId({
    characterId,
    contents,
    mailId,
    datasource = 'tranquility',
    token,
  }: {
    /**
     * An EVE character ID
     */
    characterId: number,
    /**
     * Data used to update the mail
     */
    contents: {
      /**
       * Labels to assign to the mail. Pre-existing labels are unassigned.
       */
      labels?: Array<number>;
      /**
       * Whether the mail is flagged as read
       */
      read?: boolean;
    },
    /**
     * An EVE mail ID
     */
    mailId: number,
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
      url: '/characters/{character_id}/mail/{mail_id}/',
      path: {
        'character_id': characterId,
        'mail_id': mailId,
      },
      query: {
        'datasource': datasource,
        'token': token,
      },
      body: contents,
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
