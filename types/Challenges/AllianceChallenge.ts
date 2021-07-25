import { Item } from '../Item'
import { ClubEventRwd } from '../Events'

export interface AllianceChallengeRwdStatus {
	rwd_stat: number
}

export interface AllianceChallengeClubRid {
	rid: number
	score: number
	name: string
}

export interface AllianceChallengeClub {
	uid: string
	name: string
	rid: number
	score: number
}

export interface AllianceChallengeCfg {
	info: {
		id: number
		title: string
		pindex: number
		type: number
		sTime: number
		eTime: number
		showTime: number
		_act_id: string
	}
	showNeed: { wang: number }
	task: { id: number, target: number, rewards: Item[] }[]
	rwd: ClubEventRwd[]
	msg: string
}

export interface AllianceIntimacyStatus {
	clublove: { cfg: AllianceChallengeCfg }
	clublovelist: AllianceChallengeClub[]
	myclubRid: AllianceChallengeClubRid
	myclubloveRwdStatus: AllianceChallengeRwdStatus
}
export interface AllianceExperienceStatus {
	club: { cfg: AllianceChallengeCfg }
	clublist: AllianceChallengeClub[]
	myclubRid: AllianceChallengeClubRid
	myclubloveRwdStatus: AllianceChallengeRwdStatus
}

