import { GoatResource } from '../../GoatResource';
import { JewelsOfLuckStatus } from '../../../types/goat/Events/JewelsOfLuck';
import { Item } from '../../../types/goat/Item';
import { JewelsOfLuck as JewelsOfLuckEndpoint } from '../../../types/Endpoints/Events/JewelsOfLuck';
export declare class JewelsOfLuck extends GoatResource implements JewelsOfLuckEndpoint {
    eventInfos(): Promise<JewelsOfLuckStatus>;
    play(num: number): Promise<{
        id: number;
        item: Item;
    }[]>;
    buyJewel(num: number): Promise<void>;
}
