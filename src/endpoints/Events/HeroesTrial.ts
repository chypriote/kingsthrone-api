import { GoatResource } from '../../GoatResource'
import { HeroesTrialFightResult, HeroesTrialStatus } from '../../../types'

export class HeroesTrial extends GoatResource {
	async eventInfos(): Promise<HeroesTrialStatus> {
		const data = await this.request({ huodong: { hd1083Info: [] } })
		return data.a.brave
	}

	async selectHero(id: number): Promise<void> {
		await this.request({ huodong: { hd1083SelectHero: { heroId: id } } })
	}
	async fight(id: number): Promise<HeroesTrialFightResult> {
		const data = await this.request({ huodong: { hd1083Fight: { heroId: id } } })
		return data.a.brave
	}

	async buyTutorsGift(count = 1): Promise<void> {
		await this.request({ huodong: { hd1083BuyNum: { num: count } } })
	}
	async refreshHero(id: number): Promise<void> {
		await this.request({ huodong: { hd1083TiLi: { heroId: id } } })
	}

	async claimReward(id: number): Promise<void> {
		await this.request({ huodong: { hd1083GetRwd: { id: id } } })
	}
}
