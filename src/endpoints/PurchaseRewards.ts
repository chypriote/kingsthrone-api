import { GoatResource } from '../GoatResource'
import { PurchaseRewardsStatus } from '../../types'

export class PurchaseRewards extends GoatResource {
	async eventInfos(): Promise<PurchaseRewardsStatus> {
		const data = await this.request({ 'huodong':{ 'hd262Info':[],'hd1027Info':[],'hd260Info':[],'hd261Info':[] } })
		return data.a.czhuodong
	}

	async claimDailyRewards(): Promise<void> {
		await this.request({ 'huodong':{ 'hd260Rwd':[] } })
	}
	async claimCumulativeRewards(): Promise<void> {
		await this.request({ 'huodong':{ 'hd262Rwd':[] } })
	}
	async claimLimitedTimeRewards(): Promise<void> {
		await this.request({ 'huodong':{ 'hd261Rwd':[] } })
	}
}
