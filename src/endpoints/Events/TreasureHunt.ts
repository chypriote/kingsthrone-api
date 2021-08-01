import { GoatResource } from '../../GoatResource'
import { TreasureHuntStatus } from '../../../types'

export class TreasureHunt extends GoatResource {
	async eventInfos(): Promise<TreasureHuntStatus> {
		const data = await this.request({ huodong: { hd296Info: [] } })
		return data.a.wbhuodong.wabao
	}

	async claimAllShovels(): Promise<void> {
		for (let i = 1; i < 15; i++) {
			await this.request({ huodong: { hd296Task: { id: i } } })
		}
	}
	async claimShovel(id: number): Promise<void> {
		await this.request({ huodong: { hd296Task: { id: id } } })
	}

	async dig(): Promise<void> {
		await this.request({ huodong: { hd296Wa: [] } })
	}

	async openChest(id: number): Promise<void> {
		await this.request({ huodong: { hd296Rwd: { id: id } } })
	}
}
