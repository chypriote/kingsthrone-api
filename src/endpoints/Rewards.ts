import { GoatResource } from '../GoatResource'
import { Rewards as RewardsEndpoint } from '../../types/Endpoints/Rewards'

export class Rewards extends GoatResource implements RewardsEndpoint {
	async claimDailyPoints(): Promise<void> {
		await this.request({ 'daily': { 'getAlltask': [] }, 'rsn': '9zrizbjjmcs' })
	}

	async getDailyReward(id: number): Promise<boolean> {
		try {
			await this.request({ 'daily': { 'getrwd': { id } }, 'rsn': '2axnbamnxy' })
			return true
		} catch (e) {/*We want to ignore completely*/
		}
		return false
	}

	async claimWeeklyPoints(): Promise<void> {
		await this.request({ 'weekly': { 'getAlltask': [] }, 'rsn': '4acbaxhhvaf' })
	}

	async getWeeklyReward(id: number): Promise<boolean> {
		try {
			await this.request({ 'weekly': { 'getrwd': { id } }, 'rsn': '2axnbamnxy' })
			return true
		} catch (e) {/*We want to ignore completely*/
		}
		return false
	}

	async getProgressionReward(): Promise<boolean> {
		const data = await this.request({ 'chengjiu': { 'getAllrwd': [] }, 'rsn': '4fcgicgcabm' })
		return !!data.a.msgwin
	}
	async claimLoginReward(): Promise<void> {
		await this.request({ 'fuli':{ 'qiandao':[] },'rsn':'6wguukkgpk' })
	}
}
