import { GoatResource } from '../GoatResource';
export declare class Shop extends GoatResource {
    buyShopItem(id: number): Promise<void>;
    buyShopPack(id: number): Promise<void>;
}
