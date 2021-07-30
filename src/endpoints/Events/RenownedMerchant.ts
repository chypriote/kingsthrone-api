import { GoatResource } from '../../GoatResource'
import {
	CHERISHED_WISH_TYPE,
	CherishedWishInfo, CherishedWishStatus,
	ContinualTopUpStatus,
	EventRank, LoginRewardsStatus,
	RenownedMerchantEvent
} from '../../../types'

export class RenownedMerchant extends GoatResource {
	//anniversaryPullInWishTree = LoginRewards
	//anniversaryPullInWishTree.vip_rwd = Continual Top-up
	//anniversaryPullInGift = limited Offers
	async eventInfos(): Promise<RenownedMerchantEvent> {
		const data = await this.request({ 'huodong2':{ 'hd1231Info':[] },'rsn':'7xyylgclpsy' })
		return {
			renownedMerchant: data.a.anniversaryPullIn,
			cherishedWish: data.a.anniversaryPullInWishTree,
			continualTopUp: data.a.czhuodong.anniversaryPullInDay,
		}
	}
	async getRanking(): Promise<EventRank[]> {
		const data = await this.request({ 'huodong2':{ 'hd1231Rank':[] },'rsn':'6sxwksgklxb' })
		return data.a.anniversaryPullIn
	}


	async buyEmblem(count = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1231Buy':{ 'id':count } },'rsn':'7xycpxgyggl' })
	}
	async useEmblem(count = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1231Wish':{ 'id':count } },'rsn':'7ycldcsgxgp' })
	}

	async buyExchangeItem(id: number, count = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1245Exchange':{ 'num':count,'id':id } },'rsn':'4cimibhxhb' })
	}

	/** Login Rewards */
	async loginRewardsInfo(): Promise<LoginRewardsStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1231Info':[] },'rsn':'5ywwhyywrpe' })
		return data.a.anniversaryPullInWeekly
	}
	async getTaskReward(day: number, type: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1243GetTaskReward':{ 'day': day,'type':type } },'rsn':'8maaommajkk' })
	}

	/** Wish tree */
	async wishTreeInfos(): Promise<CherishedWishStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1209Info':[] },'rsn':'7ycclycpvyp' })
		return data.a.anniversaryPullInWishTree
	}
	async setWishTreeReward(id: number, day: number, pos: number, type: CHERISHED_WISH_TYPE): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1209SelectRwd':{ 'type': type,'pos':pos,'dc':day,'id':id } },'rsn':'1tbbtuqbwa' }	)
	}
	async getWishTreeReward(type: CHERISHED_WISH_TYPE): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1209Rwd':{ 'type': type } },'rsn':'1kttuktrwua' })
	}
	/** Top Up */
	async continualTopUpInfos(): Promise<ContinualTopUpStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1246Info':[] },'rsn':'1tbbttuuau' })
		return data.a.czhuodong.anniversaryPullInDay
	}
	async getContinualTopUp(): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1246GetBox':[] },'rsn':'1tbbttuuau' })
	}
}
