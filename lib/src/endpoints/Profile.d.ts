import { GoatResource } from '../GoatResource';
import { CouncilStatus, DECREE_TYPE, GameInfos, PunishmentResult, UserProfile } from '../../types';
export declare class Profile extends GoatResource {
    gameInfos?: GameInfos;
    getGameInfos(): Promise<GameInfos>;
    getAllLevies(): Promise<boolean>;
    getAllDecreesResources(type: DECREE_TYPE): Promise<boolean>;
    finishTraining(): Promise<boolean>;
    startTraining(): Promise<void>;
    visitCouncil(): Promise<CouncilStatus>;
    hostCouncil(num?: number): Promise<void>;
    punishPrisoner(): Promise<PunishmentResult>;
    getUser(gid: string): Promise<UserProfile | null>;
}
