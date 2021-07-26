import { Item } from '../Item'

export enum QUEST_STATUS {
	ONGOING= 0,
	FINISHED= 1,
	CLAIMED= 2
}

export interface EventRank {
	name: string
	rid: number
	score: number
	uid: string
}
export interface EventRankWithServer extends EventRank {
	sev: number
}

export interface EventQuest {
	id: number;
	num: number;
	rwd: number;
}
export interface EventQuestCfg {
	type: number;
	dcCfg: {
		id: number;
		max: number;
		items: Item[];
	}[];
}
export interface EventDailyQuest {
	id: number
	max: number
	items: Item
	msg: string
	type: number
	has: number
	isGet: number
}

export interface EventChestReward {
	id: number
	jifen: number //event items required (picnic=steps)
	items: Item[]
	isGet: number //2=yes 0=no
}

export interface EventRwd {
	member: { count: number, id: number, kind?: number }[]
	rand: { re: number, rs: number }
}
export interface ClubEventRwd {
	mengzhu: { id: number, count: number}[] //leader reward (items)
	member: { id: number, count: number}[] //member reward (items)
	rand: { re: number, rs: number }
}

export interface EventItemShop {
	dc?: number
	/** example: need {id: 1, count: 100} = buy with 100gems
	 * need 100 = buy with 100 event points
	 */
	need: number | Item
	items: Item
	limit: number //how many/buy
	limitNum: number //max buyable
	haslimitNum: number
}
export interface EventShop {
	hasScore: number //current score
	rank: EventRwd | EventRwd[]
	wsShopcfg: EventItemShop[] //Point exchange
}
export interface EventPointExchangeTotalLimit extends EventPointExchange { totalLimit: number }
export interface EventPointExchangeAllLimit extends EventPointExchange { all_limit: number }
export interface EventPointExchange {
	id: number
	items: Item
	is_limit: number
	limit: number //items left
	need: number //points cost
}

/**
 * Wheel event
 * 	- Jewels of Luck
 * 	- Maiden painting
 */
export interface EventWheelConfig {
	wall_gache:  {
		id: number
		prob_1000: number
		default_item: Item|[]
	}[]
	chosen_pool: {key: number, item: Item}[]
	cost: number
	bili: number
}
export interface EventWheel {
	info: {
		chosen: {id: number, key: number}[]
		num: number
	}
	cfg: EventWheelConfig
}

/**
 * Grid event
 * 	- Path of Wealth
 * 	- Dark Castle
 */
enum GRID_ITEM {
	NORMAL = 0,
	BLUE_BAG = 1,
	ORANGE_BAG = 2,
	PURPLE_BAG = 3,
}
interface EventGridSlot {
	id: number
	items: Item
	type: GRID_ITEM
	sid: number //1=portal
	isGet: boolean
}
export interface EventGrid {
	gzzid: number
	min: number //??
	max: number //number of tiles ?
	list: EventGridSlot[]
}
export interface EventGridLapChest {
	id: number
	need: number //laps needed
	items: Item[]
	isGet: number //2=yes
}
export interface EventGridRun {
	yao: number
	sid: number
	cons: number
	quan: number //laps
	num: number
	gzzid: number
}

export interface GenericEventInfo {
	id: number
	title: string
	pindex: number
	type: number
	sTime: number //start time
	eTime: number //end time
	showTime: number
	_act_id: string
}
export interface Event {
	id: number
	title: string
	pindex: number
	type: number
	sTime: number
	eTime: number
	showTime: number
	cd: { next: number, label: string },
	news: number
}
