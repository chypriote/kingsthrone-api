import { GoatResource } from '../GoatResource';
import { Item } from '../../types/goat/Item';
import { Items as ItemsEndpoint } from '../../types/Endpoints/Items';
export declare class Items extends GoatResource implements ItemsEndpoint {
    getBag(): Promise<Item[]>;
    use(item: number, count: number): Promise<Item>;
    combine(item: number, count: number): Promise<Item[]>;
}
