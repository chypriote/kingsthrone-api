import { GoatResource } from '../GoatResource'
import { AllianceInfo, User } from '../../types'

interface LocalLadder {
	shili: User[]
	love: User[]
	guanka: User[]
}
export class Rankings extends GoatResource {
	localLadder: LocalLadder | null = null
	async payHomageKP(): Promise<void> {
		await this.request({ ranking: { mobai: { type: 1 } } })
	}
	async payHomageCampaign(): Promise<void> {
		await this.request({ ranking: { mobai: { type: 2 } } })
	}
	async payHomageIntimacy(): Promise<void> {
		await this.request({ ranking: { mobai: { type: 3 } } })
	}

	async getLadders(force = false): Promise<LocalLadder> {
		if (this.localLadder && !force) {
			return this.localLadder
		}
		const data = await this.request({ ranking: { paihang: { type: 0 } } })
		this.localLadder = data.a.ranking
		return this.localLadder
	}
	async getLadderKP(force = false): Promise<User[]> {
		return (await this.getLadders(force)).shili
	}
	async getLadderCampaign(force = false): Promise<User[]> {
		return (await this.getLadders(force)).guanka
	}
	async getLadderIntimacy(force = false): Promise<User[]> {
		return (await this.getLadders(force)).love
	}

	async payHomageXSKP(): Promise<void> {
		await this.request({ ranking: { mobai: { type: 4 } } })
	}
	async payHomageXSAlliance(): Promise<void> {
		await this.request({ ranking: { mobai: { type: 5 } } })
	}
	async payHomageXSIntimacy(): Promise<void> {
		await this.request({ ranking: { mobai: { type: 8 } } })
	}

	async getLadderXSKP(): Promise<User[]> {
		const data = await this.request({ ranking: { paihang: { type: 4 } } })
		return data.a.ranking.shiliKua
	}
	async getLadderXSAlliance(): Promise<(AllianceInfo & { rid: number })[]> {
		const data = await this.request({ ranking: { paihang: { type: 5 } } })
		return data.a.ranking.clubKua
	}
	async getLadderXSIntimacy(): Promise<User[]> {
		const data = await this.request({ ranking: { paihang: { type: 8 } } })
		return data.a.ranking.loveKua
	}
}
