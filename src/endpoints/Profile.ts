import { GoatResource } from '../GoatResource'
import { CouncilStatus, DECREE_TYPE, GameInfos, PunishmentResult, UserProfile } from '../../types'
import { cloneDeep } from 'lodash'

export class Profile extends GoatResource {
	gameInfos?: GameInfos

	async getGameInfos(): Promise<GameInfos> {
		if (this.gameInfos) { return this.gameInfos}

		const game = await this.request({ rsn: '2ynbmhanlb', guide: { login: { language: 1, platform: 'gaotukc', ug: '' } } })
		this.gameInfos = cloneDeep(game.a)

		return this.gameInfos
	}

	async getAllLevies(): Promise<boolean> {
		try {
			await this.request({ 'user': { 'jingYingAll': [] }, 'rsn': '1tabbiiurr' })
		} catch (e) {
			return false
		}
		return true
	}
	async getAllDecreesResources(type: DECREE_TYPE): Promise<boolean> {
		try {
			const data = await this.request({ 'user': { 'yjZhengWu': { 'act': type } }, 'rsn': '1tabbiitbi' })
			return !!data.a.msgwin
		} catch (e) {
			return false
		}
	}

	async finishTraining(): Promise<boolean> {
		try {
			await this.request({ 'rsn': '9zrimzjntjm', 'school': { 'allover': [] } })
		} catch (e) {
			return false
		}
		return true
	}
	async startTraining(): Promise<void> {
		await this.request({ 'rsn': '6wguulskgy', 'school': { 'allstart': [] } })
	}

	async visitCouncil(): Promise<CouncilStatus> {
		const data = await this.request({ 'rsn': '4fcgffigihv', 'hanlin': { 'comein': { 'fuid': this._goat._getGid() } } })
		return data.a.hanlin
	}
	async hostCouncil(num = 3): Promise<void> {
		await this.request({ 'rsn': '3eseehnzfw', 'hanlin': { 'opendesk': { num, 'isPush': 1 } } })
	}

	async punishPrisoner(): Promise<PunishmentResult> {
		const data = await this.request({ 'rsn': '9rsnniccct', 'laofang': { 'bianDa': { 'type': 1 } } })
		return data.a.laofang
	}

	async getUser(gid: string): Promise<UserProfile|null>  {
		const profile = await this.request({ user: { getFuserMember: { id: gid } }, rsn: '1taquiwekk' })

		if (profile?.a?.system?.errror) {
			return null
		}

		return profile.a.user.fuser
	}
}
