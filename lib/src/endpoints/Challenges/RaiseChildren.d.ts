import { GoatResource } from '../../GoatResource';
import { RaiseChildrenStatus } from '../../../types';
export declare class RaiseChildren extends GoatResource {
    eventInfos(): Promise<RaiseChildrenStatus>;
    claimProgressReward(id: number): Promise<void>;
}
