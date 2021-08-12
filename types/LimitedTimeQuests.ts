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
	SPEND_GEMS= 201,
	LOSE_SOLDIERS= 202,
	SPEND_GOLD= 203,
	STUDY_MANUSCRIPTS= 204,
	INCREASE_INTIMACY= 205,
	INCREASE_POWER= 206,
	ENACT_DECREES= 207,
	LOGIN= 208,
	TOURNEY_SCORE= 209,
	ARRANGE_MARRIAGES= 210,
	TRAINING_GROUND= 211,
	CHALLENGE_TOKENS= 216,
	PROCESSIONS_DONATION= 218,
	GOODWILL_DRAUGHT= 219,
	ENERGY_DRAUGHT= 220,
	INCREASE_CHARM= 221,
	ATTEND_FEASTS= 222,
	DAMAGE_ALLIANCE_BOSS= 223,
	KILL_ALLIANCE_BOSS= 224,
	FEAST_POINTS= 225,
	RANDOM_VISITS= 1045,
}
