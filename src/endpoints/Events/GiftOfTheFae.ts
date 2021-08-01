import { GoatResource } from '../../GoatResource'
import { GiftOfTheFaeStatus } from '../../../types'

export class GiftOfTheFae extends GoatResource {
	async eventInfos(): Promise<GiftOfTheFaeStatus> {
		const data = await this.request({ huodong2: { hd1299Info: [] } })
		return data.a.weekHangUp
	}

	async openFreeTree(): Promise<void> {
		await this.request({ huodong2: { hd1299OpenFreeGj: [] } })
	}
	async useQuickCollect(tree = 1): Promise<void> {
		await this.request({ huodong2: { hd1299Fast: { id: tree } } })
	}
	async useExtraOutput(tree = 1): Promise<void> {
		await this.request({ huodong2: { hd1299Extra: { id: tree } } })
	}

	async selectPoolReward(rwd = 1, pool = 1): Promise<void> {
		await this.request({ huodong2: { hd1299Choose: { idd: rwd, id: pool } } })
	}
	async pourDew(water: number, pool = 1): Promise<void> {
		await this.request({ huodong2: { hd1299ZhuShui: { num: water, id: pool } } })
	}
	async praiseTheSun(pool = 1): Promise<void> {
		await this.request({ huodong2: { hd1299GetHeChengOtherRwd: { id: pool } } })
	}
	async claimPoolItem(pool = 1): Promise<void> {
		await this.request({ huodong2: { hd1299getHeChengRwd: { id: pool } } })
	}
}
