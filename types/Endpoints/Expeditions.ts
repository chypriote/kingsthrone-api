import { GoatResource } from '../GoatResource'
import { ExpeditionInfo, KingdomExpInfo, MerchantInfos } from '../goat/Expeditions'

export interface Expeditions extends GoatResource {
	//Merchant ventures
	getMerchantStatus(): Promise<MerchantInfos>
	doMerchantVentures(count: number): Promise<void>

	//Expeditions
	getExpeditionsStatus(): Promise<ExpeditionInfo>
	doExpeditions(count: number): Promise<ExpeditionInfo>
	doExpedition(id: number): Promise<ExpeditionInfo>

	//Kingdom Expeditions
	getKingdomExpStatus(): Promise<KingdomExpInfo>
	doKingdomExpedition(level: number): Promise<KingdomExpInfo>
	claimKingdomExpReward(id: number): Promise<void>
}
