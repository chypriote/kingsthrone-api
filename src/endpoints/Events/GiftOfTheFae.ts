import { GoatResource } from '../../GoatResource'
import { GiftOfTheFaeStatus } from '../../../types'

export class GiftOfTheFae extends GoatResource {
	async eventInfos(): Promise<GiftOfTheFaeStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1299Info':[] },'rsn':'8maoejkjoam' })
		return data.a.weekHangUp
	}

	async openFreeTree(): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1299OpenFreeGj':[] },'rsn':'1qktrrwteku' })
	}
	async useQuickCollect(tree = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1299Fast':{ 'id':tree } },'rsn':'9zmrccbzmcs' })
	}
	async useExtraOutput(tree = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1299Extra':{ 'id':tree } },'rsn':'9rnsrjzimt' })
	}

	async selectPoolReward(rwd = 1, pool= 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1299Choose':{ 'idd':rwd,'id':pool } },'rsn':'4cimchmfav' })
	}
	async pourDew(water: number, pool = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1299ZhuShui':{ 'num':water,'id':pool } },'rsn':'9zmrccbbtzm' })
	}
}
