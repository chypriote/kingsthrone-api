import { GoatResource } from '../../GoatResource';
import { TreasureTableStatus } from '../../../types';
export declare class TreasureTable extends GoatResource {
    eventInfos(): Promise<TreasureTableStatus>;
    spin(type: number, count: number): Promise<void>;
    buySwords(type: number, count: number): Promise<void>;
}
