import { GoatResource } from '../GoatResource';
import { AllianceBossInfo, ClubInfo } from '../../types/goat/Club';
import { FIGHT_STATUS } from '../../types/goat/WorldBoss';
export declare class Alliance extends GoatResource {
    contributeAlliance(): Promise<boolean>;
    getAllianceBossInfo(): Promise<AllianceBossInfo[]>;
    fightAllianceBoss(boss: number, hero: number): Promise<FIGHT_STATUS>;
    getLadder(): Promise<ClubInfo[]>;
}
