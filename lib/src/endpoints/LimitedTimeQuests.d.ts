import { GoatResource } from '../GoatResource';
import { LTQ_TYPES, LTQStatus } from '../../types';
export declare class LimitedTimeQuests extends GoatResource {
    spendGems(): Promise<LTQStatus>;
    loseSoldiers(): Promise<LTQStatus>;
    spendGold(): Promise<LTQStatus>;
    studyManuscripts(): Promise<LTQStatus>;
    increaseKP(): Promise<LTQStatus>;
    enactDecrees(): Promise<LTQStatus>;
    login(): Promise<LTQStatus>;
    tourneyScore(): Promise<LTQStatus>;
    arrangeMarriages(): Promise<LTQStatus>;
    challengeTokens(): Promise<LTQStatus>;
    energyDraughtQuest(): Promise<LTQStatus>;
    increaseCharm(): Promise<LTQStatus>;
    randomVisitsQuest(): Promise<LTQStatus>;
    claimRewards(type: LTQ_TYPES): Promise<void>;
}
