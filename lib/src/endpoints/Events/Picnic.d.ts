import { GoatResource } from '../../GoatResource';
import { PicnicStatus } from '../../../types/goat/Events/Picnic';
export declare class Picnic extends GoatResource {
    eventInfos(): Promise<PicnicStatus>;
    claimQuest(id: number): Promise<void>;
}
