import {
	EventGrid,
	EventGridLapChest, EventGridRun,
	EventQuest,
	EventQuestCfg,
	EventShop,
	EventItemShop,
	GenericEventInfo
} from './Event'
import { Item } from '../Item'

interface DarkCastleShop extends EventShop {
	wsItemShop: EventItemShop[]
}

interface DarkCastleInfo {
	info: GenericEventInfo
	msg: string
	gezi: EventGrid
	rwd: EventGridLapChest[]
	image: Item[]
	wsScore: number //my score
	cd: { label: string, next: number }
}

export interface DarkCastleStatus {
	wsInfo: DarkCastleInfo
	run: EventGridRun
	wsShop: DarkCastleShop
	wsTask: {
		taskscfg: EventQuestCfg[]
		tasks: EventQuest[]
	}
}
