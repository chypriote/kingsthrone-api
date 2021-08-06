import { GoatResource } from '../../GoatResource'
import { HuntersTavernStatus } from '../../../types'

export class HuntersTavern extends GoatResource {
	async eventInfos(): Promise<HuntersTavernStatus> {
		const data = await this.request({ 'huodong':{ 'hd1091Info':[] } })
		return data.a.floatingIslandEgg
	}
}
