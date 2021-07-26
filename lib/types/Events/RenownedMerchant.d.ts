import { EventPointExchangeAllLimit, EventRwd, GenericEventInfo } from './Event';
import { Item } from '../Item';
export interface RenownedMerchantStatus {
    info: {
        quanNeedTen: number;
        quanBuyNeed: number;
        cons: number;
        quan: number;
        score: number;
    };
    cfg: {
        list: {
            dc: number;
            items: Item;
            prob_10000: number;
            tip: number;
        }[];
        rankRwd: EventRwd[];
    };
    shop: {
        list: EventPointExchangeAllLimit[];
        hasScore: number;
    };
}
export interface RenownedMerchantLoginRewards {
    tasks: {
        day: number;
        score: number;
        scoreNum: number;
        giftBagStatus: any[];
        is_unset: number;
        dayNews: {
            id: number;
            value: number;
        }[];
        signReward: {
            id: number;
            value: number;
        }[];
        taskTypeNum: {
            id: number;
            value: number;
        }[];
        taskTypeStatus: {
            id: number;
            value: number;
        }[];
    };
    cfg: {
        info: GenericEventInfo & {
            no: number;
        };
        homeIcon: {
            kind: number;
            id: number;
        };
        showHero: number;
        showWife: number;
        dayTasks: {
            day: number;
            task_id: number[];
            item: Item;
        }[];
        giftBag: {
            day: number;
            price: string;
            special_offer: string;
            count: number;
            reward: Item[];
        }[];
        scoreReward: {
            score: number;
            reward: Item[];
        }[];
    };
}
