import { GoatResource } from '../../GoatResource'
import { AlliancePowerStatus } from '../../../types'

export class AlliancePower extends GoatResource {
	async eventInfos(): Promise<AlliancePowerStatus> {
		const data = await this.request({ huodong: { hd310Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 310, id: id } } })
	}
}
