import { GoatResource } from '../GoatResource';
import { ITourneyStatus, OpponentHero, Reward, ShopItem } from '../goat/Tourney';
export interface Tourney extends GoatResource {
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
