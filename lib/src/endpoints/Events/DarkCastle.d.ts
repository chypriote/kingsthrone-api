import { GoatResource } from '../../GoatResource';
import { EventRank } from '../../../types/goat/events/Event';
import { DarkCastle as DarkCastleEndpoint } from '../../../types/Endpoints/Events/DarkCastle';
import { DarkCastleStatus } from '../../../types/goat/Events/DarkCastle';
export declare class DarkCastle extends GoatResource implements DarkCastleEndpoint {
    eventInfos(): Promise<DarkCastleStatus>;
    getRanking(): Promise<EventRank[]>;
}
