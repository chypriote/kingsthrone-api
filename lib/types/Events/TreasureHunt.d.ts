import { Item } from '../Item';
export declare enum RWD_STATUS {
    NOT_READY = 0,
    READY = 1,
    CLAIMED = 2
}
declare type TreasureHuntReward = {
    id: number;
    isGet: number;
    items: Item[];
    need: number[];
    tid: number;
    type: number;
};
declare type TreasureHuntQuest = {
    has: number;
    id: number;
    isGet: number;
    items: Item[];
    max: number;
    msg: string;
    type: number;
};
declare type TreasureHuntProba = {
    count: number;
    id: number;
    kind: number;
    prob10000: number;
};
export declare type TreasureHuntStatus = {
    cons: number;
    num: number;
    cfg: {
        chutou: TreasureHuntQuest[];
        info: {
            _act_id: number;
            eTime: number;
            id: number;
            pindex: number;
            showTime: number;
            sTime: number;
            title: string;
            type: number;
        };
        msg: string;
        rwd: TreasureHuntReward[];
        suiji: TreasureHuntProba[];
    };
};
export {};
