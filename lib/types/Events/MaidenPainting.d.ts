import { EventChestReward, EventQuest, EventQuestCfg, EventRank, EventRwd, EventWheel, EventWheelConfig } from './Event';
import { Item } from '../Item';
interface MaidenPaintingWheel extends EventWheel {
    cfg: EventWheelConfig & {
        baoxiang: {
            id: number;
            isGet: number;
            items: Item[];
            jifen: number;
        }[];
    };
}
interface MaidenPaintingChallenge {
    love: {
        cfg: {
            info: {
                id: number;
                title: string;
                pindex: number;
                type: number;
                sTime: number;
                eTime: number;
                showTime: number;
                _act_id: string;
            };
            kua_server: string[];
            showNeed: {
                wang: number;
            };
            task: {
                id: number;
                target: number;
                rewards: Item[];
            }[];
            rwd: EventRwd[];
            msg: string;
        };
    };
    lovelist: EventRank[];
    myloveRid: EventRank;
}
interface MaidenPaintingLimitedOffers {
    info: {
        giftStatus: any;
    };
    cfg: {
        giftCfg: {
            id: number;
            name: string;
            need: number;
            limit: number;
            nowlimit: number;
            islimit: number;
            rebate: number;
            rwd: Item[];
        }[];
        showHero: number;
    };
}
interface MaidenPainting {
    info: {
        score: number;
        paycons: number;
        leftcons: number;
        today_score: number;
        pickUp_nums: number;
        diaomao_pen: number;
        zongmao_pen: number;
        is_hui: number;
        hui_nums: number;
        task: {
            1: number;
        };
        get: {
            1: number;
        };
        status: number[];
    };
    tasks: EventQuest[];
    cfg: {
        pick_must_get: number;
        boxRwd: Item[];
        rankRwd: EventRwd[];
        taskscfg: EventQuestCfg[];
        box_rwd_num: number;
        diaomao: number;
        zongmao: number;
        baoxiang: EventChestReward[];
    };
}
interface MaidenPaintingShop {
    leftcons: number;
    list: {
        id: number;
        is_limit: number;
        items: Item;
        limit: number;
        need: number;
        totalLimit: number;
    }[];
}
export interface MaidenPaintingStatus {
    wheel: MaidenPaintingWheel;
    challenge: MaidenPaintingChallenge;
    limitedOffer: MaidenPaintingLimitedOffers;
    event: MaidenPainting;
    shop: MaidenPaintingShop;
}
export {};
