import { ClubEventRwd, EventPointExchange, EventPointExchangeTotalLimit, EventRwd, GenericEventInfo } from './Event';
import { Item } from '../Item';
export declare enum CORONATION_ITEM {
    BANNER = 1,
    TRUMPET = 2,
    DRUMS = 3,
    CROWN = 4
}
interface CoronationConfig {
    info: GenericEventInfo & {
        no: number;
    };
    id?: any;
    rwd: {
        my: EventRwd[];
        club: ClubEventRwd[];
    };
    boss: string;
    story: string;
    play_time: {
        startTime: number;
        endTime: number;
    };
}
export interface CoronationStatus {
    boss: {
        boss: number;
    };
    score: {
        hdscore: number;
        score: number;
        kill_rwd: number;
    };
    rwdLog: {
        name: string;
        uitem: number;
        item: number;
        num: number;
    }[];
    shop: EventPointExchange[];
    exchange: {
        list: EventPointExchangeTotalLimit[];
    };
    bag: Item[];
    cfg: CoronationConfig;
}
export {};
