import { GoatResource } from '../../GoatResource';
import { GiftingTreeStatus } from '../../../types';
export declare class GiftingTree extends GoatResource {
    eventInfos(): Promise<GiftingTreeStatus>;
    selectReward(id: number): Promise<void>;
    openBag(pos: number): Promise<void>;
}
