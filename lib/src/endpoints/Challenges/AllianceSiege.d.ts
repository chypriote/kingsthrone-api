import { GoatResource } from '../../GoatResource';
import { AllianceSiegeStatus } from '../../../types/Challenges/AllianceSiege';
export declare class AllianceSiege extends GoatResource {
    eventInfos(): Promise<AllianceSiegeStatus>;
}
