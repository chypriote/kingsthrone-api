import { GoatResource } from '../GoatResource';
import { HallOfFamer } from '../../types/HallOfFame';
export declare class HallOfFame extends GoatResource {
    getHoFInfo(): Promise<HallOfFamer[]>;
    getHoFTitle(): Promise<HallOfFamer[]>;
    payHomage(): Promise<void>;
    claimHomage(): Promise<void>;
}
