import { GoatResource } from '../../GoatResource';
import { GrainStatus } from '../../../types';
export declare class Grain extends GoatResource {
    eventInfos(): Promise<GrainStatus>;
    claimProgressReward(id: number): Promise<void>;
}
