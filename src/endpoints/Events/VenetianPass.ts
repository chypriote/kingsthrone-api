import { GoatResource } from '../../GoatResource'
import { EventPass } from '../../../types'

export class VenetianPass extends GoatResource {
	async eventInfos(): Promise<EventPass> {
		const data = await this.request({ huodong2: { hd1241Info: [] } })
		return {
			shop: data.a.anniversaryPullInWarOrderShop.shop,
			pass: data.a.anniversaryPullInWarOrder,
		}
	}

	async claimLevel(id: number): Promise<void> {
		await this.request({ huodong2: { hd1241getrwd: { type: 0, 'id': id } } })
	}
	async claimAllLevels(): Promise<void> {
		await this.request({ huodong2: { hd1241getrwd: { type: 0, id: 0 } } })
	}
	async buyShopItem(id: number): Promise<void> {
		await this.request({ huodong2:{ hd1241BoxExchange:{ num:1, 'id': id } } })
	}
}
