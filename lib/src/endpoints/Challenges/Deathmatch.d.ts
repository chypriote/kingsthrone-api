import { GoatResource } from '../../GoatResource';
import { OpponentHero, Reward, TourneyShopItem } from '../../../types';
import { DMOngoingFight, DMRanking } from '../../..';
export declare class Deathmatch extends GoatResource {
    dmGetTourneyInfos(): Promise<DMOngoingFight>;
    dmStartTourneyFight(): Promise<DMOngoingFight>;
    dmStartTokenTourneyFight(): Promise<DMOngoingFight>;
    dmBuyTourneyBoost(item: TourneyShopItem): Promise<DMOngoingFight>;
    dmFightHero(hero: OpponentHero): Promise<DMOngoingFight>;
    dmGetReward(): Promise<Reward>;
    dmChallengeOpponent(uid: string, hid: number): Promise<DMOngoingFight>;
    dmGetRankings(): Promise<DMRanking>;
}
