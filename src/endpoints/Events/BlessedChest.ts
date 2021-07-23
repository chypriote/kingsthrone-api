import { GoatResource } from '../../GoatResource'
import { BlessedChestStatus } from '../../../types'

export class BlessedChest extends GoatResource {
	async eventInfos(): Promise<BlessedChestStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1276Info':[] },'rsn':'4afcvvagfiv' })
		return data.a.continuousRechargeBox
	}
}
