import { GoatResource } from '../../GoatResource'
import { AllianceExperienceStatus } from '../../../types'

export class AllianceExperience extends GoatResource {
	async eventInfos(): Promise<AllianceExperienceStatus> {
		const data = await this.request({ huodong: { hd250Info: [] } })
		return data.a.cbhuodong
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 250, id: id } } })
	}
}
