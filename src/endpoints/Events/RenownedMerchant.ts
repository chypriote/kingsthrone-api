import { GoatResource } from '../../GoatResource'
import {
	CHERISHED_WISH_TYPE,
	CherishedWishInfo,
	CherishedWishStatus,
	ContinualTopUpStatus,
	EventRank,
	LoginRewardsStatus,
	RenownedMerchantEvent,
} from '../../../types'

export class RenownedMerchant extends GoatResource {
	//anniversaryPullInWishTree = LoginRewards
	//anniversaryPullInWishTree.vip_rwd = Continual Top-up
	//anniversaryPullInGift = limited Offers
	async eventInfos(): Promise<RenownedMerchantEvent> {
		const data = await this.request({ huodong2: { hd1231Info: [] } })
		return {
			renownedMerchant: data.a.anniversaryPullIn,
			cherishedWish: data.a.anniversaryPullInWishTree,
			continualTopUp: data.a.czhuodong.anniversaryPullInDay,
		}
	}
	async getRanking(): Promise<EventRank[]> {
		const data = await this.request({ huodong2: { hd1231Rank: [] } })
		return data.a.anniversaryPullIn
	}

	async buyEmblem(count = 1): Promise<void> {
		await this.request({ huodong2: { hd1231Buy: { id: count } } })
	}
	async useEmblem(count = 1): Promise<void> {
		await this.request({ huodong2: { hd1231Wish: { id: count } } })
	}

	async buyExchangeItem(id: number, count = 1): Promise<void> {
		await this.request({ huodong2: { hd1245Exchange: { num: count, id: id } } })
	}

	/** Login Rewards */
	async loginRewardsInfo(): Promise<LoginRewardsStatus> {
		const data = await this.request({ huodong2: { hd1231Info: [] } })
		return data.a.anniversaryPullInWeekly
	}
	async getTaskReward(day: number, type: number): Promise<void> {
		await this.request({ huodong2: { hd1243GetTaskReward: { day: day, type: type } } })
	}

	/** Wish tree */
	async wishTreeInfos(): Promise<CherishedWishStatus> {
		const data = await this.request({ huodong2: { hd1209Info: [] } })
		return data.a.anniversaryPullInWishTree
	}
	async setWishTreeReward(id: number, day: number, pos: number, type: CHERISHED_WISH_TYPE): Promise<void> {
		await this.request({ huodong2: { hd1209SelectRwd: { type: type, pos: pos, dc: day, id: id } } })
	}
	async getWishTreeReward(type: CHERISHED_WISH_TYPE): Promise<void> {
		await this.request({ huodong2: { hd1209Rwd: { type: type } } })
	}
	/** Top Up */
	async continualTopUpInfos(): Promise<ContinualTopUpStatus> {
		const data = await this.request({ huodong2: { hd1246Info: [] } })
		return data.a.czhuodong.anniversaryPullInDay
	}
	async getContinualTopUp(): Promise<void> {
		await this.request({ huodong2: { hd1246GetBox: [] } })
	}
}
