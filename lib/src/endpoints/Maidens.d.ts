import { GoatResource } from '../GoatResource';
import { StaminaResult, VisitsStatus } from '../../types/Maidens';
import { Wife } from '../../types/GameInfos';
export declare class Maidens extends GoatResource {
    visitRandomMaiden(): Promise<Wife>;
    useStaminaDraught(num?: number): Promise<StaminaResult>;
    getAvailableVisits(): Promise<VisitsStatus>;
}
