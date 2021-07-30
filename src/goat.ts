import {
	Account, Alchemy, Alliance, AllianceExperience, AllianceIntimacy, AllianceSiege,
	BlessedChest, Campaign, Children, Coronation, DarkCastle, Deathmatch, Divining,
	DragonSlaying, Expeditions, Feasts, GardenStroll, GiftingTree, GiftOfTheFae,
	Grain, HallOfFame, Heroes, HeroesTrial, Items, JewelsOfLuck, Kingdom, KingsPass,
	MaidenExp, MaidenPainting, Maidens, Mail, PathOfWealth, PeoplesMonarch, Picnic,
	Processions, Profile, Quality, RaiseChildren, Rankings, Renovation, RenownedMerchant,
	Rewards, Shop, ThroneRoom, Tourney, TreasureHunt, VenetianPass, WorldBoss, XServerTourney
} from './endpoints'
import { IAccount } from './GoatResource'
import { ACCOUNT_NAPOLEON } from './accounts/demophlos'

const VERSION = process.env.VERSION || 'V1.3.571'
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
	shop: Shop
	throneRoom: ThroneRoom
	tourney: Tourney
	worldBoss: WorldBoss

	challenges: {
		xServerTourney: XServerTourney
		deathmatch: Deathmatch
		allianceSiege: AllianceSiege
		allianceIntimacy: AllianceIntimacy
		allianceExperience: AllianceExperience
		grain: Grain
		quality: Quality
		maidenExp: MaidenExp
		raiseChildren: RaiseChildren
	}

	events: {
		alchemy: Alchemy
		blessedChest: BlessedChest
		castle: Renovation
		coronation: Coronation
		darkCastle: DarkCastle
		divining: Divining
		dragonSlaying: DragonSlaying
		gardenStroll: GardenStroll
		giftOfTheFae: GiftOfTheFae
		giftingTree: GiftingTree
		heroesTrial: HeroesTrial
		jewelsOfLuck: JewelsOfLuck
		kingsPass: KingsPass
		maidenPainting: MaidenPainting
		pathOfWealth: PathOfWealth
		peoplesMonarch: PeoplesMonarch
		picnic: Picnic
		renownedMerchant: RenownedMerchant
		treasureHunt: TreasureHunt
		venetianPass: VenetianPass
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
		this.shop = new Shop(this)
		this.throneRoom = new ThroneRoom(this)
		this.tourney = new Tourney(this)
		this.worldBoss = new WorldBoss(this)

		this.challenges = {
			xServerTourney: new XServerTourney(this),
			deathmatch: new Deathmatch(this),
			allianceSiege: new AllianceSiege(this),
			allianceIntimacy: new AllianceIntimacy(this),
			allianceExperience: new AllianceExperience(this),
			grain: new Grain(this),
			quality: new Quality(this),
			maidenExp: new MaidenExp(this),
			raiseChildren: new RaiseChildren(this),
		}

		this.events = {
			blessedChest: new BlessedChest(this),
			alchemy: new Alchemy(this),
			castle: new Renovation(this),
			coronation: new Coronation(this),
			darkCastle: new DarkCastle(this),
			divining: new Divining(this),
			dragonSlaying: new DragonSlaying(this),
			gardenStroll: new GardenStroll(this),
			giftOfTheFae: new GiftOfTheFae(this),
			giftingTree: new GiftingTree(this),
			heroesTrial: new HeroesTrial(this),
			jewelsOfLuck: new JewelsOfLuck(this),
			kingsPass: new KingsPass(this),
			maidenPainting: new MaidenPainting(this),
			pathOfWealth: new PathOfWealth(this),
			peoplesMonarch: new PeoplesMonarch(this),
			picnic: new Picnic(this),
			renownedMerchant: new RenownedMerchant(this),
			treasureHunt: new TreasureHunt(this),
			venetianPass: new VenetianPass(this),
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
