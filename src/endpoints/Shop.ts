import { GoatResource } from '../GoatResource'

export class Shop extends GoatResource {
	async buyShopItem (id: number): Promise<void> {
		await this.request({ 'shop':{ 'shopLimit':{ 'id':id } },'rsn':'6xwblwuluwy' })
	}
	async buyShopPack(id: number): Promise<void> {
		await this.request({ 'shop':{ 'shopGift':{ 'id':id } },'rsn':'2myahmyxmyh' })
	}
}
