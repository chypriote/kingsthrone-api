import { GoatResource } from '../../GoatResource'
import { SpendGoldStatus } from '../../../types'

export class SpendGold extends GoatResource {
	async eventInfos(): Promise<SpendGoldStatus> {
		const data = await this.request({ 'huodong': { 'hd255Info': [] } })
		return data.a.cbhuodong
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ 'huodong': { 'hdCbGetRwd': { 'huodongId': 255, 'id': id } } })
	}
}
