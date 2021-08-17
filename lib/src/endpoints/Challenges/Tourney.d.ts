import { GoatResource } from '../../GoatResource';
import { TourneyStatus } from '../../../types';
export declare class Tourney extends GoatResource {
    eventInfos(): Promise<TourneyStatus>;
    claimProgressReward(id: number): Promise<void>;
}
