import { GoatResource } from '../../GoatResource';
import { EventRank } from '../../goat/events/Event';
import { DarkCastleStatus } from '../../goat/Events/DarkCastle';
export interface DarkCastle extends GoatResource {
    eventInfos(): Promise<DarkCastleStatus>;
    getRanking(): Promise<EventRank[]>;
}
