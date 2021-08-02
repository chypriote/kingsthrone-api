import { Item } from '../Item'
import { EventRwd } from '../Events'

export interface ChallengeRwdStatus {
	rwd_stat: number
}

export interface ChallengeRid {
	name: string
	rid: number
	score: number
}

export interface ChallengeRank {
	uid: string
	name: string
	rid: number
	score: number
}

export interface ChallengeCfg {
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
	rwd: EventRwd[]
	msg: string
}

export interface TourneyStatus {
	yamen: { cfg: ChallengeCfg }
	yamenlist: ChallengeRank[]
	myyamenRid: ChallengeRid
	myyamenRwdStatus: ChallengeRwdStatus
}
export interface CharmStatus {
	meili: { cfg: ChallengeCfg }
	meililist: ChallengeRank[]
	myMeiLiRid: ChallengeRid
	myMeiLiRwdStatus: ChallengeRwdStatus
}
export interface QualityStatus {
	zizhi: { cfg: ChallengeCfg }
	zizhilist: ChallengeRank[]
	myZiZhiRid: ChallengeRid
	myZiZhiRwdStatus: ChallengeRwdStatus
}
export interface GrainStatus {
	liangshi: { cfg: ChallengeCfg }
	liangshilist: ChallengeRank[]
	myLiangShiRid: ChallengeRid
	myLiangShiRwdStatus: ChallengeRwdStatus
}
export interface RaiseChildrenStatus {
	zsshili: { cfg: ChallengeCfg }
	zsshililist: ChallengeRank[]
	myzsShiliRid: ChallengeRid
	myzsShiliRwdStatus: ChallengeRwdStatus
}
export interface MaidenExpStatus {
	jiaren: { cfg: ChallengeCfg }
	jiarenlist: ChallengeRank[]
	myJiaRenRid: ChallengeRid
	myJiaRenRwdStatus: ChallengeRwdStatus
}
