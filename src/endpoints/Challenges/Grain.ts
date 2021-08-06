import { GoatResource } from '../../GoatResource'
import { GrainStatus } from '../../../types'

export class Grain extends GoatResource {
	async eventInfos(): Promise<GrainStatus> {
		const data = await this.request({ huodong: { hd259Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 259, id: id } } })
	}
}
