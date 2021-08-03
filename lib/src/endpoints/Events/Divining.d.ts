import { GoatResource } from '../../GoatResource';
import { DiviningStatus } from '../../../types';
export declare class Divining extends GoatResource {
    eventInfos(): Promise<DiviningStatus>;
    selectStarSign(id?: number): Promise<void>;
    stargaze(): Promise<void>;
    buyGlobes(count?: number): Promise<void>;
    divine(count?: number): Promise<void>;
    getShopItem(id: number): Promise<void>;
}
