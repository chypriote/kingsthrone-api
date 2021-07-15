import { GoatResource } from '../GoatResource';
import { HallOfFamer } from '../../types/goat/HallOfFame';
import { HallOfFame as HallOfFameEndpoint } from '../../types/Endpoints/HallOfFame';
export declare class HallOfFame extends GoatResource implements HallOfFameEndpoint {
    getHoFInfo(): Promise<HallOfFamer[]>;
    getHoFTitle(): Promise<HallOfFamer[]>;
    payHomage(): Promise<void>;
    claimHomage(): Promise<void>;
}
