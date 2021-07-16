import { GoatResource } from '../../GoatResource';
import { DragonSlaying as DragonSlayingEndpoint } from '../../../types/Endpoints/Events/DragonSlaying';
import { DragonSlayingStatus } from '../../../types/goat/Events/DragonSlaying';
export declare class DragonSlaying extends GoatResource implements DragonSlayingEndpoint {
    eventInfos(): Promise<DragonSlayingStatus>;
    slay(id: number): Promise<void>;
}
