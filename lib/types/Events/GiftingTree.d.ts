import { Item } from '../Item';
export interface GiftingTreeStatus {
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
            key: number;
            item: Item;
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
}
