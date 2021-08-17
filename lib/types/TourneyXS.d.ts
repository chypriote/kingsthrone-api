import { ITourneyFight, ITourneyInfos, ITourneyResult, ITourneyStatus, UserTourney } from './Tourney';
import { User } from './User';
interface XSTourneyFight extends ITourneyFight {
    fstate: number;
}
export interface XSTourneyStatus extends UserTourney {
    fight: XSTourneyFight;
}
export interface XSOngoingFight extends ITourneyStatus {
    win: ITourneyResult;
    fight: XSTourneyFight;
    info: ITourneyInfos;
    myrank: {
        rank: number;
        score: number;
    };
}
export interface XSRanking {
    myScore: {
        myName: string;
        myScore: number;
        myScorerank: number;
    };
    severRank: {
        sid: string;
        name: string;
        rid: number;
        num: number;
    };
    severScore: {
        myName: string;
        myScore: number;
        myScorerank: number;
    };
    scoreRank: User[];
}
export {};
