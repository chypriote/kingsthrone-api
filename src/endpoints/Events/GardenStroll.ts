import { GoatResource } from '../../GoatResource'
import { EventRankWithServer, GardenStrollPointExchange, GardenStrollStatus } from '../../../types'

export class GardenStroll extends GoatResource {
	async eventInfos(): Promise<GardenStrollStatus> {
		const data = await this.request({ 'huodong': { 'hd336Info': [] }, 'rsn': '8jmaoekjmvm' })
		return data.a.xjhuodong.xijiao
	}
	async getRanking(): Promise<EventRankWithServer[]> {
		const data = await this.request({ 'huodong': { 'hd336KuaRank': [] }, 'rsn': '2yaqnxywnqx' })
		return data.a.xjhuodong.xjkualist
	}
	async getShop(): Promise<GardenStrollPointExchange> {
		const data = await this.request({ 'huodong':{ 'hd336shop':[] },'rsn':'6wuxlxwbuk' })
		return data.u.xjhuodong.xijiao
	}

	async buyBlossom(count: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd336Buy':{ 'num':count } },'rsn':'3zehwzfpske' })
	}

	async walk(count = 1): Promise<void> {
		await this.request({ 'huodong':{ 'hd336Zou':{ 'num':count,'type':0 } },'rsn':'5jywrjfhjyr' })
	}
	async openChest(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd336Get':{ 'id':id } },'rsn':'6sxwksgbypx' })
	}
}
