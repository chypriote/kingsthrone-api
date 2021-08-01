import { GoatResource } from '../GoatResource'
import { FeastDetails, FeastInfo, FeastShop, FeastStatus, OngoingFeast } from '../../types'

export class Feasts extends GoatResource {
	async getFeastsInfo(): Promise<FeastInfo> {
		const data = await this.request({ jiulou: { jlInfo: [] } })
		return data.a.jiulou
	}

	async getFeast(uid: string | null): Promise<FeastDetails> {
		const data = await this.request({ jiulou: { yhGo: { fuid: uid } } })
		return data.a.jiulou.yhInfo
	}

	async openFeast(): Promise<void> {
		await this.request({ jiulou: { yhHold: { type: 1, isPush: 1, isOpen: true } } })
	}

	async joinFeast(uid: string, seat: number): Promise<{ jfly: FeastStatus; jlShop: FeastShop; yhInfo: OngoingFeast[] }> {
		const data = await this.request({ jiulou: { yhChi: { type: 3, xwid: seat, fuid: uid } } })

		const { jfly, jlShop, yhInfo } = data.a.jiulou
		return { jfly, jlShop, yhInfo }
	}

	async buyFeastItem(id: number): Promise<void> {
		await this.request({ jiulou: { shopChange: { id } } })
	}
}
