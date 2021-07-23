import { GoatResource } from '../GoatResource';
import { CouncilStatus, GameInfos, PunishmentResult, UserProfile } from '../../types';
export declare class Profile extends GoatResource {
    gameInfos?: GameInfos;
    getGameInfos(): Promise<GameInfos>;
    finishTraining(): Promise<boolean>;
    startTraining(): Promise<void>;
    visitCouncil(): Promise<CouncilStatus>;
    hostCouncil(num?: number): Promise<void>;
    punishPrisoner(): Promise<PunishmentResult>;
    getUser(gid: string): Promise<UserProfile | null>;
}
