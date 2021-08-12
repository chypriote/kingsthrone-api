import { GoatResource } from '../../GoatResource';
import { XSIntimacyCurrent, XSIntimacyStatus } from '../../../types';
export declare class XSIntimacy extends GoatResource {
    eventInfos(): Promise<XSIntimacyStatus>;
    getRankings(): Promise<XSIntimacyCurrent>;
    claimProgressReward(id: number): Promise<void>;
}
