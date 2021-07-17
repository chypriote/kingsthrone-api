import { GoatResource } from '../../GoatResource';
import { OpponentHero, Reward, TourneyShopItem } from '../../../types/goat/Tourney';
import { XSOngoingFight } from '../../../types/goat/TourneyXS';
export declare class XServerTourney extends GoatResource {
    xsGetTourneyInfos(): Promise<XSOngoingFight>;
    xsStartTourneyFight(): Promise<XSOngoingFight>;
    xsStartTokenTourneyFight(): Promise<XSOngoingFight>;
    xsBuyTourneyBoost(item: TourneyShopItem): Promise<XSOngoingFight>;
    xsFightHero(hero: OpponentHero): Promise<XSOngoingFight>;
    xsGetReward(): Promise<Reward>;
    xsChallengeOpponent(uid: string, hid: number): Promise<XSOngoingFight>;
    xsGetTourneyReward(id: number): Promise<boolean>;
}
