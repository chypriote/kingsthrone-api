import { GoatResource } from '../GoatResource'

export class Rewards extends GoatResource {
	async claimDailyPoints(): Promise<void> {
		await this.request({ daily: { getAlltask: [] } })
	}

	async getDailyReward(id: number): Promise<boolean> {
		try {
			await this.request({ daily: { getrwd: { id } } })
			return true
		} catch (e) {
			/*We want to ignore completely*/
		}
		return false
	}

	async claimWeeklyPoints(): Promise<void> {
		await this.request({ weekly: { getAlltask: [] } })
	}

	async getWeeklyReward(id: number): Promise<boolean> {
		try {
			await this.request({ weekly: { getrwd: { id } } })
			return true
		} catch (e) {
			/*We want to ignore completely*/
		}
		return false
	}

	async getProgressionReward(): Promise<boolean> {
		const data = await this.request({ chengjiu: { getAllrwd: [] } })
		return !!data.a.msgwin
	}
	async claimLoginReward(): Promise<boolean> {
		const data = await this.request({ fuli: { qiandao: [] } })
		if (data.a?.system?.errror) {
			if (data.a.system.errror === "Today's log-in times has run out") {
				return false
			}
			throw new Error(data.a.system.errror.msg)
		}
		return true
	}
	async claimFirstWeekRewards(id: number): Promise<boolean> {
		const data = await this.request({ huodong: { hd287Get: { id: id } } })
		if (data.a?.system?.errror) {
			if (data.a.system.errror.msg === 'Duplicated reward collection for 7 Day Sign-in event') {
				return false
			}
			throw new Error(data.a.system.errror.msg)
		}
		return true
	}
	async claimGrowthFund(id: number): Promise<void> {
		await this.request({ huodong: { hd1061Rwd: { type: '', id: id } } })
	}
}
