import {
	EventLimitedOffers, EventPhasesReward, EventPointExchangeAllLimit, EventProgressReward,
	EventQuest,
	EventQuestCfg, EventRank,
	EventRwd,
	EventWheel,
	EventWheelConfig,
	EventWheelInfo, GenericEventInfo
} from './Event'
import { Item } from '../Item'
import { ChallengeCfg } from '../Challenges'

export interface EquipmentTrialRank {
	name: string
	rid: number
	score: number
	uid: number
}

export interface EquipmentTrialWheel extends EventWheel {
	info: EventWheelInfo & { show_icon: { id: number, kind: number } }
	cfg: EventWheelConfig & { onetap_cost: number }
}

export interface EquipmentTrial {
	info: {
		freeNum: number
		hasFreeNum: number
		buyNum: number
		hasHero: { id: number, status: number }[]
		hasBuyHeroNumArr: { heroId: number, num: number }[]
		bossId: number
		killNum: number
		floorRwdStatus: any[]
		damage: number
		score: number
		everyday_box: number
		box_floor: number
		cd: { next: number, label: string }
		towerNpc: { attack: number, health: number, hp: number }
	}
	tasks:  EventQuest[]
	everyday_tasks: EventQuest[]
	cfg: {
		rank: EventRwd[]
		level: number
		needCost: number
		needHeroCost: { num: number, value: number }[]
		phasesRewards: EventPhasesReward[]
		image: Item[]
		taskscfg: {
			type: number
			dcCfg: {
				id: number
				max: number
				level: number
				items: Item[]
			}[]
		}[]
		everyday_taskscfg: EventQuestCfg[]
		show_icon: { id: number, kind: number }
	}
	shop: {
		list: EventPointExchangeAllLimit[]
		hasScore: number
	}
}

export interface EquipmentTrialStatus {
	event: EquipmentTrial
	wheel: EquipmentTrialWheel
	limitedOffer: EventLimitedOffers
	ranking: EquipmentTrialRank[]
}


export interface EquipmentMatchingRank {
	myFloorsRid: EventRank
	myRid: EventRank
	list: EventRank[] //equipment power ranking
	floorsList: EventRank[] //equipment trial tower
}
export interface EquipmentMatchingPower extends ChallengeCfg {
	kua_server: string[];
}
