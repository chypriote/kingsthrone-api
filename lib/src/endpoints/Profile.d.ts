import { GoatResource } from '../GoatResource';
import { CouncilStatus, GameInfos, PunishmentResult, UserProfile } from '../../types';
export declare class Profile extends GoatResource {
    gameInfos?: GameInfos;
    getGameInfos(force?: boolean): Promise<GameInfos>;
    finishTraining(): Promise<boolean>;
    startTraining(): Promise<void>;
    sendTraining(id: number, dummy?: number): Promise<void>;
    visitCouncil(): Promise<CouncilStatus>;
    hostCouncil(num?: number): Promise<void>;
    punishPrisoner(): Promise<PunishmentResult>;
    getUser(gid: string): Promise<UserProfile | null>;
    levelUpKingdom(): Promise<void>;
}
