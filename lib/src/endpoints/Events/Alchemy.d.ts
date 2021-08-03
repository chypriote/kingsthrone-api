import { GoatResource } from '../../GoatResource';
import { AlchemyStatus, EventRank } from '../../../types';
export declare class Alchemy extends GoatResource {
    eventInfos(): Promise<AlchemyStatus>;
    getRanking(): Promise<EventRank[]>;
    claimQuest(id: number): Promise<void>;
    receiveGift(uid: number, son: number): Promise<void>;
    sendGift(uid: number, son: number): Promise<void>;
    claimCompleteReward(): Promise<void>;
    trade(iron: number, bottle: number, maiden: number): Promise<void>;
    forge(shard: number, ore: number, hero: number): Promise<void>;
}
