import { Item } from '../Item';
import { EventPointExchangeAllLimit, EventRwd, GenericEventInfo } from './Event';
interface DragonSlayingRank extends GenericEventInfo {
    id: number;
    title: string;
    type: number;
    sTime: number;
    eTime: number;
    showTime: number;
    no: number;
    _act_id: string;
}
interface DragonSlayingRank {
    myScorerank: number;
    myScore: number;
    myName: string;
}
export interface DragonSlayingStatus {
    bag: {
        baozu: number;
        yanhua: number;
    };
    shop: {
        id: number;
        need: {
            id: number;
            count: number;
        };
        items: Item;
        is_limit: number;
        limit: number;
    }[];
    exchange: {
        list: EventPointExchangeAllLimit[];
    };
    score: {
        hdscore: number;
        score: number;
    };
    bossinfo: {
        hp: number;
        cd: {
            next: number;
            label: string;
        };
    };
    rwdLog: {
        name: string;
        uitem: number;
        item: number;
        num: number;
    }[];
    cfg: {
        info: GenericEventInfo & {
            no: number;
        };
        id: number;
        rwd: {
            everyday: EventRwd[];
            total: EventRwd[];
        };
        boss_rwd: {
            list: {
                items: Item & {
                    prob: number;
                };
            }[];
        }[];
        day_cd: {
            next: number;
            label: string;
        };
        boss: number;
        is_kua: number;
    };
    mydayRankRid: DragonSlayingRank;
    mytotalRankRid: DragonSlayingRank;
}
export {};
