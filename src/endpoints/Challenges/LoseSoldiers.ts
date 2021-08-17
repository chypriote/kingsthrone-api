import { GoatResource } from '../../GoatResource'
import { LoseSoldiersStatus } from '../../../types'

export class LoseSoldiers extends GoatResource {
	async eventInfos(): Promise<LoseSoldiersStatus> {
		const data = await this.request({ huodong: { hd257Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 257, id: id } } })
	}
}
