import { GoatResource } from '../GoatResource';
import { ExpeditionInfo, KingdomExpInfo, MerchantInfos } from '../../types';
export declare class Expeditions extends GoatResource {
    getMerchantStatus(): Promise<MerchantInfos>;
    doMerchantVentures(count: number): Promise<void>;
    getExpeditionsStatus(): Promise<ExpeditionInfo>;
    doExpeditions(count: number): Promise<ExpeditionInfo>;
    doExpedition(id: number): Promise<ExpeditionInfo>;
    getKingdomExpStatus(): Promise<KingdomExpInfo>;
    doKingdomExpedition(level: number): Promise<KingdomExpInfo>;
    claimKingdomExpReward(id: number): Promise<void>;
    claimKingdomFirstReward(id: number): Promise<void>;
    claimKingdomMyReward(id: number): Promise<void>;
}
