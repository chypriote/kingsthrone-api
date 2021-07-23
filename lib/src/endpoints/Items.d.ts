import { GoatResource } from '../GoatResource';
import { Item } from '../../types';
export declare class Items extends GoatResource {
    getBag(): Promise<Item[]>;
    use(item: number, count: number): Promise<Item>;
    combine(item: number, count: number): Promise<Item[]>;
    useForHero(item: number, hid: number, count?: number): Promise<void>;
}
