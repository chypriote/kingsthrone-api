import { GoatResource } from '../../GoatResource';
import { AllianceExperienceStatus } from '../../../types';
export declare class AllianceExperience extends GoatResource {
    eventInfos(): Promise<AllianceExperienceStatus>;
}
