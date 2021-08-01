import { GoatResource } from '../../GoatResource'
import { PathOfWealthStatus } from '../../../types'

export class PathOfWealth extends GoatResource {
	async eventInfos(): Promise<PathOfWealthStatus> {
		const data = await this.request({ huodong: { hd293Info: [] } })
		return data.a.xbhuodong
	}

	async rollDice(): Promise<void> {
		await this.request({ huodong: { hd293Run: [] } })
	}

	async claimDice(id: number): Promise<void> {
		await this.request({ huodong: { hd293Task: { id: id } } })
	}
	async claimAllDices(): Promise<void> {
		for (let i = 1; i < 15; i++) {
			await this.claimDice(i)
		}
	}

	async openChest(id: number): Promise<void> {
		await this.request({ huodong: { hd293Rwd: { id: id } } })
	}
}
