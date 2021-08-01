import { GoatResource } from '../../GoatResource'
import { PEOPLES_MONARCH_ITEM, PeoplesMonarchStatus } from '../../../types'

export class PeoplesMonarch extends GoatResource {
	async eventInfos(): Promise<PeoplesMonarchStatus> {
		const data = await this.request({ huodong: { hd282Info: [] } })
		return data.a.penalize
	}

	async buyShopItem(id: PEOPLES_MONARCH_ITEM): Promise<void> {
		await this.request({ huodong: { hd282buy: { id: id } } })
	}
	async useItem(id: PEOPLES_MONARCH_ITEM): Promise<void> {
		await this.request({ huodong: { hd282play: { id: id } } })
	}
	async exchangeItem(id: number): Promise<void> {
		await this.request({ huodong: { hd282exchange: { id: id } } })
	}
}
