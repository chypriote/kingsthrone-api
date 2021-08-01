import { GoatResource } from '../../GoatResource'
import { AllianceIntimacyStatus } from '../../../types'

export class AllianceIntimacy extends GoatResource {
	async eventInfos(): Promise<AllianceIntimacyStatus> {
		const data = await this.request({ 'huodong':{ 'hd312Info':[] },'rsn':'4cimmaabhg' })
		return data.a.cbhuodong
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hdCbGetRwd':{ 'huodongId':312,'id': id } },'rsn':'1tbabubkti' })
	}
}
