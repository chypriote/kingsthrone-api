import { EventRwd, GenericEventInfo } from './Event'

export interface RareBeastCarnivalStatus {
	info: GenericEventInfo
	he_sev: number[][]
	showNeed: {
		wang: number
	}
	rwd: EventRwd[]
	msg: string
}
