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
	async buyPaint(count: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1258buy':{ 'num':count } },'rsn':'1tbabueuta' })
	}
	async spinWheel(count: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1259Chou':{ 'num':count } },'rsn':'6wugubpblk' })
	}

	async getShopItem(id: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1258exchange':{ 'id':id } },'rsn':'9rnsntcist' })
	}

	async getBoxReward(): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1258GetBoxRwd':[] },'rsn':'7xycplydlov' })
	}
}
