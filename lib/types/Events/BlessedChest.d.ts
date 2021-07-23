import { Item } from '../Item';
export interface BlessedChestStatus {
    info: {
        score: number;
        hasScore: number;
        shopStatus: any[];
        boxStatus: any[];
        rechargeData: any[];
        allRecharge: number;
    };
    cfg: {
        scoreCost: number;
        refreshCost: number;
        shop: {
            id: number;
            need_score: number;
            item: Item;
            limit: number;
            is_limit: number;
        }[];
        boxMsg: {
            id: number;
            days: number;
            num: number;
            showType: number;
            items: Item[];
        }[];
    };
}
