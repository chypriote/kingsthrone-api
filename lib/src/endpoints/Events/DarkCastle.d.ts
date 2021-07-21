import { GoatResource } from '../../GoatResource';
import { DarkCastleStatus } from '../../../types/Events/DarkCastle';
import { EventRank } from '../../../types/Events/Event';
export declare class DarkCastle extends GoatResource {
    eventInfos(): Promise<DarkCastleStatus>;
    getRanking(): Promise<EventRank[]>;
}
