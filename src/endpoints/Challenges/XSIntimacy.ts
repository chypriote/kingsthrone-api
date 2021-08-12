import { GoatResource } from '../../GoatResource'
import { XSIntimacyStatus } from '../../../types'

export class XSIntimacy extends GoatResource {
	async eventInfos(): Promise<XSIntimacyStatus> {
		const data = await this.request({ huodong: { hd314Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 314, id: id } } })
	}
}
