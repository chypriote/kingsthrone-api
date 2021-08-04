import { ITourneyFight, ITourneyInfos, ITourneyResult, ITourneyStatus } from './Tourney'
import { User } from './User'
import { GameStats } from './GameInfos'

interface XSTourneyFight extends ITourneyFight {
	fstate: number
}

export interface XSOngoingFight extends ITourneyStatus {
	win: ITourneyResult
	fight: XSTourneyFight
	info: ITourneyInfos
	myrank: {
		rank: number
		score: number
	}
}

export interface XSPlayer extends User {
	id: string
	exp: number
	bmap: number
	mmap: number
	smap: number
	ep: GameStats
	love: number
	xuanyan: string
	chlist: { id: number }[]
	son_num: number
	wife_num: number
	hero_num: number
}

export type XSAlliance = {
	rid: number //rank
	icon: string
	cname: string //name
	num: number //members
	mzName: string //leader
	allShiLi: number //power
	maxNum: number //max members
	cid: string //id
	worship: number //boost
	win: number
	sev: number //server
}
export type XSOpponent = {
	fcid: number,
	isWin: boolean,
	time: number,
	turn: number,
	type: number,
}

export interface XSRanking {
	myScore: {
		myName: string
		myScore: number
		myScorerank: number
	}
	severRank: {
		sid: string
		name: string
		rid: number
		num: number
	}
	severScore: {
		myName: string
		myScore: number
		myScorerank: number
	}
	scoreRank: User[]
  
}