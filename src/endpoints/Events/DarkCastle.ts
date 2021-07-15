import { GoatResource } from '../../GoatResource'
import { EventRank } from '../../../types/goat/events/Event'
import { DarkCastle as DarkCastleEndpoint } from '../../../types/Endpoints/Events/DarkCastle'
import { DarkCastleStatus } from '../../../types/goat/Events/DarkCastle'

export class DarkCastle extends GoatResource implements DarkCastleEndpoint {
	async eventInfos(): Promise<DarkCastleStatus> {
		const data = await this.request({ 'huodong': { 'hd1020Info': [] }, 'rsn': '1tbkeuueik' })
		return data.a.wshuodong
	}

	async getRanking(): Promise<EventRank[]> {
		const data = await this.request({ 'huodong': { 'hd1020Rank': [] }, 'rsn': '4cifhgiicf' })
		return data.a.wshuodong.wslist
	}
}
