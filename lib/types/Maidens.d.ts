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
