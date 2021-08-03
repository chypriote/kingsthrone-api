import { ClubEventRwd } from '../Events';
import { ChallengeCfg, ChallengeRank, ChallengeRid, ChallengeRwdStatus } from './Challenges';
export interface AllianceChallengeCfg extends ChallengeCfg {
    rwd: ClubEventRwd[];
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
