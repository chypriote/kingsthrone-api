import { GoatResource } from '../GoatResource';
import { DECREE_TYPE } from '../../types';
export declare class ThroneRoom extends GoatResource {
    getCoins(): Promise<void>;
    getArmy(): Promise<void>;
    getGrain(): Promise<void>;
    loopAllLevies(): Promise<void>;
    getAllLevies(): Promise<boolean>;
    getAllDecreesResources(type: DECREE_TYPE): Promise<boolean>;
    getDecree(type: DECREE_TYPE): Promise<void>;
}
