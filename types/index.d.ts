/* eslint-disable @typescript-eslint/no-explicit-any */
import * as endpoints from '../src/endpoints'

declare module 'goat' {
	class Goat {
		isLoggedIn: boolean

		account: endpoints.Account
		alliance: endpoints.Alliance
		children: endpoints.Children
		expeditions: endpoints.Expeditions
		feasts: endpoints.Feasts
		hallOfFame: endpoints.HallOfFame
		items: endpoints.Items
		kingdom: endpoints.Kingdom
		maidens: endpoints.Maidens
		mail: endpoints.Mail
		processions: endpoints.Processions
		profile: endpoints.Profile
		rankings: endpoints.Rankings
		rewards: endpoints.Rewards
		tourney: endpoints.Tourney
		worldBoss: endpoints.WorldBoss

		challenges: {
			xServerTourney: endpoints.XServerTourney
			deathmatch: endpoints.Deathmatch
		}

		events: {
			darkCastle: endpoints.DarkCastle
			gardenStroll: endpoints.GardenStroll
			picnic: endpoints.Picnic
			treasureHunt: endpoints.TreasureHunt
			castle: endpoints.Renovation
			dragonSlaying: endpoints.DragonSlaying
			jewelsOfLuck: endpoints.JewelsOfLuck
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
	class GoatResource {
		_goat: Goat
		_data: string|null

		_jsonResponseHandler(response: any): Promise<any>
		login(user: LoginData): Promise<void>
	}
	class LoginData {
		rsn: string
		login: {
			loginAccount: {
				parm1: string
				platform: string
				parm2: string
				parm6: string
				parm3: string
				openkey: string
				openid: string
			}
		}
	}
}

export * from './goat'
