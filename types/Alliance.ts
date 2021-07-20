import { Item } from './Item'
import { User } from './User'

export interface AllianceBossInfo {
	count: number
	hp: number
	id: number
	ltime: { next: number, label: string }
	money: number
	type: number
}

interface AllianceLog {
	type: number
	name: string
	fname: string
	num1: number
	num2: number
	items: Item[],
	time: number
}

interface AllianceMember extends User {
	id: string
	gx: number
	allGx: number
	post: number
	jianshe: number
	loginTime: number
	inTime: { next: number, label: string }
}

export interface AllianceShop {
	id: number
	item: Item
	lock: number
	maxNum: number
	num: number
	payGX: number
}

export interface AllianceInfo {
	id: string
	name: string
	level: number
	exp: number
	fund: number
	qq: number
	laoma: string
	outmsg: string
	notice: string
	members: AllianceMember[]
	isJoin: string
	mzUID: number
	icon: string
	goldLimit: number
	money: number
	userShili: number
	allShiLi: number
	userLevel: number
	password: number
	clubLog: AllianceLog[]
	bossinfo: AllianceBossInfo[]
}


export interface Alliance {
	memberInfo: {
		cid: string
		allgx: number
		leftgx: number
		dcid: number
		post: number
		ltime: { next: number, label: string }
	}
	clubInfo: AllianceInfo
	clubLog: AllianceLog[]
	bossInfo: AllianceBossInfo[]
	bossInfoList: {
		num: number,
		list: {count: number, gid: number}[]
	}
	shopList: AllianceShop[]
	clubKuaInfo: XSBattleInfo
}

export interface XSBattleInfo {
	tType: number
	ltime: { next: number, label: string }
	mType: number
	msevid: number
	mName: string
	mytype: number
	allshili: number
	heroid: number
	hname: number
	hpower: number
	usejn: number
	usejnhid: number
	isWin: number
	gejifen: number
	rwdltype: number
	rwdltime: { next: number, label: string }
}
interface XSBattleRoster {
	servid: number
	cname: string
	allshili: number
	list: {
		uid: string
		name: string
		post: number
		heroid: number
		hname: string
		hpower: number
		jnid: number
	}[]
	allnum: number
	post: {
		mz: number
		fmz: number
		jy: number
		cy: number
	}
	clevel: number
	mzpic: {
		sex: string
		job: string
		level: string
		chenghao: number
	}
}
interface XSBattleHeroes {
	f: number, h: number, id: number
}
export interface XSBattleStatus {
	status:XSBattleRoster,
	heroes: XSBattleHeroes[]
}
