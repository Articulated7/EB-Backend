/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WalletService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a character's wallet balance
   * Returns a character's wallet balance
   *
   * ---
   * Alternate route: `/legacy/characters/{character_id}/wallet/`
   *
   * Alternate route: `/v1/characters/{character_id}/wallet/`
   *
   * ---
   * This route is cached for up to 120 seconds
   *
   * ---
   * [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/wallet/)
   * @returns number Wallet balance
   * @throws ApiError
   */
  public getCharactersCharacterIdWallet({
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
  }): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/wallet/',
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
   * Get character wallet journal
   * Retrieve the given character's wallet journal going 30 days back
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/wallet/journal/`
   *
   * Alternate route: `/v6/characters/{character_id}/wallet/journal/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Journal entries
   * @throws ApiError
   */
  public getCharactersCharacterIdWalletJournal({
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
     * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
     */
    amount?: number;
    /**
     * Wallet balance after transaction occurred
     */
    balance?: number;
    /**
     * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
     */
    context_id?: number;
    /**
     * The type of the given context_id if present
     */
    context_id_type?: 'structure_id' | 'station_id' | 'market_transaction_id' | 'character_id' | 'corporation_id' | 'alliance_id' | 'eve_system' | 'industry_job_id' | 'contract_id' | 'planet_id' | 'system_id' | 'type_id';
    /**
     * Date and time of transaction
     */
    date: string;
    /**
     * The reason for the transaction, mirrors what is seen in the client
     */
    description: string;
    /**
     * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    first_party_id?: number;
    /**
     * Unique journal reference ID
     */
    id: number;
    /**
     * The user stated reason for the transaction. Only applies to some ref_types
     */
    reason?: string;
    /**
     * "The transaction type for the given. transaction. Different transaction types will populate different attributes."
     */
    ref_type: 'acceleration_gate_fee' | 'advertisement_listing_fee' | 'agent_donation' | 'agent_location_services' | 'agent_miscellaneous' | 'agent_mission_collateral_paid' | 'agent_mission_collateral_refunded' | 'agent_mission_reward' | 'agent_mission_reward_corporation_tax' | 'agent_mission_time_bonus_reward' | 'agent_mission_time_bonus_reward_corporation_tax' | 'agent_security_services' | 'agent_services_rendered' | 'agents_preward' | 'alliance_maintainance_fee' | 'alliance_registration_fee' | 'asset_safety_recovery_tax' | 'bounty' | 'bounty_prize' | 'bounty_prize_corporation_tax' | 'bounty_prizes' | 'bounty_reimbursement' | 'bounty_surcharge' | 'brokers_fee' | 'clone_activation' | 'clone_transfer' | 'contraband_fine' | 'contract_auction_bid' | 'contract_auction_bid_corp' | 'contract_auction_bid_refund' | 'contract_auction_sold' | 'contract_brokers_fee' | 'contract_brokers_fee_corp' | 'contract_collateral' | 'contract_collateral_deposited_corp' | 'contract_collateral_payout' | 'contract_collateral_refund' | 'contract_deposit' | 'contract_deposit_corp' | 'contract_deposit_refund' | 'contract_deposit_sales_tax' | 'contract_price' | 'contract_price_payment_corp' | 'contract_reversal' | 'contract_reward' | 'contract_reward_deposited' | 'contract_reward_deposited_corp' | 'contract_reward_refund' | 'contract_sales_tax' | 'copying' | 'corporate_reward_payout' | 'corporate_reward_tax' | 'corporation_account_withdrawal' | 'corporation_bulk_payment' | 'corporation_dividend_payment' | 'corporation_liquidation' | 'corporation_logo_change_cost' | 'corporation_payment' | 'corporation_registration_fee' | 'courier_mission_escrow' | 'cspa' | 'cspaofflinerefund' | 'daily_challenge_reward' | 'datacore_fee' | 'dna_modification_fee' | 'docking_fee' | 'duel_wager_escrow' | 'duel_wager_payment' | 'duel_wager_refund' | 'ess_escrow_transfer' | 'external_trade_delivery' | 'external_trade_freeze' | 'external_trade_thaw' | 'factory_slot_rental_fee' | 'flux_payout' | 'flux_tax' | 'flux_ticket_repayment' | 'flux_ticket_sale' | 'gm_cash_transfer' | 'industry_job_tax' | 'infrastructure_hub_maintenance' | 'inheritance' | 'insurance' | 'item_trader_payment' | 'jump_clone_activation_fee' | 'jump_clone_installation_fee' | 'kill_right_fee' | 'lp_store' | 'manufacturing' | 'market_escrow' | 'market_fine_paid' | 'market_provider_tax' | 'market_transaction' | 'medal_creation' | 'medal_issued' | 'milestone_reward_payment' | 'mission_completion' | 'mission_cost' | 'mission_expiration' | 'mission_reward' | 'office_rental_fee' | 'operation_bonus' | 'opportunity_reward' | 'planetary_construction' | 'planetary_export_tax' | 'planetary_import_tax' | 'player_donation' | 'player_trading' | 'project_discovery_reward' | 'project_discovery_tax' | 'reaction' | 'redeemed_isk_token' | 'release_of_impounded_property' | 'repair_bill' | 'reprocessing_tax' | 'researching_material_productivity' | 'researching_technology' | 'researching_time_productivity' | 'resource_wars_reward' | 'reverse_engineering' | 'season_challenge_reward' | 'security_processing_fee' | 'shares' | 'skill_purchase' | 'sovereignity_bill' | 'store_purchase' | 'store_purchase_refund' | 'structure_gate_jump' | 'transaction_tax' | 'upkeep_adjustment_fee' | 'war_ally_contract' | 'war_fee' | 'war_fee_surrender';
    /**
     * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    second_party_id?: number;
    /**
     * Tax amount received. Only applies to tax related transactions
     */
    tax?: number;
    /**
     * The corporation ID receiving any tax paid. Only applies to tax related transactions
     */
    tax_receiver_id?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/wallet/journal/',
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
   * Get wallet transactions
   * Get wallet transactions of a character
   *
   * ---
   * Alternate route: `/dev/characters/{character_id}/wallet/transactions/`
   *
   * Alternate route: `/legacy/characters/{character_id}/wallet/transactions/`
   *
   * Alternate route: `/v1/characters/{character_id}/wallet/transactions/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   * @returns any Wallet transactions
   * @throws ApiError
   */
  public getCharactersCharacterIdWalletTransactions({
    characterId,
    datasource = 'tranquility',
    fromId,
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
     * Only show transactions happened before the one referenced by this id
     */
    fromId?: number,
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
     * client_id integer
     */
    client_id: number;
    /**
     * Date and time of transaction
     */
    date: string;
    /**
     * is_buy boolean
     */
    is_buy: boolean;
    /**
     * is_personal boolean
     */
    is_personal: boolean;
    /**
     * journal_ref_id integer
     */
    journal_ref_id: number;
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * quantity integer
     */
    quantity: number;
    /**
     * Unique transaction ID
     */
    transaction_id: number;
    /**
     * type_id integer
     */
    type_id: number;
    /**
     * Amount paid per unit
     */
    unit_price: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/characters/{character_id}/wallet/transactions/',
      path: {
        'character_id': characterId,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'from_id': fromId,
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
   * Returns a corporation's wallet balance
   * Get a corporation's wallets
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/wallets/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/wallets/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/wallets/`
   *
   * ---
   * This route is cached for up to 300 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
   *
   * @returns any List of corporation wallets
   * @throws ApiError
   */
  public getCorporationsCorporationIdWallets({
    corporationId,
    datasource = 'tranquility',
    ifNoneMatch,
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
     * Access token to use if unable to set a header
     */
    token?: string,
  }): CancelablePromise<Array<{
    /**
     * balance number
     */
    balance: number;
    /**
     * division integer
     */
    division: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/wallets/',
      path: {
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
        420: `Error limited`,
        500: `Internal server error`,
        503: `Service unavailable`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Get corporation wallet journal
   * Retrieve the given corporation's wallet journal for the given division going 30 days back
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/journal/`
   *
   * Alternate route: `/v4/corporations/{corporation_id}/wallets/{division}/journal/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
   *
   * @returns any Journal entries
   * @throws ApiError
   */
  public getCorporationsCorporationIdWalletsDivisionJournal({
    corporationId,
    division,
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
     * Wallet key of the division to fetch journals from
     */
    division: number,
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
     * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
     */
    amount?: number;
    /**
     * Wallet balance after transaction occurred
     */
    balance?: number;
    /**
     * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
     */
    context_id?: number;
    /**
     * The type of the given context_id if present
     */
    context_id_type?: 'structure_id' | 'station_id' | 'market_transaction_id' | 'character_id' | 'corporation_id' | 'alliance_id' | 'eve_system' | 'industry_job_id' | 'contract_id' | 'planet_id' | 'system_id' | 'type_id';
    /**
     * Date and time of transaction
     */
    date: string;
    /**
     * The reason for the transaction, mirrors what is seen in the client
     */
    description: string;
    /**
     * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    first_party_id?: number;
    /**
     * Unique journal reference ID
     */
    id: number;
    /**
     * The user stated reason for the transaction. Only applies to some ref_types
     */
    reason?: string;
    /**
     * "The transaction type for the given. transaction. Different transaction types will populate different attributes. Note: If you have an existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can look at the following file to see string->int mappings: https://github.com/ccpgames/eve-glue/blob/master/eve_glue/wallet_journal_ref.py"
     */
    ref_type: 'acceleration_gate_fee' | 'advertisement_listing_fee' | 'agent_donation' | 'agent_location_services' | 'agent_miscellaneous' | 'agent_mission_collateral_paid' | 'agent_mission_collateral_refunded' | 'agent_mission_reward' | 'agent_mission_reward_corporation_tax' | 'agent_mission_time_bonus_reward' | 'agent_mission_time_bonus_reward_corporation_tax' | 'agent_security_services' | 'agent_services_rendered' | 'agents_preward' | 'alliance_maintainance_fee' | 'alliance_registration_fee' | 'asset_safety_recovery_tax' | 'bounty' | 'bounty_prize' | 'bounty_prize_corporation_tax' | 'bounty_prizes' | 'bounty_reimbursement' | 'bounty_surcharge' | 'brokers_fee' | 'clone_activation' | 'clone_transfer' | 'contraband_fine' | 'contract_auction_bid' | 'contract_auction_bid_corp' | 'contract_auction_bid_refund' | 'contract_auction_sold' | 'contract_brokers_fee' | 'contract_brokers_fee_corp' | 'contract_collateral' | 'contract_collateral_deposited_corp' | 'contract_collateral_payout' | 'contract_collateral_refund' | 'contract_deposit' | 'contract_deposit_corp' | 'contract_deposit_refund' | 'contract_deposit_sales_tax' | 'contract_price' | 'contract_price_payment_corp' | 'contract_reversal' | 'contract_reward' | 'contract_reward_deposited' | 'contract_reward_deposited_corp' | 'contract_reward_refund' | 'contract_sales_tax' | 'copying' | 'corporate_reward_payout' | 'corporate_reward_tax' | 'corporation_account_withdrawal' | 'corporation_bulk_payment' | 'corporation_dividend_payment' | 'corporation_liquidation' | 'corporation_logo_change_cost' | 'corporation_payment' | 'corporation_registration_fee' | 'courier_mission_escrow' | 'cspa' | 'cspaofflinerefund' | 'daily_challenge_reward' | 'datacore_fee' | 'dna_modification_fee' | 'docking_fee' | 'duel_wager_escrow' | 'duel_wager_payment' | 'duel_wager_refund' | 'ess_escrow_transfer' | 'external_trade_delivery' | 'external_trade_freeze' | 'external_trade_thaw' | 'factory_slot_rental_fee' | 'flux_payout' | 'flux_tax' | 'flux_ticket_repayment' | 'flux_ticket_sale' | 'gm_cash_transfer' | 'industry_job_tax' | 'infrastructure_hub_maintenance' | 'inheritance' | 'insurance' | 'item_trader_payment' | 'jump_clone_activation_fee' | 'jump_clone_installation_fee' | 'kill_right_fee' | 'lp_store' | 'manufacturing' | 'market_escrow' | 'market_fine_paid' | 'market_provider_tax' | 'market_transaction' | 'medal_creation' | 'medal_issued' | 'milestone_reward_payment' | 'mission_completion' | 'mission_cost' | 'mission_expiration' | 'mission_reward' | 'office_rental_fee' | 'operation_bonus' | 'opportunity_reward' | 'planetary_construction' | 'planetary_export_tax' | 'planetary_import_tax' | 'player_donation' | 'player_trading' | 'project_discovery_reward' | 'project_discovery_tax' | 'reaction' | 'redeemed_isk_token' | 'release_of_impounded_property' | 'repair_bill' | 'reprocessing_tax' | 'researching_material_productivity' | 'researching_technology' | 'researching_time_productivity' | 'resource_wars_reward' | 'reverse_engineering' | 'season_challenge_reward' | 'security_processing_fee' | 'shares' | 'skill_purchase' | 'sovereignity_bill' | 'store_purchase' | 'store_purchase_refund' | 'structure_gate_jump' | 'transaction_tax' | 'upkeep_adjustment_fee' | 'war_ally_contract' | 'war_fee' | 'war_fee_surrender';
    /**
     * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    second_party_id?: number;
    /**
     * Tax amount received. Only applies to tax related transactions
     */
    tax?: number;
    /**
     * The corporation ID receiving any tax paid. Only applies to tax related transactions
     */
    tax_receiver_id?: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/wallets/{division}/journal/',
      path: {
        'corporation_id': corporationId,
        'division': division,
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
   * Get corporation wallet transactions
   * Get wallet transactions of a corporation
   *
   * ---
   * Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/transactions/`
   *
   * Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/transactions/`
   *
   * Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/transactions/`
   *
   * ---
   * This route is cached for up to 3600 seconds
   *
   * ---
   * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
   *
   * @returns any Wallet transactions
   * @throws ApiError
   */
  public getCorporationsCorporationIdWalletsDivisionTransactions({
    corporationId,
    division,
    datasource = 'tranquility',
    fromId,
    ifNoneMatch,
    token,
  }: {
    /**
     * An EVE corporation ID
     */
    corporationId: number,
    /**
     * Wallet key of the division to fetch journals from
     */
    division: number,
    /**
     * The server name you would like data from
     */
    datasource?: 'tranquility',
    /**
     * Only show journal entries happened before the transaction referenced by this id
     */
    fromId?: number,
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
     * client_id integer
     */
    client_id: number;
    /**
     * Date and time of transaction
     */
    date: string;
    /**
     * is_buy boolean
     */
    is_buy: boolean;
    /**
     * -1 if there is no corresponding wallet journal entry
     */
    journal_ref_id: number;
    /**
     * location_id integer
     */
    location_id: number;
    /**
     * quantity integer
     */
    quantity: number;
    /**
     * Unique transaction ID
     */
    transaction_id: number;
    /**
     * type_id integer
     */
    type_id: number;
    /**
     * Amount paid per unit
     */
    unit_price: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/corporations/{corporation_id}/wallets/{division}/transactions/',
      path: {
        'corporation_id': corporationId,
        'division': division,
      },
      headers: {
        'If-None-Match': ifNoneMatch,
      },
      query: {
        'datasource': datasource,
        'from_id': fromId,
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
