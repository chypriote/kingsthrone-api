import { GoatResource } from '../../GoatResource'
import { CharmStatus } from '../../../types'

export class Charm extends GoatResource {
	async eventInfos(): Promise<CharmStatus> {
		const data = await this.request({ 'huodong':{ 'hd258Info':[] } })
		return data.a.cbhuodong
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 258, id: id } } })
	}
}
