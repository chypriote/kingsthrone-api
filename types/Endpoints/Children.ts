import { GoatResource } from '../GoatResource'
import { InLaw } from '../goat/InLaw'

export interface Children extends GoatResource {
	//Sons
	getSonsStatus(): Promise<any>
	raiseAllSons(): Promise<boolean>
	nameSon(id: number): Promise<void>
	useEnergyDraught(son: number, num: number): Promise<void>
	evaluateSon(son: number): Promise<void>
	//InLaws
	getInLaws(): Promise<InLaw[]>
	visitInLaw(uid: string): Promise<void>
	visitInLaws(): Promise<void>
}
