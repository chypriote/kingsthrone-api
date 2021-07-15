import { GoatResource } from '../../GoatResource';
import { EventRankWithServer } from '../../goat/events/Event';
import { GardenStrollPointExchange, GardenStrollStatus } from '../../goat/Events/GardenStroll';
export interface GardenStroll extends GoatResource {
    eventInfos(): Promise<GardenStrollStatus>;
    getRanking(): Promise<EventRankWithServer[]>;
    getShop(): Promise<GardenStrollPointExchange>;
}
