import { GoatResource } from '../../GoatResource';
import { TreasureHuntStatus } from '../../../types';
export declare class TreasureHunt extends GoatResource {
    eventInfos(): Promise<TreasureHuntStatus>;
    claimShovels(): Promise<void>;
    dig(): Promise<void>;
}
