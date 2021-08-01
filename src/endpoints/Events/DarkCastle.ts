import { GoatResource } from '../../GoatResource'
import { DarkCastleStatus, EventRank } from '../../../types'

export class DarkCastle extends GoatResource {
	async eventInfos(): Promise<DarkCastleStatus> {
		const data = await this.request({ huodong: { hd1020Info: [] } })
		return data.a.wshuodong
	}

	async getRanking(): Promise<EventRank[]> {
		const data = await this.request({ huodong: { hd1020Rank: [] } })
		return data.a.wshuodong.wslist
	}
}
