import { GoatResource } from '../GoatResource';
import { CastleInfos } from '../../types';
export declare class Kingdom extends GoatResource {
    getCastleRewards(id: number): Promise<CastleInfos | false>;
    claimAll(castleId: number): Promise<void>;
    claimQuest(eventId: string, castleId: number): Promise<void>;
    sendQuest(eventId: string, castleId: number, sons: number[]): Promise<void>;
    refreshQuests(castleId: number): Promise<CastleInfos | false>;
    levelUpCastle(castleId: number): Promise<void>;
}
