import { GoatResource } from '../GoatResource'
import { LTQ_TYPES, LTQStatus } from '../../types'

export class LimitedTimeQuests extends GoatResource {
	async spendGems(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd201Info':[] },'rsn':'8arrjvoiik' })
		return data.a.xshuodong.cash
	}
	async loseSoldiers(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd202Info':[] },'rsn':'3zeehwkzenf' })
		return data.a.xshuodong.juanzhou
	}
	async spendGold(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd203Info':[] },'rsn':'8arrkijoko' })
		return data.a.xshuodong.coin
	}
	async studyManuscripts(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd204Info':[] },'rsn':'7coogvxyvp' })
		return data.a.xshuodong.juanzhou
	}
	async increaseKP(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd206Info':[] },'rsn':'6wuugyswkx' })
		return data.a.xshuodong.shili
	}
	async enactDecrees(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd207Info':[] },'rsn':'8jmmaermxmo' })
		return data.a.xshuodong.zhengwu
	}
	async login(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd208Info':[] },'rsn':'2myyaxwhhyx' })
		return data.a.xshuodong.login
	}
	async tourneyScore(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd209Info':[] },'rsn':'6xwwblxypbk' })
		return data.a.xshuodong.yamen
	}
	async arrangeMarriages(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd210Info':[] },'rsn':'7ycclsglpvg' })
		return data.a.xshuodong.lianyin
	}
	async energyDraughtQuest(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd220Info':[] },'rsn':'3zeehfwzkhe' })
		return data.a.xshuodong.huolidan
	}
	async randomVisitsQuest(): Promise<LTQStatus> {
		const data = await this.request({ 'huodong':{ 'hd1045Info':[] },'rsn':'1tbbqeueiu' })
		return data.a.xshuodong.sjxo
	}
	async claimRewards(type: LTQ_TYPES): Promise<void> {
		const data = JSON.parse(`{ "huodong":{ "hd${type}Rwd":[] },"rsn":"6xwwbpglbgg" }`)
		await this.request(data)
	}
}
