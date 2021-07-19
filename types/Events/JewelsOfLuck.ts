import { Item } from '../Item'
import { EventWheel } from './Event'

export interface JewelsOfLuckStatus extends EventWheel {
	info: {
		chosen:  {id: number, key: number}[]
		num: number
	}
	cfg: {
		wall_gache:  {
			id: number
			prob_1000: number
			default_item: Item|[]
		}[]
		chosen_pool: {key: number, item: Item}[]
		cost: number
		bili: number
	}
}
