import { GoatResource } from '../../GoatResource';
import { Picnic as PicnicEndpoint } from '../../../types/Endpoints/Events/Picnic';
import { PicnicStatus } from '../../../types/goat/Events/Picnic';
export declare class Picnic extends GoatResource implements PicnicEndpoint {
    eventInfos(): Promise<PicnicStatus>;
    claimQuest(id: number): Promise<void>;
}
