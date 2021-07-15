import { Item } from './Item';
declare type GarrisonInfo = {
    wife: {
        OneLunTime: number;
        wifeId: number;
        startTime: number;
        Critical: number;
        isCheck: number;
        level: number;
        maxNum: number;
        intimacy: number;
        charm: number;
    };
    hero: {
        heroId: number;
        startTime: number;
        nextTime: number;
        rewardsBySecond: Item[];
        isCheck: number;
        level: number;
        quality: number;
        heroLevel: number;
        attribute: number;
    };
};
export declare type EventInfo = {
    eventId: string;
    isCheck: number;
    startTime: number;
    son_slot: {
        slot: number;
        sonId: number;
    }[];
    type: number;
    SuccessRate: number;
    rarity: number;
    isDouble: number;
    status: number;
};
declare type TaskInfo = {
    refreshTime: number;
    refreshNum: number;
    event: EventInfo[];
};
export declare type CastleInfos = {
    id: number;
    level: number;
    exp: number;
    isNext: number;
    expStartTime: number;
    GarrisonInfo: GarrisonInfo;
    task: TaskInfo;
};
export {};
