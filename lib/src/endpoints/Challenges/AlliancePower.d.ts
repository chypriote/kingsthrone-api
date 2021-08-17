import { GoatResource } from '../../GoatResource';
import { AlliancePowerStatus } from '../../../types';
export declare class AlliancePower extends GoatResource {
    eventInfos(): Promise<AlliancePowerStatus>;
    claimProgressReward(id: number): Promise<void>;
}
