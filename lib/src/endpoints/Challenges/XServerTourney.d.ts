import { GoatResource } from '../../GoatResource';
import { XSOngoingFight } from '../../../types/goat/TourneyXS';
import { OpponentHero, Reward, ShopItem } from '../../../types/goat/Tourney';
import { XServerTourney as XServerTourneyEndpoint } from '../../../types/Endpoints/Challenges/XServerTourney';
export declare class XServerTourney extends GoatResource implements XServerTourneyEndpoint {
    xsGetTourneyInfos(): Promise<XSOngoingFight>;
    xsStartTourneyFight(): Promise<XSOngoingFight>;
    xsStartTokenTourneyFight(): Promise<XSOngoingFight>;
    xsBuyTourneyBoost(item: ShopItem): Promise<XSOngoingFight>;
    xsFightHero(hero: OpponentHero): Promise<XSOngoingFight>;
    xsGetReward(): Promise<Reward>;
    xsChallengeOpponent(uid: string, hid: number): Promise<XSOngoingFight>;
    xsGetTourneyReward(id: number): Promise<boolean>;
}
