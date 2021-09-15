import { GoatResource } from '../../GoatResource'
import {
	AllianceExperienceStatus,
	AllianceIntimacyStatus,
	AlliancePowerStatus, AllianceTourneyStatus,
	CHALLENGE_TYPES,
	CharmStatus,
	EquipmentStatus,
	FeastPointsStatus,
	GrainStatus,
	IntimacyStatus,
	KingdomPowerStatus,
	LoseSoldiersStatus,
	MaidenExpStatus,
	QualityStatus, RaiseChildrenStatus, RareBeastsStatus, SpendGoldStatus, TourneyStatus
} from '../../../types'

export class Challenges extends GoatResource {
	async allianceExperience(): Promise<AllianceExperienceStatus> {
		const data = await this.request({ huodong: { hd250Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async feastPoints(): Promise<FeastPointsStatus> {
		const data = await this.request({ huodong: { hd256Info: [] } })
		return { ...data.a.jiulou, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async equipment(): Promise<EquipmentStatus> {
		const data = await this.request({ huodong2: { hd1339Info: [] } })
		return {
			power: data.a.cbhuodong.EquipmentMatchingPower,
			powerlist: data.a.EquipmentMatchingPower.list,
			myPowerRid: data.a.cbhuodong.myPowerRid,
			rewards: data.u.cbhuodong.cbTaskStatus,
		}
	}
	async allianceIntimacy(): Promise<AllianceIntimacyStatus> {
		const data = await this.request({ huodong: { hd312Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async alliancePower(): Promise<AlliancePowerStatus> {
		const data = await this.request({ huodong: { hd310Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async allianceTourney(): Promise<AllianceTourneyStatus> {
		const data = await this.request({ huodong: { hd315Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async charm(): Promise<CharmStatus> {
		const data = await this.request({ huodong: { hd258Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async grain(): Promise<GrainStatus> {
		const data = await this.request({ huodong: { hd259Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async intimacy(): Promise<IntimacyStatus> {
		const data = await this.request({ huodong: { hd253Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async kingdomPower(): Promise<KingdomPowerStatus> {
		const data = await this.request({ huodong: { hd252Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async loseSoldiers(): Promise<LoseSoldiersStatus> {
		const data = await this.request({ huodong: { hd257Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async maidenExperience(): Promise<MaidenExpStatus> {
		const data = await this.request({ huodong: { hd1075Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async quality(): Promise<QualityStatus> {
		const data = await this.request({ huodong: { hd1078Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async raiseChildren(): Promise<RaiseChildrenStatus> {
		const data = await this.request({ huodong: { hd311Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async rareBeasts(): Promise<RareBeastsStatus> {
		const data = await this.request({ huodong: { hd1098Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async spendGold(): Promise<SpendGoldStatus> {
		const data = await this.request({ huodong: { hd255Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async tourney(): Promise<TourneyStatus> {
		const data = await this.request({ huodong: { hd254Info: [] } })
		return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}

	async claimProgressReward(challenge: CHALLENGE_TYPES, id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: challenge, id: id } } })
	}
}
