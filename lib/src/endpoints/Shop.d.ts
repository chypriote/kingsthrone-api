import { GoatResource } from '../GoatResource';
import { Shop as FullShop } from '../../types/PackShop';
export declare class Shop extends GoatResource {
    getShop(): Promise<FullShop>;
    buyShopItem(id: number): Promise<void>;
    buyShopPack(id: number): Promise<void>;
}
