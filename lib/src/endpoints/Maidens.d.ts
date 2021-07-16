import { GoatResource } from '../GoatResource';
import { Wife } from '../../types/goat/GameInfos';
import { StaminaResult, VisitsStatus } from '../../types/goat/Maidens';
export declare class Maidens extends GoatResource {
    visitRandomMaiden(): Promise<Wife>;
    useStaminaDraught(num?: number): Promise<StaminaResult>;
    getAvailableVisits(): Promise<VisitsStatus>;
}
