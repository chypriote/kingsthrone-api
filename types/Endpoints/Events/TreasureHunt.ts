import { TreasureHuntStatus } from '../../goat/Events/TreasureHunt'
import { GoatResource } from '../../GoatResource'

export interface TreasureHunt extends GoatResource {
	eventInfos(): Promise<TreasureHuntStatus>
	claimShovels(): Promise<void>
	dig(): Promise<void>
}
