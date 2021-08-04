import { GoatResource } from '../../GoatResource';
import { CHERISHED_WISH_TYPE, CherishedWishStatus, ContinualTopUpStatus, EventRank, LoginRewardsStatus, RenownedMerchantEvent } from '../../../types';
export declare class RenownedMerchant extends GoatResource {
    eventInfos(): Promise<RenownedMerchantEvent>;
    getRanking(): Promise<EventRank[]>;
    buyEmblem(count?: number): Promise<void>;
    useEmblem(count?: number): Promise<void>;
    buyExchangeItem(id: number, count?: number): Promise<void>;
    /** Login Rewards */
    loginRewardsInfo(): Promise<LoginRewardsStatus>;
    getTaskReward(day: number, type: number): Promise<void>;
    /** Wish tree */
    wishTreeInfos(): Promise<CherishedWishStatus>;
    setWishTreeReward(id: number, day: number, pos: number, type: CHERISHED_WISH_TYPE): Promise<void>;
    getWishTreeReward(type: CHERISHED_WISH_TYPE): Promise<void>;
    /** Top Up */
    continualTopUpInfos(): Promise<ContinualTopUpStatus>;
    getContinualTopUp(): Promise<void>;
}
