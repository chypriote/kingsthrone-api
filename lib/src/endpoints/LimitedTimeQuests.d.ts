import { GoatResource } from '../GoatResource';
import { LTQ_TYPES, LTQStatus } from '../../types';
export declare class LimitedTimeQuests extends GoatResource {
    spendGems(): Promise<LTQStatus>;
    loseSoldiers(): Promise<LTQStatus>;
    spendGold(): Promise<LTQStatus>;
    studyManuscripts(): Promise<LTQStatus>;
    increaseIntimacy(): Promise<LTQStatus>;
    increaseKP(): Promise<LTQStatus>;
    enactDecrees(): Promise<LTQStatus>;
    login(): Promise<LTQStatus>;
    tourneyScore(): Promise<LTQStatus>;
    arrangeMarriages(): Promise<LTQStatus>;
    trainingGround(): Promise<LTQStatus>;
    challengeTokens(): Promise<LTQStatus>;
    processionsDonation(): Promise<LTQStatus>;
    goodwillDraughtQuest(): Promise<LTQStatus>;
    energyDraughtQuest(): Promise<LTQStatus>;
    increaseCharm(): Promise<LTQStatus>;
    attendFeasts(): Promise<LTQStatus>;
    damageAllianceBosses(): Promise<LTQStatus>;
    killAllianceBosses(): Promise<LTQStatus>;
    feastPoints(): Promise<LTQStatus>;
    randomVisitsQuest(): Promise<LTQStatus>;
    claimRewards(type: LTQ_TYPES): Promise<void>;
}
