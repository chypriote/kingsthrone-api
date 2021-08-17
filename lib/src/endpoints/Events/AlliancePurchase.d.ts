import { GoatResource } from '../../GoatResource';
import { AlliancePurchaseStatus } from '../../../types';
export declare class AlliancePurchase extends GoatResource {
    eventInfos(): Promise<AlliancePurchaseStatus>;
    claimReward(day: number, id: number): Promise<void>;
}
