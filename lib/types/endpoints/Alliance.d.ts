import { GoatResource } from '../GoatResource';
import { AllianceBossInfo } from '../goat/Club';
import { FIGHT_STATUS } from '../goat/WorldBoss';
import { ClubInfo } from '../goat/Club';
export interface Alliance extends GoatResource {
    contributeAlliance(): Promise<boolean>;
    getAllianceBossInfo(): Promise<AllianceBossInfo[]>;
    fightAllianceBoss(boss: number, hero: number): Promise<FIGHT_STATUS>;
    getLadder(): Promise<ClubInfo[]>;
}
