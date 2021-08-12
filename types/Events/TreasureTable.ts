import { EventDropWithProbability, EventPointExchangeTotalLimit, GenericEventInfo } from './Event'

export interface TreasureTableStatus {
	zhuanpan: {
		cfg: {
			info: GenericEventInfo
			wairwd: { //outer wheel
				need: number;
				needTen: number;
				jifen: number;
				cishu: number;
				dc: number;
				free: number;
				freeT: number;
				list: EventDropWithProbability[];
				cd: {next: number, num: number, label: string}
			}
			neirwd: { //Inner wheel
				need: number;
				needTen: number;
				jifen: number;
				cishu: number;
				dc: number;
				free: number;
				freeT: number;
				list: EventDropWithProbability[];
				cd: {next: number, num: number, label: string}
			}
			shop: { list: EventPointExchangeTotalLimit[] }
			msg: string
		}
		cons: number
		lowquan: number
		higquan: number
	}
	total: { fenshu: number } //points
}
