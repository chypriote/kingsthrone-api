import { Item } from '../Item';
import { EventRwd } from './Event';
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
        list: {
            id: number;
            need: number;
            items: Item;
            is_limit: number;
            limit: number;
            all_limit: number;
        }[];
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
        item: number;
        num: number;
        uitem: number;
    }[];
    cfg: {
        info: {
            id: number;
            title: string;
            type: number;
            sTime: number;
            eTime: number;
            showTime: number;
            no: number;
            _act_id: string;
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
    mydayRankRid: {
        myScorerank: number;
        myScore: number;
        myName: string;
    };
    mytotalRankRid: {
        myScorerank: number;
        myScore: number;
        myName: string;
    };
}
