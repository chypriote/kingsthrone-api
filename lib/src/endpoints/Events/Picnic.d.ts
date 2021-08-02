import { GoatResource } from '../../GoatResource';
import { EventRank, PicnicStatus } from '../../../types';
export declare class Picnic extends GoatResource {
    eventInfos(): Promise<PicnicStatus>;
    claimQuest(id: number): Promise<void>;
    picnic(count?: number): Promise<void>;
    getRankings(): Promise<EventRank>;
}
