import { CastleInfos } from '../../types/goat/Kingdom';
import { GoatResource } from '../GoatResource';
import { Kingdom as KingdomEndpoint } from '../../types/Endpoints/Kingdom';
export declare class Kingdom extends GoatResource implements KingdomEndpoint {
    getCastleRewards(id: number, rsn: string): Promise<CastleInfos | false>;
    getChapterRwdList(): Promise<void>;
    claimAll(castleId: number): Promise<void>;
    claimQuest(eventId: string, castleId: number): Promise<void>;
    sendQuest(eventId: string, castleId: number, sons: number[]): Promise<void>;
    refreshQuests(castleId: number): Promise<CastleInfos | false>;
}
