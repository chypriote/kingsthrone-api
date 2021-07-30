import { GoatResource } from '../../GoatResource'
import { GiftingTreeStatus } from '../../../types'

export class GiftingTree extends GoatResource {
	async eventInfos(): Promise<GiftingTreeStatus> {
		const data = await this.request({ 'huodong':{ 'hd1085Info':[] },'rsn':'3hkkewpzzp' })
		return data.a.braveEgg
	}
	async selectReward(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd1085ChoiceRwd':{ 'id':id } },'rsn':'8maaoriaimo' })
	}
	async openBag(pos: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd1085Open':{ 'pos':pos } },'rsn':'1kttubrtiwr' })
	}
}
