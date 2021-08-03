import { GoatResource } from '../../GoatResource';
import { CharmStatus } from '../../../types';
export declare class Charm extends GoatResource {
    eventInfos(): Promise<CharmStatus>;
    claimProgressReward(id: number): Promise<void>;
}
