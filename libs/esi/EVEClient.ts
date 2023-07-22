/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AllianceService } from './services/AllianceService';
import { AssetsService } from './services/AssetsService';
import { BookmarksService } from './services/BookmarksService';
import { CalendarService } from './services/CalendarService';
import { CharacterService } from './services/CharacterService';
import { ClonesService } from './services/ClonesService';
import { ContactsService } from './services/ContactsService';
import { ContractsService } from './services/ContractsService';
import { CorporationService } from './services/CorporationService';
import { DogmaService } from './services/DogmaService';
import { FactionWarfareService } from './services/FactionWarfareService';
import { FittingsService } from './services/FittingsService';
import { FleetsService } from './services/FleetsService';
import { IncursionsService } from './services/IncursionsService';
import { IndustryService } from './services/IndustryService';
import { InsuranceService } from './services/InsuranceService';
import { KillmailsService } from './services/KillmailsService';
import { LocationService } from './services/LocationService';
import { LoyaltyService } from './services/LoyaltyService';
import { MailService } from './services/MailService';
import { MarketService } from './services/MarketService';
import { OpportunitiesService } from './services/OpportunitiesService';
import { PlanetaryInteractionService } from './services/PlanetaryInteractionService';
import { RoutesService } from './services/RoutesService';
import { SearchService } from './services/SearchService';
import { SkillsService } from './services/SkillsService';
import { SovereigntyService } from './services/SovereigntyService';
import { StatusService } from './services/StatusService';
import { UniverseService } from './services/UniverseService';
import { UserInterfaceService } from './services/UserInterfaceService';
import { WalletService } from './services/WalletService';
import { WarsService } from './services/WarsService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class EVEClient {

  public readonly alliance: AllianceService;
  public readonly assets: AssetsService;
  public readonly bookmarks: BookmarksService;
  public readonly calendar: CalendarService;
  public readonly character: CharacterService;
  public readonly clones: ClonesService;
  public readonly contacts: ContactsService;
  public readonly contracts: ContractsService;
  public readonly corporation: CorporationService;
  public readonly dogma: DogmaService;
  public readonly factionWarfare: FactionWarfareService;
  public readonly fittings: FittingsService;
  public readonly fleets: FleetsService;
  public readonly incursions: IncursionsService;
  public readonly industry: IndustryService;
  public readonly insurance: InsuranceService;
  public readonly killmails: KillmailsService;
  public readonly location: LocationService;
  public readonly loyalty: LoyaltyService;
  public readonly mail: MailService;
  public readonly market: MarketService;
  public readonly opportunities: OpportunitiesService;
  public readonly planetaryInteraction: PlanetaryInteractionService;
  public readonly routes: RoutesService;
  public readonly search: SearchService;
  public readonly skills: SkillsService;
  public readonly sovereignty: SovereigntyService;
  public readonly status: StatusService;
  public readonly universe: UniverseService;
  public readonly userInterface: UserInterfaceService;
  public readonly wallet: WalletService;
  public readonly wars: WarsService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://esi.evetech.net/latest',
      VERSION: config?.VERSION ?? '1.17',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.alliance = new AllianceService(this.request);
    this.assets = new AssetsService(this.request);
    this.bookmarks = new BookmarksService(this.request);
    this.calendar = new CalendarService(this.request);
    this.character = new CharacterService(this.request);
    this.clones = new ClonesService(this.request);
    this.contacts = new ContactsService(this.request);
    this.contracts = new ContractsService(this.request);
    this.corporation = new CorporationService(this.request);
    this.dogma = new DogmaService(this.request);
    this.factionWarfare = new FactionWarfareService(this.request);
    this.fittings = new FittingsService(this.request);
    this.fleets = new FleetsService(this.request);
    this.incursions = new IncursionsService(this.request);
    this.industry = new IndustryService(this.request);
    this.insurance = new InsuranceService(this.request);
    this.killmails = new KillmailsService(this.request);
    this.location = new LocationService(this.request);
    this.loyalty = new LoyaltyService(this.request);
    this.mail = new MailService(this.request);
    this.market = new MarketService(this.request);
    this.opportunities = new OpportunitiesService(this.request);
    this.planetaryInteraction = new PlanetaryInteractionService(this.request);
    this.routes = new RoutesService(this.request);
    this.search = new SearchService(this.request);
    this.skills = new SkillsService(this.request);
    this.sovereignty = new SovereigntyService(this.request);
    this.status = new StatusService(this.request);
    this.universe = new UniverseService(this.request);
    this.userInterface = new UserInterfaceService(this.request);
    this.wallet = new WalletService(this.request);
    this.wars = new WarsService(this.request);
  }
}

