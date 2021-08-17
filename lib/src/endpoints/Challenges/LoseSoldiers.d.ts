import { GoatResource } from '../../GoatResource';
import { LoseSoldiersStatus } from '../../../types';
export declare class LoseSoldiers extends GoatResource {
    eventInfos(): Promise<LoseSoldiersStatus>;
    claimProgressReward(id: number): Promise<void>;
}
