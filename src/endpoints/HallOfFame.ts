import { GoatResource } from '../GoatResource'
import { HallOfFamer, TITLE } from '../../types'

export class HallOfFame extends GoatResource {
	async getHoFInfo(): Promise<HallOfFamer[]> {
		const data = await this.request({ huanggong: { getNewInfo: [] } })

		return data.a.huanggong.Info
	}

	async getHoFTitle(title: TITLE): Promise<HallOfFamer[]> {
		const data = await this.request({ huanggong: { getInfoByWid: { wid: title } } })

		return data.a.huanggong.widInfo
	}

	async payHomage(uid: string, title: TITLE = TITLE.MIGHT): Promise<void> {
		await this.request({ huanggong: { qingAn: { fuid: uid, chenghao: title } } })
	}

	async claimHomage(): Promise<void> {
		await this.request({ chenghao: { wyrwd: [] } })
	}
}
