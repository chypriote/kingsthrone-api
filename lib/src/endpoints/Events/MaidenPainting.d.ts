import { GoatResource } from '../../GoatResource';
import { MaidenPaintingStatus } from '../../../types';
export declare class MaidenPainting extends GoatResource {
    eventInfos(): Promise<MaidenPaintingStatus>;
    buyPaint(count: number): Promise<void>;
    spinWheel(count: number): Promise<void>;
    getShopItem(id: number): Promise<void>;
    getBoxReward(): Promise<void>;
}
