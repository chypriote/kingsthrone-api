import { GoatResource } from '../../GoatResource';
import { FortunasBlessingStatus } from '../../../types';
export declare class FortunasBlessing extends GoatResource {
    eventInfos(): Promise<FortunasBlessingStatus>;
}
