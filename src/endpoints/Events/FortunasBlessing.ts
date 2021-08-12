import { GoatResource } from '../../GoatResource'
import { FortunasBlessingStatus } from '../../../types'

export class FortunasBlessing extends GoatResource {
	async eventInfos(): Promise<FortunasBlessingStatus> {
		const data = await this.request({ 'huodong':{ 'hd1122Info':[] } })
		return data.a.newyear
	}
}
