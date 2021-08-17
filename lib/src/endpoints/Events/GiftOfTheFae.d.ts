import { GoatResource } from '../../GoatResource';
import { GiftOfTheFaeStatus } from '../../../types';
export declare class GiftOfTheFae extends GoatResource {
    eventInfos(): Promise<GiftOfTheFaeStatus>;
    openFreeTree(): Promise<void>;
    useQuickCollect(tree?: number): Promise<void>;
    useExtraOutput(tree?: number): Promise<void>;
    selectPoolReward(rwd?: number, pool?: number): Promise<void>;
    pourDew(water: number, pool?: number): Promise<void>;
    praiseTheSun(pool?: number): Promise<void>;
    claimPoolItem(pool?: number): Promise<void>;
}
