import { GoatResource } from '../GoatResource'
import { LTQ_TYPES, LTQStatus } from '../../types'

export class LimitedTimeQuests extends GoatResource {
	async spendGems(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd201Info: [] } })
		return data.a.xshuodong.cash
	}
	async loseSoldiers(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd202Info: [] } })
		return data.a.xshuodong.amy
	}
	async spendGold(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd203Info: [] } })
		return data.a.xshuodong.coin
	}
	async studyManuscripts(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd204Info: [] } })
		return data.a.xshuodong.juanzhou
	}
	async increaseIntimacy(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd205Info: [] } })
		return data.a.xshuodong.qinmi
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
	async trainingGround(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd211Info: [] } })
		return data.a.xshuodong.school
	}
	async killSiegeBoss(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd215Info: [] } })
		return data.a.xshuodong.jishag2d
	}
	async challengeTokens(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd216Info: [] } })
		return data.a.xshuodong.tiaozhanshu
	}
	async processionsDonation(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd218Info: [] } })
		return data.a.xshuodong.zhenzai
	}
	async goodwillDraughtQuest(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd219Info: [] } })
		return data.a.xshuodong.tilidan
	}
	async energyDraughtQuest(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd220Info: [] } })
		return data.a.xshuodong.huolidan
	}
	async increaseCharm(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd221Info: [] } })
		return data.a.xshuodong.meilizhi
	}
	async attendFeasts(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd222Info: [] } })
		return data.a.xshuodong.fuyanhui
	}
	async damageAllianceBosses(): Promise<LTQStatus> {
		const data = await this.request({ huodong:{ hd223Info:[] } })
		return data.a.xshuodong.clubbosshit
	}
	async killAllianceBosses(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd224Info: [] } })
		return data.a.xshuodong.clubbossjs
	}
	async feastPoints(): Promise<LTQStatus> {
		const data = await this.request({ huodong: { hd225Info: [] } })
		return data.a.xshuodong.jiulouzf
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
