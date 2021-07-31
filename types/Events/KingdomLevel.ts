import { Item } from '../Item'

export interface KingdomLevelStatus {
	up: { id: number, rwd: number }[]
	cfg: {
		id: number
		level: number
		rwd: Item[]
	}[]
}
