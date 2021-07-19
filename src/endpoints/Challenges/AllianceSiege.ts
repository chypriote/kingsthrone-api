import { GoatResource } from '../../GoatResource'
import { AllianceSiegeStatus } from '../../../types/Challenges/AllianceSiege'

export class AllianceSiege extends GoatResource {
	async eventInfos(): Promise<AllianceSiegeStatus> {
		const data = await this.request({ 'rsn':'5ywhevjahwy','kuaCLubBattle':{ 'getInfo':[] } })
		return data.a.kuaCLubBattle
	}
}
