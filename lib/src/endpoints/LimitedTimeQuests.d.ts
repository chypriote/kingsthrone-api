import { GoatResource } from '../GoatResource';
import { LTQStatus } from '../../types';
export declare class LimitedTimeQuests extends GoatResource {
    loginQuest(): Promise<LTQStatus>;
    gemsQuest(): Promise<LTQStatus>;
    marriageQuest(): Promise<LTQStatus>;
    randomVisits(): Promise<LTQStatus>;
    energyDraught(): Promise<LTQStatus>;
}
