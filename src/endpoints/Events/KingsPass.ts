import { GoatResource } from '../../GoatResource'
import { EventPass } from '../../../types'

export class KingsPass extends GoatResource {
	async eventInfos(): Promise<EventPass> {
		const data = await this.request({ huodong: { hd1086Info: [] } })
		return {
			shop: data.a.warOrderShop.shop,
			pass: data.a.warOrder,
		}
	}

	async claimLevel(id: number): Promise<void> {
		await this.request({ huodong: { hd1086getrwd: { type: 0, id: id } } })
	}
	async claimAllLevels(): Promise<void> {
		await this.request({ huodong: { hd1086getrwd: { type: 0, id: 0 } } })
	}
}
