import { GoatResource } from '../../GoatResource'
import { TreasureHuntStatus } from '../../../types'

export class TreasureHunt extends GoatResource {
	async eventInfos(): Promise<TreasureHuntStatus> {
		const data = await this.request({ 'huodong': { 'hd296Info': [] }, 'rsn': '2myqxxhaxab' })
		return data.a.wbhuodong.wabao
	}

	async claimAllShovels(): Promise<void> {
		for (let i = 1; i < 15; i++) {
			await this.request({ 'huodong': { 'hd296Task': { 'id': i } }, 'rsn': '5wpwwyhwhf' })
		}
	}
	async claimShovel(id: number): Promise<void> {
		await this.request({ 'huodong': { 'hd296Task': { 'id': id } }, 'rsn': '5wpwwyhwhf' })
	}

	async dig(): Promise<void> {
		await this.request({ 'huodong': { 'hd296Wa': [] }, 'rsn': '5wpwwyhjyy' })
	}

	async openChest(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd296Rwd':{ 'id':id } },'rsn':'7xycoosdooy' }	)
	}
}
