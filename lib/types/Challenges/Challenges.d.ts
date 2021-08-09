import { EquipmentMatchingPower, EventProgressReward, EventRwd, GenericEventInfo } from '../Events';
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
    info: GenericEventInfo;
    showNeed: {
        wang: number;
    };
    task: EventProgressReward[];
    rwd: EventRwd[];
    msg: string;
}
export interface TourneyStatus {
    yamen: {
        cfg: ChallengeCfg;
    };
    yamenlist: ChallengeRank[];
    myyamenRid: ChallengeRid;
    myyamenRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface CharmStatus {
    meili: {
        cfg: ChallengeCfg;
    };
    meililist: ChallengeRank[];
    myMeiLiRid: ChallengeRid;
    myMeiLiRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface QualityStatus {
    zizhi: {
        cfg: ChallengeCfg;
    };
    zizhilist: ChallengeRank[];
    myZiZhiRid: ChallengeRid;
    myZiZhiRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface GrainStatus {
    liangshi: {
        cfg: ChallengeCfg;
    };
    liangshilist: ChallengeRank[];
    myLiangShiRid: ChallengeRid;
    myLiangShiRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface RaiseChildrenStatus {
    zsshili: {
        cfg: ChallengeCfg;
    };
    zsshililist: ChallengeRank[];
    myzsShiliRid: ChallengeRid;
    myzsShiliRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface MaidenExpStatus {
    jiaren: {
        cfg: ChallengeCfg;
    };
    jiarenlist: ChallengeRank[];
    myJiaRenRid: ChallengeRid;
    myJiaRenRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface SpendGoldStatus {
    yinliang: {
        cfg: ChallengeCfg;
    };
    yinlianglist: ChallengeRank[];
    myYinLiangRid: ChallengeRid;
    myYinLiangRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface EquipmentStatus {
    power: {
        cfg: EquipmentMatchingPower;
    };
    powerlist: ChallengeRank[];
    myPowerRid: ChallengeRid;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface IntimacyStatus {
    love: {
        cfg: ChallengeCfg;
    };
    lovelist: ChallengeRank[];
    myloveRid: ChallengeRid;
    myloveRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
export interface RareBeastsStatus {
    zhenshou: {
        cfg: ChallengeCfg;
    };
    zhenshoulist: ChallengeRank[];
    myZhenShouRid: ChallengeRid;
    myZhenShouRwdStatus: ChallengeRwdStatus;
    rewards: {
        id: number;
        taskStatus: {
            id: number;
        }[];
    }[];
}
