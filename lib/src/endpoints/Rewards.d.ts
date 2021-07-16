import { GoatResource } from '../GoatResource';
import { Rewards as RewardsEndpoint } from '../../types/Endpoints/Rewards';
export declare class Rewards extends GoatResource implements RewardsEndpoint {
    claimDailyPoints(): Promise<void>;
    getDailyReward(id: number): Promise<boolean>;
    claimWeeklyPoints(): Promise<void>;
    getWeeklyReward(id: number): Promise<boolean>;
    getProgressionReward(): Promise<boolean>;
    claimLoginReward(): Promise<void>;
}
