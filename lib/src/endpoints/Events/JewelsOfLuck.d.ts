import { GoatResource } from '../../GoatResource';
import { Item, JewelsOfLuckStatus } from '../../../types';
export declare class JewelsOfLuck extends GoatResource {
    eventInfos(): Promise<JewelsOfLuckStatus>;
    play(num: number): Promise<{
        id: number;
        item: Item;
    }[]>;
    buyJewel(num: number): Promise<void>;
}
