import { GoatResource } from '../../GoatResource'
import { Item, JewelsOfLuckStatus } from '../../../types'

export class JewelsOfLuck extends GoatResource {
	async eventInfos(): Promise<JewelsOfLuckStatus> {
		const data = await this.request({ 'huodong':{ 'hd1081Info':[] },'rsn':'3ehpkwkpwnp' })
		return data.a.blackMarket
	}
	async play(num: number): Promise<{ id: number, item: Item }[]> {
		const data = await this.request({ 'huodong':{ 'hd1081Chou':{ 'num':num } },'rsn':'4fcgibiffcv' })
		return data.a.blackMarket.win
	}
	async buyJewel(num: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd1081Buy':{ 'num':num } },'rsn':'9mrtninmrtt' })
	}
}
