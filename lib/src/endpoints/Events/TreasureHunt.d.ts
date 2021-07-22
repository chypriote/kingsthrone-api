import { GoatResource } from '../../GoatResource';
import { TreasureHuntStatus } from '../../../types/Events/TreasureHunt';
export declare class TreasureHunt extends GoatResource {
    eventInfos(): Promise<TreasureHuntStatus>;
    claimShovels(): Promise<void>;
    dig(): Promise<void>;
}
