import { User } from '../User';
import { Alliance } from '../Alliance';
import { Item } from '../Item';
import { ClubEventRwd, EventQuest, EventQuestCfg, EventRwd } from '../Events';
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
    AWAITING = 0,
    WALL = 2,
    GENERAL = 3,
    PLUNDER = 4,
    FINISHED = 5
}
export interface AllianceSiegeInfo {
    buyNum: number;
    dayShop: any[];
    freeNum: number;
    hasScore: number;
    next: number;
    notify_before: number;
    notify_club_battle: number;
    score: number;
    shop: any[];
}
export interface AllianceSiegeBattle {
    cfg: {
        needCost: {
            kind: number;
            id: number;
            count: number;
        };
        wall_alliance_rank: ClubEventRwd[];
        wall_personal_rank: EventRwd[];
        taskscfg: EventQuestCfg[];
        tasks: EventQuest[];
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
    info: AllianceSiegeInfo;
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
