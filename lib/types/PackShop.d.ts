import { Item } from './Item';
interface Pack {
    id: number;
    name: string;
    need: number;
    items: Item[];
    vip: number;
    islimit: number;
    limit: number;
    totalnum: number;
    price: number;
}
export interface PackShop {
    cft: {
        id: number;
        title: string;
        sTime: number;
        eTime: number;
        cd: {
            next: number;
            label: string;
        };
    };
    list: Pack[];
}
export interface ItemShop {
    id: number;
    islimit: number;
    item: Item;
    limit: number;
    need: number;
    price: number;
    totalnum: number;
    vip: number;
}
export interface Shop {
    packs: PackShop;
    items: ItemShop[];
}
export {};
