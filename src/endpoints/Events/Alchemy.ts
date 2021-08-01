import { GoatResource } from '../../GoatResource'
import { AlchemyStatus, EventRank } from '../../../types'

export class Alchemy extends GoatResource {
	async eventInfos(): Promise<AlchemyStatus> {
		const data = await this.request({ huodong: { hd1092Info: [] } })
		return data.a.alchemyHuoDong
	}
	async getRanking(): Promise<EventRank[]> {
		const data = await this.request({ huodong: { hd1092Rank: [] } })
		return data.a.alchemyHuoDong.list
	}

	async claimQuest(id: number): Promise<void> {
		await this.request({ huodong: { hd1092Task: { id: id } } })
	}
	async receiveGift(uid: number, son: number): Promise<void> {
		await this.request({ huodong: { hd1092Social: { type: 'receive', uid: uid, id: son } } })
	}
	async sendGift(uid: number, son: number): Promise<void> {
		await this.request({ huodong: { hd1092Social: { type: 'send', uid: uid, id: son } } })
	}
	async claimCompleteReward(): Promise<void> {
		await this.request({ huodong: { hd1092GetCompleteRwd: [] } })
	}

	async trade(iron = 0, bottle = 0, maiden: number): Promise<void> {
		await this.request({ huodong: { hd1092GiveGift: { milk_num: iron, biscuits_num: bottle, id: maiden } } })
	}
	async forge(shard = 0, ore = 0, hero: number): Promise<void> {
		await this.request({ huodong: { hd1092Forging: { refine_num: shard, coal_num: ore, id: hero } } })
	}
}
