import { GoatResource } from '../GoatResource'
import { LTQ_TYPES, LTQStatus } from '../../types'

export class LimitedTimeQuests extends GoatResource {
	async loginQuest(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd208Info':[] },'rsn':'2myyaxwhhyx' })
		return data.a.xshuodong.login
	}
	async gemsQuest(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd201Info':[] },'rsn':'8arrjvoiik' })
		return data.a.xshuodong.cash
	}
	async marriageQuest(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd210Info':[] },'rsn':'7ycclsglpvg' })
		return data.a.xshuodong.lianyin
	}
	async randomVisitsQuest(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd1045Info':[] },'rsn':'1tbbqeueiu' })
		return data.a.xshuodong.sjxo
	}
	async energyDraughtQuest(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd220Info':[] },'rsn':'3zeehfwzkhe' })
		return data.a.xshuodong.huolidan
	}
	async claimRewards(type: LTQ_TYPES): Promise<void> {
		const data = JSON.parse(`{ "huodong":{ "hd${type}Rwd":[] },"rsn":"6xwwbpglbgg" }`)
		await this.request(data)
	}
}
