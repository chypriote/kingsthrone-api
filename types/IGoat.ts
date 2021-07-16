import {
	Account, Alliance, Children, Expeditions, Feasts,
	HallOfFame, Items, Kingdom, Maidens, Mail, Processions, Profile,
	Rankings, Rewards, Tourney, WorldBoss, XServerTourney, Deathmatch,
	DarkCastle, GardenStroll, Picnic, TreasureHunt, Renovation, DragonSlaying,
	JewelsOfLuck
} from './endpoints'

export interface IGoat {
	isLoggedIn: boolean

	account: Account
	alliance: Alliance
	children: Children
	expeditions: Expeditions
	feasts: Feasts
	hallOfFame: HallOfFame
	items: Items
	kingdom: Kingdom
	maidens: Maidens
	mail: Mail
	processions: Processions
	profile: Profile
	rankings: Rankings
	rewards: Rewards
	tourney: Tourney
	worldBoss: WorldBoss

	challenges: {
		xServerTourney: XServerTourney
		deathmatch: Deathmatch
	}

	events: {
		darkCastle: DarkCastle
		gardenStroll: GardenStroll
		picnic: Picnic
		treasureHunt: TreasureHunt
		castle: Renovation
		dragonSlaying: DragonSlaying
		jewelsOfLuck: JewelsOfLuck
	}

	_setServer(server: string): this
	_getServer(): string
	_setVersion(version: string): this
	_getVersion(): string
	_setGid(gid: string): this
	_getGid(): string|null
	_setToken(token: string): this
	_getToken(): string|null
}
