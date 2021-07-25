import {
	Account, Alliance, Children, DarkCastle, Deathmatch,
	DragonSlaying, Expeditions, Feasts, GardenStroll, Heroes,
	HallOfFame, Items, JewelsOfLuck, Kingdom, Maidens,
	Mail, Picnic, Processions, Profile, Rankings, Renovation,
	Rewards, Tourney, TreasureHunt, WorldBoss, XServerTourney,
	AllianceSiege, MaidenPainting, Divining, Coronation, ThroneRoom,
	Campaign, BlessedChest, GiftOfTheFae, AllianceIntimacy, AllianceExperience
} from './endpoints'
import { IAccount } from './GoatResource'
import { ACCOUNT_NAPOLEON } from './accounts/demophlos'

const VERSION = 'V1.3.564'
const COOKIE = 'lyjxncc=c3ac4e77dff349b66c7aeed276e3eb6c'
const DEFAULT_HOST = 'ksrus.gtbackoverseas.com'
// const OLD_HOST = 'zsjefunbm.zwformat.com'

export { ACCOUNT_GAUTIER } from './accounts/gautier'
export { ACCOUNT_NAPOLEON } from './accounts/demophlos'
export { ACCOUNT_RAYMUNDUS } from './accounts/raymundus'

export class Goat {
	private readonly cookie: string
	private token: string|null = null
	private gid: string|null = null

	private readonly host: string
	private server: string
	private version: string
	private loginAccount: IAccount = ACCOUNT_NAPOLEON

	isLoggedIn = false

	account: Account
	alliance: Alliance
	campaign: Campaign
	children: Children
	expeditions: Expeditions
	feasts: Feasts
	hallOfFame: HallOfFame
	heroes: Heroes
	items: Items
	kingdom: Kingdom
	maidens: Maidens
	mail: Mail
	processions: Processions
	profile: Profile
	rankings: Rankings
	rewards: Rewards
	throneRoom: ThroneRoom
	tourney: Tourney
	worldBoss: WorldBoss

	challenges: {
		xServerTourney: XServerTourney
		deathmatch: Deathmatch
		allianceSiege: AllianceSiege
		allianceIntimacy: AllianceIntimacy
		allianceExperience: AllianceExperience
	}

	events: {
		blessedChest: BlessedChest
		coronation: Coronation
		darkCastle: DarkCastle
		divining: Divining
		gardenStroll: GardenStroll
		giftOfTheFae: GiftOfTheFae
		picnic: Picnic
		treasureHunt: TreasureHunt
		castle: Renovation
		dragonSlaying: DragonSlaying
		jewelsOfLuck: JewelsOfLuck
		maidenPainting: MaidenPainting
	}

	constructor() {
		this.version = VERSION
		this.cookie = COOKIE
		this.host = DEFAULT_HOST

		this.server = '699'
		this.token = null
		this.gid = null


		this.account = new Account(this)
		this.alliance = new Alliance(this)
		this.campaign = new Campaign(this)
		this.children = new Children(this)
		this.expeditions = new Expeditions(this)
		this.feasts = new Feasts(this)
		this.hallOfFame = new HallOfFame(this)
		this.heroes = new Heroes(this)
		this.items = new Items(this)
		this.kingdom = new Kingdom(this)
		this.maidens = new Maidens(this)
		this.mail = new Mail(this)
		this.processions = new Processions(this)
		this.profile = new Profile(this)
		this.rankings = new Rankings(this)
		this.rewards = new Rewards(this)
		this.throneRoom = new ThroneRoom(this)
		this.tourney = new Tourney(this)
		this.worldBoss = new WorldBoss(this)

		this.challenges = {
			xServerTourney: new XServerTourney(this),
			deathmatch: new Deathmatch(this),
			allianceSiege: new AllianceSiege(this),
			allianceIntimacy: new AllianceIntimacy(this),
			allianceExperience: new AllianceExperience(this),
		}

		this.events = {
			blessedChest: new BlessedChest(this),
			coronation: new Coronation(this),
			darkCastle: new DarkCastle(this),
			divining: new Divining(this),
			gardenStroll: new GardenStroll(this),
			giftOfTheFae: new GiftOfTheFae(this),
			picnic: new Picnic(this),
			treasureHunt: new TreasureHunt(this),
			castle: new Renovation(this),
			dragonSlaying: new DragonSlaying(this),
			jewelsOfLuck: new JewelsOfLuck(this),
			maidenPainting: new MaidenPainting(this),
		}
	}
	_getHost(): string { return this.host}
	_getCookie(): string { return this.cookie}
	_getServer(): string { return this.server}
	_setServer(server: string): this {
		this.server = server
		return this
	}
	_getVersion(): string { return this.version}
	_setVersion(version: string): this {
		this.version = version
		return this
	}
	_getGid(): string|null { return this.gid}
	_setGid(gid: string): this {
		this.gid = gid === '691005139' ? '691005130' : gid
		return this
	}
	_getToken(): string|null { return this.token}
	_setToken(token: string): this {
		this.token = token
		this.isLoggedIn = true
		return this
	}
	_getBaseUrl(): string {
		return `http://${this.host}/servers/s${this.server}.php`
	}
	_isGautier(): boolean {
		return this.gid === '699002934'
	}
	_getAccount(): IAccount { return this.loginAccount}
	_setAccount(account: IAccount): this {
		this.loginAccount = account
		return this
	}
	_login({ token, uid }): void {
		this.token = token
		this.gid = uid
		this.isLoggedIn = true
		console.warn(`Logged in on ${this.server} as ${this.gid}`)
	}
	_logout(): void {
		this.token = null
		this.gid = null
		this.isLoggedIn = false
	}
}

export const goat = new Goat()
