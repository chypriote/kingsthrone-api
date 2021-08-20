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
    myclubLoveRid: ChallengeRid;
    myclubloveRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface AllianceExperienceStatus {
    club: {
        cfg: AllianceChallengeCfg;
    };
    clublist: ChallengeRank[];
    myclubRid: ChallengeRid;
    myclubloveRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface AlliancePowerStatus {
    clubshili: {
        cfg: AllianceChallengeCfg;
    };
    clubshililist: ChallengeRank[];
    myclubShiliRid: ChallengeRid;
    myclubShiliRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
