import { GoatResource } from '../GoatResource';
export interface Rewards extends GoatResource {
    claimDailyPoints(): Promise<void>;
    getDailyReward(id: number): Promise<boolean>;
    claimWeeklyPoints(): Promise<void>;
    getWeeklyReward(id: number): Promise<boolean>;
    getProgressionReward(): Promise<boolean>;
    claimLoginReward(): Promise<void>;
}
