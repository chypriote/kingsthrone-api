import { User } from '../User';
import { Alliance } from '../Alliance';
import { Item } from '../Item';
import { EventRwd } from '../Events';
interface AllianceSiegeRank {
    generalName: string;
    shili: number;
    clubSocre: number;
    score: number;
    clubRank: number;
    user: User;
    wallLevel: number;
    hp: number;
    wallHurt: number;
    generalHurt: number;
}
export interface AllianceSiegeStatus {
    kuaCLubBattle: any;
}
interface AllianceSiegeMember extends User {
    id: number;
    post: number;
    gx: number;
    allGx: number;
    jianshe: number;
    loginTime: number;
    inTime: {
        next: number;
        label: string;
    };
}
export declare enum BATTLE_STATUS {
    WALL = 2,
    GENERAL = 3,
    PLUNDER = 4
}
export interface AllianceSiegeBattle {
    cfg: {
        needCost: {
            kind: number;
            id: number;
            count: number;
        };
        wall_alliance_rank: {
            rand: {
                re: number;
                rs: number;
            };
            mengzhu: {
                id: number;
                count: number;
            }[];
            member: {
                id: number;
                count: number;
            }[];
        }[];
        wall_personal_rank: EventRwd[];
        taskscfg: {
            type: number;
            dcCfg: {
                id: number;
                max: number;
                items: Item[];
            }[];
        }[];
        wall_shop: {
            id: number;
            need_score: number;
            item: Item;
            limit: number;
            is_limit: number;
        }[];
        day_wall_shop: {
            id: number;
            need_score: number;
            item: Item;
            limit: number;
            is_limit: number;
        }[];
        donate_rewards: {
            type: string;
            fixed: Item[];
            rand: (Item & {
                pro: number;
            })[];
        }[];
    };
    tasks: {
        id: number;
        num: number;
        rwd: number;
    }[];
    info: {
        freeNum: number;
        buyNum: number;
        notify_before: number;
        notify_club_battle: number;
        score: number;
        hasScore: number;
        shop: any[];
        dayShop: any[];
        next: number;
    };
    data: {
        type: number;
        startTime: boolean;
        nextTime: number;
        jiesuanTime: number;
        my: Alliance & AllianceSiegeRank;
        other: Alliance & AllianceSiegeRank;
        members: AllianceSiegeMember[];
        openMember: {
            uid: number;
        }[];
    };
    mapLog: {
        id: number;
        club: {
            cid: string;
            icon: number;
            server: number;
            name: string;
            shili: number;
        };
        user: User;
        resetTime: number;
    }[];
    status: any[];
}
export {};
