import { GoatResource } from '../../GoatResource';
import { XSOngoingFight } from '../../goat/TourneyXS';
import { OpponentHero, Reward, ShopItem } from '../../goat/Tourney';
export interface XServerTourney extends GoatResource {
    xsGetTourneyInfos(): Promise<XSOngoingFight>;
    xsStartTourneyFight(): Promise<XSOngoingFight>;
    xsStartTokenTourneyFight(): Promise<XSOngoingFight>;
    xsBuyTourneyBoost(item: ShopItem): Promise<XSOngoingFight>;
    xsFightHero(hero: OpponentHero): Promise<XSOngoingFight>;
    xsGetReward(): Promise<Reward>;
    xsChallengeOpponent(uid: string, hid: number): Promise<XSOngoingFight>;
    xsGetTourneyReward(id: number): Promise<boolean>;
}
