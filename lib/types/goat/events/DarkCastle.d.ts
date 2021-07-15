import { EventQuest, EventQuestCfg, EventShop, EventShopItem } from './Event';
import { Item } from '../Item';
interface DarkCastleRun {
    yao: number;
    sid: number;
    cons: number;
    quan: number;
    num: number;
    gzzid: number;
}
interface DarkCastleShop extends EventShop {
    wsItemShop: EventShopItem[];
}
interface DarkCastleChest {
    id: number;
    need: number;
    items: Item[];
    isGet: number;
}
declare enum GRID_ITEM {
    NORMAL = 0,
    BLUE_BAG = 1,
    ORANGE_BAG = 2,
    PURPLE_BAG = 3
}
interface DarkCastleGridSlot {
    id: number;
    items: Item[];
    type: GRID_ITEM;
    sid: number;
    isGet: boolean;
}
interface DarkCastleGrid {
    gzzid: number;
    min: number;
    max: number;
    list: DarkCastleGridSlot[];
}
interface DarkCastleInfo {
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
    msg: string;
    gezi: DarkCastleGrid;
    rwd: DarkCastleChest[];
    image: Item[];
    wsScore: number;
    cd: {
        label: string;
        next: number;
    };
}
export interface DarkCastleStatus {
    wsInfo: DarkCastleInfo;
    run: DarkCastleRun;
    wsShop: DarkCastleShop;
    wsTask: {
        taskscfg: EventQuestCfg[];
        tasks: EventQuest[];
    };
}
export {};
