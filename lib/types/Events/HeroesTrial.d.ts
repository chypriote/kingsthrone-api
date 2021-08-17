import { Item } from '../Item';
import { EventPhasesReward, EventTowerNpc } from './Event';
export interface HeroesTrialFightResult {
    fight: {
        log: {
            aid: number;
            damge: number;
            type: number;
        }[];
        win: number;
        base: {
            hid: number;
            level: number;
            azz: number;
            hpmax: number;
            hp: number;
            skin: number;
            dt: number;
        }[];
    };
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
    info: HeroesTrialInfo;
}
export interface HeroesTrialInfo {
    freeNum: number;
    hasFreeNum: number;
    buyNum: number;
    hasHero: {
        id: number;
        status: number;
    }[];
    bossId: number;
    killNum: number;
    floorRwdStatus: {
        id: number;
        status: number;
    }[];
    damage: number;
    cd: {
        next: number;
        label: string;
    };
}
export interface HeroesTrialStatus {
    info: HeroesTrialInfo;
    cfg: {
        level: number;
        needCost: number;
        needHeroCost: number;
        phasesRewards: EventPhasesReward[];
        image: Item[];
        towerNpc: EventTowerNpc;
    };
}
