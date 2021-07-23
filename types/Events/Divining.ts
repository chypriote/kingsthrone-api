import { Item } from '../Item'

interface DiviningShop {
	hasScore: number
	list: {
		all_limit: number
		id: number
		is_limit: number
		items: Item[]
		limit: number
		need: number
	}[]
}

interface DiviningInfos {
	boxRwdStatus: number
	hdItem: number
	luckyStar: { id: number }[]
	starscore: number
	starSign: number
	surplusFreeNum: number
}
interface DiviningConfig {
	gxitemCost: number
	gxscore: number
	itemCost: number
	luckyStarList: { id: number, name: string }[]
	rankRwd: {
		member: { count: number, id: number }[]
		rand: { re: number, rs: number }
	}[]
	rewards: Item[]
	starSignList: { id: number, name: string }[]
	updateSelect: number
}

export interface DiviningStatus {
	info: DiviningInfos
	shop: DiviningShop
	cfg: DiviningConfig
}
