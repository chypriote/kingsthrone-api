export declare const MAIDENS: {
    mid: number;
    name: string;
    visits: number;
}[];
export declare type VisitsStatus = {
    num: number;
    next: number;
    label: string;
};
export declare type StaminaResult = {
    items: {
        count: number;
        id: number;
    };
    status: VisitsStatus;
};
interface WifeSkill {
    id: number;
    level: number;
    exp: number;
}
export interface Wife {
    id: number;
    love: number;
    flower: number;
    exp: number;
    skill: WifeSkill[];
}
export {};
