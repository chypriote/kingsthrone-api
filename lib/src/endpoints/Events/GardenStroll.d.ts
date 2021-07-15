import { GoatResource } from '../../GoatResource';
import { EventRankWithServer } from '../../../types/goat/Events/Event';
import { GardenStrollPointExchange, GardenStrollStatus } from '../../../types/goat/Events/GardenStroll';
import { GardenStroll as GardenStrollEndpoint } from '../../../types/Endpoints/Events/GardenStroll';
export declare class GardenStroll extends GoatResource implements GardenStrollEndpoint {
    eventInfos(): Promise<GardenStrollStatus>;
    getRanking(): Promise<EventRankWithServer[]>;
    getShop(): Promise<GardenStrollPointExchange>;
}
