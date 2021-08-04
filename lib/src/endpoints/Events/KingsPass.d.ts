import { GoatResource } from '../../GoatResource';
import { EventPass } from '../../../types';
export declare class KingsPass extends GoatResource {
    eventInfos(): Promise<EventPass>;
    claimLevel(id: number): Promise<void>;
    claimAllLevels(): Promise<void>;
    buyShopItem(id: number): Promise<void>;
}
