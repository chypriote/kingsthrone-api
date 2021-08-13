import { GoatResource } from '../../GoatResource';
import { FeastPointsStatus } from '../../../types';
export declare class FeastPoints extends GoatResource {
    eventInfos(): Promise<FeastPointsStatus>;
    claimProgressReward(id: number): Promise<void>;
}
