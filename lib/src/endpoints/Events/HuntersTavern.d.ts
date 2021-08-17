import { GoatResource } from '../../GoatResource';
import { HuntersTavernStatus } from '../../../types';
export declare class HuntersTavern extends GoatResource {
    eventInfos(): Promise<HuntersTavernStatus>;
}
