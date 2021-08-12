import { GoatResource } from '../../GoatResource';
import { XSIntimacyStatus } from '../../../types';
export declare class XSIntimacy extends GoatResource {
    eventInfos(): Promise<XSIntimacyStatus>;
    claimProgressReward(id: number): Promise<void>;
}
