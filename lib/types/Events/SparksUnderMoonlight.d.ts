import { ClubEventRwd, EventProgressReward, EventRwd } from './Event';
import { Item } from '../Item';
export declare enum QUEST_TYPE {
    LOGIN = "login",
    INTIMACY = "loveAdd",
    CHARM = "charmAdd",
    SCORE = "score"
}
export declare enum SPARKS_ITEM_TYPE {
    CHOCOLATE = "QiaoKeLi",
    BOUQUETS = "HongMeiGui",
    FEATHERS = "LiFu",
    GEMS = "ZuanJie"
}
export interface SparksUnderMoonlightStatus {
    info: {
        HongMeiGui: number;
        QiaoKeLi: number;
        LiFu: number;
        ZuanJie: number;
        wall_quest: {
            login: number;
            loveAdd: number;
            charmAdd: number;
            score: number;
        };
        login_status: {
            id: number;
        }[];
        loveAdd_status: {
            id: number;
        }[];
        charmAdd_status: {
            id: number;
        }[];
        score_status: {
            id: number;
        }[];
        score: number;
        hasScore: number;
        shop: any[];
    };
    clubInfo: {
        level: number;
        HongMeiGui: number;
        QiaoKeLi: number;
        LiFu: number;
        ZuanJie: number;
        exp: number;
    };
    cfg: {
        wall_level: {
            level: number;
            need_exp: number;
            need_items: Item[];
            wall_member_rank: EventRwd[];
        }[];
        wall_consume: {
            type: string;
            exp: number;
            score: number;
            rand: {
                kind: number;
                id: number;
                count: number;
                pro: number;
            }[];
        }[];
        wall_quest: {
            type: string;
            quest: EventProgressReward[];
        }[];
        wall_shop: {
            id: number;
            need_score: number;
            item: Item;
            limit: number;
            is_limit: number;
        }[];
        wall_alliance_rank: ClubEventRwd[];
        wall_personal_rank: EventRwd[];
    };
}
