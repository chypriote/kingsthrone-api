import { GoatResource } from '../../GoatResource'
import { AllianceChampionshipStatus, AllianceMatchList } from '../../../types/Challenges/AllianceChampionship'

export class AllianceChampionship extends GoatResource {
	async eventInfos(): Promise<AllianceChampionshipStatus> {
		const data = await this.request({ qxzb: { qxzbInfo: [] } })
		return data.a.qxzb
	}
	async getPromotionRoundInfos(): Promise<AllianceMatchList> {
		const data = await this.request({ qxzb: { qxzbMatch: [] } })
		return data.a.qxzb
	}

	async collectReward(turn: number): Promise<void> {
		await this.request({ 'qxzb':{ 'qxzbBatAward':{ 'turn': turn } } })
	}
}
