import { GoatResource } from '../../GoatResource'
import { DragonSlaying as DragonSlayingEndpoint } from '../../../types/Endpoints/Events/DragonSlaying'
import { DragonSlayingStatus } from '../../../types/goat/Events/DragonSlaying'

export class DragonSlaying extends GoatResource implements DragonSlayingEndpoint {
	async eventInfos(): Promise<DragonSlayingStatus> {
		const data = await this.request({ 'huodong':{ 'hd298Info':[] },'rsn':'7xyccvvgovl' })
		return data.a.newyear
	}

	async slay(id: number): Promise<void> {
		await this.request({ 'huodong': { 'hd1028Task': { 'id': id } }, 'rsn': '9zmtssbtjct' })
	}
}
