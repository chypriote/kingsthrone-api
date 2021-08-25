import { EventChestReward, EventLimitedOffers, EventPointExchangeTotalLimit, EventQuest, EventQuestCfg, EventRank, EventRwd, EventWheel, EventWheelConfig } from './Event';
import { Item } from '../Item';
import { ChallengeCfg } from '../Challenges';
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
        cfg: ChallengeCfg & {
            kua_server: string[];
        };
    };
    lovelist: EventRank[];
    myloveRid: EventRank;
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
    list: EventPointExchangeTotalLimit[];
}
export interface MaidenPaintingStatus {
    wheel: MaidenPaintingWheel;
    challenge: MaidenPaintingChallenge;
    limitedOffer: EventLimitedOffers;
    event: MaidenPainting;
    shop: MaidenPaintingShop;
}
export {};
