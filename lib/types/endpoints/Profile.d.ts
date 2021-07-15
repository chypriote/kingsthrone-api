import { GoatResource } from '../GoatResource';
import { DECREE_TYPE } from '../goat/Misc';
import { GameInfos } from '../goat/GameInfos';
import { CouncilStatus } from '../goat/CouncilStatus';
import { UserProfile } from '../goat/User';
import { PunishmentResult } from '../goat/PunishmentResult';
export interface Profile extends GoatResource {
    getGameInfos(): Promise<GameInfos>;
    getUser(gid: string): Promise<UserProfile | null>;
    getAllLevies(): Promise<boolean>;
    getAllDecreesResources(type: DECREE_TYPE): Promise<boolean>;
    finishTraining(): Promise<boolean>;
    startTraining(): Promise<void>;
    visitCouncil(): Promise<CouncilStatus>;
    hostCouncil(num: number): Promise<void>;
    punishPrisoner(): Promise<PunishmentResult>;
}
