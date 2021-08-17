import { GoatResource } from '../../GoatResource';
import { KingdomPowerStatus } from '../../../types';
export declare class KingdomPower extends GoatResource {
    eventInfos(): Promise<KingdomPowerStatus>;
    claimProgressReward(id: number): Promise<void>;
}
