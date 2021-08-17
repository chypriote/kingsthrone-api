import { EventDropWithProbability, EventRwd, GenericEventInfo } from './Event'
import { Item } from '../Item'

export interface ArchersAndAccoladesStatus {
	love: {
		cfg: {
			info: GenericEventInfo
			msg: string
			rwd: {
				need: number
				needTen: number
				list: EventDropWithProbability[]
			}
			send: {
				id: number
				max: number
				items: Item[]
				msg: string
				isGet: number
			}[]
			get: {
				id: number
				max: number
				items: Item[]
				msg: string
				isGet: number
			}[]
			rank: EventRwd[]
		}
		cons: number
		step: number
		send: number
		get: number
		tip: number
		lovequan: number
	}
	SRank:  {
		type: number
		myName: string
		myRid: number
		myNum: number
	}
}
