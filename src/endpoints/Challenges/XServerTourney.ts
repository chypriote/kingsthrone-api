import { GoatResource } from '../../GoatResource'
import { OpponentHero, Reward, TourneyShopItem, XSOngoingFight } from '../../../types'

export class XServerTourney extends GoatResource {
	async xsGetTourneyInfos(): Promise<XSOngoingFight> {
		const data = await this.request({ kuayamen: { yamen: [] } })
		return data.a.kuayamen
	}

	async xsStartTourneyFight(): Promise<XSOngoingFight> {
		const data = await this.request({ kuayamen: { pizun: [] } })
		return data.a.kuayamen
	}

	async xsStartTokenTourneyFight(): Promise<XSOngoingFight> {
		const data = await this.request({ kuayamen: { chushi: [] } })
		return data.a.kuayamen
	}

	async xsBuyTourneyBoost(item: TourneyShopItem): Promise<XSOngoingFight> {
		const data = await this.request({ kuayamen: { seladd: { id: item.id } } })
		return data.a.kuayamen
	}

	async xsFightHero(hero: OpponentHero): Promise<XSOngoingFight> {
		const data = await this.request({ kuayamen: { fight: { id: hero.id } } })
		return data.a.kuayamen
	}

	async xsGetReward(): Promise<Reward> {
		const data = await this.request({ kuayamen: { getrwd: [] } })
		return data.a.kuayamen.win.rwd
	}

	async xsChallengeOpponent(uid: string, hid: number): Promise<XSOngoingFight> {
		const data = await this.request({ kuayamen: { zhuisha: { fuid: uid, hid: hid } } })
		return data.a.kuayamen
	}

	async xsGetTourneyReward(id: number): Promise<boolean> {
		try {
			await this.request({ yamen: { getdilyrwd: { id } } })
			return true
		} catch (e) {
			/*We want to ignore completely*/
		}
		return false
	}
}
