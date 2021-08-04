import { GoatResource } from '../../GoatResource';
import { OpponentHero, Reward, TourneyShopItem, XSOngoingFight, XSRanking, XSTourneyStatus } from '../../../types';
export declare class XServerTourney extends GoatResource {
    xsGetTourneyInfos(): Promise<XSTourneyStatus>;
    xsStartTourneyFight(): Promise<XSOngoingFight>;
    xsStartTokenTourneyFight(): Promise<XSOngoingFight>;
    xsBuyTourneyBoost(item: TourneyShopItem): Promise<XSOngoingFight>;
    xsFightHero(hero: OpponentHero): Promise<XSOngoingFight>;
    xsGetReward(): Promise<Reward>;
    xsChallengeOpponent(uid: string, hid: number): Promise<XSOngoingFight>;
    xsGetTourneyReward(id: number): Promise<boolean>;
    xsGetRankings(): Promise<XSRanking>;
}
