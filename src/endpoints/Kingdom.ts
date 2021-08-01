import { GoatResource } from '../GoatResource'
import { CastleInfos } from '../../types'

export class Kingdom extends GoatResource {
	async getCastleRewards(id: number): Promise<CastleInfos | false> {
		try {
			const reward = await this.request({ hangUpSystem: { getRewards: { type: 'all', id: id } } })
			return reward.u.hangUpSystem.info[0]
		} catch (e) {
			return false
		}
	}

	async claimAll(castleId: number): Promise<void> {
		try {
			await this.request({ hangUpSystem: { getSonDispatchRewards: { eventId: 'all', id: castleId } } })
		} catch (e) {
			console.error(`Failed at claimAll ${e.toString()}`)
		}
	}

	async claimQuest(eventId: string, castleId: number): Promise<void> {
		try {
			await this.request({ hangUpSystem: { getSonDispatchRewards: { eventId: eventId, id: castleId } } })
		} catch (e) {
			console.error(`Failed at claimQuest ${e.toString()}`)
		}
	}

	async sendQuest(eventId: string, castleId: number, sons: number[]): Promise<void> {
		try {
			const sonsSlots: { slot: number; sonId: number }[] = []
			sons.forEach((sonId, index) => sonsSlots.push({ slot: index + 1, sonId: sonId }))

			await this.request({
				hangUpSystem: {
					sonDispatch: {
						son_slot: sonsSlots,
						isDouble: 0,
						eventId: eventId,
						id: castleId,
					},
				},
			})
		} catch (e) {
			console.error(`Failed at sendQuest ${e.toString()}`)
		}
	}

	async refreshQuests(castleId: number): Promise<CastleInfos | false> {
		try {
			const refresh = await this.request({ hangUpSystem: { refreshEvent: { type: 0, id: castleId } } })
			return refresh.u.hangUpSystem.info[0]
		} catch (e) {
			console.error(`Failed at refreshQuests ${e.toString()}`)
			return false
		}
	}

	async levelUpCastle(castleId: number): Promise<void> {
		try {
			await this.request({ hangUpSystem: { upLevel: { id: castleId } } })
		} catch (e) {
			/* do nothing */
		}
	}
}
