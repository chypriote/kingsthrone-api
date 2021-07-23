import { ClubEventRwd, EventRwd } from './Event'
import { Item } from '../Item'

export enum CORONATION_ITEM {
	BANNER = 1,
	TRUMPET = 2,
	DRUMS = 3,
	CROWN = 4,
}

interface CoronationConfig {
	info: {
		id: number
		title: string
		type: number
		sTime: number
		eTime: number
		showTime: number
		no: number
		_act_id: string
	}
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

export interface CoronationStatus {
	boss: { boss: number }
	score: { hdscore: number, score: number, kill_rwd: number }
	rwdLog: { name: string, uitem: number, item: number, num: number }[]
	shop: {
		id: number
		need: Item
		items: Item
		is_limit: number
		limit: number
	}[]
	exchange: {
		list: {
			id: number
			need: number
			items: Item
			is_limit: number
			totalLimit: number
			limit: number
		}[]
	}
	bag: Item[]
	cfg: CoronationConfig
}
