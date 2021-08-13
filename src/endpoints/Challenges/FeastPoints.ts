import { GoatResource } from '../../GoatResource'
import { FeastPointsStatus } from '../../../types'

export class FeastPoints extends GoatResource {
	async eventInfos(): Promise<FeastPointsStatus> {
		const data = await this.request({ huodong: { hd256Info: [] } })
		return { ...data.a.jiulou, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 256, id: id } } })
	}
}
