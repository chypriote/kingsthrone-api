import { GoatResource } from '../GoatResource'
import { ITourneyStatus, OpponentHero, Reward, TourneyShopItem } from '../../types'

export class Tourney extends GoatResource {
	async getTourneyInfos(): Promise<ITourneyStatus> {
		const data = await this.request({ yamen: { yamen: [] } })
		return data.a.yamen
	}

	async getTourneyAdok(): Promise<ITourneyStatus> {
		const data = await this.request({ user: { adok: { label: 'yamen' } } })
		return data.a.warHorse
	}

	async startTourneyFight(): Promise<ITourneyStatus> {
		const data = await this.request({ yamen: { pizun: [] } })
		return data.a.yamen
	}

	async startTokenTourneyFight(): Promise<ITourneyStatus> {
		const data = await this.request({ yamen: { chushi: [] } })
		return data.a.yamen
	}

	async buyTourneyBoost(item: TourneyShopItem): Promise<ITourneyStatus> {
		const data = await this.request({ yamen: { seladd: { id: item.id } } })
		return data.a.yamen
	}

	async fightHero(hero: OpponentHero): Promise<ITourneyStatus> {
		const data = await this.request({ yamen: { fight: { id: hero.id } } })
		return data.a.yamen
	}

	async getReward(): Promise<Reward> {
		const data = await this.request({ yamen: { getrwd: [] } })
		return data.a.yamen.win.rwd
	}

	async challengeOpponent(uid: string, hid: number): Promise<ITourneyStatus> {
		const data = await this.request({ yamen: { zhuisha: { fuid: uid, hid: hid } } })
		return data.a.yamen
	}

	async getTourneyReward(id: number): Promise<boolean> {
		try {
			await this.request({ yamen: { getdilyrwd: { id } } })
			return true
		} catch (e) {
			/*We want to ignore completely*/
		}
		return false
	}
}
