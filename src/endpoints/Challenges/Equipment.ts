import { GoatResource } from '../../GoatResource'
import { EquipmentStatus } from '../../../types'

export class Equipment extends GoatResource {
	async eventInfos(): Promise<EquipmentStatus> {
		const data = await this.request({ huodong2: { hd1339Info: [] } })
		return {
			power: data.a.cbhuodong.EquipmentMatchingPower,
			powerlist: data.a.EquipmentMatchingPower.list,
			myPowerRid: data.a.cbhuodong.myPowerRid,
			rewards: data.u.cbhuodong.cbTaskStatus,
		}
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 1339, id: id } } })
	}
}
