import { GoatResource } from '../GoatResource';
import { HallOfFamer } from '../../types';
import { HOF_TITLE } from '../../types/HallOfFame';
export declare class HallOfFame extends GoatResource {
    getHoFInfo(): Promise<HallOfFamer[]>;
    getHoFTitle(title: HOF_TITLE): Promise<HallOfFamer[]>;
    payHomage(uid: string, title?: HOF_TITLE): Promise<void>;
    claimHomage(): Promise<void>;
}
