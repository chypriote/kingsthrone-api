import { EventPointExchangeAllLimit, EventRwd, GenericEventInfo } from './Event'
import { Item } from '../Item'

export interface RenownedMerchantEvent {
	renownedMerchant: RenownedMerchantStatus
	cherishedWish: CherishedWishStatus
	continualTopUp: ContinualTopUpStatus
}

/** Cherished Tree */
export enum CHERISHED_WISH_TYPE {
	SIGN_IN= 0,
	GEMS= 1,
	VIP= 2,
}
export interface CherishedWishReward {
	id: number
	need: number
	items: Item[]
	optionRwd: { pos: number, rwd: Item[] }[]
}
export interface CherishedWishInfo {
	cons: number
	rwd: { id: number, status: number }[]
	optional: { dc: number, opt: { pos: number, id: number }[] }[]
	today?: number
}
export interface CherishedWishStatus {
	info: CherishedWishInfo[]
	cfg: {
		info: GenericEventInfo
		msg: string
		sign_rwd: CherishedWishReward[]
		gems_rwd: CherishedWishReward[]
		vip_rwd: CherishedWishReward[]
	}
}

/** Continual Top-Up */
export interface ContinualTopUpStatus {
	hasGetBox: number
	resetTime: number
	cfg: {
		info: GenericEventInfo & {ycdc: number}
		showHero: number
		boxRwd: { id: number, count: number }[]
		rwd: { id: number, items: Item[], need: number /*vipexp needed*/ }[]
		msg: string
	}
	cons: number
	rwd?: any
}

/** Login Rewards */
export enum TASK_STATUS {
	RECEIVED= 3,
	CLAIMABLE= 2,
	ONGOING= 1,
	RECEIVED2= 10,
}
export interface LoginRewardsStatus {
	tasks: {
		day: number
		score: number
		scoreNum: number
		giftBagStatus: any[]
		is_unset: number
		dayNews:  { id: number, value: number }[]
		signReward: { id: number, value: number }[]
		taskTypeNum:  { id: number, value: number }[]
		taskTypeStatus: { id: number, value: number }[]
	}
	cfg: {
		info: GenericEventInfo & { no: number }
		homeIcon: { kind: number, id: number }
		showHero: number
		showWife: number
		dayTasks: {
			day: number
			task_id: number[]
			item: Item //Item displayed on top
		}[]
		giftBag: {
			day: number
			price: string
			special_offer: string
			count: number
			reward: Item[]
		}[]
		scoreReward: {
			score: number
			reward: Item[]
		}[]
	}
}

export interface RenownedMerchantStatus {
	info: {
		quanNeedTen: number
		quanBuyNeed: number
		cons: number
		quan: number
		score: number
	}
	cfg: {
		list: {
			dc: number
			items: Item
			prob_10000: number
			tip: number
		}[]
		rankRwd: EventRwd[]
	}
	shop: {
		list: EventPointExchangeAllLimit[]
		hasScore: number
	}
}
