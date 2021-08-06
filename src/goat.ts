import {
	Account,
	Alchemy,
	Alliance,
	AllianceExperience,
	AllianceIntimacy,
	AllianceSiege,
	BlessedChest,
	Campaign,
	Children,
	Coronation,
	DarkCastle,
	Deathmatch,
	Divining,
	DragonSlaying,
	Expeditions,
	Feasts,
	GardenStroll,
	GiftingTree,
	GiftOfTheFae,
	Grain,
	HallOfFame,
	Heroes,
	HeroesTrial,
	Items,
	JewelsOfLuck,
	Kingdom,
	KingsPass,
	LimitedTimeQuests,
	MaidenExp,
	MaidenPainting,
	Maidens,
	Mail,
	PathOfWealth,
	PeoplesMonarch,
	Picnic,
	Processions,
	Profile,
	Quality,
	RaiseChildren,
	Rankings,
	Renovation,
	RenownedMerchant,
	Rewards,
	Shop,
	ThroneRoom,
	Tourney,
	TreasureHunt,
	VenetianPass,
	WorldBoss,
	XServerTourney,
	Charm,
	TourneyChallenge,
	ScratchAndWin,
	DIYStore,
	EquipmentTrial, SpendGold, MysteriousIsland
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
	private token: string | null = null
	private gid: string | null = null

	private readonly host: string
	private server: string
	private version: string
	private loginAccount: IAccount = ACCOUNT_NAPOLEON

	isLoggedIn = false

	account = new Account(this)
	alliance = new Alliance(this)
	campaign = new Campaign(this)
	children = new Children(this)
	expeditions = new Expeditions(this)
	feasts = new Feasts(this)
	hallOfFame = new HallOfFame(this)
	heroes = new Heroes(this)
	items = new Items(this)
	kingdom = new Kingdom(this)
	limitedTimeQuests = new LimitedTimeQuests(this)
	maidens = new Maidens(this)
	mail = new Mail(this)
	processions = new Processions(this)
	profile = new Profile(this)
	rankings = new Rankings(this)
	rewards = new Rewards(this)
	shop = new Shop(this)
	throneRoom = new ThroneRoom(this)
	tourney = new Tourney(this)
	worldBoss = new WorldBoss(this)

	challenges = {
		xServerTourney: new XServerTourney(this),
		deathmatch: new Deathmatch(this),
		allianceSiege: new AllianceSiege(this),
		allianceIntimacy: new AllianceIntimacy(this),
		allianceExperience: new AllianceExperience(this),
		grain: new Grain(this),
		quality: new Quality(this),
		maidenExp: new MaidenExp(this),
		raiseChildren: new RaiseChildren(this),
		tourney: new TourneyChallenge(this),
		charm: new Charm(this),
		spendGold: new SpendGold(this),
	}

	events = {
		alchemy: new Alchemy(this),
		blessedChest: new BlessedChest(this),
		castle: new Renovation(this),
		coronation: new Coronation(this),
		darkCastle: new DarkCastle(this),
		divining: new Divining(this),
		diyStore: new DIYStore(this),
		dragonSlaying: new DragonSlaying(this),
		equipmentTrial: new EquipmentTrial(this),
		gardenStroll: new GardenStroll(this),
		giftOfTheFae: new GiftOfTheFae(this),
		giftingTree: new GiftingTree(this),
		heroesTrial: new HeroesTrial(this),
		jewelsOfLuck: new JewelsOfLuck(this),
		kingsPass: new KingsPass(this),
		maidenPainting: new MaidenPainting(this),
		mysteriousIsland: new MysteriousIsland(this),
		pathOfWealth: new PathOfWealth(this),
		peoplesMonarch: new PeoplesMonarch(this),
		picnic: new Picnic(this),
		renownedMerchant: new RenownedMerchant(this),
		scratchAndWin: new ScratchAndWin(this),
		treasureHunt: new TreasureHunt(this),
		venetianPass: new VenetianPass(this),
	}

	constructor() {
		this.version = VERSION
		this.cookie = COOKIE
		this.host = DEFAULT_HOST

		this.server = '699'
		this.token = null
		this.gid = null
	}
	_getHost(): string {
		return this.host
	}
	_getCookie(): string {
		return this.cookie
	}
	_getServer(): string {
		return this.server
	}
	_setServer(server: string): this {
		this.server = server
		return this
	}
	_getVersion(): string {
		return this.version
	}
	_setVersion(version: string): this {
		this.version = version
		return this
	}
	_getGid(): string | null {
		return this.gid
	}
	_setGid(gid: string): this {
		this.gid = gid
		return this
	}
	_getToken(): string | null {
		return this.token
	}
	_setToken(token: string): this {
		this.token = token
		this.isLoggedIn = true
		return this
	}
	_getBaseUrl(): string {
		return `http://${this.host}/servers/s${this.server}.php`
	}
	_isGautier(): boolean {
		return this.server === '699' &&
		(this.gid === '699002934' || this.loginAccount.name === 'Gautier')
	}
	_isDemophlos(): boolean {
		return this.server === '699' &&
		(this.gid === '6999005053' || this.loginAccount.name === 'Demophlos')
	}
	_isShallan(): boolean {
		return this.server === '1094' &&
		(this.gid === '1094003443' || this.loginAccount.name === 'Gautier')
	}
	_getAccount(): IAccount {
		return this.loginAccount
	}
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
