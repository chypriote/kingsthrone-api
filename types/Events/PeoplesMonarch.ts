import { ClubEventRwd, EventPointExchange, EventPointExchangeTotalLimit, EventRwd, GenericEventInfo } from './Event'
import { Item } from '../Item'

export enum PEOPLES_MONARCH_ITEM {
	CAP = 1,
	SWORD = 2,
	ROSE = 3,
	RING = 4,
}

interface PeoplesMonarchConfig {
	info: GenericEventInfo & { no: number }
	id?: any
	rwd: {
		my: EventRwd[]
		club: ClubEventRwd[]
	}
	boss: string
	story: string
	play_time: {
		startTime: number
		endTime: number
	}
}

export interface PeoplesMonarchStatus {
	boss: { boss: number }
	score: { hdscore: number, score: number, kill_rwd: number }
	rwdLog: { name: string, uitem: number, item: number, num: number }[]
	shop: EventPointExchange[]
	exchange: {
		list: EventPointExchangeTotalLimit[]
	}
	bag: Item[]
	cfg: PeoplesMonarchConfig
}
