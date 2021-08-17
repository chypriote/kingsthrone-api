import { GoatResource } from '../../GoatResource';
import { TreasureHuntStatus } from '../../../types';
export declare class TreasureHunt extends GoatResource {
    eventInfos(): Promise<TreasureHuntStatus>;
    claimAllShovels(): Promise<void>;
    claimShovel(id: number): Promise<void>;
    dig(): Promise<void>;
    openChest(id: number): Promise<void>;
}
