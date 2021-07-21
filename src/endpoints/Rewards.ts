import { GoatResource } from '../GoatResource'

export class Rewards extends GoatResource {
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
	async claimLoginReward(): Promise<boolean> {
		const data = await this.request({ 'fuli': { 'qiandao': [] }, 'rsn': '6wguukkgpk' })
		if (data.a?.system?.errror) {
			if (data.a.system.errror === 'Today\'s log-in times has run out') { return false }
			throw new Error(data.a.system.errror.msg)
		}
		return true
	}
}
