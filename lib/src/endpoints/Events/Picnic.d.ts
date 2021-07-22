import { GoatResource } from '../../GoatResource';
import { PicnicStatus } from '../../../types/Events/Picnic';
import { EventRank } from '../../../types';
export declare class Picnic extends GoatResource {
    eventInfos(): Promise<PicnicStatus>;
    claimQuest(id: number): Promise<void>;
    getRankings(): Promise<EventRank>;
}
