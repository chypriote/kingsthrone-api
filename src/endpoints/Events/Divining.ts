import { GoatResource } from '../../GoatResource'
import { DiviningStatus } from '../../../types'

export class Divining extends GoatResource {
	async eventInfos(): Promise<DiviningStatus> {
		const data = await this.request({ 'huodong':{ 'hd1123Info':[] },'rsn':'4cimghigcg' })
		return data.a.Astrology
	}

	async selectStarSign(id = 3): Promise<void> {
		await this.request({ 'huodong':{ 'hd1123select':{ 'id':id } },'rsn':'8maoearoiok' })
	}

	async stargaze(): Promise<void> {
		await this.request({ 'huodong':{ 'hd1123guanxing':[] },'rsn':'1ktuitbttra' })
	}
}
