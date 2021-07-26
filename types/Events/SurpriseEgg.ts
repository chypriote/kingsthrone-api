import { Item } from '../Item'
import { EventRwd } from './Event'

type SurpriseEggShop = {
	id: number
	is_limit: number
	limit: number
	need_score: number
	vip: number
	item: Item[]
}

export type SurpriseEgg = {
	cfg: {
		buy: Item
		colorDrop: Item[]
		exchange: Item
		goldDrop: Item[]
		image: Item
		ironToGold: number
		phasesRewards: {
			id: number
			num: number
			rewards: Item[]
		}[]
		rank: EventRwd[]
		score: number
		shop: SurpriseEggShop[]
	}
}
