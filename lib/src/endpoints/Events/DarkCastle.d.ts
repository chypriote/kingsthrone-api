import { GoatResource } from '../../GoatResource';
import { EventRank } from '../../../types/goat/events/Event';
import { DarkCastleStatus } from '../../../types/goat/Events/DarkCastle';
export declare class DarkCastle extends GoatResource {
    eventInfos(): Promise<DarkCastleStatus>;
    getRanking(): Promise<EventRank[]>;
}
