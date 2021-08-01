import { GoatResource } from '../GoatResource'
import { CouncilStatus, GameInfos, PunishmentResult, UserProfile } from '../../types'
import { cloneDeep } from 'lodash'

export class Profile extends GoatResource {
	gameInfos?: GameInfos

	async getGameInfos(force = false): Promise<GameInfos> {
		if (!force && this.gameInfos) {
			return this.gameInfos
		}

		const game = await this.request({ guide: { login: { language: 1, platform: 'gaotukc', ug: '' } } })
		this.gameInfos = cloneDeep(game.a)

		return this.gameInfos
	}

	async finishTraining(): Promise<boolean> {
		try {
			await this.request({ school: { allover: [] } })
		} catch (e) {
			return false
		}
		return true
	}
	async startTraining(): Promise<void> {
		await this.request({ school: { allstart: [] } })
	}
	async sendTraining(id: number, dummy = 1): Promise<void> {
		await this.request({ school: { start: { id: dummy, hid: id } } })
	}

	async visitCouncil(): Promise<CouncilStatus> {
		const data = await this.request({ hanlin: { comein: { fuid: this._goat.gid } } })
		return data.a.hanlin
	}
	async hostCouncil(num = 3): Promise<void> {
		await this.request({ hanlin: { opendesk: { num, isPush: 1 } } })
	}

	async punishPrisoner(): Promise<PunishmentResult> {
		const data = await this.request({ laofang: { bianDa: { type: 1 } } })
		return data.a.laofang
	}

	async getUser(gid: string): Promise<UserProfile | null> {
		const profile = await this.request({ user: { getFuserMember: { id: gid } } })

		if (profile?.a?.system?.errror) {
			return null
		}

		return profile.a.user.fuser
	}

	async levelUpKingdom(): Promise<void> {
		await this.request({ user: { shengguan: [] } })
	}
}
