import { GoatResource } from '../GoatResource';
import { StaminaResult, VisitsStatus, Wife } from '../../types';
export declare class Maidens extends GoatResource {
    visitRandomMaiden(): Promise<Wife>;
    useStaminaDraught(num?: number): Promise<StaminaResult>;
    getAvailableVisits(): Promise<VisitsStatus>;
    payVisit(id: number): Promise<Wife>;
}
