import { EventProgressReward, EventRwd, GenericEventInfo } from '../Events'

interface Info extends GenericEventInfo  {
	yueTime: number
	yushowTime: number
}

export interface XSIntimacyStatus {
	kualove:  {
		rnum: number
		cfg: {
			info: Info
			task: EventProgressReward[]
			qrwd: EventRwd[] //Server ranking
			rwd: EventRwd[] //Player ranking
			msg: string
		}
		comein: number
		type: number
		cd: {label: string, next: number}
		get: number
	}
	mykualoveRwdStatus: {
		rwd_stat: number
	}
	rewards: { id: number, taskStatus: {id:number}[] }[]
}
