import { Item } from '../Item';
import { ClubEventRwd, EventRwd } from '../Events';
export interface ChallengeRwdStatus {
    rwd_stat: number;
}
export interface ChallengeRid {
    name: string;
    rid: number;
    score: number;
}
export interface ChallengeRank {
    uid: string;
    name: string;
    rid: number;
    score: number;
}
export interface ChallengeCfg {
    info: {
        id: number;
        title: string;
        pindex: number;
        type: number;
        sTime: number;
        eTime: number;
        showTime: number;
        _act_id: string;
    };
    showNeed: {
        wang: number;
    };
    task: {
        id: number;
        target: number;
        rewards: Item[];
    }[];
    rwd: EventRwd[];
    msg: string;
}
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
export interface QualityStatus {
    zizhi: {
        cfg: ChallengeCfg;
    };
    zizhilist: ChallengeRank[];
    myZiZhiRid: ChallengeRid;
    myZiZhiRwdStatus: ChallengeRwdStatus;
}
export interface GrainStatus {
    liangshi: {
        cfg: ChallengeCfg;
    };
    liangshilist: ChallengeRank[];
    myLiangShiRid: ChallengeRid;
    myLiangShiRwdStatus: ChallengeRwdStatus;
}
