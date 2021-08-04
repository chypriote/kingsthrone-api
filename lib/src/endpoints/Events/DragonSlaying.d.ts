import { GoatResource } from '../../GoatResource';
import { DragonSlayingStatus } from '../../../types';
export declare class DragonSlaying extends GoatResource {
    eventInfos(): Promise<DragonSlayingStatus>;
    slay(id: number): Promise<void>;
}
