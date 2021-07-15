import { GoatResource } from '../GoatResource'
import { GameInfos } from '../goat/GameInfos'

export interface Account extends GoatResource {
	createAccount(server: string): Promise<void | GameInfos>
	getGeneratedName(): Promise<string>
	setName(name: string): Promise<string>
}
