import { GoatResource } from '../../GoatResource'
import { AlliancePurchaseStatus } from '../../../types'

export class AlliancePurchase extends GoatResource {
	async eventInfos(): Promise<AlliancePurchaseStatus> {
		const data = await this.request({ huodong: { hd445Info: [] } })
		return data.a.bhczhuodong
	}

	async claimReward(day: number, id: number): Promise<void> {
		await this.request({ huodong: { hd445Rwd: { day: day, id: id } } })
	}
}
