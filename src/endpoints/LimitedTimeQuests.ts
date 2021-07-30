import { GoatResource } from '../GoatResource'
import { LTQStatus } from '../../types'

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
	async randomVisits(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd1045Info':[] },'rsn':'1tbbqeueiu' })
		return data.a.xshuodong.sjxo
	}
	async energyDraught(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd220Info':[] },'rsn':'3zeehfwzkhe' })
		return data.a.xshuodong.huolidan
	}
}
