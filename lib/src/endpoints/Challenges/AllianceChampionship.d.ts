import { GoatResource } from '../../GoatResource';
import { AllianceChampionshipStatus, AllianceMatchList } from '../../../types';
export declare class AllianceChampionship extends GoatResource {
    eventInfos(): Promise<AllianceChampionshipStatus>;
    getPromotionRoundInfos(): Promise<AllianceMatchList>;
    collectReward(turn: number): Promise<void>;
}
