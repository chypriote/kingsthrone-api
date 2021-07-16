import { GoatResource } from '../../GoatResource'
import { PicnicStatus } from '../../../types/goat/Events/Picnic'

export class Picnic extends GoatResource {
	async eventInfos(): Promise<PicnicStatus> {
		const data = await this.request({ 'huodong': { 'hd1028Info': [] }, 'rsn': '4ciccfcvff' })
		return data.a.gehuodong
	}

	async claimQuest(id: number): Promise<void> {
		await this.request({ 'huodong': { 'hd1028Task': { 'id': id } }, 'rsn': '9zmtssbtjct' })
	}
}
