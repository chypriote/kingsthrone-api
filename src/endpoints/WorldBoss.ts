import { GoatResource } from '../GoatResource'
import { FIGHT_STATUS } from '../../types/WorldBoss'

export class WorldBoss extends GoatResource {
	async attackMinion(id: number): Promise<FIGHT_STATUS> {
		try {
			await this.request({ wordboss: { hitmenggu: { id } } })
		} catch (e) {
			const msg = e.toString()
			if (msg === 'Error: The battle has ended') {
				return FIGHT_STATUS.BATTLE_ENDED
			}
			if (msg === 'Error: The hero is resting') {
				return FIGHT_STATUS.HERO_RESTING
			}
			console.log(e)
		}
		return FIGHT_STATUS.ONGOING
	}

	async attackBoss(id: number): Promise<FIGHT_STATUS> {
		try {
			await this.request({ wordboss: { hitgeerdan: { id } } })
		} catch (e) {
			const msg = e.toString()
			if (msg === 'Error: The battle has ended') {
				return FIGHT_STATUS.BATTLE_ENDED
			}
			if (msg === 'Error: The hero is resting') {
				return FIGHT_STATUS.HERO_RESTING
			}
			console.log(e)
		}
		return FIGHT_STATUS.ONGOING
	}

	async recoverHero(id: number): Promise<void> {
		await this.request({ wordboss: { comebackmg: { id: id } } })
	}

	async buyItem(id: number): Promise<void> {
		await this.request({ wordboss: { shopBuy: { id: id } } })
	}
}
