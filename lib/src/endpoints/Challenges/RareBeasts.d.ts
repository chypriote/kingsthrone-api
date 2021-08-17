import { GoatResource } from '../../GoatResource';
import { RareBeastsStatus } from '../../../types';
export declare class RareBeasts extends GoatResource {
    eventInfos(): Promise<RareBeastsStatus>;
    claimProgressReward(id: number): Promise<void>;
}
