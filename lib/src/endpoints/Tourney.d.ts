import { GoatResource } from '../GoatResource';
import { ITourneyStatus, OpponentHero, Reward, TourneyShopItem } from '../../types/Tourney';
export declare class Tourney extends GoatResource {
    getTourneyInfos(): Promise<ITourneyStatus>;
    getTourneyAdok(): Promise<ITourneyStatus>;
    startTourneyFight(): Promise<ITourneyStatus>;
    startTokenTourneyFight(): Promise<ITourneyStatus>;
    buyTourneyBoost(item: TourneyShopItem): Promise<ITourneyStatus>;
    fightHero(hero: OpponentHero): Promise<ITourneyStatus>;
    getReward(): Promise<Reward>;
    challengeOpponent(uid: string, hid: number): Promise<ITourneyStatus>;
    getTourneyReward(id: number): Promise<boolean>;
}
