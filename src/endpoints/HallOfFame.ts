import { GoatResource } from '../GoatResource'
import { HallOfFamer } from '../../types'

export class HallOfFame extends GoatResource {
	async getHoFInfo(): Promise<HallOfFamer[]> {
		const data = await this.request({ huanggong: { getNewInfo: [] } })

		return data.a.huanggong.Info
	}

	async getHoFTitle(): Promise<HallOfFamer[]> {
		const data = await this.request({ huanggong: { getInfoByWid: { wid: 2 } } })

		return data.a.huanggong.widInfo
	}

	async payHomage(): Promise<void> {
		await this.request({ huanggong: { qingAn: { fuid: 699002934, chenghao: 2 } } })
	}

	async claimHomage(): Promise<void> {
		await this.request({ chenghao: { wyrwd: [] } })
	}
}
