import { GoatResource } from '../GoatResource';
import { HallOfFamer, TITLE } from '../../types';
export declare class HallOfFame extends GoatResource {
    getHoFInfo(): Promise<HallOfFamer[]>;
    getHoFTitle(title: TITLE): Promise<HallOfFamer[]>;
    payHomage(uid: string, title?: TITLE): Promise<void>;
    claimHomage(): Promise<void>;
}
