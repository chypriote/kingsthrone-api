import { GoatResource } from '../../GoatResource'
import { IntimacyStatus } from '../../../types'

export class Intimacy extends GoatResource {
	async eventInfos(): Promise<IntimacyStatus> {
		const data = await this.request({ huodong: { hd253Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 253, id: id } } })
	}
}
