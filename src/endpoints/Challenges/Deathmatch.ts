import { GoatResource } from '../../GoatResource'
import { DMOngoingFight, DMRanking, OpponentHero, Reward, TourneyShopItem } from '../../../types'

export class Deathmatch extends GoatResource {
	async dmGetTourneyInfos(): Promise<DMOngoingFight> {
		const data = await this.request({ kuayamen: { jdComeHd: [] } })
		return data.a.jdyamen
	}

	async dmStartTourneyFight(): Promise<DMOngoingFight> {
		await this.request({ kuayamen: { jdSjtz: [] } })
		const data = await this.request({ kuayamen: { jdPiZhun: [] } })
		return data.a.jdyamen
	}

	async dmStartTokenTourneyFight(): Promise<DMOngoingFight> {
		const data = await this.request({ kuayamen: { jdChushi: [] } })
		return data.a.jdyamen
	}

	async dmBuyTourneyBoost(item: TourneyShopItem): Promise<DMOngoingFight> {
		const data = await this.request({ kuayamen: { jdSeladd: { id: item.id } } })
		return data.a.jdyamen
	}

	async dmFightHero(hero: OpponentHero): Promise<DMOngoingFight> {
		const data = await this.request({ kuayamen: { jdFight: { id: hero.id } } })
		return data.a.jdyamen
	}

	async dmGetReward(): Promise<Reward> {
		const data = await this.request({ kuayamen: { jdGetrwd: [] } })
		return data.a.jdyamen.win.rwd
	}

	async dmChallengeOpponent(uid: string, hid: number): Promise<DMOngoingFight> {
		const data = await this.request({ kuayamen: { jdZhuiSha: { fuid: uid, hid: hid } } })
		return data.a.jdyamen
	}

	async dmGetRankings(): Promise<DMRanking> {
		const data = await this.request({ kuayamen: { jdGetRank: { type: 1 } } })
		return data.a.jdyamen
	}
}
