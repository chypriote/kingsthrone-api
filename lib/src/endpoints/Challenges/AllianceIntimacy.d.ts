import { GoatResource } from '../../GoatResource';
import { AllianceIntimacyStatus } from '../../../types';
export declare class AllianceIntimacy extends GoatResource {
    eventInfos(): Promise<AllianceIntimacyStatus>;
    claimProgressReward(id: number): Promise<void>;
}
