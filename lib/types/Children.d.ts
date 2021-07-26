import { GameStats, Sex } from './GameInfos';
interface Spouse {
    fuid: number;
    fname: string;
    sname: string;
    sonuid: number;
    honor: number;
    sex: Sex;
    ep: GameStats;
}
export interface Son {
    id: number;
    name: string;
    sex: Sex;
    mom: number;
    state: number;
    ep: GameStats;
    talent: number;
    cpoto: number;
    level: number;
    exp: number;
    power: number;
    cd: {
        next: number;
        label: string;
    };
    honor: number;
    tquid: number;
    tqitem: number;
    tqcd: {
        next: number;
        label: string;
    };
    sptime: number;
    spouse: Spouse;
    myqjadd: number;
    fqjadd: number;
    isxingqin: number;
    tc: number;
    available: boolean;
}
export {};
