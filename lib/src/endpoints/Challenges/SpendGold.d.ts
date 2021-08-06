import { GoatResource } from '../../GoatResource';
import { SpendGoldStatus } from '../../../types';
export declare class SpendGold extends GoatResource {
    eventInfos(): Promise<SpendGoldStatus>;
    claimProgressReward(id: number): Promise<void>;
}
