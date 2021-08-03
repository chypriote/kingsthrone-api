import { Item } from '../Item';
export declare enum PRIZE_TYPE {
    GRAND = 0,
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
    FOURTH = 4
}
export interface ScratchAndWinStatus {
    info: {
        shopStatus: {
            type: PRIZE_TYPE;
            status: {
                id: number;
                num: number;
            }[];
        }[];
        superCard: number;
        firstCard: number;
        secondCard: number;
        thirdCard: number;
        fourthCard: number;
        guaguaItem: number;
    };
    cfg: {
        shop: {
            type: PRIZE_TYPE;
            cfg: {
                id: number;
                need_score: number;
                item: Item;
                limit: number;
                is_limit: number;
            }[];
        }[];
        manyTimes: number;
        buyItemCost: number;
    };
}
