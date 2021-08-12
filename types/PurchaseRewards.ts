import { PurchaseReward } from './GameInfos'

export interface PurchaseRewardsStatus {
	leitian: PurchaseReward //LimitedTimePurchases
	day: PurchaseReward //DailyPurchases
	total: PurchaseReward //CumulativePurchases
}
