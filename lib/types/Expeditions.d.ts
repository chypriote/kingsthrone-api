import { User } from "./User";
export declare type MerchantInfos = {
    beishu: number;
    gid: number;
    rwd: {
        count: number;
        id: number;
        kind: number;
    }[];
    status: number;
};
export declare type Expedition = {
    army: number;
    id: number;
    rwd: {
        count: number;
        id: number;
        kind: number;
    }[];
};
export declare type ExpeditionInfo = {
    gid: number;
    heishu: number;
    data: Expedition[];
};
export interface KingdomExpInfo {
    cfg: {
        bigId: number;
        playNum: number;
        smallId: number;
    };
    playNum: number;
    maxLevel: number;
    chapterPhases: {
        chapter: number;
        num: number;
    }[];
    chapterPhasesRwd: {
        id: number;
        status: number;
    }[];
    firstAllRwd: {
        level: number;
        num: number;
    }[];
    firstRwd: {
        level: number;
        num: number;
    }[];
    levelPlayStar: {
        level: number;
        num: number;
    }[];
}
export interface KingdomExpGlobal {
    info: KingdomExpInfo & {
        levelHasPlay: {
            level: number;
            num: number;
        }[];
        levelBossSubHp: [];
    };
    FirstList: {
        level: number;
        uid: string;
        userData: User;
    }[];
}
