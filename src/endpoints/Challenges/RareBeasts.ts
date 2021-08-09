import { GoatResource } from '../../GoatResource'
import { RareBeastsStatus } from '../../../types'

export class RareBeasts extends GoatResource {
	async eventInfos(): Promise<RareBeastsStatus> {
		const data = await this.request({ huodong: { hd1098Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 1098, id: id } } })
	}
}
