import { GoatResource } from '../../GoatResource'
import { HeroesTrialFightResult, HeroesTrialStatus } from '../../../types'


export class HeroesTrial extends GoatResource {
	async eventInfos(): Promise<HeroesTrialStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1299Info':[] },'rsn':'8maoejkjoam' })
		return data.a.brave
	}

	async selectHero(id: number): Promise<void>  {
		await this.request({ 'huodong':{ 'hd1083SelectHero':{ 'heroId':id } },'rsn':'3ehhpkekrnp' })
	}
	async fight(id: number): Promise<HeroesTrialFightResult> {
		const data = await this.request({ 'huodong':{ 'hd1083Fight':{ 'heroId':id } },'rsn':'4ciifvaccb' })
		return data.a.brave
	}

	async buyTutorsGift(count = 1): Promise<void> {
		await this.request({ 'huodong':{ 'hd1083BuyNum':{ 'num':count } },'rsn':'5wppyejjfy' })
	}
	async refreshHero(id: number): Promise<void>  {
		await this.request({ 'huodong':{ 'hd1083TiLi':{ 'heroId':id } },'rsn':'1qkkturuwri' })
	}

	async claimReward(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd1083GetRwd':{ 'id':id } },'rsn':'6sxxwbyyyuy' })
	}
}

