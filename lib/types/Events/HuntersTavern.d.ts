import { Item } from '../Item';
export interface HuntersTavernStatus {
    info: {
        hasGetRwd: any[];
        times: number;
        freeUpdate: number;
        itemNum: number;
        choose_id: number;
    };
    cfg: {
        needCost: number;
        chosen_pool: {
            id: number;
            rwd: Item;
        }[];
        rewards: {
            id: number;
            rwd: Item;
        }[];
        costByTimes: {
            id: number;
            rwd: Item;
        }[];
        image: Item[];
        itemCost: number;
    };
    zmd: {
        name: string;
        list: Item[];
        num: number;
        id: number;
    }[];
}
