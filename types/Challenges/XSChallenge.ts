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

export interface XSIntimacyCurrent {
	userlovelist: {
		uid: string;
		serv: number;
		name: string;
		rid: number;
		score: number;
	}[];
	mykualoveRid: {
		rid: number;
		uid: number;
		serv: number;
		score: number;
		name: string;
	};
	mykualoveRwdStatus:  { rwd_stat: number }
	qufulovelist:  {
		uid: number;
		serv: number;
		rid: number;
		score: number;
	}[];
	mykuaquloveRid: {
		uid: number;
		serv: number;
		rid: number;
		score: number;
	};
}
