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
export interface Shop {
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
export {};
