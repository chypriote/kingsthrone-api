import { GoatResource } from '../GoatResource'
import { FeastDetails, FeastInfo, FeastShop, FeastStatus, OngoingFeast } from '../goat/Feasts'

export interface Feasts extends GoatResource {
	getFeastsInfo(): Promise<FeastInfo>
	getFeast(uid: string | null): Promise<FeastDetails>
	openFeast(): Promise<void>
	joinFeast(uid: string, seat: number): Promise<{ jfly: FeastStatus, jlShop: FeastShop, yhInfo: OngoingFeast[] }>
	buyFeastItem(id: number): Promise<void>
}
