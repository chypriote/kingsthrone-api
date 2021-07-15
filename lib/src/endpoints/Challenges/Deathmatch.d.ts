import { GoatResource } from '../../GoatResource';
import { DMOngoingFight, DMRanking } from '../../../types/goat/TourneyDM';
import { OpponentHero, Reward, ShopItem } from '../../../types/goat/Tourney';
import { Deathmatch as DeathmatchEndpoint } from '../../../types/Endpoints/Challenges/Deathmatch';
export declare class Deathmatch extends GoatResource implements DeathmatchEndpoint {
    dmGetTourneyInfos(): Promise<DMOngoingFight>;
    dmStartTourneyFight(): Promise<DMOngoingFight>;
    dmStartTokenTourneyFight(): Promise<DMOngoingFight>;
    dmBuyTourneyBoost(item: ShopItem): Promise<DMOngoingFight>;
    dmFightHero(hero: OpponentHero): Promise<DMOngoingFight>;
    dmGetReward(): Promise<Reward>;
    dmChallengeOpponent(uid: string, hid: number): Promise<DMOngoingFight>;
    dmGetRankings(): Promise<DMRanking>;
}
