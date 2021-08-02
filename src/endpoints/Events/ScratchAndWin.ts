import { GoatResource } from '../../GoatResource'
import { PRIZE_TYPE, ScratchAndWinStatus } from '../../../types/Events/ScratchAndWin'
import { ContinualTopUpStatus } from '../../../types'

export class ScratchAndWin extends GoatResource {
	async eventInfos(): Promise<ScratchAndWinStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1341Info':[] } })
		return data.a.scratchCard
	}

	async buyScratchTicket(count = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1341BuyItem':{ 'num': count } } })
	}
	async scratch(count = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1341Play':{ 'num':count } } })
	}

	async exchangeItem(id: number, type: PRIZE_TYPE, count = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1341ShopBuy':{ 'type':type,'num':count,'id':id } } })
	}

	/** Top Up */
	async continualTopUpInfos(): Promise<ContinualTopUpStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1341Info':[] } })
		return data.a.czhuodong.scratchCardDay
	}
	async getContinualTopUp(): Promise<void> {
		await this.request({ huodong2: { hd1341GetBox: [] } })
	}
}
