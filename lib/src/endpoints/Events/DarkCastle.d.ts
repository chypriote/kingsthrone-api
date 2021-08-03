import { GoatResource } from '../../GoatResource';
import { DarkCastleStatus, EventRank } from '../../../types';
export declare class DarkCastle extends GoatResource {
    eventInfos(): Promise<DarkCastleStatus>;
    getRanking(): Promise<EventRank[]>;
}
