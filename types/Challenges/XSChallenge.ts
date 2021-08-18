import { EventProgressReward, EventRwd, GenericEventInfo } from '../Events'

interface Info extends GenericEventInfo  {
	yueTime: number
	yushowTime: number
}
export interface XServerCfg {
	info: Info
	task: EventProgressReward[]
	qrwd: EventRwd[] //Server ranking
	rwd: EventRwd[] //Player ranking
	msg: string
}
export interface XServerStatus {
	rnum: number
	cfg: XServerCfg
	comein: number
	type: number
	cd: {label: string, next: number}
	get: number
}
export interface XSIntimacyStatus {
	kualove: XServerStatus
	mykualoveRwdStatus: { rwd_stat: number }
	rewards: { id: number, taskStatus: {id:number}[] }[]
}
export interface XSKingdomPowerStatus {
	kuashili: XServerStatus
	mykuashiliRwdStatus: { rwd_stat: number }
	rewards: { id: number, taskStatus: {id:number}[] }[]
}

export interface XSRid {
	uid: number
	serv: number
	rid: number
	score: number
}
export interface XSNamedRid extends XSRid { name: string }
export interface XSIntimacyRankings {
	userlovelist: XSNamedRid[] //user ranks
	mykualoveRid: XSNamedRid //my rank
	mykualoveRwdStatus:  { rwd_stat: number }
	qufulovelist: XSRid[] //server ranks
	mykuaquloveRid: XSRid //my server rank
}
export interface XSKingdomPowerRankings {
	mykuaquRid: XSRid
	mykuashiliRid: XSNamedRid
	mykuashiliRwdStatus: { rwd_stat: number }
	qufulist: XSRid[]
	userlist: XSNamedRid[]
}
