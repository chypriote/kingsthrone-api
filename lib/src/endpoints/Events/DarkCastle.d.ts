import { GoatResource } from '../../GoatResource';
import { DarkCastleStatus } from '../../../types/goat/Events/DarkCastle';
import { EventRank } from '../../../types/goat/Events/Event';
export declare class DarkCastle extends GoatResource {
    eventInfos(): Promise<DarkCastleStatus>;
    getRanking(): Promise<EventRank[]>;
}
