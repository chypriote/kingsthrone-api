import { GoatResource } from '../../GoatResource'
import { RareBeastCarnivalStatus } from '../../../types/Events/RareBeastCarnival'

export class RareBeastCarnival extends GoatResource {
	async eventInfos(): Promise<RareBeastCarnivalStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1168Info':[] } })
		return data.a.RareComing
	}
}
