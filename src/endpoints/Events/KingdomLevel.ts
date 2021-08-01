import { GoatResource } from '../../GoatResource'

export class KingdomLevel extends GoatResource {
	async eventInfos(): Promise<any> {
		const data = await this.request({ 'huodong':{ 'hd1066Info':[] },'rsn':'3hkkfnfnsf' })
		return data.a.kingsLevel
	}
	async claim(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd1066Rwd':{ 'id':id } },'rsn':'7yccldydvlp' })
	}
}
