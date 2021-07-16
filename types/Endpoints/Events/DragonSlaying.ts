import { GoatResource } from '../../GoatResource'
import { DragonSlayingStatus } from '../../goat/Events/DragonSlaying'

export interface DragonSlaying extends GoatResource {
	eventInfos(): Promise<DragonSlayingStatus>
	slay(id: number): Promise<void>
}
