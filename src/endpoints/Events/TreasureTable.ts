import { GoatResource } from '../../GoatResource'
import { TreasureTableStatus } from '../../../types'

export class TreasureTable extends GoatResource {
	async eventInfos(): Promise<TreasureTableStatus> {
		const data = await this.request({ 'huodong':{ 'hd290Info':[] } })
		return data.a.zphuodong
	}
	async spin(type: number, count: number): Promise<void> { //type 1=outer //type2 = inner
		await this.request({ 'huodong':{ 'hd290Yao':{ 'num':count,'type':type } } })
	}
	async buySwords(type: number, count: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd290Buy':{ 'num':count,'type':type } } })
	}
}
