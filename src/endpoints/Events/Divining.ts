import { GoatResource } from '../../GoatResource'
import { DiviningStatus } from '../../../types'

export class Divining extends GoatResource {
	async eventInfos(): Promise<DiviningStatus> {
		const data = await this.request({ huodong: { hd1123Info: [] } })
		return data.a.Astrology
	}

	async selectStarSign(id = 3): Promise<void> {
		await this.request({ huodong: { hd1123select: { id: id } } })
	}

	async stargaze(): Promise<void> {
		await this.request({ huodong: { hd1123guanxing: [] } })
	}
	async buyGlobes(count = 1): Promise<void> {
		await this.request({ huodong: { hd1123BuyItem: { num: count } } })
	}
	async divine(count = 1): Promise<void> {
		await this.request({ huodong: { hd1123zhanxing: { num: count } } })
	}

	async getShopItem(id: number): Promise<void> {
		await this.request({ huodong: { hd1123Exchange: { num: 1, 'id': id } } })
	}
}
