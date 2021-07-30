import { User } from './User'
import { GameStats, Sex } from './GameInfos'

export interface InLaw extends User {
	num: number //likeability
	num2: number //married
	num3: number //last connection
	tip: number
}

export interface Proposal {
	fuid: number //user id
	fname: string //user name
	sname: string //son name
	sonuid: number //id
	honor: number //stars
	sex: Sex
	ep: GameStats
}
