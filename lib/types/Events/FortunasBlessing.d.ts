export interface FortunasBlessingStatus {
    info: {
        id: number;
        recharge: number;
        result: number;
    };
    cfg: {
        id: number;
        need: number;
        consume: number;
        max: number;
        range: {
            prob: number;
            min: number;
            max: number;
        }[];
    }[];
}
