import { Item } from '../Item';
import { EventQuest, EventQuestCfg, EventShop } from './Event';
export interface PicnicStatus {
    info: {
        cons: number;
        quan: number;
        quanBuyNeed: number;
        quandNeedTen: number;
        score: number;
        image: Item[];
        list: {
            dc: number;
            items: Item;
            prob_10000: number;
            tip: number;
        }[];
    };
    shop: EventShop;
    task: {
        tasks: EventQuest[];
        taskscfg: EventQuestCfg;
    };
}
