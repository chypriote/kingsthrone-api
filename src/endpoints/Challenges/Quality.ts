import { GoatResource } from '../../GoatResource'
import { QualityStatus } from '../../../types'

export class Quality extends GoatResource {
	async eventInfos(): Promise<QualityStatus> {
		const data = await this.request({ huodong: { hd1078Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 1078, id: id } } })
	}
}
