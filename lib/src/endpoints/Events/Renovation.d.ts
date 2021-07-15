import { GoatResource } from '../../GoatResource';
import { Renovation as RenovationEndpoint } from '../../../types/Endpoints/Events/Renovation';
export declare class Renovation extends GoatResource implements RenovationEndpoint {
    findEgg(): Promise<number>;
    claimEgg(): Promise<void>;
}
