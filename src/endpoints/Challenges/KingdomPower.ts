import { GoatResource } from '../../GoatResource'
import { KingdomPowerStatus } from '../../../types'

export class KingdomPower extends GoatResource {
	async eventInfos(): Promise<KingdomPowerStatus> {
		const data = await this.request({ huodong: { hd252Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 252, id: id } } })
	}
}
