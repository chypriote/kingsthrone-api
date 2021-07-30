import { GoatResource } from '../../GoatResource'
import { PEOPLES_MONARCH_ITEM, PeoplesMonarchStatus } from '../../../types'

export class PeoplesMonarch extends GoatResource {
	async eventInfos(): Promise<PeoplesMonarchStatus> {
		const data = await this.request({ 'huodong':{ 'hd282Info':[] },'rsn':'3ehhpkehzef' })
		return data.a.penalize
	}

	async buyShopItem(id: PEOPLES_MONARCH_ITEM): Promise<void> {
		await this.request({ 'huodong':{ 'hd282buy':{ 'id':id } },'rsn':'2yaaqnyyybq' })
	}
	async useItem(id: PEOPLES_MONARCH_ITEM): Promise<void> {
		await this.request({ 'huodong':{ 'hd282play':{ 'id':id } },'rsn':'9rnnmcrrcc' })
	}
}
