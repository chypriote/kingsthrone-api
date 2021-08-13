import { ClubEventRwd, EventProgressReward, EventRwd } from './Event'
import { Item } from '../Item'


export enum QUEST_TYPE {
	LOGIN= 'login',
	INTIMACY= 'loveAdd',
	CHARM= 'charmAdd',
	SCORE= 'score',
}
export enum SPARKS_ITEM_TYPE {
	CHOCOLATE= 'QiaoKeLi',
	BOUQUETS= 'HongMeiGui',
	FEATHERS= 'LiFu',
	GEMS= 'ZuanJie',
}

export interface SparksUnderMoonlightStatus {
	info: {
		HongMeiGui: number
		QiaoKeLi: number
		LiFu: number
		ZuanJie: number
		wall_quest: { //current score for each
			login: number
			loveAdd: number
			charmAdd: number
			score: number
		}
		login_status: { id: number }[] //quest rewards claimed
		loveAdd_status: { id: number }[] //quest rewards claimed
		charmAdd_status: { id: number }[] //quest rewards claimed
		score_status: { id: number }[] //quest rewards claimed
		score: number //cuirrent score
		hasScore: number
		shop: any[]
	}
	clubInfo:  {
		level: number //alliance level
		HongMeiGui: number //bouquets
		QiaoKeLi: number //chocolates
		LiFu: number //feathers
		ZuanJie: number //gems
		exp: number //total exp
	}
	cfg: {
		wall_level: { //requirements for each level
			level: number
			need_exp: number
			need_items: Item[] //bouquets/chocolates etc
			wall_member_rank: EventRwd[] //rewards
		}[]
		wall_consume: { //rewards when using an item
			type: string
			exp: number //exp won
			score: number //score won
			rand: { //possible rewards
				kind: number
				id: number
				count: number
				pro: number //probability
			}[]
		}[]
		wall_quest: { //quest details
			type: string
			quest: EventProgressReward[]
		}[]
		wall_shop:  { //point exchange
			id: number
			need_score: number
			item: Item
			limit: number
			is_limit: number
		}[]
		wall_alliance_rank: ClubEventRwd[] //alliance rewards
		wall_personal_rank: EventRwd[] //individual rewards
	}
}
