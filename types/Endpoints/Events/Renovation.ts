import { GoatResource } from '../../GoatResource'

export interface Renovation extends GoatResource {
	findEgg(): Promise<number>
	claimEgg(): Promise<void>
}
