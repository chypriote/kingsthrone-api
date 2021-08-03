import { Item } from '../Item'

export enum DIY_PACKS {
	FREE_PACK= -1,
	ONE$_PACK= 307,
	TEN$_PACK= 310,
	THIRTY$_PACK= 311,
	FIFTY$_PACK= 312,
	HUNDRED$_PACK= 332,
}

export interface DIYStoreStatus {
	info: {
		hasBuyNum: { dc: DIY_PACKS, num: number }[]
		optional: {
			dc: number
			opt: { pos: number, id: number }[]
		}[]
	}
	cfg: {
		dc: DIY_PACKS
		name: string
		limit: number
		fixedRwd: Item[]
		optionRwd: { pos: number, rwd: Item[] }[]
	}[]
}
