import { GoatResource } from '../../GoatResource'
import { TourneyStatus } from '../../../types'

export class Tourney extends GoatResource {
	async eventInfos(): Promise<TourneyStatus> {
		const data = await this.request({ huodong: { hd254Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 254, id: id } } })
	}
}
