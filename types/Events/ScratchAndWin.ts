import { Item } from '../Item'

export enum PRIZE_TYPE {
	GRAND= 5,
	FIRST= 1,
	SECOND= 2,
	THIRD= 3,
	FOURTH= 4,
}
export interface ScratchAndWinStatus {
	info: {
		shopStatus: {
			type: PRIZE_TYPE,
			status: {id: number, num: number}[] //items already bought in shop
		}[]
		superCard: number //grand prize ticket
		firstCard: number
		secondCard: number
		thirdCard: number
		fourthCard: number
		guaguaItem: number //scratch tickets available
	}
	cfg: {
		shop: {
			type: PRIZE_TYPE
			cfg: {
				id: number
				need_score: number
				item: Item
				limit: number
				is_limit: number
			}[]
		}[]
		manyTimes: number //tickets usable together
		buyItemCost: number //price for ticket
	}
}
