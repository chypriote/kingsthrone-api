import { GoatResource } from '../GoatResource'
import { HallOfFamer } from '../../types'
import { HOF_TITLE } from '../../types/HallOfFame'


export class HallOfFame extends GoatResource {
	async getHoFInfo(): Promise<HallOfFamer[]> {
		const data = await this.request({ 'huanggong': { 'getNewInfo': [] } })

		return data.a.huanggong.Info
	}

	async getHoFTitle(title: HOF_TITLE): Promise<HallOfFamer[]> {
		const data = await this.request({ 'huanggong': { 'getInfoByWid': { 'wid': title } } })

		return data.a.huanggong.widInfo
	}

	async payHomage(uid: string, title: HOF_TITLE = HOF_TITLE.MIGHT): Promise<void> {
		await this.request({ 'huanggong': { 'qingAn': { 'fuid': uid, 'chenghao': title } } })
	}

	async claimHomage(): Promise<void> {
		await this.request({ 'chenghao': { 'wyrwd': [] } })
	}
}
