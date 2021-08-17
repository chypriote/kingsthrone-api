import { User } from './User';
import { Item } from './Item';
export interface ITourneyResult {
    over: {
        fuser: User;
        hid: number;
        killnum: number;
        win: number;
        isover: number;
    } | null;
    fight: {
        base: OpponentHeroStats[];
        items: Item[];
        log: string[];
        nrwd: number;
        win: number;
        winnum: number;
    };
}
export interface ITourneyFight {
    hid: number;
    fuser: User;
    fheros: OpponentHero[];
    shop: TourneyShopItem[];
    hp: number;
    hpmax: number;
    ackadd: number;
    skilladd: number;
    killnum: number;
    fheronum: number;
    money: number;
    ackaddnum: number;
    skilladdnum: number;
    skilladdrate: number;
}
export interface ITourneyInfos {
    state: number;
    cd: {
        next: number;
        label: string;
    };
    totalNum: number;
    fitnum: number;
    chunum: number;
    chumax: number;
    qhid: number;
    fuser: User;
}
export interface ITourneyStatus {
    win?: ITourneyResult;
    fight: ITourneyFight;
    info: ITourneyInfos;
}
/** OpponentHero */
export interface OpponentHero {
    id: number;
    senior: number;
    skin: number;
    dt: number;
    heroLv: number;
    name?: string | number;
}
export interface OpponentHeroStats {
    azz: number;
    dt: number;
    hid: number;
    hp: number;
    hpmax: number;
    level: number;
    skin: number;
}
/** Shop **/
declare enum BoostType {
    ATTACK_POWER = 0,
    FLAMES = 1
}
export interface TourneyShopItem {
    id: number;
    type: BoostType;
    add: number;
}
/** Rewards **/
export declare type RewardItem = {
    count: number;
    id: number;
    kind: number;
};
export declare type Reward = {
    items: RewardItem[];
    jiade: RewardItem[];
};
export interface Defense extends User {
    id: number;
    fscore: number;
    kill: number;
    win: number;
    hid: number;
    mscore: number;
    dtime: number;
}
/** Tourney State */
export interface UserTourney {
    info: ITourneyInfos;
    daily: {
        wins: number;
        rwds: {
            id: number;
            rwd: number;
        }[];
        countdown: number;
    };
    myrank: {
        score: number;
        rank: number;
    };
    deflog: Defense[];
    enymsg: {
        id: number;
        fuser: User;
        score: number;
        time: number;
    }[];
    hastz: any[];
    fclist: {
        id: number;
        h: number;
        f: number;
    }[];
}
export {};
