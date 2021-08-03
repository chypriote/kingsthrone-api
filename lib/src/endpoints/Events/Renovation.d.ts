import { GoatResource } from '../../GoatResource';
export declare class Renovation extends GoatResource {
    findEgg(): Promise<number>;
    claimEgg(): Promise<void>;
}
