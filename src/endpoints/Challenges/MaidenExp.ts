import { GoatResource } from '../../GoatResource'
import { MaidenExpStatus } from '../../../types'

export class MaidenExp extends GoatResource {
	async eventInfos(): Promise<MaidenExpStatus> {
		const data = await this.request({ huodong: { hd1075Info: [] } })
		return data.a.cbhuodong
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 1075, id: id } } })
	}
}
