import { Item } from '../Item';
import { EventPointExchangeAllLimit, EventRwd } from './Event';
interface DiviningShop {
    hasScore: number;
    list: EventPointExchangeAllLimit[];
}
interface DiviningInfos {
    boxRwdStatus: number;
    hdItem: number;
    luckyStar: {
        id: number;
    }[];
    starscore: number;
    starSign: number;
    surplusFreeNum: number;
}
interface DiviningConfig {
    gxitemCost: number;
    gxscore: number;
    itemCost: number;
    luckyStarList: {
        id: number;
        name: string;
    }[];
    rankRwd: EventRwd[];
    rewards: Item[];
    starSignList: {
        id: number;
        name: string;
    }[];
    updateSelect: number;
}
export interface DiviningStatus {
    info: DiviningInfos;
    shop: DiviningShop;
    cfg: DiviningConfig;
}
export {};
