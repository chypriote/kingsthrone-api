import { Sex } from './GameInfos'

interface ClubMember {
	id: string
	name: string
	post: number
	sex: Sex
	job: string
	shili: number
	level: number
	gx: number
	allGx: number
	chenghao: number
	headType: number
	headId: number
	vipStatus: number
	vip: number
	jianshe: number
	loginTime: number
	inTime: { next: number, label: string }
}

export interface ClubInfo {
	id: string
	name: string
	level: number
	exp: number
	fund: number
	qq: number
	laoma: string
	outmsg: string
	notice: string
	members: ClubMember[]
	isJoin: string
	mzUID: number
	icon: string
	goldLimit: number
	money: number
	userShili: number
	allShiLi: number
	userLevel: number
	password: number
	clubLog: []
	bossinfo: []
}

export interface Club {
	memberInfo: {
		cid: string
		allgx: number
		leftgx: number
		dcid: number
		post: number
		ltime: { next: number, label: string }
	}
	clubInfo: ClubInfo
}

export interface AllianceBossInfo {
	count: number
	hp: number
	id: number
	ltime: { next: number, label: string }
	money: number
	type: number
}
