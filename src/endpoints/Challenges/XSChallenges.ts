import { GoatResource } from '../../GoatResource'
import {
	CHALLENGE_TYPES,
	XSIntimacyRankings,
	XSIntimacyStatus,
	XSKingdomPowerRankings,
	XSKingdomPowerStatus,
	XSQualityRankings,
	XSQualityStatus
} from '../../../types'

export class XSChallenges extends GoatResource {
	async intimacy(): Promise<XSIntimacyStatus> {
		const data = await this.request({ huodong: { hd314Info: [] } })
		return { ...data.a.kuacbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async getIntimacyRankings(): Promise<XSIntimacyRankings> {
		const data = await this.request({ huodong:{ hd314UserRank:[] } })
		return data.a.kuacbhuodong
	}
	async kingdomPower(): Promise<XSKingdomPowerStatus> {
		const data = await this.request({ huodong: { hd313Info: [] } })
		return { ...data.a.kuacbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async getKingdomPowerRankings(): Promise<XSKingdomPowerRankings> {
		const data = await this.request({ huodong:{ hd313UserRank:[] } })
		return data.a.kuacbhuodong
	}
	async quality(): Promise<XSQualityStatus> {
		const data = await this.request({ huodong: { hd1138Info: [] } })
		return { ...data.a.kuacbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async getQuality(): Promise<XSQualityRankings> {
		const data = await this.request({ huodong:{ hd1138UserRank:[] } })
		return data.a.kuacbhuodong
	}

	async claimProgressReward(challenge: CHALLENGE_TYPES, id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: challenge, id: id } } })
	}
}

