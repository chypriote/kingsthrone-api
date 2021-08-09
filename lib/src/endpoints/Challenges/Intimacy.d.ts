import { GoatResource } from '../../GoatResource';
import { IntimacyStatus } from '../../../types';
export declare class Intimacy extends GoatResource {
    eventInfos(): Promise<IntimacyStatus>;
    claimProgressReward(id: number): Promise<void>;
}
