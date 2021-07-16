import { GoatResource } from '../../GoatResource';
import { EventRankWithServer } from '../../../types/goat/Events/Event';
import { GardenStrollPointExchange, GardenStrollStatus } from '../../../types/goat/Events/GardenStroll';
export declare class GardenStroll extends GoatResource {
    eventInfos(): Promise<GardenStrollStatus>;
    getRanking(): Promise<EventRankWithServer[]>;
    getShop(): Promise<GardenStrollPointExchange>;
}
