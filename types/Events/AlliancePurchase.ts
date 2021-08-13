import { Item } from '../Item'
import { GenericEventInfo } from './Event'

export interface AlliancePurchaseUser {
	rwd:  {
		day: number
		list: { id: number }[] //rewards claimed
	}[]
	inday: number //days claimed
	today: number
	cz: any[]
	next: number
}
export interface AlliancePurchaseStatus {
	clubczinfo: {
		day: number
		num: number //payers
		uidinfo:  {
			username: string
			post: number //1 leader 2 lord 3 elite 4 member
			cons: number
			cztime: number
		}[]
		constotal: number
	}[]
	info: GenericEventInfo & {no:number}
	cfg: {
		day: number
		list: { id: number, items: Item[], need: number /*cons needed*/ }[]
	}[]
	user: AlliancePurchaseUser
}
