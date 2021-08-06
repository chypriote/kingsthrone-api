import { GoatResource } from '../../GoatResource'
import { AllianceSiegeBattle } from '../../../types'
import { BATTLE_STATUS } from '../../../types/Challenges/AllianceSiege'

export class AllianceSiege extends GoatResource {
	async eventInfos(): Promise<AllianceSiegeBattle> {
		const data = await this.request({ 4: { getInfo: [] } })
		return data.a.kuaCLubBattle
	}

	async attackWall(count = 1): Promise<BATTLE_STATUS> {
		const data = await this.request({ 4: { play: { type: 2, uid: 0, num: count } } })
		return data.a.type
	}
	async attackGeneral(count = 1): Promise<BATTLE_STATUS> {
		const data = await this.request({ 4: { play: { type: 3, uid: 0, num: count } } })
		return data.a.type
	}
	async attackMember(uid: string, count = 1): Promise<void> {
		await this.request({ 4: { play: { type: 4, uid: uid, num: count } } })
	}
	async claimTaskReward(id: number): Promise<void> {
		await this.request({ 4: { getTaskRewards: { id: id } } })
	}
	async buySiegeWeapon(count = 1): Promise<void> {
		await this.request({ 4: { buyBattleNum: { num: count } } })
	}
	async buyDailyShop(id: number): Promise<void> {
		await this.request({ 4: { dayShopBuy: { num: 1, id: id } } })
	}
	async buyClassicShop(id: number): Promise<void> {
		await this.request({ 4: { shopBuy: { num: 1, id: 5 } } })
	}
}
