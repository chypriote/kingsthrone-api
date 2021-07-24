import { Item } from '../Item'

interface FaeTree {
	dc: number
	hasFreeExtraNum: number
	hasFreeFastNum: number //free quickCollect
	id: number
	startTime: number
	type: number
}
interface FaeItem extends Item {
	kind: number
	id: number
	count: number
	idd: number
	pro: number
}
export interface FaePool {
	choose: { idd: number }[]
	choosed: number
	num: number
	type: number
	status: number
	otherStatus: number
	id: number
}

export interface GiftOfTheFaeStatus {
	info: {
		gj: FaeTree[]
		luShuiNum: number //gouttes
		wuYueHuaNum: number //pétales
		fastNum: number
	}
	cfg: {
		freeGj: {
			num: number
			second: Item[]
			freeExtraNum: number
			extraSecond: number
			freeFastNum: number
			fastSecond: number
		}
		payGj:  {
			dc: number
			second: Item[]
			freeExtraNum: number
			extraSecond: number
			freeFastNum: number
			fastSecond: number
		}[]
		freeCompose:  {
			item: FaeItem[]
			cost: number
			bili: number
			num: number
		}
		vipCompose: {
			item: FaeItem[]
			cost: number
			bili: number
		}
		DiamondsCompose: {
			item: FaeItem[]
			chooseNum: number
			cost: number
			bili: number
		}
		DiamondsCost: {
			num: number
			cost: number
		}[]
	}
	hecheng: {
		hecheng: FaePool[]
		hasBuy: number
		vipOpenDay: number
	}
	shop: {
		score: number
		hasScore: number
		shopNum: any[]
	}
	shopCfg: {
		need_score: number
		item: Item
		limit: number
		is_limit: number
		vip: number
		id: number
	}[]
	tehui: { giftStatus: any[]	}
	tehuiCfg: {
		giftCfg: {
			id: number
			name: string
			need: number
			limit: number
			nowlimit: number
			islimit: number
			rebate: number
			rwd: Item[]
		}[]
		showHero: number
	}
}
