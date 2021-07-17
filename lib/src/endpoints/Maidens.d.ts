import { GoatResource } from '../GoatResource';
import { StaminaResult, VisitsStatus } from '../../types/goat/Maidens';
import { Wife } from '../../types/goat/GameInfos';
export declare class Maidens extends GoatResource {
    visitRandomMaiden(): Promise<Wife>;
    useStaminaDraught(num?: number): Promise<StaminaResult>;
    getAvailableVisits(): Promise<VisitsStatus>;
}
