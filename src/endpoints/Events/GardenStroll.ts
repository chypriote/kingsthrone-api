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
}
