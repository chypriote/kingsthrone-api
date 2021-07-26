import { GoatResource } from '../../GoatResource';
import { EventRank, RenownedMerchantStatus } from '../../../types';
export declare class RenownedMerchant extends GoatResource {
    eventInfos(): Promise<RenownedMerchantStatus>;
    getRanking(): Promise<EventRank[]>;
    buyEmblem(count?: number): Promise<void>;
    useEmblem(count?: number): Promise<void>;
    buyExchangeItem(id: number, count?: number): Promise<void>;
}
