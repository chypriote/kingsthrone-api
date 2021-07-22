import { GoatResource } from '../../GoatResource';
import { MaidenPaintingStatus } from '../../../types';
export declare class MaidenPainting extends GoatResource {
    eventInfos(): Promise<MaidenPaintingStatus>;
}
