import { Item } from './Item'

interface Pack {
	id: number
	name: string
	need: number //price in gems
	items: Item[],
	vip: number //required vip
	islimit: number //limited or not
	limit: number //max bought
	totalnum: number //available
	price: number //displayed real price
}

export interface Shop {
	cft: {
		id: number //id/date of the shop
		title: string
		sTime: number //start
		eTime: number //end
		cd: { next: number, label: string }
	}
	list: Pack[]
}
