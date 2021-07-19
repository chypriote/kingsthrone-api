import { Item } from '../Item';
import { EventChestReward, EventRwd } from './Event';
export interface GardenStrollDrop {
    id: number;
    tip: number;
    items: Item;
    prob_10000: number;
    is_baoji: number;
    add: number;
}
interface GardenStrollInfo {
    info: {
        id: number;
        title: string;
        pindex: number;
        type: number;
        sTime: number;
        eTime: number;
        showTime: number;
        _act_id: string;
    };
    drop: GardenStrollDrop[];
    baoxiang: EventChestReward[];
    rank: EventRwd[];
    msg: string;
    is_kua: number;
    set: {
        price: number;
        ten: number;
        score: number;
        min: number;
        juli: number;
        up_10000: number;
    };
}
export interface GardenStrollStatus {
    cfg: GardenStrollInfo;
    bu: number;
    cons: number;
    leftcons: number;
    quan: number;
    free: number;
}
interface GardenStrollExchange {
    id: number;
    is_limit: number;
    items: Item;
    limit: number;
    need: number;
    totalLimit: number;
}
export interface GardenStrollPointExchange {
    cfg: {
        shop: {
            list: GardenStrollExchange[];
        };
    };
    leftcons: number;
}
export {};
