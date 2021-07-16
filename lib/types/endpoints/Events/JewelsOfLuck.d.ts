import { GoatResource } from '../../GoatResource';
import { JewelsOfLuckStatus } from '../../goat/Events/JewelsOfLuck';
import { Item } from '../../goat/Item';
export interface JewelsOfLuck extends GoatResource {
    eventInfos(): Promise<JewelsOfLuckStatus>;
    play(id: number): Promise<{
        id: number;
        item: Item;
    }[]>;
    buyJewel(num: number): Promise<void>;
}
