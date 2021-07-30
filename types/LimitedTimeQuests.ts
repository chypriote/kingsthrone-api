import { GenericEventInfo } from './Events'
import { Item } from './Item'

export interface LTQStatus {
	cfg: {
		info: GenericEventInfo
		rwd: { id: number, items: Item[], need: number /*cons needed*/ }[]
		msg: string
	}
	cons: number
	rwd: number //rewards claimed
}

export enum LTQ_TYPES {
	GEMS= 201,
	LOGIN= 208,
	MARRIAGES= 210,
	ENERGY_DRAUGHT= 220,
	RANDOM_VISITS= 1045,
}
