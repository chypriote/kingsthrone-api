import { GoatResource } from '../../GoatResource';
import { PEOPLES_MONARCH_ITEM, PeoplesMonarchStatus } from '../../../types';
export declare class PeoplesMonarch extends GoatResource {
    eventInfos(): Promise<PeoplesMonarchStatus>;
    buyShopItem(id: PEOPLES_MONARCH_ITEM): Promise<void>;
    useItem(id: PEOPLES_MONARCH_ITEM): Promise<void>;
}
