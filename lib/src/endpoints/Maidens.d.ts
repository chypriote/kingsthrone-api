import { GoatResource } from '../GoatResource';
import { Wife } from '../../types/goat/GameInfos';
import { StaminaResult, VisitsStatus } from '../../types/goat/Maidens';
import { Maidens as MaidensEndpoint } from '../../types/Endpoints/Maidens';
export declare class Maidens extends GoatResource implements MaidensEndpoint {
    visitRandomMaiden(): Promise<Wife>;
    useStaminaDraught(num?: number): Promise<StaminaResult>;
    getAvailableVisits(): Promise<VisitsStatus>;
}
