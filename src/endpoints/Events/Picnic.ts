import { GoatResource } from '../../GoatResource'
import { PicnicStatus } from '../../../types/Events/Picnic'
import { EventRank } from '../../../types'

export class Picnic extends GoatResource {
	async eventInfos(): Promise<PicnicStatus> {
		const data = await this.request({ 'huodong': { 'hd1028Info': [] }, 'rsn': '4ciccfcvff' })
		return data.a.gehuodong
	}

	async claimQuest(id: number): Promise<void> {
		await this.request({ 'huodong': { 'hd1028Task': { 'id': id } }, 'rsn': '9zmtssbtjct' })
	}

	async getRankings(): Promise<EventRank> {
		const data = await this.request({ 'huodong':{ 'hd1028Rank':[] },'rsn':'1qktqabuqbk' })
		return data.a.gehuodong.list
	}
}
