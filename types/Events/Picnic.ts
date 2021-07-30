import { Item } from '../Item'
import { EventDropWithProbability, EventQuest, EventQuestCfg, EventShop } from './Event'

export interface PicnicStatus {
	info: {
		cons: number
		quan: number
		quanBuyNeed: number
		quandNeedTen: number
		score: number
		image: Item[]
		list: EventDropWithProbability[]
	}
	shop: EventShop
	task: {
		tasks: EventQuest[]
		taskscfg: EventQuestCfg
	}
}
