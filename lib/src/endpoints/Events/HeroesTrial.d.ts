import { GoatResource, HeroesTrialFightResult, HeroesTrialStatus } from '../../../types';
export declare class HeroesTrial extends GoatResource {
    eventInfos(): Promise<HeroesTrialStatus>;
    selectHero(id: number): Promise<void>;
    fight(id: number): Promise<HeroesTrialFightResult>;
    buyTutorsGift(count?: number): Promise<void>;
    refreshHero(id: number): Promise<void>;
    claimReward(id: number): Promise<void>;
}
