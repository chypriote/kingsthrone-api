import { GoatResource } from '../../GoatResource'
import { DMOngoingFight, DMRanking } from '../../goat/TourneyDM'
import { OpponentHero, Reward, ShopItem } from '../../goat/Tourney'

export interface Deathmatch extends GoatResource {
	dmGetTourneyInfos(): Promise<DMOngoingFight>
	dmStartTourneyFight(): Promise<DMOngoingFight>
	dmStartTokenTourneyFight(): Promise<DMOngoingFight>
	dmBuyTourneyBoost(item: ShopItem): Promise<DMOngoingFight>
	dmFightHero(hero: OpponentHero): Promise<DMOngoingFight>
	dmGetReward(): Promise<Reward>
	dmChallengeOpponent(uid: string, hid: number): Promise<DMOngoingFight>
	dmGetRankings(): Promise<DMRanking>
}
