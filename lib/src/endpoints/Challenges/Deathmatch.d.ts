import { GoatResource } from '../../GoatResource';
import { DMOngoingFight, DMRanking, OpponentHero, Reward, TourneyShopItem } from '../../../types';
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
