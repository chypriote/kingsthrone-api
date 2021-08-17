import { ClubEventRwd, EventPointExchangeTotalLimit } from '../Events'

export interface AllianceRank {
	rid: number
	icon: string
	cname: string
	num: number
	mzName: string
	allShiLi: number
	maxNum: number
	cid: number
	worship: number
	win: number
	sev: number
}

export interface AllianceChampionshipStatus {
	info: {
		info: {
			qualified: number
			clubId: number
			worship: number
			worshipRwd: any[]
			scoreRwd: number[]
			proRwd: number
			knoRwd: number
		}
		rwd: {
			promotion: ClubEventRwd[]
			knockout: ClubEventRwd[]
		}
		state: number
		proRwd: number
		startTime: number
		score: number
		exchange: EventPointExchangeTotalLimit[]
		turn: number
		knoRwd: number
		cd: { next: number, label: string }
	}
	komatch: {
		turn: number
		cids: any[]
		time: number
	}[]
	rankMy: AllianceRank
	rank: AllianceRank[]
	heroList: { id: number, h: number, f: number }[]
}

export interface AllianceMatch {
	fcid: number;
	allShiLi: any;
	heroId: number;
	isWin: number;
	num: number;
	turn: number;
	time: number;
	type: number;
	fallShiLi: any;
	fnum: number;
}
export interface AllianceMatchList {
	match: AllianceMatch[];
	xzday:  { sTime: number, eTime: number };
}
