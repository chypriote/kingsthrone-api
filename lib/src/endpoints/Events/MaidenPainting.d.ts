import { GoatResource } from '../../GoatResource';
import { MaidenPaintingStatus } from '../../../types/Events/MaidenPainting';
export declare class MaidenPainting extends GoatResource {
    eventInfos(): Promise<MaidenPaintingStatus>;
}
