import { GoatResource } from '../../GoatResource';
import { DragonSlayingStatus } from '../../../types/goat/Events/DragonSlaying';
export declare class DragonSlaying extends GoatResource {
    eventInfos(): Promise<DragonSlayingStatus>;
    slay(id: number): Promise<void>;
}
