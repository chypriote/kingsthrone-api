import { GoatResource } from '../GoatResource'
import { Wife } from '../goat/GameInfos'
import { StaminaResult, VisitsStatus } from '../goat/Maidens'

export interface Maidens extends GoatResource {
	visitRandomMaiden(): Promise<Wife>
	useStaminaDraught(num: number): Promise<StaminaResult>
	getAvailableVisits(): Promise<VisitsStatus>
}
