import { EventDropWithProbability, EventItemShop, EventQuest, EventQuestCfg, EventRwd } from './Event';
import { Item } from '../Item';
import { User } from '../User';
export interface AlchemyLuckBoost {
    bj: number;
    num: number;
    id: number;
}
export interface AlchemyStatus {
    info: {
        milkNum: number;
        biscuitsNum: number;
        coalNum: number;
        refineNum: number;
        score: number;
        completeNum: number;
        getCompleteNum: number;
        receiveNum: number;
        send: {
            status: number;
            uid: string;
        }[];
        receive: {
            uid: number;
            status: number;
            userInfo: User;
        }[];
    };
    cfg: {
        milkCfg: EventDropWithProbability[];
        biscuitsCfg: EventDropWithProbability[];
        coalCfg: {
            randRewards: EventDropWithProbability[];
            fixedReward: EventDropWithProbability[];
        };
        completeRwd: {
            id: number;
            items: Item[];
        }[];
        heroCfg: AlchemyLuckBoost[];
        wifeCfg: AlchemyLuckBoost[];
        sonCfg: AlchemyLuckBoost[];
        buyCfg: {
            milkPrice: number;
            biscuitsPrice: number;
            exchange: number;
            receive: number;
        };
        is_kua: number;
    };
    shop: {
        wsShopcfg: EventItemShop[];
        hasScore: number;
        rank: EventRwd[];
    };
    task: {
        taskscfg: EventQuestCfg[];
        tasks: EventQuest[];
    };
}
