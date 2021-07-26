import { Item } from '../Item'
import { EventChestReward, EventPointExchangeTotalLimit, EventRwd, GenericEventInfo } from './Event'

export interface GardenStrollDrop { //Possible drops
	id: number
	tip: number
	items: Item
	prob_10000: number //probability
	is_baoji: number
	add: number
}
interface GardenStrollInfo {
	info: GenericEventInfo
	drop: GardenStrollDrop[]
	baoxiang: EventChestReward[]
	rank: EventRwd[]
	msg: string
	is_kua: number
	set: {
		price: number
		ten: number
		score: number
		min: number
		juli: number
		up_10000: number
	}
}

export interface GardenStrollStatus {
	cfg: GardenStrollInfo
	bu: number
	cons: number
	leftcons: number
	quan: number
	free: number
}

export interface GardenStrollPointExchange {
	cfg: { shop: { list: EventPointExchangeTotalLimit[] } }
	leftcons: number //points left
}
