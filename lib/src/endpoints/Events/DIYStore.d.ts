import { GoatResource } from '../../GoatResource';
import { DIYStoreStatus } from '../../../types/Events/DIYStore';
export declare class DIYStore extends GoatResource {
    eventInfos(): Promise<DIYStoreStatus>;
    setPackItem(pos: number, id: number, pack: number): Promise<void>;
}
