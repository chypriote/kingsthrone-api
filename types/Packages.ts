import { Item } from './Item'

export enum PACKAGE_TYPE {
	RECOMMENDED= 1,
	GROWTH= 2,
	VALUE= 3,
	SPECIAL= 4,
}

interface PackageTypeInfo {
	type: PACKAGE_TYPE
	description: string
	item: Item
}

export interface Package {
	vipexp: number //vip exp won
	name: string
	biaohao: string //other name ?
	tips: string
	bid: number
	type: PACKAGE_TYPE
	limit: number //max buyable
	discout: number //shown % discount
	items: Item[]
	id: number
	alreadybuy: number //packs bought
	need: number //price in $
	diamond: number // ?? gems displayed? vip ?
}

export interface PackageShop {
	list: Package[] //recommended/growth/value
	listTwo: Package[] //special
	typeInfo: PackageTypeInfo[]
	typeInfoTwo: PackageTypeInfo[]
}
