import { GoatResource } from '../../GoatResource';
import { JewelsOfLuckStatus } from '../../../types/goat/Events/JewelsOfLuck';
import { Item } from '../../../types/goat/Item';
export declare class JewelsOfLuck extends GoatResource {
    eventInfos(): Promise<JewelsOfLuckStatus>;
    play(num: number): Promise<{
        id: number;
        item: Item;
    }[]>;
    buyJewel(num: number): Promise<void>;
}
