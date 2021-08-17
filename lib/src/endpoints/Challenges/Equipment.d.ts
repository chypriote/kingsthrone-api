import { GoatResource } from '../../GoatResource';
import { EquipmentStatus } from '../../../types';
export declare class Equipment extends GoatResource {
    eventInfos(): Promise<EquipmentStatus>;
    claimProgressReward(id: number): Promise<void>;
}
