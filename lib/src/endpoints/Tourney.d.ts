import { GoatResource } from '../GoatResource';
import { ITourneyStatus, OpponentHero, Reward, ShopItem } from '../../types/goat/Tourney';
import { Tourney as TourneyEndpoint } from '../../types/Endpoints/Tourney';
export declare class Tourney extends GoatResource implements TourneyEndpoint {
    getTourneyInfos(): Promise<ITourneyStatus>;
    getTourneyAdok(): Promise<ITourneyStatus>;
    startTourneyFight(): Promise<ITourneyStatus>;
    startTokenTourneyFight(): Promise<ITourneyStatus>;
    buyTourneyBoost(item: ShopItem): Promise<ITourneyStatus>;
    fightHero(hero: OpponentHero): Promise<ITourneyStatus>;
    getReward(): Promise<Reward>;
    challengeOpponent(uid: string, hid: number): Promise<ITourneyStatus>;
    getTourneyReward(id: number): Promise<boolean>;
}
