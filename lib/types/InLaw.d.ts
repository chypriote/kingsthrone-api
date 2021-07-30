import { User } from './User';
import { GameStats, Sex } from './GameInfos';
export interface InLaw extends User {
    num: number;
    num2: number;
    num3: number;
    tip: number;
}
export interface Proposal {
    fuid: number;
    fname: string;
    sname: string;
    sonuid: number;
    honor: number;
    sex: Sex;
    ep: GameStats;
}
