import { GameStats, Sex } from './GameInfos'

export enum CHILDREN_STATUS {
	UNNAMED= 1,
	GROWING= 2,
	GROWNUP= 3,
	EVALUATED= 4,
	FINDING_SPOUSE= 5,
	MARRIED= 9,
}

export interface Spouse {
	fuid: number //user id
	fname: string //user name
	sname: string //son name
	sonuid: number //id
	honor: number //stars
	sex: Sex
	ep: GameStats
}
export interface Son {
	id: number
	name: string
	sex: Sex
	mom: number
	state: CHILDREN_STATUS
	ep: GameStats
	talent: number
	cpoto: number
	level: number
	exp: number
	power: number
	cd: { next: number, label: string }
	honor: number
	tquid: number
	tqitem: number
	tqcd: { next: number, label: string }
	sptime: number
	spouse: Spouse
	myqjadd: number
	fqjadd: number
	isxingqin: number
	tc: number
	available: boolean
}
