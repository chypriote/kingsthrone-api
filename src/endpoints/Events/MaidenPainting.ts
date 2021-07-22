import { GoatResource } from '../../GoatResource'
import { MaidenPaintingStatus } from '../../../types'

export class MaidenPainting extends GoatResource {
	async eventInfos(): Promise<MaidenPaintingStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1258Info':[] },'rsn':'6xwbypxkpwy' })
		return {
			wheel: data.a.beautyDrawingMarket,
			challenge: data.a.beautyDrawingLove,
			limitedOffer: data.a.beautyDrawingGift,
			event: data.a.beautyDrawing,
			shop: data.u.beautyDrawing.shop,
		}
	}
}
