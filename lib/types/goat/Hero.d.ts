import { GameStats } from './GameInfos';
export declare enum TSkills {
    FEROCITY = 1,
    BRUTALITY = 2
}
export interface QualitySkill {
    id: number;
    level: number;
    zz: number;
    slv: number;
}
export interface TourneySkill {
    id: TSkills;
    level: number;
}
export interface Hero {
    id: number;
    level: number;
    class_level: number;
    senior: number;
    exp: number;
    zzexp: number;
    pkexp: number;
    epskill: QualitySkill[];
    pkskill: TourneySkill[];
    ghskill: [];
    banish: number;
    mount: number;
    hep: GameStats;
    zz: GameStats;
    zep: GameStats;
    wep: GameStats;
    gep: GameStats;
    eep: GameStats;
    cep: GameStats;
    aep: GameStats;
    zfight_num: number;
    gfight_num: number;
}
