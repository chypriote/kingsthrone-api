import { GoatResource } from '../../GoatResource';
import { TreasureHuntStatus } from '../../../types/goat/Events/TreasureHunt';
import { TreasureHunt as TreasureHuntEndpoint } from '../../../types/Endpoints/Events/TreasureHunt';
export declare class TreasureHunt extends GoatResource implements TreasureHuntEndpoint {
    eventInfos(): Promise<TreasureHuntStatus>;
    claimShovels(): Promise<void>;
    dig(): Promise<void>;
}
