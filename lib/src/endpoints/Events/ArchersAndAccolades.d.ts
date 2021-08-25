import { GoatResource } from '../../GoatResource';
import { ArchersAndAccoladesStatus } from '../../../types/Events/ArchersAndAccolades';
export declare class ArchersAndAccolades extends GoatResource {
    eventInfos(): Promise<ArchersAndAccoladesStatus>;
    buyArrows(count?: number): Promise<void>;
    shoot(count?: number): Promise<void>;
    findPlayer(id: string): Promise<boolean>;
    sendMedals(count: number, id: string): Promise<void>;
}
