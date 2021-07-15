import { GoatResource } from '../GoatResource';
import { ExpeditionInfo, KingdomExpInfo, MerchantInfos } from '../../types/goat/Expeditions';
import { Expeditions as ExpeditionsEndpoint } from '../../types/Endpoints/Expeditions';
export declare class Expeditions extends GoatResource implements ExpeditionsEndpoint {
    getMerchantStatus(): Promise<MerchantInfos>;
    doMerchantVentures(count: number): Promise<void>;
    getExpeditionsStatus(): Promise<ExpeditionInfo>;
    doExpeditions(count: number): Promise<ExpeditionInfo>;
    doExpedition(id: number): Promise<ExpeditionInfo>;
    getKingdomExpStatus(): Promise<KingdomExpInfo>;
    doKingdomExpedition(level: number): Promise<KingdomExpInfo>;
    claimKingdomExpReward(id: number): Promise<void>;
}
