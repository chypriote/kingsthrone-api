import { GoatResource } from '../../GoatResource';
import { BlessedChestStatus } from '../../../types';
export declare class BlessedChest extends GoatResource {
    eventInfos(): Promise<BlessedChestStatus>;
}
