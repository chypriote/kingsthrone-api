import { GoatResource } from '../GoatResource'
import { ExpeditionInfo, KingdomExpInfo, MerchantInfos } from '../../types'
import { orderBy } from 'lodash'

export class Expeditions extends GoatResource {
	//Merchant ventures
	async getMerchantStatus(): Promise<MerchantInfos> {
		const data = await this.request({ silkroad: { trade: [] } })
		return data.a.trade.Info
	}

	async doMerchantVentures(count: number): Promise<void> {
		if (!count) {
			return
		}
		await this.request({ silkroad: { rootPlay: { gid: count } } })
	}

	//Expeditions
	async getExpeditionsStatus(): Promise<ExpeditionInfo> {
		const data = await this.request({ taofa: { taofa: [] } })
		return data.a.taofa.playInfo
	}

	async doExpeditions(count: number): Promise<ExpeditionInfo> {
		const data = await this.request({ taofa: { rootPlay: { gid: count } } })

		return data.a.taofa.playInfo
	}

	async doExpedition(id: number): Promise<ExpeditionInfo> {
		const data = await this.request({ taofa: { play: { id } } })
		return data.a.taofa.playInfo
	}

	//Kingdom Expeditions
	async getKingdomExpStatus(): Promise<KingdomExpInfo> {
		const data = await this.request({ huodong: { hd1268Info: [] } })

		return data.a.kingdomExpedition.info
	}

	async doKingdomExpedition(level: number): Promise<KingdomExpInfo> {
		const heroes = [
			{ pos: 1, power: 999999999, hid: 41 },
			{ pos: 2, power: 999999999, hid: 3 },
			{ pos: 3, power: 999999999, hid: 8 },
			{ pos: 4, power: 999999999, hid: 58 },
			{ pos: 5, power: 999999999, hid: 52 },
		]
		const data = await this.request({ huodong: { hd1268Play: { heros: heroes, id: level } } })

		return data.a.kingdomExpedition.info
	}

	async claimKingdomExpReward(id: number): Promise<void> {
		await this.request({ huodong: { hd1268getPhaRwd: { id: id } } })
	}
	async claimKingdomFirstReward(id: number): Promise<void> {
		await this.request({ huodong: { hd1268FirstAllRwd: { id: id } } })
	}
	async claimKingdomMyReward(id: number): Promise<void> {
		await this.request({ huodong: { hd1268FirstRwd: { id: id } } })
	}
}
