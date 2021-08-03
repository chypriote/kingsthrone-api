import { GenericEventInfo } from './Events';
import { Item } from './Item';
export interface LTQStatus {
    cfg: {
        info: GenericEventInfo;
        rwd: {
            id: number;
            items: Item[];
            need: number;
        }[];
        msg: string;
    };
    cons: number;
    rwd: number;
}
export declare enum LTQ_TYPES {
    SPEND_GEMS = 201,
    LOSE_SOLDIERS = 202,
    SPEND_GOLD = 203,
    STUDY_MANUSCRIPTS = 204,
    INCREASE_POWER = 206,
    ENACT_DECREES = 207,
    LOGIN = 208,
    TOURNEY_SCORE = 209,
    ARRANGE_MARRIAGES = 210,
    CHALLENGE_TOKENS = 216,
    ENERGY_DRAUGHT = 220,
    INCREASE_CHARM = 220,
    RANDOM_VISITS = 1045
}
