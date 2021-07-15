import { GoatResource } from '../GoatResource'

export interface Rankings extends GoatResource {
	payHomageKP(): Promise<void>
	payHomageCampaign(): Promise<void>
	payHomageIntimacy(): Promise<void>
}
