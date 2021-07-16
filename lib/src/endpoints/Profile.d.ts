import { GoatResource } from '../GoatResource';
import { DECREE_TYPE } from '../../types/goat/Misc';
import { GameInfos } from '../../types/goat/GameInfos';
import { CouncilStatus } from '../../types/goat/CouncilStatus';
import { UserProfile } from '../../types/goat/User';
import { PunishmentResult } from '../../types/goat/PunishmentResult';
export declare class Profile extends GoatResource {
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
