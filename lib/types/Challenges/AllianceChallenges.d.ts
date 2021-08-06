import { ClubEventRwd, EventProgressReward, GenericEventInfo } from '../Events';
import { ChallengeRank, ChallengeRid, ChallengeRwdStatus } from './Challenges';
export interface AllianceChallengeCfg {
    info: GenericEventInfo;
    showNeed: {
        wang: number;
    };
    task: EventProgressReward[];
    rwd: ClubEventRwd[];
    msg: string;
}
export interface AllianceIntimacyStatus {
    clublove: {
        cfg: AllianceChallengeCfg;
    };
    clublovelist: ChallengeRank[];
    myclubRid: ChallengeRid;
    myclubloveRwdStatus: ChallengeRwdStatus;
}
export interface AllianceExperienceStatus {
    club: {
        cfg: AllianceChallengeCfg;
    };
    clublist: ChallengeRank[];
    myclubRid: ChallengeRid;
    myclubloveRwdStatus: ChallengeRwdStatus;
}
