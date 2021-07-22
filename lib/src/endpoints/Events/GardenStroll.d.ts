import { GoatResource } from '../../GoatResource';
import { EventRankWithServer, GardenStrollPointExchange, GardenStrollStatus } from '../../../types';
export declare class GardenStroll extends GoatResource {
    eventInfos(): Promise<GardenStrollStatus>;
    getRanking(): Promise<EventRankWithServer[]>;
    getShop(): Promise<GardenStrollPointExchange>;
}
