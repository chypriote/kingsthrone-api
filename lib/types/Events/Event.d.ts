import { Item } from '../Item';
export interface EventRank {
    name: string;
    rid: number;
    score: number;
    uid: string;
}
export interface EventRankWithServer {
    sev: number;
}
export interface EventQuest {
    id: number;
    num: number;
    rwd: number;
}
export interface EventQuestCfg {
    type: number;
    dcCfg: {
        id: number;
        max: number;
        items: Item[];
    }[];
}
export interface EventChestReward {
    id: number;
    jifen: number;
    items: Item[];
    isGet: number;
}
export interface EventShopItem {
    dc: number;
    /** example: need {id: 1, count: 100} = buy with 100gems
     * need 100 = buy with 100 event points
     */
    need: number | Item;
    items: Item;
    limit: number;
    limitNum: number;
    haslimitNum: number;
}
export interface EventRwd {
    member: {
        count: number;
        id: number;
        kind?: number;
    }[];
    rand: {
        re: number;
        rs: number;
    };
}
export interface EventShop {
    hasScore: number;
    rank: EventRwd | EventRwd[];
    wsShopcfg: EventShopItem[];
}
export interface EventWheelConfig {
    wall_gache: {
        id: number;
        prob_1000: number;
        default_item: Item | [];
    }[];
    chosen_pool: {
        key: number;
        item: Item;
    }[];
    cost: number;
    bili: number;
}
export interface EventWheel {
    info: {
        chosen: {
            id: number;
            key: number;
        }[];
        num: number;
    };
    cfg: EventWheelConfig;
}
export declare enum QUEST_STATUS {
    ONGOING = 0,
    FINISHED = 1,
    CLAIMED = 2
}
export interface Event {
    id: number;
    title: string;
    pindex: number;
    type: number;
    sTime: number;
    eTime: number;
    showTime: number;
    cd: {
        next: number;
        label: string;
    };
    news: number;
}
