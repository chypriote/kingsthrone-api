import { GoatResource } from '../../GoatResource'
import { EventRank, RenownedMerchantStatus } from '../../../types'

export class RenownedMerchant extends GoatResource {
	//anniversaryPullInWishTree = LoginRewards
	//anniversaryPullInWishTree.vip_rwd = Continual Top-up
	//anniversaryPullInGift = limited Offers
	async eventInfos(): Promise<RenownedMerchantStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1231Info':[] },'rsn':'1qktiqatatr' })
		return data.a.anniversaryPullIn
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
}
