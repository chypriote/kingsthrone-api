import { GoatResource } from '../GoatResource';
import { LTQ_TYPES, LTQStatus } from '../../types';
export declare class LimitedTimeQuests extends GoatResource {
    loginQuest(): Promise<LTQStatus>;
    gemsQuest(): Promise<LTQStatus>;
    marriageQuest(): Promise<LTQStatus>;
    randomVisitsQuest(): Promise<LTQStatus>;
    energyDraughtQuest(): Promise<LTQStatus>;
    claimRewards(type: LTQ_TYPES): Promise<void>;
}
