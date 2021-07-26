import { Item } from '../Item'
import { EventDailyQuest, GenericEventInfo } from './Event'

export enum RWD_STATUS {
	NOT_READY= 0,
	READY= 1,
	CLAIMED= 2
}

interface TreasureHuntReward {
	id: number
	isGet: number
	items: Item[]
	need: number[]
	tid: number
	type: number
}
interface TreasureHuntProba {
	count: number
	id: number
	kind: number
	prob10000: number
}
export interface TreasureHuntStatus {
	cons: number //shovels
	num: number //digs ?
	cfg: {
		chutou: EventDailyQuest[]
		info: GenericEventInfo
		msg: string
		rwd: TreasureHuntReward[]
		suiji: TreasureHuntProba[]
	}
}
