import { Item } from './Item';
export declare const NPCS: {
    nid: number;
    name: string;
    visits: number;
}[];
export declare type LuckStatus = {
    auto2: number;
    auto3: number;
    ySet: number;
    num: number;
};
export declare type ProcessionsStatus = {
    num: number;
    next: number;
    label: string;
};
export declare enum PROCESSIONS {
    NPC = 1,
    MAIDEN = 5
}
export declare type ProcessionGain = {
    haogan: number;
    items: Item[];
    npcid: number;
    type: PROCESSIONS;
};
export declare type ProcessionResult = {
    result: ProcessionGain;
    status: ProcessionsStatus;
    luck: LuckStatus;
};
export declare type GoodwillResult = {
    items: {
        count: number;
        id: number;
    };
    status: ProcessionsStatus;
};
