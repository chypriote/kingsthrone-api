import { User } from './User';
export declare enum HOF_TITLE {
    MIGHT = 1,
    CHARM = 2,
    CONQUERORS = 3,
    GLORY = 4,
    ENLIGHTENMENT = 5,
    GRACE = 6,
    ABUNDANCE = 7,
    WARRIORS = 8,
    PARAMOURS = 9,
    CHAMPIONS = 10,
    WISDOM = 11,
    VIRTUE = 12,
    CELEBRATION = 13,
    BEASTS = 14,
    AMBITION = 15
}
export interface HallOfFamer extends User {
    id: number;
    exp: number;
    bmap: number;
    mmap: number;
    smap: number;
    ep: {
        e1: number;
        e2: number;
        e3: number;
        e4: number;
    };
    love: number;
    xuanyan: string;
    chlist: {
        id: number;
    }[];
    son_num: number;
    wife_num: number;
    hero_num: number;
}
