import { GoatResource } from '../../GoatResource'
import { CORONATION_ITEM, CoronationStatus } from '../../../types'

export class Coronation extends GoatResource {
	async eventInfos(): Promise<CoronationStatus> {
		const data = await this.request({ huodong: { hd280Info: [] } })
		return data.a.xghuodong
	}

	async buyShopItem(id: CORONATION_ITEM): Promise<void> {
		await this.request({ huodong: { hd280buy: { id: id } } })
	}
	async useItem(id: CORONATION_ITEM): Promise<void> {
		await this.request({ huodong: { hd280play: { id: id } } })
	}
}
