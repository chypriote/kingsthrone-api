import { GoatResource } from '../../GoatResource';
import { CORONATION_ITEM, CoronationStatus } from '../../../types';
export declare class Coronation extends GoatResource {
    eventInfos(): Promise<CoronationStatus>;
    buyShopItem(id: CORONATION_ITEM): Promise<void>;
    useItem(id: CORONATION_ITEM): Promise<void>;
}
