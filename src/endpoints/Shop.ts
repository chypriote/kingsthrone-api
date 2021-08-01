import { GoatResource } from '../GoatResource'
import { Shop as FullShop } from '../../types/PackShop'

export class Shop extends GoatResource {
	async getShop(): Promise<FullShop> {
		const data = await this.request({ 'shop':{ 'shoplist':[] },'rsn':'3ehpshweeff' })
		return {
			packs: data.a.shop.giftlist,
			items: data.a.shop.list,
		}
	}
	async buyShopItem (id: number): Promise<void> {
		await this.request({ 'shop':{ 'shopLimit':{ 'id':id } },'rsn':'6xwblwuluwy' })
	}
	async buyShopPack(id: number): Promise<void> {
		await this.request({ 'shop':{ 'shopGift':{ 'id':id } },'rsn':'2myahmyxmyh' })
	}
}
