import { GoatResource } from '../GoatResource';
import { GameInfos } from '../../types/goat/GameInfos';
import { DECREE_TYPE } from '../../types/goat/Misc';
import { CouncilStatus } from '../../types/goat/CouncilStatus';
import { PunishmentResult } from '../../types/goat/PunishmentResult';
import { UserProfile } from '../../types/goat/User';
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
