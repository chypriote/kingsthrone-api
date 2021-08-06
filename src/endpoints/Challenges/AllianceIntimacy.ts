import { GoatResource } from '../../GoatResource'
import { AllianceIntimacyStatus } from '../../../types'

export class AllianceIntimacy extends GoatResource {
	async eventInfos(): Promise<AllianceIntimacyStatus> {
		const data = await this.request({ huodong: { hd312Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 312, id: id } } })
	}
}
