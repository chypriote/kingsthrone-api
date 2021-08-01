import { GoatResource } from '../../GoatResource'
import { EventRank, PicnicStatus } from '../../../types'

export class Picnic extends GoatResource {
	async eventInfos(): Promise<PicnicStatus> {
		const data = await this.request({ huodong: { hd1028Info: [] } })
		return data.a.gehuodong
	}

	async claimQuest(id: number): Promise<void> {
		await this.request({ huodong: { hd1028Task: { id: id } } })
	}

	async getRankings(): Promise<EventRank> {
		const data = await this.request({ huodong: { hd1028Rank: [] } })
		return data.a.gehuodong.list
	}
}
