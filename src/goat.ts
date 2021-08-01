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
} from './endpoints'
import { GoatConfig } from './AccountConfig'
export { GoatConfig }

const VERSION = process.env.VERSION || 'V1.3.571'
const COOKIE = 'lyjxncc=c3ac4e77dff349b66c7aeed276e3eb6c'
const DEFAULT_HOST = 'ksrus.gtbackoverseas.com'
// const OLD_HOST = 'zsjefunbm.zwformat.com'

export class Goat {
	private readonly _cookie: string
	private readonly _host: string
	private _version: string

	protected _config: GoatConfig
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
	}
	events = {
		alchemy: new Alchemy(this),
		blessedChest: new BlessedChest(this),
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

	constructor(config: GoatConfig | null = null) {
		this._version = VERSION
		this._cookie = COOKIE
		this._host = DEFAULT_HOST
		this._config = config
	}
	get host(): string {
		return this._host
	}
	get cookie(): string {
		return this._cookie
	}
	get version(): string {
		return this._version
	}
	set version(version: string) {
		this._version = version
	}
	get baseUrl(): string {
		return `http://${this.host}/servers/s${this.server}.php`
	}

	get server(): string {
		return this._config._server
	}
	set server(server: string) {
		this._config._server = server
	}
	get gid(): string | null {
		return this._config._gid
	}
	get token(): string | null {
		return this._config._token
	}
	public get config(): GoatConfig {
		return this._config
	}
	//Sets a config, if a token exists, we are logged
	public set config(config: GoatConfig) {
		this._config = config
		this.isLoggedIn = !!config._token
	}
	//Creates a new config and sets a token
	set login({ token, uid }) {
		this._config._token = token
		this._config._gid = uid
		this.isLoggedIn = true
		console.warn(`Logged in on ${this.server} as ${this.gid}`)
	}
	_isGautier(): boolean {
		return this.gid === '699002934'
	}
	_logout(): void {
		this.config._token = null
		this.isLoggedIn = false
	}
}

export const goat = new Goat()
