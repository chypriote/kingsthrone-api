import { EventDailyQuest, EventGrid, EventGridLapChest, EventGridRun, GenericEventInfo } from './Event'

export interface PathOfWealthStatus {
	xunbao: { cfg: {
		info: GenericEventInfo
		msg: string
		touzi: EventDailyQuest[]
		gezi: EventGrid
		rwd: EventGridLapChest[]
	}	}
	run: EventGridRun
}
