import { GoatResource } from '../GoatResource';
import { Item } from '../../types/Item';
export declare class Items extends GoatResource {
    getBag(): Promise<Item[]>;
    use(item: number, count: number): Promise<Item>;
    combine(item: number, count: number): Promise<Item[]>;
}
