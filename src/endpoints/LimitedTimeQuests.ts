import { GoatResource } from '../GoatResource'
import { LTQ_TYPES, LTQStatus } from '../../types'

export class LimitedTimeQuests extends GoatResource {
	async spendGems(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd201Info: [] } })
		return data.a.xshuodong.cash
	}
	async loseSoldiers(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd202Info: [] } })
		return data.a.xshuodong.juanzhou
	}
	async spendGold(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd203Info: [] } })
		return data.a.xshuodong.coin
	}
	async studyManuscripts(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd204Info: [] } })
		return data.a.xshuodong.juanzhou
	}
	async increaseKP(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd206Info: [] } })
		return data.a.xshuodong.shili
	}
	async enactDecrees(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd207Info: [] } })
		return data.a.xshuodong.zhengwu
	}
	async login(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd208Info: [] } })
		return data.a.xshuodong.login
	}
	async tourneyScore(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd209Info: [] } })
		return data.a.xshuodong.yamen
	}
	async arrangeMarriages(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd210Info: [] } })
		return data.a.xshuodong.lianyin
	}
	async challengeTokens(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd216Info: [] } })
		return data.a.xshuodong.tiaozhanshu
	}
	async energyDraughtQuest(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd220Info: [] } })
		return data.a.xshuodong.huolidan
	}
	async increaseCharm(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd221Info: [] } })
		return data.a.xshuodong.meilizhi
	}
	async randomVisitsQuest(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd1045Info: [] } })
		return data.a.xshuodong.sjxo
	}
	async claimRewards(type: LTQ_TYPES): Promise<void> {
		const data = JSON.parse(`{ "huodong":{ "hd${type}Rwd":[] } }`)
		await this.request(data)
	}
}
