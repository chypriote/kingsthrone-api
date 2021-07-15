import { GoatResource } from '../../GoatResource'
import { PicnicStatus } from '../../goat/Events/Picnic'

export interface Picnic extends GoatResource {
	eventInfos(): Promise<PicnicStatus>
	claimQuest(id: number): Promise<void>
}
