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
export interface EventShopRank {
    member: {
        count: number;
        id: number;
    }[];
    rand: {
        re: number;
        rs: number;
    };
}
export interface EventShop {
    hasScore: number;
    rank: EventShopRank | EventShopRank[];
    wsShopcfg: EventShopItem[];
}
