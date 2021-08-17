export declare enum DECREE_TYPE {
    RESOURCES = 1,
    EXPERIENCE = 2
}
export declare enum LEVEE_TYPE {
    COIN = 2,
    ARMY = 3,
    GRAIN = 4
}
interface Levy {
    next: number;
    num: number;
    label: string;
    max: number;
}
export interface LevyStatus {
    coin: Levy;
    food: Levy;
    army: Levy;
    qzam: {
        now: number;
        max: number;
    };
    exp: {
        type: number;
        count: number;
        itemid: number;
        cd: {
            next: number;
            num: number;
            label: string;
        };
    };
}
export {};
