import { GoatResource } from '../../GoatResource';
import { MaidenExpStatus } from '../../../types';
export declare class MaidenExp extends GoatResource {
    eventInfos(): Promise<MaidenExpStatus>;
    claimProgressReward(id: number): Promise<void>;
}
