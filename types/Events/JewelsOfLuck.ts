import { EventWheel, EventWheelConfig } from './Event'

export interface JewelsOfLuckStatus extends EventWheel {
	info: {
		chosen:  {id: number, key: number}[]
		num: number
	}
	cfg: EventWheelConfig
}
