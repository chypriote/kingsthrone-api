import { GoatResource } from '../../GoatResource'
import { RaiseChildrenStatus } from '../../../types'

export class RaiseChildren extends GoatResource {
	async eventInfos(): Promise<RaiseChildrenStatus> {
		const data = await this.request({ huodong: { hd311Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 311, id: id } } })
	}
}
