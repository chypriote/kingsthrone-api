import { GoatResource } from '../GoatResource';
import { HallOfFamer } from '../goat/HallOfFame';
export interface HallOfFame extends GoatResource {
    getHoFInfo(): Promise<HallOfFamer[]>;
    getHoFTitle(): Promise<HallOfFamer[]>;
    payHomage(): Promise<void>;
    claimHomage(): Promise<void>;
}
