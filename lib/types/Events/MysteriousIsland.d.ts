import { Item } from '../Item';
import { EventPhasesReward, EventTowerNpc } from './Event';
interface MysteriousIslandInfo {
    floorIndex: number;
    hasBuyHeroNumArr: any[];
    hasHero: any[];
    floorRwdStatus: {
        floor: number;
    }[];
    floorLog: {
        floorIndex: number;
    }[];
    shop: any[];
    score: number;
    hasScore: number;
    damage: number;
    cd: {
        next: number;
        label: string;
    };
}
export interface MysteriousIslandStatus {
    info: MysteriousIslandInfo;
    cfg: {
        island_phases_rewards: EventPhasesReward[];
        image: Item[];
        needHeroCost: {
            num: number;
            value: number;
        }[];
        island_buff_hero: (EventTowerNpc & {
            id: number;
        })[];
        shop: {
            id: number;
            need_score: number;
            item: Item;
            limit: number;
            is_limit: number;
        }[];
        towerNpc: EventTowerNpc;
    };
    heroHp: {
        hpmax: number;
        hp: number;
        heroId: number;
    }[];
}
export interface MysteriousIslandFight {
    fight: {
        log: {
            aid: number;
            damge: number;
            type: number;
        }[];
        win: number;
        base: {
            hid: number;
            level: any;
            azz: number;
            hpmax: number;
            hp: number;
            skin: number;
            dt: number;
        }[];
    };
    heroHp: {
        hpmax: number;
        hp: number;
        heroId: number;
    }[];
    fightStatus: {
        hid: number;
        ackadd: number;
        skilladd: number;
        hp: number;
        hpmax: number;
        ackaddnum: number;
        skilladdnum: number;
        skilladdrate: number;
    };
    info: MysteriousIslandInfo;
}
export {};
