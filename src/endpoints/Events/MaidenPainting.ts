import { GoatResource } from '../../GoatResource'
import { MaidenPaintingStatus } from '../../../types'

export class MaidenPainting extends GoatResource {
	async eventInfos(): Promise<MaidenPaintingStatus> {
		const data = await this.request({ huodong2: { hd1258Info: [] } })
		return {
			wheel: data.a.beautyDrawingMarket,
			challenge: data.a.beautyDrawingLove,
			limitedOffer: data.a.beautyDrawingGift,
			event: data.a.beautyDrawing,
			shop: data.u.beautyDrawing.shop,
		}
	}
	async buyPaint(count: number): Promise<void> {
		await this.request({ huodong2: { hd1258buy: { num: count } } })
	}
	async spinWheel(count: number): Promise<void> {
		await this.request({ huodong2: { hd1259Chou: { num: count } } })
	}

	async getShopItem(id: number): Promise<void> {
		await this.request({ huodong2: { hd1258exchange: { id: id } } })
	}

	async getBoxReward(): Promise<void> {
		await this.request({ huodong2: { hd1258GetBoxRwd: [] } })
	}
}
