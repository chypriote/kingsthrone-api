import { GoatResource } from '../../GoatResource';
import { GardenStrollPointExchange, GardenStrollStatus } from '../../../types/goat/Events/GardenStroll';
import { EventRankWithServer } from '../../../types/goat/Events/Event';
export declare class GardenStroll extends GoatResource {
    eventInfos(): Promise<GardenStrollStatus>;
    getRanking(): Promise<EventRankWithServer[]>;
    getShop(): Promise<GardenStrollPointExchange>;
}
