import { GoatResource } from '../../GoatResource';
import { QualityStatus } from '../../../types';
export declare class Quality extends GoatResource {
    eventInfos(): Promise<QualityStatus>;
    claimProgressReward(id: number): Promise<void>;
}
