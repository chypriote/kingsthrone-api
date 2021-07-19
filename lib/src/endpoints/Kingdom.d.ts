import { GoatResource } from '../GoatResource';
import { CastleInfos } from '../../types/Kingdom';
export declare class Kingdom extends GoatResource {
    getCastleRewards(id: number, rsn: string): Promise<CastleInfos | false>;
    getChapterRwdList(): Promise<void>;
    claimAll(castleId: number): Promise<void>;
    claimQuest(eventId: string, castleId: number): Promise<void>;
    sendQuest(eventId: string, castleId: number, sons: number[]): Promise<void>;
    refreshQuests(castleId: number): Promise<CastleInfos | false>;
}
